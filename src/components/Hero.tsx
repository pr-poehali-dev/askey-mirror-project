import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #1a0a2e 0%, #0a0a0f 60%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{ background: 'radial-gradient(circle, #e879f9, transparent)' }} />
        
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase" style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}>
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Эксклюзивные зеркала с подсветкой
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
          <span className="text-white">ЗЕРКАЛА</span>
          <br />
          <span className="text-gradient">НОВОГО</span>
          <br />
          <span className="text-white">ПОКОЛЕНИЯ</span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Производим премиальные зеркала с наклейками Instagram-профиля и уникальной{' '}
          <span className="text-purple-400 font-semibold">адресной лентой</span>
        </p>
        <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto mb-12">
          LED-подсветка · Индивидуальный дизайн · Быстрое производство
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: '500+', label: 'Зеркал продано' },
            { value: '3–7', label: 'Дней производства' },
            { value: '100%', label: 'Гарантия качества' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>
                {stat.value}
              </div>
              <div className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={28} className="text-purple-400/60" />
      </div>
    </section>
  );
};

export default Hero;
