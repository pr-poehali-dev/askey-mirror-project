import Icon from '@/components/ui/icon';

/* ─────────────────────────────────────────
   Реальное зеркало с тёплой LED-подсветкой
   Вылетает справа при загрузке страницы
───────────────────────────────────────── */
const MirrorDecor = () => (
  <div
    className="animate-slide-in-right relative flex items-center justify-center"
    style={{ animationDelay: '400ms', willChange: 'transform, opacity' }}
  >
    {/* ── Внешнее фиолетовое свечение (halo вокруг зеркала) ── */}
    <div
      className="absolute pointer-events-none animate-warm-halo"
      style={{
        inset: '-20px',
        filter: 'blur(40px)',
        background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.40) 0%, rgba(124,58,237,0.22) 45%, transparent 72%)',
        zIndex: 0,
      }}
    />

    {/* ── Боковое LED-свечение слева (фиолетовое) ── */}
    <div
      className="absolute left-0 top-[8%] bottom-[8%] pointer-events-none animate-warm-glow"
      style={{
        width: '18px',
        background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.9) 20%, rgba(124,58,237,1) 50%, rgba(168,85,247,0.9) 80%, transparent)',
        filter: 'blur(6px)',
        zIndex: 2,
        transform: 'translateX(-50%)',
      }}
    />
    {/* ── Боковое LED-свечение справа (фиолетовое) ── */}
    <div
      className="absolute right-0 top-[8%] bottom-[8%] pointer-events-none animate-warm-glow"
      style={{
        width: '18px',
        background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.9) 20%, rgba(124,58,237,1) 50%, rgba(168,85,247,0.9) 80%, transparent)',
        filter: 'blur(6px)',
        zIndex: 2,
        transform: 'translateX(50%)',
      }}
    />

    {/* ── Само зеркало ── */}
    <div
      className="relative"
      style={{
        width: 'clamp(220px, 24vw, 340px)',
        zIndex: 1,
      }}
    >
      <img
        src="https://cdn.poehali.dev/projects/af6d2ef4-20e2-486b-93ab-6d38dda52f4e/files/5ceef6b4-dc70-4e9f-9a8c-6098fc8f80da.jpg"
        alt="Зеркало с наклейками Instagram профиля"
        className="w-full h-auto animate-led-top-down"
        style={{
          animationDelay: '600ms',
          borderRadius: '16px',
          boxShadow:
            '0 0 30px 8px rgba(168,85,247,0.35), 0 0 70px 20px rgba(124,58,237,0.22), 0 0 120px 40px rgba(232,121,249,0.12)',
          filter: 'drop-shadow(0 0 18px rgba(168,85,247,0.55))',
        }}
      />

      {/* ── Лейбл Instagram сверху ── */}
      <div
        className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none animate-led-top-down"
        style={{ animationDelay: '1100ms' }}
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