import { useState, useEffect } from "react";
import DocumentModal from "@/components/DocumentModal";

const COOKIE_KEY = "cookie_consent_accepted";

const privacyContent = (
  <div className="space-y-4">
    <h3 className="text-white font-bold text-base">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h3>
    <div>
      <p className="text-white font-semibold mb-1">1. Общие положения</p>
      <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта, которые предоставляют свои данные при оформлении заказа или обращении к Продавцу.</p>
      <p className="mt-2">Оператор персональных данных: ИП Шевченко Андрей Игоревич, ИНН: 650401990699, ОГРНИП: 321392600054674.</p>
      <p className="mt-2">Обработка персональных данных осуществляется в соответствии с ФЗ от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
    </div>
    <div>
      <p className="text-white font-semibold mb-1">2. Какие данные мы собираем</p>
      <ul className="list-disc list-inside space-y-1 mt-1">
        <li>имя и фамилия;</li>
        <li>номер телефона;</li>
        <li>адрес электронной почты;</li>
        <li>адрес доставки;</li>
        <li>данные об устройстве и браузере (cookies, IP-адрес).</li>
      </ul>
    </div>
    <div>
      <p className="text-white font-semibold mb-1">3. Цели обработки данных</p>
      <ul className="list-disc list-inside space-y-1 mt-1">
        <li>оформление и исполнение заказов;</li>
        <li>связь с покупателем по вопросам заказа;</li>
        <li>организация доставки товара;</li>
        <li>улучшение качества обслуживания;</li>
        <li>соблюдение требований законодательства РФ.</li>
      </ul>
    </div>
    <div>
      <p className="text-white font-semibold mb-1">4. Передача данных третьим лицам</p>
      <p>Персональные данные не передаются третьим лицам, за исключением случаев, необходимых для исполнения договора (службы доставки, платежные системы), а также случаев, предусмотренных законодательством РФ.</p>
    </div>
    <div>
      <p className="text-white font-semibold mb-1">5. Хранение и защита данных</p>
      <p>Оператор принимает необходимые технические и организационные меры для защиты персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.</p>
    </div>
    <div>
      <p className="text-white font-semibold mb-1">6. Использование файлов cookie</p>
      <p>Сайт использует файлы cookie для обеспечения корректной работы, анализа посещаемости и улучшения пользовательского опыта. Вы можете отключить cookies в настройках браузера, однако это может повлиять на работу сайта.</p>
    </div>
    <div>
      <p className="text-white font-semibold mb-1">7. Права пользователя</p>
      <p>Вы вправе запросить доступ, исправление или удаление ваших персональных данных, обратившись по адресу: Comp.askei@gmail.com.</p>
    </div>
  </div>
);

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "rgba(10,10,10,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ color: "#ccc", fontSize: "0.85rem", margin: 0, flex: 1, minWidth: 220 }}>
            Мы используем файлы cookie для корректной работы сайта и улучшения пользовательского опыта.{" "}
            <button
              onClick={() => setModalOpen(true)}
              style={{
                color: "#fff",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "inherit",
              }}
            >
              Подробнее
            </button>
          </p>
          <button
            onClick={accept}
            style={{
              background: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              padding: "10px 28px",
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Принять
          </button>
        </div>
      )}

      <DocumentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Политика конфиденциальности"
      >
        {privacyContent}
      </DocumentModal>
    </>
  );
};

export default CookieBanner;
