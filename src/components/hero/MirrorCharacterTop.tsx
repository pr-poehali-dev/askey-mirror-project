import { useEffect, useState } from 'react';

interface Props {
  lit: boolean;
}

const MirrorCharacterTop = ({ lit }: Props) => {
  const [phase, setPhase] = useState<'hidden' | 'peek' | 'fall' | 'gone'>('hidden');

  useEffect(() => {
    if (!lit) {
      setPhase('hidden');
      return;
    }
    // Выглядывает — только голова из-под наклейки
    setPhase('peek');
    // Через 1.2s — отпускает и падает
    const t1 = setTimeout(() => setPhase('fall'), 1200);
    const t2 = setTimeout(() => setPhase('gone'), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [lit]);

  // Персонаж висит вниз головой.
  // top: 18% = граница верхней наклейки
  // hidden: весь скрыт за наклейкой (translateY = -100%)
  // peek: выглядывает на ~40% своей высоты — видна голова + руки держатся
  // fall: падает вниз через всё зеркало
  const getStyle = (): React.CSSProperties => {
    if (phase === 'hidden') return { transform: 'translateY(-100%)', opacity: 1 };
    if (phase === 'peek')   return { transform: 'translateY(-55%)',  opacity: 1 };
    if (phase === 'fall')   return { transform: 'translateY(750%)',  opacity: 1 };
    return                         { transform: 'translateY(750%)',  opacity: 0 };
  };

  const getTransition = (): string => {
    if (phase === 'peek') return 'transform 0.4s cubic-bezier(0.34, 1.5, 0.64, 1)';
    if (phase === 'fall') return 'transform 0.9s cubic-bezier(0.55, 0, 1, 0.8), opacity 0.15s ease 0.8s';
    return 'none';
  };

  return (
    <div
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        top: '18%',
        zIndex: 8,
        display: 'flex',
        justifyContent: 'center',
        ...getStyle(),
        transition: getTransition(),
      }}
    >
      {/* SVG перевёрнут — персонаж висит вниз головой */}
      <svg
        viewBox="0 0 80 100"
        width="26%"
        style={{
          display: 'block',
          overflow: 'visible',
          transform: 'rotate(180deg)',
          animation: phase === 'peek' ? 'char-wobble 0.5s ease-in-out infinite alternate' : 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="c2-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="c2-suit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="c2-visor" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        {/* ── НОГИ — торчат вверх (цепляются за край наклейки) ── */}
        <rect x="24" y="2" width="12" height="16" rx="4"
          fill="url(#c2-suit)" stroke="#334155" strokeWidth="1" />
        <rect x="44" y="2" width="12" height="16" rx="4"
          fill="url(#c2-suit)" stroke="#334155" strokeWidth="1" />
        <rect x="21" y="2" width="18" height="6" rx="3"
          fill="#0f172a" stroke="#475569" strokeWidth="1" />
        <rect x="41" y="2" width="18" height="6" rx="3"
          fill="#0f172a" stroke="#475569" strokeWidth="1" />

        {/* ── ТЕЛО ── */}
        <rect x="18" y="16" width="44" height="30" rx="6"
          fill="url(#c2-suit)" stroke="#334155" strokeWidth="1.2" />
        <rect x="27" y="22" width="26" height="12" rx="2"
          fill="#0f172a" stroke="#a78bfa" strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="29" y1="27" x2="51" y2="27" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.6">
          <animate attributeName="stroke-opacity" values="0.6;0.1;0.6" dur="1.2s" repeatCount="indefinite" />
        </line>

        {/* ── РУКИ — раскинуты в ужасе ── */}
        <line x1="18" y1="24" x2="3"  y2="16" stroke="#334155" strokeWidth="7" strokeLinecap="round" />
        <circle cx="2" cy="14" r="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <line x1="62" y1="24" x2="77" y2="16" stroke="#334155" strokeWidth="7" strokeLinecap="round" />
        <circle cx="78" cy="14" r="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />

        {/* ── ГОЛОВА ── */}
        <rect x="17" y="44" width="46" height="40" rx="13"
          fill="url(#c2-suit)" stroke="#475569" strokeWidth="1.2" />
        {/* Визор */}
        <rect x="23" y="52" width="34" height="16" rx="5"
          fill="url(#c2-visor)" filter="url(#c2-glow)" />
        <rect x="25" y="54" width="10" height="4" rx="2"
          fill="white" opacity="0.25" />

        {/* ── ГЛАЗА — широко раскрыты (ужас) ── */}
        <circle cx="32" cy="59" r="4.5" fill="#e0e7ff" opacity="0.95" />
        <circle cx="48" cy="59" r="4.5" fill="#e0e7ff" opacity="0.95" />
        <circle cx="32" cy="57" r="2.2" fill="#1e1b4b" />
        <circle cx="48" cy="57" r="2.2" fill="#1e1b4b" />
        <circle cx="33" cy="56" r="0.9" fill="white" opacity="0.9" />
        <circle cx="49" cy="56" r="0.9" fill="white" opacity="0.9" />

        {/* ── РОТ — кричит (широкий O) ── */}
        <ellipse cx="40" cy="74" rx="8" ry="7"
          fill="#0a0a14" stroke="#94a3b8" strokeWidth="1.2" />
        <rect x="33" y="70" width="14" height="3.5" rx="1.5"
          fill="white" opacity="0.65" />

        {/* ── УШИ ── */}
        <rect x="9"  y="56" width="8" height="10" rx="3"
          fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <rect x="63" y="56" width="8" height="10" rx="3"
          fill="#1e293b" stroke="#475569" strokeWidth="1" />

        {/* Антенна */}
        <line x1="40" y1="84" x2="40" y2="94" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="40" cy="97" r="3" fill="#a78bfa" filter="url(#c2-glow)">
          <animate attributeName="opacity" values="1;0.2;1" dur="0.7s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default MirrorCharacterTop;