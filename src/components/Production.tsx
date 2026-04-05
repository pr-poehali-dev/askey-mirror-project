import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';

const DOT_COUNT = 20;
const MODES = ['Бегущий огонь', 'Радуга', 'Пульс'];

const hslToHex = (h: number, s: number, l: number) => {
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l / 100 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const AddressableLedDemo = () => {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const modeRef = useRef(0);
  const [mode, setMode] = useState(0);

  useEffect(() => {
    let frame: number;
    let t = 0;

    const tick = () => {
      t += 0.04;
      const m = modeRef.current;

      for (let i = 0; i < DOT_COUNT; i++) {
        const el = dotsRef.current[i];
        if (!el) continue;

        let color = '#a855f7';
        let opacity = 1;
        let glow = '';

        if (m === 0) {
          // Бегущий огонь — яркое пятно бежит по ленте
          const pos = (t * 4) % DOT_COUNT;
          const dist = Math.min(Math.abs(i - pos), DOT_COUNT - Math.abs(i - pos));
          const bright = Math.max(0, 1 - dist / 3);
          color = '#e879f9';
          opacity = 0.1 + bright * 0.9;
          glow = bright > 0.5 ? `0 0 ${bright * 14}px 3px #e879f9` : 'none';
        } else if (m === 1) {
          // Радуга — каждый диод свой цвет, волна сдвигается
          const hue = ((i / DOT_COUNT) * 360 + t * 60) % 360;
          color = hslToHex(hue, 100, 60);
          opacity = 0.85;
          glow = `0 0 8px 2px ${color}`;
        } else {
          // Пульс — все мигают вместе, но со сдвигом фазы
          const phase = Math.sin(t * 2 + i * 0.3);
          const bright = 0.3 + 0.7 * ((phase + 1) / 2);
          color = '#a855f7';
          opacity = bright;
          glow = bright > 0.7 ? `0 0 10px 3px #a855f7` : 'none';
        }

        el.style.background = color;
        el.style.opacity = String(opacity);
        el.style.boxShadow = glow;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const switchMode = (m: number) => {
    modeRef.current = m;
    setMode(m);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (modeRef.current + 1) % MODES.length;
      switchMode(next);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-5">
      {/* Зеркало */}
      <div
        className="relative rounded-2xl animate-float"
        style={{
          width: '200px',
          height: '240px',
          background: 'linear-gradient(135deg, #0d0618 0%, #1a0035 100%)',
          border: '1px solid rgba(168,85,247,0.25)',
        }}
      >
        {/* Зеркальная поверхность */}
        <div
          className="absolute"
          style={{
            inset: '12px 22px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #1a1a2e, #0f1a30)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        />

        {/* Левая лента */}
        <div
          className="absolute top-6 bottom-6 left-3 flex flex-col justify-between items-center"
          style={{ width: '12px' }}
        >
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <div
              key={i}
              ref={el => { dotsRef.current[i] = el; }}
              style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7', flexShrink: 0 }}
            />
          ))}
        </div>

        {/* Правая лента */}
        <div
          className="absolute top-6 bottom-6 right-3 flex flex-col justify-between items-center"
          style={{ width: '12px' }}
        >
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <div
              key={i}
              ref={el => { dotsRef.current[DOT_COUNT + i] = el; }}
              style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7', flexShrink: 0 }}
            />
          ))}
        </div>
      </div>

      {/* Режимы */}
      <div className="flex gap-1.5">
        {MODES.map((m, i) => (
          <button
            key={m}
            onClick={() => switchMode(i)}
            className="px-2 py-1 rounded-lg text-[10px] font-semibold transition-all duration-300"
            style={{
              background: mode === i ? 'rgba(168,85,247,0.3)' : 'rgba(168,85,247,0.08)',
              color: mode === i ? '#e879f9' : 'rgba(255,255,255,0.4)',
              border: `1px solid ${mode === i ? 'rgba(168,85,247,0.6)' : 'rgba(168,85,247,0.15)'}`,
            }}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
};

const qualities = [
  {
    icon: 'Layers',
    title: 'Премиальное стекло',
    description: 'Используем зеркальное стекло 4 мм. Каждый лист проходит контроль на дефекты.',
  },
  {
    icon: 'Zap',
    title: 'LED-подсветка',
    description: 'Светодиодная лента 120 диодов/м с температурой 3000–6500K. Равномерный свет без пересвета — идеально для съёмки.',
  },
  {
    icon: 'Shield',
    title: 'Надёжный каркас',
    description: 'Алюминиевый профиль и усиленная задняя панель из МДФ 18 мм. Зеркало не деформируется со временем.',
  },
  {
    icon: 'Printer',
    title: 'Точная печать',
    description: 'UV-печать наклеек с разрешением 1440 dpi. Цвета не выгорают до 5 лет. Адресная лента с реальными данными вашего профиля.',
  },
  {
    icon: 'Settings',
    title: 'Ручная сборка',
    description: 'Каждое зеркало собирается вручную мастером. Финальная проверка — 14 пунктов контроля качества.',
  },
  {
    icon: 'Package',
    title: 'Безопасная упаковка',
    description: 'Многослойная упаковка: пупырчатая плёнка + пенопласт + деревянный короб. Доставляем по всей России.',
  },
];

const Production = () => {
  return (
    <section
      id="production"
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0620 50%, #0a0a0f 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Заголовок */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}
          >
            <Icon name="Factory" size={12} />
            О производстве
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            КАЧЕСТВО <span className="text-gradient">БЕЗ КОМПРОМИССОВ</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Собственное производство в России. Полный контроль качества на каждом этапе
          </p>
        </div>

        {/* Карточки качества */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">
          {qualities.map((item, i) => (
            <div
              key={i}
              className="card-dark rounded-2xl sm:rounded-3xl p-5 sm:p-6 group hover:neon-border-purple transition-all duration-300"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 flex items-center justify-center"
                style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
              >
                <Icon name={item.icon} size={18} className="text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{item.title}</h3>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Блок адресной ленты */}
        <div
          className="rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))', border: '1px solid rgba(168,85,247,0.3)' }}
        >
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                АДРЕСНАЯ <span className="text-gradient">ЛЕНТА</span>
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Наше главное отличие от конкурентов — адресная светодиодная лента.
                В отличие от обычной, каждый диод управляется независимо, что позволяет
                создавать динамические световые эффекты, плавные переходы и бегущие огни.
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  'Каждый диод управляется независимо',
                  'Динамические эффекты и плавные переходы',
                  'Настройка режимов сенсорной кнопкой',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/70 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <AddressableLedDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;