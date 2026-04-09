import { useEffect, useState } from 'react';

interface Props {
  lit: boolean;
}

const SCREAMS = ['АААААА!!!', 'НЕТ-НЕТ-НЕТ!', 'ПОМОГИТЕ!!', 'ЗА ЧТО?!'];

const MirrorCharacterTop = ({ lit }: Props) => {
  const [phase, setPhase] = useState<'hidden' | 'peek' | 'fall' | 'gone'>('hidden');
  const [scream, setScream] = useState('');
  const [screamKey, setScreamKey] = useState(0);

  useEffect(() => {
    if (!lit) {
      setPhase('hidden');
      return;
    }
    setPhase('hidden');
    const t0 = setTimeout(() => setPhase('peek'), 50);
    const t1 = setTimeout(() => {
      setPhase('fall');
      setScream(SCREAMS[Math.floor(Math.random() * SCREAMS.length)]);
      setScreamKey(k => k + 1);
    }, 1300);
    const t2 = setTimeout(() => setPhase('gone'), 2400);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, [lit]);

  const getStyle = (): React.CSSProperties => {
    if (phase === 'hidden') return { transform: 'translateY(-100%)', opacity: 0 };
    if (phase === 'peek')   return { transform: 'translateY(-52%)',  opacity: 1 };
    if (phase === 'fall')   return { transform: 'translateY(780%)',  opacity: 1 };
    return                         { transform: 'translateY(780%)',  opacity: 0 };
  };

  const getTransition = (): string => {
    if (phase === 'peek') return 'transform 0.4s cubic-bezier(0.34, 1.5, 0.64, 1)';
    if (phase === 'fall') return 'transform 1s cubic-bezier(0.55, 0, 1, 1), opacity 0.15s ease 0.88s';
    return 'none';
  };

  return (
    <div
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        top: '18%',
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
        ...getStyle(),
        transition: getTransition(),
      }}
    >
      {/* Пузырь с криком */}
      {phase === 'fall' && (
        <div
          key={screamKey}
          style={{
            position: 'absolute',
            top: '40px',
            left: '50%',
            transform: 'translateX(-110%)',
            background: 'white',
            color: '#111',
            fontFamily: 'Orbitron, monospace',
            fontSize: '9px',
            fontWeight: 900,
            padding: '4px 8px',
            borderRadius: '8px 8px 8px 2px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            animation: 'scream-pop 0.25s cubic-bezier(0.34,1.6,0.64,1) forwards',
            zIndex: 10,
          }}
        >
          {scream}
          <span style={{
            position: 'absolute',
            bottom: '-6px', left: '10px',
            width: 0, height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '6px solid white',
          }} />
        </div>
      )}

      {/*
        Персонаж нарисован вниз головой БЕЗ rotate.
        Y=0 вверху — здесь голова (видна при peek из-под наклейки).
        Y=90 внизу — здесь ноги (скрыты за наклейкой).
        Лицо читается нормально — вниз головой, но черты правильные.
      */}
      <svg
        viewBox="0 0 60 90"
        width="22%"
        style={{
          display: 'block',
          overflow: 'visible',
          animation: phase === 'peek' ? 'char-wobble 0.45s ease-in-out infinite alternate' : 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="skin2" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fde8c8" />
            <stop offset="100%" stopColor="#f5c899" />
          </radialGradient>
          <linearGradient id="shirt2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0f2040" />
          </linearGradient>
          <linearGradient id="pants2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#0d0d1a" />
          </linearGradient>
        </defs>

        {/* ── ГОЛОВА (наверху SVG = видна первой при peek) ── */}
        <ellipse cx="30" cy="22" rx="18" ry="20" fill="url(#skin2)" stroke="#e0b080" strokeWidth="0.8" />

        {/* Волосы — торчат вниз (т.к. голова перевёрнута) */}
        <ellipse cx="30" cy="38" rx="18" ry="7" fill="#1a0a00" />
        <ellipse cx="15" cy="36" rx="5"  ry="6" fill="#1a0a00" />
        <ellipse cx="45" cy="36" rx="5"  ry="6" fill="#1a0a00" />

        {/* ── ГЛАЗА — огромные от ужаса ── */}
        <ellipse cx="21" cy="18" rx="5" ry="6" fill="white" />
        <ellipse cx="39" cy="18" rx="5" ry="6" fill="white" />
        <circle cx="21" cy="20" r="3"  fill="#111" />
        <circle cx="39" cy="20" r="3"  fill="#111" />
        <circle cx="22.5" cy="17.5" r="1.2" fill="white" />
        <circle cx="40.5" cy="17.5" r="1.2" fill="white" />

        {/* Брови — высоко поднятые от ужаса */}
        <path d="M16,10 Q21,7 26,10" stroke="#4a2800" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M34,10 Q39,7 44,10" stroke="#4a2800" strokeWidth="1.8" fill="none" strokeLinecap="round" />

        {/* ── РОТ — открыт, кричит ── */}
        <ellipse cx="30" cy="30" rx="7" ry="6" fill="#c0392b" />
        <rect x="24" y="26" width="12" height="3.5" rx="1" fill="white" />

        {/* Щёки */}
        <circle cx="16" cy="24" r="4" fill="#ff6b6b" opacity="0.3" />
        <circle cx="44" cy="24" r="4" fill="#ff6b6b" opacity="0.3" />

        {/* ── ТЕЛО ── */}
        <rect x="12" y="40" width="36" height="24" rx="6" fill="url(#shirt2)" stroke="#1e40af" strokeWidth="1" />
        <rect x="12" y="50" width="36" height="4"  fill="#2563eb" opacity="0.5" />

        {/* ── РУКИ — раскинуты в стороны ── */}
        <path d="M12,46 Q2,42 0,36"  stroke="url(#skin2)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <circle cx="0"  cy="34" r="5" fill="url(#skin2)" />
        <path d="M48,46 Q58,42 60,36" stroke="url(#skin2)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <circle cx="60" cy="34" r="5" fill="url(#skin2)" />

        {/* ── НОГИ (внизу SVG = скрыты за наклейкой при peek) ── */}
        <rect x="14" y="63" width="12" height="20" rx="5" fill="url(#pants2)" stroke="#334155" strokeWidth="1" />
        <rect x="34" y="63" width="12" height="20" rx="5" fill="url(#pants2)" stroke="#334155" strokeWidth="1" />
        {/* Кроссовки */}
        <rect x="11" y="76" width="18" height="7" rx="3" fill="#111" stroke="#475569" strokeWidth="0.8" />
        <rect x="31" y="76" width="18" height="7" rx="3" fill="#111" stroke="#475569" strokeWidth="0.8" />
        <rect x="11" y="79" width="18" height="3" rx="1.5" fill="#e2e8f0" opacity="0.4" />
        <rect x="31" y="79" width="18" height="3" rx="1.5" fill="#e2e8f0" opacity="0.4" />
      </svg>
    </div>
  );
};

export default MirrorCharacterTop;
