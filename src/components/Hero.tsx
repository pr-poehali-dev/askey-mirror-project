import Icon from '@/components/ui/icon';
import MirrorDecor from '@/components/hero/MirrorDecor';
import HeroContent from '@/components/hero/HeroContent';
import HeroBackground from '@/components/hero/HeroBackground';
import Mascot from '@/components/Mascot';

const Hero = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
      style={{ background: 'radial-gradient(ellipse at 50% 40%, #12131a 0%, #080808 70%)' }}
    >
      {/* Canvas-фон с частицами */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HeroBackground />

        {/* Туман сверху и снизу */}
        <div
          className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #080808 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #080808 0%, transparent 100%)' }}
        />
      </div>

      {/* Двухколоночный лейаут */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pt-24 pb-16 sm:pt-28 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-16">

          {/* Левая колонка — текст и кнопки */}
          <HeroContent scrollTo={scrollTo} />

          {/* Правая колонка — зеркало + персонаж */}
          <div className="flex-shrink-0 flex items-end justify-center gap-8 xl:gap-12 order-first lg:order-last py-6 lg:py-0 lg:pr-4">
            {/* Персонаж-маскот */}
            <div className="hidden lg:flex items-end pb-14">
              <Mascot />
            </div>
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