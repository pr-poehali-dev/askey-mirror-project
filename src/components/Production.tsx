import Icon from '@/components/ui/icon';
import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const DOT_COUNT = 20;

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

  useEffect(() => {
    let frame: number;
    let t = 0;

    const tick = () => {
      t += 0.013;

      for (let i = 0; i < DOT_COUNT * 2; i++) {
        const el = dotsRef.current[i];
        if (!el) continue;
        const dotIdx = i % DOT_COUNT;

        let color = '#e2e8f0';
        let opacity = 1;
        let glow = '';

        {
          // Заполнение — снизу вверх медленно включается и выключается
          const cycle = (Math.sin(t * 0.6) + 1) / 2;
          const fillLevel = cycle * DOT_COUNT;
          const fromBottom = DOT_COUNT - 1 - dotIdx;
          const diff = fillLevel - fromBottom;
          const bright = Math.max(0, Math.min(1, diff));
          color = '#cbd5e1';
          opacity = 0.08 + bright * 0.92;
          glow = bright > 0.5 ? `0 0 10px 3px #cbd5e1` : 'none';
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

  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-5">
      {/* Зеркало */}
      <div
        className="relative rounded-2xl animate-float"
        style={{
          width: '200px',
          height: '240px',
          background: 'linear-gradient(135deg, #0e0e0e 0%, #161616 60%, #0a0a0a 100%)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        {/* Зеркальная поверхность */}
        <div
          className="absolute"
          style={{
            inset: '12px 22px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #111111, #0d0d0d)',
            border: '1px solid rgba(255,255,255,0.08)',
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
              style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e2e8f0', flexShrink: 0 }}
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
              style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e2e8f0', flexShrink: 0 }}
            />
          ))}
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
  const titleRef = useScrollReveal({ threshold: 0.1 });
  const contentRef = useScrollReveal({ threshold: 0.08, delay: 100 });

  return (
    <section
      id="production"
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ background: '#080808' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Заголовок */}
        <div ref={titleRef} className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)', color: '#e2e8f0' }}
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

        {/* Gradient borders карточки */}
        <div ref={contentRef} className="mb-10 sm:mb-12 lg:mb-16">
          {/* Верхний ряд: большая карточка + 2 маленькие */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 mb-4 sm:mb-5">
            {/* Большая карточка */}
            <div
              className="lg:col-span-2 relative p-px rounded-2xl sm:rounded-3xl group"
              style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.6), rgba(99,102,241,0.3), rgba(255,255,255,0.05))' }}
            >
              <div
                className="h-full rounded-2xl sm:rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
                style={{ background: '#0e0e12', minHeight: '220px' }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center"
                    style={{ background: 'rgba(167,139,250,0.12)' }}
                  >
                    <Icon name={qualities[0].icon} size={22} className="text-purple-400" />
                  </div>
                  <h3 className="text-white font-black text-xl sm:text-2xl mb-2">{qualities[0].title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{qualities[0].description}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-purple-400 text-xs font-semibold tracking-wide">
                  <span className="w-6 h-px" style={{ background: 'currentColor' }} />
                  Основа каждого зеркала
                </div>
              </div>
            </div>

            {/* Две маленькие карточки */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {qualities.slice(1, 3).map((item, i) => (
                <div
                  key={i}
                  className="relative p-px rounded-2xl sm:rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.4), rgba(167,139,250,0.15), rgba(255,255,255,0.04))' }}
                >
                  <div
                    className="h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6"
                    style={{ background: '#0e0e12' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                      style={{ background: 'rgba(167,139,250,0.1)' }}
                    >
                      <Icon name={item.icon} size={18} className="text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1.5">{item.title}</h3>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Нижний ряд: 3 карточки */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {qualities.slice(3).map((item, i) => (
              <div
                key={i}
                className="relative p-px rounded-2xl sm:rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(99,102,241,0.1), rgba(255,255,255,0.03))' }}
              >
                <div
                  className="h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex gap-4 items-start"
                  style={{ background: '#0d0d10' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(167,139,250,0.08)' }}
                  >
                    <Icon name={item.icon} size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Блок адресной ленты */}
        <div
          className="rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(200,210,220,0.15), rgba(255,255,255,0.08))', border: '1px solid rgba(255,255,255,0.3)' }}
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
                создавать динамические световые эффекты и плавные переходы.
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  'Каждый диод управляется независимо',
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