interface Props {
  lit: boolean;
}

const MirrorCharacter = ({ lit }: Props) => {
  return (
    <div
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        bottom: '18%',
        right: '2%',
        zIndex: 8,
        display: 'flex',
        justifyContent: 'flex-end',
        transform: lit ? 'translateY(0%)' : 'translateY(160%)',
        transition: lit
          ? 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
          : 'transform 0.5s cubic-bezier(0.4, 0, 0.6, 1)',
      }}
    >
      <svg
        viewBox="0 0 120 160"
        width="38%"
        style={{ display: 'block', overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Основное свечение */}
          <filter id="char-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Мягкое свечение для сердца */}
          <filter id="heart-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="body-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="visor-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="suit-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* ── ТЕЛО (торс) ── */}
        <rect x="38" y="72" width="44" height="52" rx="6"
          fill="url(#suit-grad)" stroke="#334155" strokeWidth="1.5" />

        {/* Детали костюма — нагрудная панель */}
        <rect x="48" y="80" width="24" height="14" rx="3"
          fill="#0f172a" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.6" />
        {/* LED-полоски на костюме */}
        <line x1="50" y1="84" x2="70" y2="84" stroke="#22d3ee" strokeWidth="1.2" strokeOpacity="0.8">
          <animate attributeName="stroke-opacity" values="0.8;0.3;0.8" dur="1.8s" repeatCount="indefinite" />
        </line>
        <line x1="50" y1="88" x2="70" y2="88" stroke="#22d3ee" strokeWidth="0.8" strokeOpacity="0.5">
          <animate attributeName="stroke-opacity" values="0.5;0.1;0.5" dur="2.2s" repeatCount="indefinite" />
        </line>

        {/* ── ГОЛОВА ── */}
        {/* Шея */}
        <rect x="52" y="58" width="16" height="16" rx="2"
          fill="#1e293b" stroke="#334155" strokeWidth="1" />
        {/* Шлем */}
        <rect x="36" y="28" width="48" height="44" rx="14"
          fill="url(#suit-grad)" stroke="#475569" strokeWidth="1.5" />
        {/* Козырёк-визор */}
        <rect x="42" y="40" width="36" height="18" rx="5"
          fill="url(#visor-grad)" opacity="0.95" filter="url(#char-glow)" />
        {/* Отблеск на визоре */}
        <rect x="44" y="42" width="12" height="4" rx="2"
          fill="white" opacity="0.35" />
        {/* Верхние грани шлема */}
        <line x1="50" y1="30" x2="70" y2="30" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.4" />
        {/* Антенна */}
        <line x1="60" y1="28" x2="60" y2="18" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="60" cy="16" r="3" fill="#22d3ee" filter="url(#char-glow)">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
        </circle>

        {/* ── ЛЕВАЯ РУКА (поднята, складывает сердечко) ── */}
        <g>
          {/* Плечо */}
          <rect x="22" y="72" width="14" height="10" rx="4"
            fill="url(#suit-grad)" stroke="#334155" strokeWidth="1.2" />
          {/* Предплечье — поднято вверх и вправо */}
          <line x1="29" y1="75" x2="42" y2="58"
            stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
          <line x1="29" y1="75" x2="42" y2="58"
            stroke="#334155" strokeWidth="8" strokeLinecap="round" />
          {/* LED-полоска на руке */}
          <line x1="30" y1="73" x2="41" y2="60"
            stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.6">
            <animate attributeName="stroke-opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
          </line>
          {/* Кисть */}
          <circle cx="43" cy="57" r="5"
            fill="#1e293b" stroke="#475569" strokeWidth="1" />
        </g>

        {/* ── ПРАВАЯ РУКА (поднята, складывает сердечко) ── */}
        <g>
          {/* Плечо */}
          <rect x="84" y="72" width="14" height="10" rx="4"
            fill="url(#suit-grad)" stroke="#334155" strokeWidth="1.2" />
          {/* Предплечье — поднято вверх и влево */}
          <line x1="91" y1="75" x2="78" y2="58"
            stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
          <line x1="91" y1="75" x2="78" y2="58"
            stroke="#334155" strokeWidth="8" strokeLinecap="round" />
          {/* LED-полоска на руке */}
          <line x1="90" y1="73" x2="79" y2="60"
            stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.6">
            <animate attributeName="stroke-opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </line>
          {/* Кисть */}
          <circle cx="77" cy="57" r="5"
            fill="#1e293b" stroke="#475569" strokeWidth="1" />
        </g>

        {/* ── НОГИ ── */}
        {/* Левая нога */}
        <rect x="40" y="122" width="16" height="28" rx="5"
          fill="url(#suit-grad)" stroke="#334155" strokeWidth="1.2" />
        <rect x="40" y="146" width="18" height="6" rx="3"
          fill="#0f172a" stroke="#475569" strokeWidth="1" />
        {/* Правая нога */}
        <rect x="64" y="122" width="16" height="28" rx="5"
          fill="url(#suit-grad)" stroke="#334155" strokeWidth="1.2" />
        <rect x="62" y="146" width="18" height="6" rx="3"
          fill="#0f172a" stroke="#475569" strokeWidth="1" />

        {/* ── СЕРДЕЧКО из рук ── */}
        <g filter="url(#heart-glow)">
          {/* Сердце — две кисти рядом образуют форму */}
          <path
            d="M60,68 C60,68 52,60 49,56 C46,52 48,47 52,47 C55,47 57,49 60,52 C63,49 65,47 68,47 C72,47 74,52 71,56 C68,60 60,68 60,68 Z"
            fill="#f43f5e"
            stroke="#fb7185"
            strokeWidth="1"
          >
            <animate attributeName="opacity" values="0.85;1;0.85" dur="0.9s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.08;1"
              dur="0.9s"
              repeatCount="indefinite"
              additive="sum"
              transformOrigin="60 57"
            />
          </path>
          {/* Блик на сердце */}
          <path
            d="M55,52 C55,52 54,50 56,49 C58,48 59,50 59,50"
            stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5"
          />
        </g>

        {/* ── СВЕЧЕНИЕ ОТ ВИЗОРА ── */}
        <rect x="42" y="40" width="36" height="18" rx="5"
          fill="none" stroke="#22d3ee" strokeWidth="0.5" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
        </rect>

        {/* ── ЧАСТИЦЫ вокруг сердца ── */}
        {[
          { cx: 46, cy: 44, r: 1.5, delay: '0s' },
          { cx: 74, cy: 44, r: 1.2, delay: '0.3s' },
          { cx: 60, cy: 38, r: 1.8, delay: '0.6s' },
          { cx: 50, cy: 40, r: 1.0, delay: '0.9s' },
          { cx: 70, cy: 40, r: 1.0, delay: '1.2s' },
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#f43f5e">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1.5s"
              repeatCount="indefinite"
              begin={p.delay}
            />
            <animate
              attributeName="r"
              values={`${p.r};${p.r * 2};${p.r}`}
              dur="1.5s"
              repeatCount="indefinite"
              begin={p.delay}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default MirrorCharacter;