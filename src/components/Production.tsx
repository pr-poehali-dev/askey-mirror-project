import Icon from '@/components/ui/icon';
import { useEffect, useRef } from 'react';

const LED_COUNT = 16;
const COLORS = [
  '#a855f7', '#c084fc', '#e879f9', '#7c3aed',
  '#818cf8', '#f0abfc', '#6d28d9', '#d946ef',
];

const AddressableLedDemo = () => {
  const ledsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const states = Array.from({ length: LED_COUNT }, (_, i) => ({
      hue: i * (360 / LED_COUNT),
      brightness: Math.random(),
      speed: 0.3 + Math.random() * 0.7,
      offset: Math.random() * Math.PI * 2,
    }));

    let frame: number;
    let t = 0;

    const tick = () => {
      t += 0.03;
      states.forEach((s, i) => {
        const el = ledsRef.current[i];
        if (!el) return;
        const wave = 0.5 + 0.5 * Math.sin(t * s.speed + s.offset);
        const colorIdx = Math.floor((t * s.speed * 2 + i) % COLORS.length);
        const color = COLORS[Math.abs(colorIdx) % COLORS.length];
        el.style.background = color;
        el.style.opacity = String(0.2 + wave * 0.8);
        el.style.boxShadow = wave > 0.6 ? `0 0 8px 2px ${color}` : 'none';
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-4">
      {/* Зеркало с лентой */}
      <div
        className="relative rounded-2xl sm:rounded-3xl animate-float"
        style={{
          width: '160px',
          height: '220px',
          background: 'linear-gradient(135deg, #1a1a2e, #0d0d1a)',
          border: '1px solid rgba(168,85,247,0.3)',
          boxShadow: '0 0 30px rgba(168,85,247,0.2)',
        }}
      >
        {/* Отражение */}
        <div className="absolute inset-3 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(168,85,247,0.03))' }} />

        {/* Левая лента */}
        <div className="absolute left-1.5 top-4 bottom-4 flex flex-col justify-between" style={{ width: '10px' }}>
          {Array.from({ length: LED_COUNT }).map((_, i) => (
            <div
              key={i}
              ref={el => { ledsRef.current[i] = el; }}
              style={{ width: '10px', height: '10px', borderRadius: '50%', transition: 'none', background: COLORS[i % COLORS.length] }}
            />
          ))}
        </div>

        {/* Правая лента */}
        <div className="absolute right-1.5 top-4 bottom-4 flex flex-col justify-between" style={{ width: '10px' }}>
          {Array.from({ length: LED_COUNT }).map((_, i) => (
            <div
              key={i}
              ref={el => { ledsRef.current[LED_COUNT + i] = el; }}
              style={{ width: '10px', height: '10px', borderRadius: '50%', transition: 'none', background: COLORS[(i + 4) % COLORS.length] }}
            />
          ))}
        </div>

        {/* Подпись */}
        <div className="absolute bottom-3 left-0 right-0 text-center" style={{ fontSize: '8px', color: 'rgba(168,85,247,0.7)', fontFamily: 'Orbitron, monospace', letterSpacing: '1px' }}>
          АДРЕСНАЯ ЛЕНТА
        </div>
      </div>

      {/* Легенда */}
      <div className="flex gap-3 text-center">
        <div>
          <div className="text-[10px] text-white/40 mb-1">Обычная</div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#a855f7', opacity: 0.9 }} />
            ))}
          </div>
        </div>
        <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
        <div>
          <div className="text-[10px] text-white/40 mb-1">Адресная</div>
          <div className="flex gap-1">
            {['#a855f7','#e879f9','#818cf8','#f0abfc','#7c3aed'].map((c, i) => (
              <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, boxShadow: `0 0 4px ${c}` }} />
            ))}
          </div>
        </div>
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