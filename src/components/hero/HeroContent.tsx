import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';

interface HeroContentProps {
  scrollTo: (href: string) => void;
}

const stats = [
  { end: 500, suffix: '+', label: 'Зеркал продано' },
  { end: 12, suffix: '', label: 'Дней производства' },
  { end: 100, suffix: '%', label: 'Гарантия качества' },
];

const useCounter = (end: number, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * end));
        if (progress < 1) requestAnimationFrame(tick);
        else setCount(end);
      };
      requestAnimationFrame(tick);
    }, 800 + delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return count;
};

const StatCounter = ({ end, suffix, label, delay }: { end: number; suffix: string; label: string; delay: number }) => {
  const count = useCounter(end, 2000, delay);
  return (
    <div className="text-center lg:text-left">
      <div
        className="text-xl sm:text-3xl md:text-4xl font-black text-gradient mb-0.5 sm:mb-1 tabular-nums"
        style={{ fontFamily: 'Orbitron, monospace' }}
      >
        {count}{suffix}
      </div>
      <div className="text-white/40 text-[9px] sm:text-xs uppercase tracking-wider leading-tight">
        {label}
      </div>
    </div>
  );
};

const HeroContent = ({ scrollTo }: HeroContentProps) => (
  <div className="flex-1 text-center lg:text-left w-full">
    {/* Бейджи */}
    <div className="animate-fade-in-down delay-100 flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8 justify-center lg:justify-start">
      <div
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
        style={{ border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)', color: '#e2e8f0' }}
      >
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 animate-pulse flex-shrink-0" />
        <span className="hidden xs:inline">Эксклюзивные зеркала с подсветкой</span>
        <span className="xs:hidden">Зеркала с подсветкой</span>
      </div>
      <div
        className="hidden sm:inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase whitespace-nowrap"
        style={{ border: '1px solid rgba(250,204,21,0.5)', background: 'rgba(250,204,21,0.08)', color: '#facc15' }}
      >
        <Icon name="TrendingUp" size={11} />
        Тренд 2026 года
      </div>
    </div>

    {/* Заголовок */}
    <h1
      className="animate-fade-in-up delay-200 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-3 sm:mb-6 leading-tight"
      style={{ fontFamily: 'Orbitron, monospace' }}
    >
      <span className="text-white">ЗЕРКАЛА</span>
      <br />
      <span className="text-gradient">НОВОГО</span>
      <br />
      <span className="text-white">ПОКОЛЕНИЯ</span>
    </h1>

    <p className="animate-fade-in-up delay-300 text-white/60 text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto lg:mx-0 mb-2 sm:mb-4 leading-relaxed">
      Производим премиальные зеркала с наклейками вашего профиля и уникальной{' '}
      <span className="text-purple-400 font-semibold">адресной лентой</span>
    </p>
    <p className="animate-fade-in-up delay-400 text-white/40 text-xs sm:text-sm md:text-base max-w-md sm:max-w-xl mx-auto lg:mx-0 mb-5 sm:mb-12">
      LED-подсветка · Индивидуальный дизайн · Быстрое производство
    </p>

    {/* Кнопки */}
    <div className="animate-fade-in-up delay-500 flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch xs:items-center">
      <button
        onClick={() => scrollTo('#catalog')}
        className="neon-btn text-white px-5 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl text-xs sm:text-base font-bold tracking-wide flex items-center justify-center gap-2"
      >
        <Icon name="Sparkles" size={16} />
        Смотреть каталог
      </button>
      <button
        onClick={() => scrollTo('#contacts')}
        className="text-white/80 hover:text-white border border-white/20 hover:border-purple-400 px-5 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl text-xs sm:text-base font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Icon name="Phone" size={16} />
        Связаться с нами
      </button>
    </div>

    {/* Статистика */}
    <div className="animate-fade-in-up delay-600 mt-4 sm:mt-12 flex items-stretch gap-0 max-w-sm sm:max-w-md mx-auto lg:mx-0">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-stretch flex-1">
          <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} delay={i * 150} />
          {i < stats.length - 1 && (
            <div className="mx-4 sm:mx-6 w-px self-stretch" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)' }} />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default HeroContent;