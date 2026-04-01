import Icon from '@/components/ui/icon';

/* ─────────────────────────────────────────
   CSS-зеркало с LED-подсветкой и анимациями
   Вылетает справа при загрузке страницы
───────────────────────────────────────── */
const MirrorDecor = () => (
  <div
    className="animate-slide-in-right relative flex items-center justify-center"
    style={{ animationDelay: '400ms', willChange: 'transform, opacity' }}
  >
    {/* ── Дальнее фоновое свечение (halo) ── */}
    <div
      className="absolute pointer-events-none animate-mirror-outer-halo"
      style={{
        inset: '-60px',
        filter: 'blur(60px)',
        background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.30) 0%, rgba(124,58,237,0.15) 50%, transparent 75%)',
        zIndex: 0,
      }}
    />

    {/* ── Обёртка зеркала ── */}
    <div
      className="relative animate-mirror-float"
      style={{
        width: 'clamp(200px, 22vw, 300px)',
        zIndex: 1,
      }}
    >
      {/* ── Рамка зеркала ── */}
      <div
        className="relative animate-mirror-frame-glow"
        style={{
          borderRadius: '18px',
          padding: '6px',
          background: 'linear-gradient(145deg, rgba(168,85,247,0.9) 0%, rgba(232,121,249,0.7) 30%, rgba(124,58,237,0.95) 60%, rgba(168,85,247,0.8) 100%)',
        }}
      >
        {/* ── Зеркальная поверхность ── */}
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: '13px',
            aspectRatio: '9 / 16',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 20%, #0f3460 40%, #1a1a2e 60%, #0d0d1a 80%, #1a1a2e 100%)',
          }}
        >
          {/* ── Зеркальный блик (полоса света) ── */}
          <div
            className="absolute pointer-events-none animate-mirror-shine"
            style={{
              top: 0,
              left: '-60%',
              width: '40%',
              height: '100%',
              background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 70%)',
              transform: 'skewX(-15deg)',
              zIndex: 3,
            }}
          />

          {/* ── Отражение-градиент поверхности ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(168,85,247,0.05) 30%, transparent 60%, rgba(124,58,237,0.06) 90%)',
              zIndex: 2,
            }}
          />

          {/* ── Instagram-наклейка (имитация) ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 animate-mirror-content-reveal"
            style={{ zIndex: 4, animationDelay: '800ms' }}
          >
            {/* Аватар */}
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                padding: '2px',
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                border: '2px solid rgba(255,255,255,0.15)',
              }} />
            </div>
            {/* Ник */}
            <div style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '11px',
              fontFamily: 'Orbitron, monospace',
              letterSpacing: '0.1em',
              textAlign: 'center',
            }}>
              @your_profile
            </div>
            {/* Имитация QR/ссылки */}
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '6px',
              background: 'rgba(255,255,255,0.9)',
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gridTemplateRows: 'repeat(5, 1fr)',
              gap: '2px',
              padding: '4px',
            }}>
              {[1,1,1,1,1, 1,0,0,0,1, 1,0,1,0,1, 1,0,0,0,1, 1,1,1,1,1].map((v, i) => (
                <div key={i} style={{
                  background: v ? '#1a1a2e' : 'transparent',
                  borderRadius: '1px',
                }} />
              ))}
            </div>
            {/* Адресная лента */}
            <div style={{
              color: 'rgba(168,85,247,0.9)',
              fontSize: '7px',
              fontFamily: 'Orbitron, monospace',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textAlign: 'center',
              borderTop: '1px solid rgba(168,85,247,0.3)',
              paddingTop: '6px',
              width: '80%',
            }}>
              instagram.com/your_profile
            </div>
          </div>

          {/* ── LED-полоска снизу ── */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none animate-led-strip"
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, transparent, rgba(168,85,247,1) 20%, rgba(232,121,249,1) 50%, rgba(168,85,247,1) 80%, transparent)',
              filter: 'blur(1px)',
              zIndex: 5,
            }}
          />
          {/* ── LED-полоска сверху ── */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none animate-led-strip"
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, transparent, rgba(168,85,247,1) 20%, rgba(232,121,249,1) 50%, rgba(168,85,247,1) 80%, transparent)',
              filter: 'blur(1px)',
              zIndex: 5,
              animationDelay: '0.3s',
            }}
          />
        </div>
      </div>

      {/* ── Боковые LED-лучи (исходят из рамки наружу) ── */}
      <div
        className="absolute pointer-events-none animate-mirror-side-led"
        style={{
          left: '-22px',
          top: '10%',
          bottom: '10%',
          width: '20px',
          background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.95) 20%, rgba(232,121,249,1) 50%, rgba(168,85,247,0.95) 80%, transparent)',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      />
      <div
        className="absolute pointer-events-none animate-mirror-side-led"
        style={{
          right: '-22px',
          top: '10%',
          bottom: '10%',
          width: '20px',
          background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.95) 20%, rgba(232,121,249,1) 50%, rgba(168,85,247,0.95) 80%, transparent)',
          filter: 'blur(8px)',
          zIndex: 0,
          animationDelay: '0.5s',
        }}
      />

      {/* ── Лейбл сверху ── */}
      <div
        className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none animate-fade-in"
        style={{ animationDelay: '1200ms' }}
      >
        <span className="w-1.5 h-1.5 rounded-full animate-pulse-neon" style={{ backgroundColor: '#a855f7' }} />
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: '#a855f7', fontFamily: 'Orbitron, monospace' }}
        >
          Instagram наклейки
        </span>
      </div>

      {/* ── Метка размера снизу ── */}
      <div
        className="absolute -bottom-8 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none"
        style={{ opacity: 0.55 }}
      >
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: '#a855f7', fontFamily: 'Orbitron, monospace' }}
        >
          60 × 120 см
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
            <div className="animate-fade-in-down delay-100 flex flex-wrap items-center gap-3 mb-8 justify-center lg:justify-start">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  border: '1px solid rgba(168,85,247,0.4)',
                  background: 'rgba(168,85,247,0.1)',
                  color: '#a855f7',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                Эксклюзивные зеркала с подсветкой
              </div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  border: '1px solid rgba(250,204,21,0.5)',
                  background: 'rgba(250,204,21,0.08)',
                  color: '#facc15',
                }}
              >
                <Icon name="TrendingUp" size={13} />
                Тренд 2026 года
              </div>
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
              Производим премиальные зеркала с наклейками вашего профиля и уникальной{' '}
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