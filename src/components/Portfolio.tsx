import { useScrollReveal } from '@/hooks/useScrollReveal';

const portfolioItems = [
  { id: 1, size: 'md:col-span-1 md:row-span-2', label: 'Профиль • Адресная лента', accent: '#e2e8f0' },
  { id: 2, size: 'md:col-span-1 md:row-span-1', label: 'LED • Салон красоты', accent: '#f8fafc' },
  { id: 3, size: 'md:col-span-1 md:row-span-1', label: 'Именное • Подарок', accent: '#94a3b8' },
  { id: 4, size: 'md:col-span-1 md:row-span-1', label: 'Бизнес • Логотип', accent: '#e2e8f0' },
  { id: 5, size: 'md:col-span-1 md:row-span-2', label: 'Зеркало • Профиль', accent: '#f8fafc' },
  { id: 6, size: 'md:col-span-1 md:row-span-1', label: 'RGB • Подсветка', accent: '#22d3ee' },
];

const MirrorPlaceholder = ({ accent, label }: { accent: string; label: string }) => (
  <div
    className="w-full h-full min-h-36 sm:min-h-44 md:min-h-48 relative rounded-xl overflow-hidden group cursor-pointer"
    style={{ background: `linear-gradient(135deg, rgba(0,0,0,0.8), ${accent}22)`, border: `1px solid ${accent}33` }}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="relative w-2/3 h-4/5 rounded-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
          border: '1px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(2px)',
        }}
      >
        <div
          className="absolute -left-0.5 top-4 bottom-4 w-0.5 rounded-full"
          style={{ background: `linear-gradient(to bottom, transparent, ${accent}, transparent)`, boxShadow: `0 0 8px ${accent}` }}
        />
        <div
          className="absolute -right-0.5 top-4 bottom-4 w-0.5 rounded-full"
          style={{ background: `linear-gradient(to bottom, transparent, ${accent}, transparent)`, boxShadow: `0 0 8px ${accent}` }}
        />
        <div className="absolute inset-3 sm:inset-4 flex flex-col items-center justify-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" style={{ background: `linear-gradient(135deg, ${accent}, #f8fafc)` }} />
            <div>
              <div className="h-1 sm:h-1.5 w-10 sm:w-12 rounded" style={{ background: 'rgba(255,255,255,0.4)' }} />
              <div className="h-0.5 sm:h-1 w-6 sm:w-8 rounded mt-0.5" style={{ background: 'rgba(255,255,255,0.2)' }} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-0.5 w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-sm"
                style={{ background: `rgba(255,255,255,${0.15 + (i % 3) * 0.1})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"
      style={{ boxShadow: `inset 0 0 30px ${accent}22` }}
    />
  </div>
);

const Portfolio = () => {
  const titleRef = useScrollReveal({ threshold: 0.1 });
  const gridRef = useScrollReveal({ threshold: 0.05, delay: 100 });

  return (
    <section
      id="portfolio"
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
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400" />
            Портфолио
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            НАШИ <span className="text-gradient">РАБОТЫ</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Каждый заказ — уникальный. Вот несколько примеров наших зеркал
          </p>
        </div>

        {/* Грид портфолио */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
          style={{ gridAutoRows: 'clamp(140px, 18vw, 220px)' }}
        >
          {portfolioItems.map((item) => (
            <div key={item.id} className={item.size}>
              <MirrorPlaceholder accent={item.accent} label={item.label} />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Portfolio;