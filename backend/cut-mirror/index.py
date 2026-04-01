import json
import requests
import numpy as np
import cv2
from PIL import Image
from io import BytesIO
import boto3
from botocore.client import Config
import os
import uuid
import base64


def handler(event, context):
    """
    Вырезает зеркало (смартфон с подсветкой) по контуру с фото.
    Использует OpenCV для сегментации по яркости/контрасту.
    Возвращает base64 PNG с прозрачным фоном или URL если S3 настроен.
    """
    try:
        image_url = "https://cdn.poehali.dev/files/a87b2122-aed7-4dea-a9b4-eb8a75de0b70.jpg"

        # Скачиваем изображение
        response = requests.get(image_url, timeout=60)
        response.raise_for_status()

        # Конвертируем в numpy array для OpenCV
        nparr = np.frombuffer(response.content, np.uint8)
        img_bgr = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        h, w = img_bgr.shape[:2]

        # Конвертируем в grayscale
        gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)

        # Зеркало — светлый объект на тёмном фоне
        # Размываем для сглаживания шума
        blurred = cv2.GaussianBlur(gray, (15, 15), 0)

        # Пороговая обработка — выделяем светлые области (зеркало)
        _, thresh = cv2.threshold(blurred, 60, 255, cv2.THRESH_BINARY)

        # Морфологические операции для заполнения дыр и сглаживания
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (30, 30))
        closed = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel, iterations=3)
        dilated = cv2.dilate(closed, kernel, iterations=2)

        # Находим контуры
        contours, _ = cv2.findContours(dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        # Берём самый большой контур (это и есть зеркало)
        if not contours:
            raise ValueError("Контуры не найдены")

        largest_contour = max(contours, key=cv2.contourArea)

        # Создаём маску из контура
        mask = np.zeros((h, w), dtype=np.uint8)
        cv2.drawContours(mask, [largest_contour], -1, 255, -1)

        # Сглаживаем края маски
        mask_blurred = cv2.GaussianBlur(mask, (21, 21), 0)

        # Создаём RGBA изображение
        img_rgba = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGBA)

        # Применяем маску как альфа-канал
        img_rgba[:, :, 3] = mask_blurred

        # Конвертируем в PIL Image
        pil_image = Image.fromarray(img_rgba, 'RGBA')

        # Обрезаем по bounding box контура
        x, y, cw, ch = cv2.boundingRect(largest_contour)
        # Небольшой отступ
        pad = 20
        x1 = max(0, x - pad)
        y1 = max(0, y - pad)
        x2 = min(w, x + cw + pad)
        y2 = min(h, y + ch + pad)
        pil_image = pil_image.crop((x1, y1, x2, y2))

        # Сохраняем в буфер как PNG с прозрачностью
        output_buffer = BytesIO()
        pil_image.save(output_buffer, format='PNG', optimize=True)
        output_buffer.seek(0)
        png_bytes = output_buffer.getvalue()

        # Пробуем загрузить в S3
        public_url = None
        s3_error = None

        aws_key = os.environ.get('AWS_ACCESS_KEY_ID')
        aws_secret = os.environ.get('AWS_SECRET_ACCESS_KEY')

        if aws_key and aws_secret:
            try:
                s3_endpoint = "https://storage.poehali.dev"
                bucket = "files"
                file_key = f"files/mirror-cutout-{uuid.uuid4().hex}.png"

                s3 = boto3.client(
                    's3',
                    endpoint_url=s3_endpoint,
                    aws_access_key_id=aws_key,
                    aws_secret_access_key=aws_secret,
                    config=Config(signature_version='s3v4'),
                    region_name='us-east-1'
                )

                s3.upload_fileobj(
                    BytesIO(png_bytes),
                    bucket,
                    file_key,
                    ExtraArgs={
                        'ContentType': 'image/png',
                        'ACL': 'public-read'
                    }
                )

                public_url = f"https://cdn.poehali.dev/{file_key}"

            except Exception as s3_exc:
                s3_error = str(s3_exc)

        # Кодируем в base64 как запасной вариант
        b64 = base64.b64encode(png_bytes).decode('utf-8')

        result = {
            "success": True,
            "message": "Зеркало успешно вырезано по контуру",
            "image_base64": b64,
            "mime_type": "image/png",
            "size": len(png_bytes)
        }

        if public_url:
            result["url"] = public_url
        if s3_error:
            result["s3_error"] = s3_error

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps(result)
        }

    except Exception as e:
        import traceback
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({
                "success": False,
                "error": str(e),
                "traceback": traceback.format_exc()
            })
        }
