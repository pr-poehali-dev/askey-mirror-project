import { useEffect, useRef, useState } from 'react';

const CHARACTER_URL =
  'https://cdn.poehali.dev/projects/af6d2ef4-20e2-486b-93ab-6d38dda52f4e/files/9299b30d-019a-431e-9c8b-21493a03388f.jpg';

const PHRASES = [
  'ЗЕРКАЛА НОВОГО УРОВНЯ',
  'СВЕТ. СТИЛЬ. СИЛА.',
  'ТВОЙ ВИД — ТВОЁ ОРУЖИЕ',
  'LED. BRUTAL. PERFECT.',
];

export default function Mascot() {
  const [phrase, setPhrase] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Rotate phrases every 3.5 s with a brief fade-out/in */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhrase((p) => (p + 1) % PHRASES.length);
        setVisible(true);
      }, 400);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="mascot-root"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Outer glow ring ── */}
      <div className={`mascot-ring ${hovered ? 'mascot-ring--active' : ''}`} />

      {/* ── Scan-line overlay ── */}
      <div className="mascot-scanlines" />

      {/* ── Character image ── */}
      <img
        src={CHARACTER_URL}
        alt="Mascot"
        className={`mascot-img ${hovered ? 'mascot-img--active' : ''}`}
        draggable={false}
      />

      {/* ── Corner brackets ── */}
      <span className="mascot-corner mascot-corner--tl" />
      <span className="mascot-corner mascot-corner--tr" />
      <span className="mascot-corner mascot-corner--bl" />
      <span className="mascot-corner mascot-corner--br" />

      {/* ── Rotating badge ── */}
      <div className="mascot-badge">
        <svg viewBox="0 0 100 100" className="mascot-badge-svg">
          <defs>
            <path
              id="circle-path"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="mascot-badge-text">
            <textPath href="#circle-path">
              ★ MIRREX STUDIO ★ LED MIRRORS ★ BRUTAL &amp; BOLD
            </textPath>
          </text>
        </svg>
      </div>

      {/* ── Speech bubble ── */}
      <div
        className="mascot-bubble"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)' }}
      >
        <span className="mascot-bubble-dot" />
        {PHRASES[phrase]}
      </div>

      {/* ── Styles ── */}
      <style>{`
        /* ─── ROOT ─────────────────────────────── */
        .mascot-root {
          position: relative;
          width: 220px;
          height: 300px;
          flex-shrink: 0;
          user-select: none;
          cursor: pointer;
        }

        /* ─── GLOW RING ─────────────────────────── */
        .mascot-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50% 50% 46% 54% / 56% 52% 48% 44%;
          background: transparent;
          box-shadow:
            0 0 18px 4px rgba(34,211,238,0.25),
            0 0 40px 8px rgba(34,211,238,0.10);
          animation: mascot-breathe 3s ease-in-out infinite;
          pointer-events: none;
          transition: box-shadow 0.4s;
        }
        .mascot-ring--active {
          box-shadow:
            0 0 28px 8px rgba(34,211,238,0.55),
            0 0 60px 16px rgba(34,211,238,0.25),
            0 0 90px 24px rgba(139,92,246,0.15);
        }

        /* ─── SCAN LINES ────────────────────────── */
        .mascot-scanlines {
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: repeating-linear-gradient(
            180deg,
            transparent 0px,
            transparent 3px,
            rgba(0,0,0,0.18) 3px,
            rgba(0,0,0,0.18) 4px
          );
          pointer-events: none;
          z-index: 3;
          mix-blend-mode: overlay;
        }

        /* ─── IMAGE ─────────────────────────────── */
        .mascot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          display: block;
          filter:
            saturate(0.9)
            contrast(1.08)
            brightness(0.92)
            drop-shadow(0 0 12px rgba(34,211,238,0.35));
          animation: mascot-float 4s ease-in-out infinite;
          transition: filter 0.4s, transform 0.4s;
          position: relative;
          z-index: 1;
        }
        .mascot-img--active {
          filter:
            saturate(1.1)
            contrast(1.14)
            brightness(1.0)
            drop-shadow(0 0 22px rgba(34,211,238,0.65))
            drop-shadow(0 0 40px rgba(139,92,246,0.35));
          transform: scale(1.03) translateY(-4px);
        }

        /* ─── CORNER BRACKETS ───────────────────── */
        .mascot-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: rgba(34,211,238,0.7);
          border-style: solid;
          z-index: 4;
        }
        .mascot-corner--tl { top: 4px; left: 4px; border-width: 2px 0 0 2px; border-radius: 2px 0 0 0; }
        .mascot-corner--tr { top: 4px; right: 4px; border-width: 2px 2px 0 0; border-radius: 0 2px 0 0; }
        .mascot-corner--bl { bottom: 4px; left: 4px; border-width: 0 0 2px 2px; border-radius: 0 0 0 2px; }
        .mascot-corner--br { bottom: 4px; right: 4px; border-width: 0 2px 2px 0; border-radius: 0 0 2px 0; }

        /* ─── ROTATING BADGE ────────────────────── */
        .mascot-badge {
          position: absolute;
          top: -52px;
          right: -52px;
          width: 104px;
          height: 104px;
          animation: mascot-spin 18s linear infinite;
          z-index: 5;
          pointer-events: none;
        }
        .mascot-badge-svg {
          width: 100%;
          height: 100%;
        }
        .mascot-badge-text {
          font-family: 'Orbitron', monospace;
          font-size: 9.5px;
          font-weight: 700;
          fill: rgba(34,211,238,0.75);
          letter-spacing: 1px;
        }

        /* ─── SPEECH BUBBLE ─────────────────────── */
        .mascot-bubble {
          position: absolute;
          bottom: -52px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background: rgba(10,10,20,0.88);
          border: 1px solid rgba(34,211,238,0.35);
          border-radius: 4px;
          padding: 7px 14px;
          font-family: 'Orbitron', monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: rgba(226,232,240,0.9);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 0 14px rgba(34,211,238,0.15);
          transition: opacity 0.35s ease, transform 0.35s ease;
          z-index: 6;
        }
        .mascot-bubble-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22d3ee;
          flex-shrink: 0;
          box-shadow: 0 0 6px #22d3ee;
          animation: mascot-blink 1.2s ease-in-out infinite;
        }

        /* ─── KEYFRAMES ─────────────────────────── */
        @keyframes mascot-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes mascot-breathe {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1.0; }
        }
        @keyframes mascot-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes mascot-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
