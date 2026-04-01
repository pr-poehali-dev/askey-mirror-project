import Icon from '@/components/ui/icon';

/* ─────────────────────────────────────────
   Декоративное зеркало 120×60 см (ratio 2:1)
   Вылетает справа при загрузке страницы,
   подсветка включается сверху вниз.
───────────────────────────────────────── */
const MirrorDecor = () => (
  /* Внешняя обёртка — slide-in справа, задержка 400 мс */
  <div
    className="animate-slide-in-right"
    style={{ animationDelay: '400ms', willChange: 'transform, opacity' }}
  >
    {/*
      Реальный размер 120×60 см → ratio 2:1.
      На экране: ширина ~320px, высота ~160px (мобайл),
      на десктопе — 400×200px.
    */}
    <div
      className="relative mx-auto"
      style={{ width: 'clamp(140px, 20vw, 240px)', aspectRatio: '1 / 2' }}
    >
      {/* ── Рамка зеркала ── */}
      <div
        className="absolute inset-0 rounded-[40px] animate-mirror-glow"
        style={{
          border: '2px solid rgba(147,210,255,0.75)',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Зеркальная поверхность ── */}
        <div
          className="absolute inset-[3px] rounded-[37px] overflow-hidden"
          style={{
            background:
              'linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(15,12,28,0.92) 35%, rgba(10,10,20,0.97) 100%)',
            backdropFilter: 'blur(1px)',
          }}
        >

          {/* Диагональный блик */}
          <div
            className="absolute top-[10%] left-[8%] w-[28%] h-[30%] rounded-full pointer-events-none"
            style={{
              background: 'rgba(255,255,255,0.04)',
              transform: 'rotate(-25deg)',
            }}
          />
        </div>

        {/* ── LED подсветка сверху вниз ── */}
        {/* Левая полоска */}
        <div
          className="absolute top-[4px] bottom-[4px] left-[3px] w-[3px] rounded-full animate-led-top-down"
          style={{
            animationDelay: '900ms',
            background:
              'linear-gradient(to bottom, #e0f7ff, #93d2ff, #38bdf8)',
            boxShadow: '0 0 8px 3px rgba(147,210,255,0.95)',
          }}
        />
        {/* Правая полоска */}
        <div
          className="absolute top-[4px] bottom-[4px] right-[3px] w-[3px] rounded-full animate-led-top-down"
          style={{
            animationDelay: '950ms',
            background:
              'linear-gradient(to bottom, #e0f7ff, #93d2ff, #38bdf8)',
            boxShadow: '0 0 8px 3px rgba(147,210,255,0.95)',
          }}
        />
        {/* Верхняя полоска */}
        <div
          className="absolute top-[3px] left-[4px] right-[4px] h-[3px] rounded-full animate-led-top-down"
          style={{
            animationDelay: '850ms',
            background:
              'linear-gradient(to right, #e0f7ff, #93d2ff, #38bdf8, #93d2ff, #e0f7ff)',
            boxShadow: '0 0 8px 3px rgba(186,230,255,0.95)',
          }}
        />
        {/* Нижняя полоска */}
        <div
          className="absolute bottom-[3px] left-[4px] right-[4px] h-[3px] rounded-full animate-led-top-down"
          style={{
            animationDelay: '1100ms',
            background:
              'linear-gradient(to right, #38bdf8, #93d2ff, #e0f7ff, #93d2ff, #38bdf8)',
            boxShadow: '0 0 8px 3px rgba(147,210,255,0.95)',
          }}
        />
      </div>

      {/* ── Метка размера ── */}
      <div
        className="absolute -bottom-7 left-0 right-0 flex items-center justify-center gap-1 pointer-events-none"
        style={{ opacity: 0.5 }}
      >
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: '#93d2ff', fontFamily: 'Orbitron, monospace' }}
        >
          60 × 120 см
        </span>
      </div>

      {/* ── Лейбл LED ── */}
      <div
        className="absolute -top-7 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none animate-led-top-down"
        style={{ animationDelay: '1200ms' }}
      >
        <span className="w-1.5 h-1.5 rounded-full animate-pulse-neon" style={{ backgroundColor: '#93d2ff' }} />
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: '#93d2ff', fontFamily: 'Orbitron, monospace' }}
        >
          LED подсветка
        </span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at center, #1a0a2e 0%, #0a0a0f 60%)',
      }}
    >
      {/* Фоновые блобы и сетка */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #e879f9, transparent)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Двухколоночный лейаут ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Левая колонка — текст и кнопки */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="animate-fade-in-down delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
              style={{
                border: '1px solid rgba(168,85,247,0.4)',
                background: 'rgba(168,85,247,0.1)',
                color: '#a855f7',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Эксклюзивные зеркала с подсветкой
            </div>

            <h1
              className="animate-fade-in-up delay-200 text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <span className="text-white">ЗЕРКАЛА</span>
              <br />
              <span className="text-gradient">НОВОГО</span>
              <br />
              <span className="text-white">ПОКОЛЕНИЯ</span>
            </h1>

            <p className="animate-fade-in-up delay-300 text-white/60 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">
              Производим премиальные зеркала с наклейками Instagram-профиля и уникальной{' '}
              <span className="text-purple-400 font-semibold">адресной лентой</span>
            </p>
            <p className="animate-fade-in-up delay-400 text-white/40 text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-12">
              LED-подсветка · Индивидуальный дизайн · Быстрое производство
            </p>

            <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={() => scrollTo('#catalog')}
                className="neon-btn text-white px-10 py-4 rounded-xl text-base font-bold tracking-wide flex items-center gap-2"
              >
                <Icon name="Sparkles" size={18} />
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo('#contacts')}
                className="text-white/80 hover:text-white border border-white/20 hover:border-purple-400 px-10 py-4 rounded-xl text-base font-semibold tracking-wide transition-all duration-300 flex items-center gap-2"
              >
                <Icon name="Phone" size={18} />
                Связаться с нами
              </button>
            </div>

            <div className="animate-fade-in-up delay-600 mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0">
              {[
                { value: '500+', label: 'Зеркал продано' },
                { value: '3–7', label: 'Дней производства' },
                { value: '100%', label: 'Гарантия качества' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div
                    className="text-3xl md:text-4xl font-black text-gradient mb-1"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка — зеркало */}
          <div className="flex-shrink-0 flex items-center justify-center pb-8 lg:pb-0 lg:pr-4">
            <MirrorDecor />
          </div>
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className="animate-fade-in delay-700 absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={28} className="text-purple-400/60" />
      </div>
    </section>
  );
};

export default Hero;