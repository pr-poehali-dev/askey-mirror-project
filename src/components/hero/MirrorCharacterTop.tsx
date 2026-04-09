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
      {/* Крик — всплывает рядом при падении */}
      {phase === 'fall' && (
        <div
          key={screamKey}
          style={{
            position: 'absolute',
            top: '-18px',
            left: '50%',
            transform: 'translateX(-80%)',
            background: 'white',
            color: '#111',
            fontFamily: 'Orbitron, monospace',
            fontSize: '9px',
            fontWeight: 900,
            padding: '4px 8px',
            borderRadius: '8px 8px 2px 8px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            animation: 'scream-pop 0.25s cubic-bezier(0.34,1.6,0.64,1) forwards',
            zIndex: 10,
          }}
        >
          {scream}
          {/* хвостик пузыря */}
          <span style={{
            position: 'absolute',
            bottom: '-6px',
            right: '10px',
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '6px solid white',
          }} />
        </div>
      )}

      {/* Персонаж вниз головой */}
      <svg
        viewBox="0 0 60 90"
        width="22%"
        style={{
          display: 'block',
          overflow: 'visible',
          transform: 'rotate(180deg)',
          animation: phase === 'peek' ? 'char-wobble 0.45s ease-in-out infinite alternate' : 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="skin" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fde8c8" />
            <stop offset="100%" stopColor="#f5c899" />
          </radialGradient>
          <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0f2040" />
          </linearGradient>
          <linearGradient id="pants" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#0d0d1a" />
          </linearGradient>
        </defs>

        {/* ── НОГИ (сверху — цепляются за наклейку) ── */}
        {/* Левая нога */}
        <rect x="14" y="0" width="12" height="20" rx="5"
          fill="url(#pants)" stroke="#334155" strokeWidth="1" />
        {/* Правая нога */}
        <rect x="34" y="0" width="12" height="20" rx="5"
          fill="url(#pants)" stroke="#334155" strokeWidth="1" />
        {/* Кроссовки (держатся за край) */}
        <rect x="11" y="0" width="18" height="7" rx="3"
          fill="#111" stroke="#475569" strokeWidth="0.8" />
        <rect x="31" y="0" width="18" height="7" rx="3"
          fill="#111" stroke="#475569" strokeWidth="0.8" />
        {/* Белая подошва */}
        <rect x="11" y="3" width="18" height="3" rx="1.5" fill="#e2e8f0" opacity="0.5" />
        <rect x="31" y="3" width="18" height="3" rx="1.5" fill="#e2e8f0" opacity="0.5" />

        {/* ── ТЕЛО — футболка ── */}
        <rect x="12" y="18" width="36" height="26" rx="6"
          fill="url(#shirt)" stroke="#1e40af" strokeWidth="1" />
        {/* Полоска на футболке */}
        <rect x="12" y="28" width="36" height="4"
          fill="#2563eb" opacity="0.5" />

        {/* ── РУКИ — раскинуты (держался, но падает) ── */}
        {/* Левая рука */}
        <path d="M12,24 Q2,20 0,14" stroke="url(#skin)" strokeWidth="7"
          fill="none" strokeLinecap="round" />
        {/* Кисть левая */}
        <circle cx="0" cy="13" r="5" fill="url(#skin)" />
        {/* Правая рука */}
        <path d="M48,24 Q58,20 60,14" stroke="url(#skin)" strokeWidth="7"
          fill="none" strokeLinecap="round" />
        {/* Кисть правая */}
        <circle cx="60" cy="13" r="5" fill="url(#skin)" />

        {/* ── ГОЛОВА ── */}
        <ellipse cx="30" cy="65" rx="18" ry="20"
          fill="url(#skin)" stroke="#e0b080" strokeWidth="0.8" />

        {/* Волосы (вниз — в перевёрнутом виде торчат вниз) */}
        <ellipse cx="30" cy="82" rx="18" ry="7" fill="#1a0a00" />
        <ellipse cx="18" cy="80" rx="5" ry="6" fill="#1a0a00" />
        <ellipse cx="42" cy="80" rx="5" ry="6" fill="#1a0a00" />

        {/* ── ГЛАЗА — огромные от ужаса ── */}
        <ellipse cx="22" cy="62" rx="5" ry="6" fill="white" />
        <ellipse cx="38" cy="62" rx="5" ry="6" fill="white" />
        {/* Зрачки — смотрят «вниз» (к зрителю) */}
        <circle cx="22" cy="60" r="3" fill="#111" />
        <circle cx="38" cy="60" r="3" fill="#111" />
        {/* Блики */}
        <circle cx="23.5" cy="58.5" r="1.2" fill="white" />
        <circle cx="39.5" cy="58.5" r="1.2" fill="white" />
        {/* Брови — вскинуты вверх */}
        <path d="M17,55 Q22,52 27,55" stroke="#4a2800" strokeWidth="1.8"
          fill="none" strokeLinecap="round" />
        <path d="M33,55 Q38,52 43,55" stroke="#4a2800" strokeWidth="1.8"
          fill="none" strokeLinecap="round" />

        {/* ── РОТ — орёт ── */}
        <ellipse cx="30" cy="74" rx="7" ry="6" fill="#c0392b" />
        <ellipse cx="30" cy="71" rx="7" ry="2.5" fill="#fde8c8" />
        {/* Зубы */}
        <rect x="24" y="70" width="12" height="3.5" rx="1" fill="white" />

        {/* Щёки — красные от крика */}
        <circle cx="17" cy="68" r="4" fill="#ff6b6b" opacity="0.3" />
        <circle cx="43" cy="68" r="4" fill="#ff6b6b" opacity="0.3" />
      </svg>
    </div>
  );
};

export default MirrorCharacterTop;
