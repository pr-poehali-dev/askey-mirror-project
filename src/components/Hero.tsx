import Icon from '@/components/ui/icon';

/* ─────────────────────────────────────────
   Зеркало в форме iPhone с тёплой LED-подсветкой
   Вылетает справа при загрузке страницы
───────────────────────────────────────── */
const MirrorDecor = () => (
  <div
    className="animate-slide-in-right relative flex items-center justify-center"
    style={{ animationDelay: '400ms', willChange: 'transform, opacity' }}
  >
    {/* ── Внешнее тёплое свечение (halo вокруг телефона) ── */}
    <div
      className="absolute inset-0 rounded-[52px] pointer-events-none animate-warm-halo"
      style={{
        filter: 'blur(32px)',
        background: 'radial-gradient(ellipse at center, rgba(255,210,120,0.55) 0%, rgba(255,170,60,0.30) 40%, transparent 70%)',
        transform: 'scale(1.18)',
        zIndex: 0,
      }}
    />

    {/*
      iPhone-зеркало: соотношение сторон ≈ 9:19.5 (как у iPhone 14)
      Ширина: clamp(200px, 22vw, 300px)
    */}
    <div
      className="relative mx-auto"
      style={{ width: 'clamp(200px, 22vw, 300px)', aspectRatio: '9 / 19.5', zIndex: 1 }}
    >
      {/* ── Корпус телефона (белая рамка) ── */}
      <div
        className="absolute inset-0 rounded-[44px] overflow-hidden animate-warm-glow"
        style={{
          background: '#f5f5f5',
          boxShadow:
            '0 0 0 2px rgba(255,255,255,0.9), 0 0 40px 12px rgba(255,195,80,0.55), 0 0 80px 24px rgba(255,160,40,0.32), 0 0 140px 48px rgba(255,130,0,0.18)',
        }}
      >
        {/* ── Экран / зеркальная поверхность ── */}
        <div
          className="absolute inset-[6px] rounded-[39px] overflow-hidden"
          style={{
            background:
              'linear-gradient(155deg, rgba(255,255,255,0.13) 0%, rgba(200,195,210,0.08) 30%, rgba(160,155,175,0.15) 60%, rgba(120,115,135,0.2) 100%)',
          }}
        >
          {/* Зеркальный контент — отражение интерьера */}
          <img
            src="https://cdn.poehali.dev/files/735f9f20-70a7-4b2a-b25b-c7ec1282c68d.jpg"
            alt="Зеркало с подсветкой"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.92 }}
          />

          {/* Блик сверху */}
          <div
            className="absolute top-0 left-0 right-0 h-[18%] pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.09), transparent)',
            }}
          />
          {/* Диагональный блик */}
          <div
            className="absolute top-[6%] left-[5%] w-[22%] h-[22%] rounded-full pointer-events-none"
            style={{
              background: 'rgba(255,255,255,0.07)',
              transform: 'rotate(-30deg)',
              filter: 'blur(8px)',
            }}
          />
        </div>

        {/* ── Dynamic Island (чёрная пилюля сверху) ── */}
        <div
          className="absolute top-[14px] left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: '32%',
            height: '22px',
            background: '#111',
            zIndex: 10,
          }}
        />

        {/* ── Статус-бар ── */}
        <div
          className="absolute top-[10px] left-[14px] right-[14px] flex items-center justify-between px-2 pointer-events-none"
          style={{ zIndex: 11, color: '#1a1a1a', fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
        >
          <span style={{ letterSpacing: '-0.3px' }}>13:00</span>
          <div className="flex items-center gap-1" style={{ fontSize: '10px' }}>
            <span>▲▲▲</span>
            <span>WiFi</span>
            <span>▮▮▯</span>
          </div>
        </div>

        {/* ── LED подсветка — левая вертикальная полоска ── */}
        <div
          className="absolute top-[10%] bottom-[10%] left-[6px] animate-led-top-down"
          style={{
            animationDelay: '900ms',
            width: '4px',
            borderRadius: '4px',
            background: 'linear-gradient(to bottom, rgba(255,220,100,0), rgba(255,200,80,1) 20%, rgba(255,190,60,1) 80%, rgba(255,220,100,0))',
            boxShadow: '-2px 0 12px 4px rgba(255,190,60,0.9), -6px 0 24px 6px rgba(255,160,30,0.5)',
            zIndex: 12,
          }}
        />
        {/* ── LED подсветка — правая вертикальная полоска ── */}
        <div
          className="absolute top-[10%] bottom-[10%] right-[6px] animate-led-top-down"
          style={{
            animationDelay: '950ms',
            width: '4px',
            borderRadius: '4px',
            background: 'linear-gradient(to bottom, rgba(255,220,100,0), rgba(255,200,80,1) 20%, rgba(255,190,60,1) 80%, rgba(255,220,100,0))',
            boxShadow: '2px 0 12px 4px rgba(255,190,60,0.9), 6px 0 24px 6px rgba(255,160,30,0.5)',
            zIndex: 12,
          }}
        />

        {/* ── Нижняя кнопка Home / зарядка ── */}
        <div
          className="absolute -bottom-[14px] left-1/2 -translate-x-1/2"
          style={{
            width: '3px',
            height: '20px',
            background: 'rgba(255,255,255,0.5)',
            borderRadius: '3px',
          }}
        />
      </div>

      {/* ── Метка размера ── */}
      <div
        className="absolute -bottom-9 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none"
        style={{ opacity: 0.55 }}
      >
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: '#ffd580', fontFamily: 'Orbitron, monospace' }}
        >
          60 × 120 см
        </span>
      </div>

      {/* ── Лейбл LED ── */}
      <div
        className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none animate-led-top-down"
        style={{ animationDelay: '1200ms' }}
      >
        <span className="w-1.5 h-1.5 rounded-full animate-pulse-neon" style={{ backgroundColor: '#ffd580' }} />
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: '#ffd580', fontFamily: 'Orbitron, monospace' }}
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