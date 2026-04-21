import { useState, useEffect } from "react";

const COOKIE_KEY = "cookie_consent_accepted";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
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
        <span style={{ color: "#aaa" }}>
          Продолжая использовать сайт, вы соглашаетесь с нашей политикой конфиденциальности.
        </span>
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
  );
};

export default CookieBanner;
