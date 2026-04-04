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
        width: 'clamp(140px, 18vw, 280px)',
        zIndex: 1,
      }}
    >
      {/* ── Рамка зеркала ── */}
      <div
        className="relative animate-mirror-frame-glow"
        style={{
          borderRadius: '48px',
          padding: '6px',
          background: 'linear-gradient(145deg, rgba(168,85,247,0.9) 0%, rgba(232,121,249,0.7) 30%, rgba(124,58,237,0.95) 60%, rgba(168,85,247,0.8) 100%)',
        }}
      >
        {/* ── Зеркальная поверхность ── */}
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: '42px',
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

          {/* ── Наклейка сверху: шапка поста ── */}
          <div
            className="absolute top-0 left-0 right-0 animate-mirror-content-reveal"
            style={{
              zIndex: 4,
              animationDelay: '800ms',
              background: 'rgba(255,255,255,0.97)',
              padding: '8px 10px 7px',
            }}
          >
            {/* Динамический остров по центру + иконки справа */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#111', fontFamily: 'sans-serif', paddingLeft: '14px' }}>13:00</span>
              <div style={{ width: '26px', height: '7px', borderRadius: '4px', background: '#111' }} />
              <div style={{ display: 'flex', gap: '3px', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '8px' }}>
                <div style={{ display: 'flex', gap: '1px', alignItems: 'flex-end' }}>
                  {[3,5,7,9].map((h, i) => (
                    <div key={i} style={{ width: '2px', height: `${h}px`, borderRadius: '1px', background: '#111', opacity: i < 3 ? 1 : 0.3 }} />
                  ))}
                </div>
                <svg width="9" height="7" viewBox="0 0 10 8" fill="none"><path d="M5 1.5C6.7 1.5 8.2 2.3 9.2 3.5L10 2.5C8.8 1.1 7 0 5 0C3 0 1.2 1.1 0 2.5L0.8 3.5C1.8 2.3 3.3 1.5 5 1.5Z" fill="#111"/><path d="M5 3.5C6.1 3.5 7.1 4 7.8 4.8L8.6 3.8C7.7 2.8 6.4 2.2 5 2.2C3.6 2.2 2.3 2.8 1.4 3.8L2.2 4.8C2.9 4 3.9 3.5 5 3.5Z" fill="#111"/><circle cx="5" cy="6.5" r="1" fill="#111"/></svg>
                <div style={{ width: '13px', height: '6px', borderRadius: '2px', border: '1px solid #111', padding: '1px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '70%', height: '100%', background: '#111', borderRadius: '1px' }} />
                </div>
              </div>
            </div>
            {/* Аватар + ник + геолокация + часы */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '26px', height: '26px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  padding: '1.5px', flexShrink: 0,
                }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#c8b8a2' }} />
                </div>
                <div>
                  <div style={{ fontSize: '8px', fontWeight: 700, color: '#111', fontFamily: 'sans-serif', lineHeight: 1.2 }}>your_profile</div>
                  <div style={{ fontSize: '6.5px', color: '#666', fontFamily: 'sans-serif', lineHeight: 1.2 }}>Москва</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[0,1,2].map(i => <div key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#111' }} />)}
              </div>
            </div>
          </div>

          {/* ── Зеркальная поверхность (отражение интерьера) ── */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: 1,
              background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(200,184,160,0.12) 30%, rgba(180,160,130,0.08) 60%, rgba(255,255,255,0.05) 100%)',
            }}
          />

          {/* ── Сенсорная кнопка подсветки ── */}
          <div
            className="absolute animate-mirror-content-reveal"
            style={{
              zIndex: 4,
              animationDelay: '950ms',
              bottom: 'calc(18px + 6% + 20px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '22px',
              height: '22px',
              borderRadius: '5px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: '0 0 8px 2px rgba(255,255,220,0.7), 0 0 16px 4px rgba(255,255,180,0.4)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '4px',
              background: 'radial-gradient(circle, rgba(255,255,220,0.9) 0%, rgba(255,220,100,0.6) 60%, transparent 100%)',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
          </div>

          {/* ── Наклейка снизу: реакции поста ── */}
          <div
            className="absolute bottom-0 left-0 right-0 animate-mirror-content-reveal"
            style={{
              zIndex: 4,
              animationDelay: '900ms',
              background: 'rgba(255,255,255,0.97)',
              padding: '7px 10px 18px',
            }}
          >
            {/* Иконки реакций */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {/* Лайк */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#e53935"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <span style={{ fontSize: '7px', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>12 тыс.</span>
                </div>
                {/* Комментарий */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  <span style={{ fontSize: '7px', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>21</span>
                </div>
                {/* Репост */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
                  <span style={{ fontSize: '7px', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>832</span>
                </div>
                {/* Отправить */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  <span style={{ fontSize: '7px', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>1 007</span>
                </div>
              </div>
              {/* Закладка */}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </div>
            {/* Подпись */}
            <div style={{ fontSize: '6.5px', color: '#333', fontFamily: 'sans-serif', lineHeight: 1.4 }}>
              <span style={{ fontWeight: 700 }}>your_profile</span>
              {' '}Вкусно жить — не запретишь !!!
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
          Ваш профиль
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
      style={{
        background:
          'radial-gradient(ellipse at center, #1a0a2e 0%, #0a0a0f 60%)',
      }}
    >
      {/* Фоновые блобы и сетка */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #e879f9, transparent)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── Двухколоночный лейаут ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pt-24 pb-16 sm:pt-28 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-16">

          {/* Левая колонка — текст и кнопки */}
          <div className="flex-1 text-center lg:text-left w-full">
            {/* Бейджи */}
            <div className="animate-fade-in-down delay-100 flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
                style={{
                  border: '1px solid rgba(168,85,247,0.4)',
                  background: 'rgba(168,85,247,0.1)',
                  color: '#a855f7',
                }}
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 animate-pulse" />
                Эксклюзивные зеркала с подсветкой
              </div>
              <div
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase"
                style={{
                  border: '1px solid rgba(250,204,21,0.5)',
                  background: 'rgba(250,204,21,0.08)',
                  color: '#facc15',
                }}
              >
                <Icon name="TrendingUp" size={11} />
                Тренд 2026 года
              </div>
            </div>

            {/* Заголовок */}
            <h1
              className="animate-fade-in-up delay-200 text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <span className="text-white">ЗЕРКАЛА</span>
              <br />
              <span className="text-gradient">НОВОГО</span>
              <br />
              <span className="text-white">ПОКОЛЕНИЯ</span>
            </h1>

            <p className="animate-fade-in-up delay-300 text-white/60 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto lg:mx-0 mb-3 sm:mb-4 leading-relaxed">
              Производим премиальные зеркала с наклейками вашего профиля и уникальной{' '}
              <span className="text-purple-400 font-semibold">адресной лентой</span>
            </p>
            <p className="animate-fade-in-up delay-400 text-white/40 text-xs sm:text-sm md:text-base max-w-md sm:max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-12">
              LED-подсветка · Индивидуальный дизайн · Быстрое производство
            </p>

            {/* Кнопки */}
            <div className="animate-fade-in-up delay-500 flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={() => scrollTo('#catalog')}
                className="neon-btn text-white w-full xs:w-auto px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide flex items-center justify-center gap-2"
              >
                <Icon name="Sparkles" size={16} />
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo('#contacts')}
                className="text-white/80 hover:text-white border border-white/20 hover:border-purple-400 w-full xs:w-auto px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Icon name="Phone" size={16} />
                Связаться с нами
              </button>
            </div>

            {/* Статистика */}
            <div className="animate-fade-in-up delay-600 mt-10 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-2xl mx-auto lg:mx-0">
              {[
                { value: '500+', label: 'Зеркал продано' },
                { value: '12', label: 'Дней производства' },
                { value: '100%', label: 'Гарантия качества' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-black text-gradient mb-0.5 sm:mb-1"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-[9px] sm:text-xs uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка — зеркало */}
          <div className="flex-shrink-0 flex items-center justify-center order-first lg:order-last pb-2 lg:pb-0 lg:pr-4">
            <MirrorDecor />
          </div>
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className="animate-fade-in delay-700 absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-purple-400/60 sm:w-7 sm:h-7" />
      </div>
    </section>
  );
};

export default Hero;