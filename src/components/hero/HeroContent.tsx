import Icon from '@/components/ui/icon';

interface HeroContentProps {
  scrollTo: (href: string) => void;
}

const HeroContent = ({ scrollTo }: HeroContentProps) => (
  <div className="flex-1 text-center lg:text-left w-full">
    {/* Бейджи */}
    <div className="animate-fade-in-down delay-100 flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
      <div
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
        style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}
      >
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 animate-pulse" />
        Эксклюзивные зеркала с подсветкой
      </div>
      <div
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase"
        style={{ border: '1px solid rgba(250,204,21,0.5)', background: 'rgba(250,204,21,0.08)', color: '#facc15' }}
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
);

export default HeroContent;
