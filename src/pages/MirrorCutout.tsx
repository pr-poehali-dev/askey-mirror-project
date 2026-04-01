import { useState, useEffect } from 'react';

const FUNCTION_URL = 'https://functions.poehali.dev/fd2c26c7-1ed3-472a-8f8d-caa260dad2b9';

const MirrorCutout = () => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [cdnUrl, setCdnUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCutout = async () => {
      try {
        setLoading(true);
        const res = await fetch(FUNCTION_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({}),
        });
        const data = await res.json();

        if (data.success) {
          if (data.url) {
            setCdnUrl(data.url);
          }
          if (data.image_base64) {
            setImageUrl(`data:image/png;base64,${data.image_base64}`);
          }
        } else {
          setError(data.error || 'Неизвестная ошибка');
        }
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : 'Ошибка запроса');
      } finally {
        setLoading(false);
      }
    };

    fetchCutout();
  }, []);

  const handleDownload = () => {
    if (!imageUrl) return;
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'mirror-cutout.png';
    a.click();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        fontFamily: 'sans-serif',
        color: '#fff',
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '12px',
          textAlign: 'center',
        }}
      >
        Зеркало вырезано по контуру
      </h1>
      <p style={{ color: '#aaa', marginBottom: '32px', textAlign: 'center' }}>
        Фоновая обработка через OpenCV — PNG с прозрачным фоном
      </p>

      {loading && (
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              border: '4px solid #333',
              borderTop: '4px solid #d4af37',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px',
            }}
          />
          <p style={{ color: '#aaa' }}>Обрабатываем изображение...</p>
          <p style={{ color: '#666', fontSize: '13px', marginTop: '8px' }}>
            Это может занять 10–20 секунд
          </p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {error && (
        <div
          style={{
            background: '#1a0000',
            border: '1px solid #ff4444',
            borderRadius: '12px',
            padding: '20px 32px',
            color: '#ff8888',
            maxWidth: '500px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: '8px' }}>Ошибка</p>
          <p style={{ fontSize: '14px' }}>{error}</p>
        </div>
      )}

      {imageUrl && !loading && (
        <div style={{ textAlign: 'center' }}>
          {/* Показываем изображение на шахматном фоне (имитация прозрачности) */}
          <div
            style={{
              display: 'inline-block',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
              background:
                'repeating-conic-gradient(#222 0% 25%, #333 0% 50%) 0 0 / 20px 20px',
              maxWidth: '600px',
            }}
          >
            <img
              src={imageUrl}
              alt="Зеркало вырезано по контуру"
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                display: 'block',
              }}
            />
          </div>

          <div
            style={{
              marginTop: '24px',
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={handleDownload}
              style={{
                background: 'linear-gradient(135deg, #d4af37, #f5e06e)',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              ⬇ Скачать PNG
            </button>

            {cdnUrl && (
              <a
                href={cdnUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#1a1a2e',
                  color: '#d4af37',
                  border: '1px solid #d4af37',
                  borderRadius: '8px',
                  padding: '12px 28px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                🔗 CDN ссылка
              </a>
            )}
          </div>

          <p style={{ color: '#555', fontSize: '13px', marginTop: '16px' }}>
            Клетчатый фон показывает прозрачные области PNG
          </p>
        </div>
      )}
    </div>
  );
};

export default MirrorCutout;
