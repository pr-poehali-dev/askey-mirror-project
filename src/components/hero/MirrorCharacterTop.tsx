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
    setPhase('peek');
    const t1 = setTimeout(() => setPhase('fall'), 1400);
    const t2 = setTimeout(() => setPhase('gone'), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [lit]);

  // Персонаж висит вверх ногами — перевёрнут на 180deg
  // В phase=peek — выехал наполовину вниз из верхней наклейки
  // В phase=fall — падает вниз через всё зеркало
  const getStyle = (): React.CSSProperties => {
    if (phase === 'hidden') return { transform: 'translateY(-100%) rotate(180deg)', opacity: 0 };
    if (phase === 'peek')   return { transform: 'translateY(0%)   rotate(180deg)', opacity: 1 };
    if (phase === 'fall')   return { transform: 'translateY(800%) rotate(180deg)', opacity: 1 };
    return                         { transform: 'translateY(800%) rotate(180deg)', opacity: 0 };
  };

  const getTransition = (): string => {
    if (phase === 'peek') return 'transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 0.25s ease';
    if (phase === 'fall') return 'transform 0.65s cubic-bezier(0.55, 0, 1, 0.8), opacity 0.15s ease 0.55s';
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
        viewBox="0 0 80 100"
        width="26%"
        style={{ display: 'block', overflow: 'visible' }}
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

        {/* ── НОГИ (сверху, т.к. перевёрнут) — цепляются за край ── */}
        <rect x="24" y="2" width="12" height="14" rx="4"
          fill="url(#c2-suit)" stroke="#334155" strokeWidth="1" />
        <rect x="44" y="2" width="12" height="14" rx="4"
          fill="url(#c2-suit)" stroke="#334155" strokeWidth="1" />
        {/* Ступни — крючки, цепляются за верхнюю наклейку */}
        <rect x="22" y="2" width="16" height="5" rx="2"
          fill="#0f172a" stroke="#475569" strokeWidth="1" />
        <rect x="42" y="2" width="16" height="5" rx="2"
          fill="#0f172a" stroke="#475569" strokeWidth="1" />

        {/* ── ТЕЛО ── */}
        <rect x="20" y="14" width="40" height="30" rx="5"
          fill="url(#c2-suit)" stroke="#334155" strokeWidth="1.2" />
        {/* Нагрудная панель */}
        <rect x="28" y="20" width="24" height="12" rx="2"
          fill="#0f172a" stroke="#a78bfa" strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="30" y1="25" x2="50" y2="25" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.7">
          <animate attributeName="stroke-opacity" values="0.7;0.15;0.7" dur="1.4s" repeatCount="indefinite" />
        </line>
        <line x1="30" y1="29" x2="50" y2="29" stroke="#a78bfa" strokeWidth="0.7" strokeOpacity="0.4">
          <animate attributeName="stroke-opacity" values="0.4;0.1;0.4" dur="1.9s" repeatCount="indefinite" />
        </line>

        {/* ── РУКИ — висят вниз (в перевёрнутом виде — вверх) ── */}
        {/* Левая */}
        <line x1="20" y1="22" x2="8" y2="30"
          stroke="#334155" strokeWidth="7" strokeLinecap="round" />
        <circle cx="7" cy="32" r="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        {/* Правая */}
        <line x1="60" y1="22" x2="72" y2="30"
          stroke="#334155" strokeWidth="7" strokeLinecap="round" />
        <circle cx="73" cy="32" r="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />

        {/* ── ГОЛОВА (внизу, т.к. перевёрнут — выглядывает) ── */}
        <rect x="18" y="42" width="44" height="38" rx="12"
          fill="url(#c2-suit)" stroke="#475569" strokeWidth="1.2" />
        {/* Визор */}
        <rect x="24" y="52" width="32" height="16" rx="5"
          fill="url(#c2-visor)" filter="url(#c2-glow)" />
        {/* Отблеск */}
        <rect x="26" y="54" width="10" height="4" rx="2"
          fill="white" opacity="0.28" />
        {/* Глаза — подозрительно сощурены (узкие) */}
        <rect x="28" y="58" width="8" height="3" rx="1.5"
          fill="#e0e7ff" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <rect x="44" y="58" width="8" height="3" rx="1.5"
          fill="#e0e7ff" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1.8s" repeatCount="indefinite" begin="0.2s" />
        </rect>
        {/* Уши */}
        <rect x="10" y="54" width="8" height="10" rx="3"
          fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <rect x="62" y="54" width="8" height="10" rx="3"
          fill="#1e293b" stroke="#475569" strokeWidth="1" />
        {/* Антенна (снизу — в перевёрнутом виде торчит вниз) */}
        <line x1="40" y1="80" x2="40" y2="90" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="40" cy="93" r="3" fill="#a78bfa" filter="url(#c2-glow)">
          <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default MirrorCharacterTop;
