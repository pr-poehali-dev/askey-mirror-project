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
    // 1. Выглядывает сверху
    setPhase('peek');
    // 2. Через 1.2s — падает вниз
    const t1 = setTimeout(() => setPhase('fall'), 1200);
    // 3. Через ещё 1s — исчезает за нижней границей
    const t2 = setTimeout(() => setPhase('gone'), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [lit]);

  const getStyle = (): React.CSSProperties => {
    if (phase === 'hidden') return { transform: 'translateY(-110%)', opacity: 0 };
    if (phase === 'peek')   return { transform: 'translateY(0%)',    opacity: 1 };
    if (phase === 'fall')   return { transform: 'translateY(900%)',  opacity: 1 };
    return                         { transform: 'translateY(900%)',  opacity: 0 };
  };

  const getTransition = (): string => {
    if (phase === 'peek') return 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
    if (phase === 'fall') return 'transform 0.8s cubic-bezier(0.4, 0, 1, 1), opacity 0.2s ease 0.7s';
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
      <svg
        viewBox="0 0 80 90"
        width="28%"
        style={{ display: 'block', overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="char2-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="c2-suit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="c2-visor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* ── ТЕЛО ── */}
        <rect x="22" y="48" width="36" height="32" rx="5"
          fill="url(#c2-suit)" stroke="#334155" strokeWidth="1.2" />
        {/* Нагрудная панель */}
        <rect x="30" y="54" width="20" height="10" rx="2"
          fill="#0f172a" stroke="#a78bfa" strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="32" y1="58" x2="48" y2="58" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.7">
          <animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite" />
        </line>

        {/* ── ГОЛОВА ── */}
        <rect x="20" y="18" width="40" height="34" rx="10"
          fill="url(#c2-suit)" stroke="#475569" strokeWidth="1.2" />
        {/* Визор */}
        <rect x="26" y="27" width="28" height="14" rx="4"
          fill="url(#c2-visor)" filter="url(#char2-glow)" />
        {/* Отблеск */}
        <rect x="28" y="29" width="9" height="3" rx="1.5"
          fill="white" opacity="0.3" />
        {/* Уши-антенны */}
        <rect x="14" y="28" width="6" height="10" rx="3"
          fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <rect x="60" y="28" width="6" height="10" rx="3"
          fill="#1e293b" stroke="#475569" strokeWidth="1" />
        {/* Точки-глаза на визоре */}
        <circle cx="34" cy="33" r="2" fill="#e0e7ff" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="46" cy="33" r="2" fill="#e0e7ff" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        {/* Антенна сверху */}
        <line x1="40" y1="18" x2="40" y2="10" stroke="#94a3b8" strokeWidth="1.2" />
        <circle cx="40" cy="8" r="2.5" fill="#a78bfa" filter="url(#char2-glow)">
          <animate attributeName="opacity" values="1;0.2;1" dur="0.9s" repeatCount="indefinite" />
        </circle>

        {/* ── РУКИ — опущены, подняты вверх как будто цепляется ── */}
        {/* Левая рука */}
        <line x1="22" y1="55" x2="10" y2="46"
          stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
        <line x1="22" y1="55" x2="10" y2="46"
          stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        <circle cx="9" cy="44" r="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />

        {/* Правая рука */}
        <line x1="58" y1="55" x2="70" y2="46"
          stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
        <line x1="58" y1="55" x2="70" y2="46"
          stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        <circle cx="71" cy="44" r="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />

        {/* ── НОГИ ── */}
        <rect x="26" y="78" width="12" height="10" rx="4"
          fill="url(#c2-suit)" stroke="#334155" strokeWidth="1" />
        <rect x="42" y="78" width="12" height="10" rx="4"
          fill="url(#c2-suit)" stroke="#334155" strokeWidth="1" />

        {/* ── ЗВЁЗДОЧКИ при падении ── */}
        {phase === 'fall' && ['0s','0.1s','0.2s'].map((d, i) => (
          <circle key={i} cx={20 + i * 20} cy={85} r="2" fill="#a78bfa">
            <animate attributeName="opacity" values="1;0" dur="0.6s" begin={d} fill="freeze" />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default MirrorCharacterTop;
