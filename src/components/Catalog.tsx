import Icon from '@/components/ui/icon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const products = [
  {
    id: 1,
    name: 'Стандарт',
    tag: 'Хит',
    tagColor: '#f8fafc',
    lightType: 'Контурная подсветка',
    description: 'Светодиодная лента расположена по периметру зеркала, за корпусом между зеркалом и стеной. Оснащена сенсорной кнопкой, с помощью которой можно настраивать режимы свечения.',
    price: '12 590',
    icon: 'Lightbulb',
    popular: false,
    image: 'https://cdn.poehali.dev/projects/af6d2ef4-20e2-486b-93ab-6d38dda52f4e/bucket/57e07a93-c21d-482c-9692-5239ccdc13fc.jpg',
  },
  {
    id: 2,
    name: 'Премиум',
    tag: 'Флагман',
    tagColor: '#e2e8f0',
    lightType: 'Контурная + фронтальная подсветка',
    description: 'Зеркало оснащено сочетанием контурной и фронтальной подсветкой, создающим комфортное и выразительное освещение. Фронтальная подсветка выполнена в виде двух вертикальных полос по бокам зеркала.',
    price: '15 590',
    icon: 'Sparkles',
    popular: true,
    image: 'https://cdn.poehali.dev/files/1c52a0fb-bc13-4ebc-892a-9d67e6a72f4b.jpeg',
  },
  {
    id: 3,
    name: 'Премиум +',
    tag: 'Exclusive',
    tagColor: '#cbd5e1',
    lightType: 'Контурная + фронтальная подсветка',
    description: 'Зеркало оснащено комбинированной подсветкой: контурная + фронтальная. Дополнительно декорировано полупрозрачными наклейками в черном исполнении.',
    price: '18 590',
    icon: 'Gem',
    popular: false,
    image: 'https://i.ibb.co/1GJVVgnN/image.png',
    darkSticker: true,
  },
];

const Catalog = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const titleRef = useScrollReveal({ threshold: 0.1 });
  const card0Ref = useScrollReveal<HTMLDivElement>({ threshold: 0.08, delay: 0 });
  const card1Ref = useScrollReveal<HTMLDivElement>({ threshold: 0.08, delay: 100 });
  const card2Ref = useScrollReveal<HTMLDivElement>({ threshold: 0.08, delay: 200 });
  const cardRefs = [card0Ref, card1Ref, card2Ref];

  return (
    <section
      id="catalog"
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ background: '#080808' }}
    >
      {/* Разделитель сверху */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Заголовок */}
        <div ref={titleRef} className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)', color: '#e2e8f0' }}
          >
            <Icon name="Grid3X3" size={12} />
            Каталог продукции
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            НАШИ <span className="text-gradient">ЗЕРКАЛА</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Каждое зеркало — это уникальный арт-объект, созданный с точностью до миллиметра
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              ref={cardRefs[i]}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col group"
              style={{
                background: product.popular
                  ? 'linear-gradient(135deg, #141414 0%, #1c1c1c 60%, #0e0e0e 100%)'
                  : 'linear-gradient(135deg, #0e0e0e 0%, #131313 100%)',
                border: `1px solid ${product.popular ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}`,
                boxShadow: product.popular
                  ? '0 0 40px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)'
                  : 'none',
                transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-8px) scale(1.02)';
                el.style.boxShadow = '0 24px 60px rgba(255,255,255,0.12), 0 0 0 1px rgba(255,255,255,0.5), inset 0 1px 0 rgba(255,255,255,0.2)';
                el.style.borderColor = 'rgba(255,255,255,0.6)';
                const shine = el.querySelector<HTMLElement>('.shine-overlay');
                if (shine) shine.style.backgroundPosition = '-50% 0%';
                const glow = el.querySelector<HTMLElement>('.hover-glow');
                if (glow) glow.style.opacity = '1';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = '';
                el.style.boxShadow = product.popular
                  ? '0 0 40px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)'
                  : 'none';
                el.style.borderColor = product.popular ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)';
                const shine = el.querySelector<HTMLElement>('.shine-overlay');
                if (shine) shine.style.backgroundPosition = '200% 0%';
                const glow = el.querySelector<HTMLElement>('.hover-glow');
                if (glow) glow.style.opacity = '0';
              }}
            >
              {/* Внутренний свет при hover */}
              <div
                className="hover-glow absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 65%)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                }}
              />
              {/* Отблеск при hover */}
              <div
                className="shine-overlay absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                style={{
                  background: 'linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 60%)',
                  backgroundSize: '400% 100%',
                  backgroundPosition: '200% 0%',
                  transition: 'background-position 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />
              {/* Glow */}
              {product.popular && (
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #e2e8f0, transparent 70%)' }}
                />
              )}

              {/* Фото зеркала */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full block"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 70%, rgba(10,10,15,0.9) 100%)' }}
                />
                {/* Чёрные наклейки для Премиум+ */}
                {(product as typeof product & { darkSticker?: boolean }).darkSticker && (
                  <>
                    {/* Верхняя наклейка */}
                    <div style={{
                      position: 'absolute', top: '6%', left: '9%', right: '9%',
                      background: 'rgba(0,0,0,0.72)',
                      backdropFilter: 'blur(6px)',
                      borderRadius: '18px 18px 0 0',
                      padding: '8px 12px 6px',
                    }}>
                      {/* Статус-бар */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', fontFamily: 'sans-serif' }}>13:00</span>
                        <div style={{ width: '50px', height: '16px', borderRadius: '999px', background: '#111' }} />
                        <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                          <svg style={{ width: '12px', height: '9px' }} viewBox="0 0 17 12" fill="none"><rect x="0" y="4" width="3" height="8" rx="1" fill="white"/><rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill="white"/><rect x="9" y="1" width="3" height="11" rx="1" fill="white"/><rect x="13.5" y="0" width="3" height="12" rx="1" fill="white" opacity="0.4"/></svg>
                          <svg style={{ width: '12px', height: '9px' }} viewBox="0 0 16 12" fill="none"><path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="white"/><path d="M4.2 7.2C5.3 6 6.6 5.3 8 5.3s2.7.7 3.8 1.9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><path d="M1.2 4.2C3.1 2.2 5.4 1 8 1s4.9 1.2 6.8 3.2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                            <div style={{ width: '18px', height: '9px', borderRadius: '2px', border: '1.5px solid white', padding: '1.5px', display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}>
                              <div style={{ width: '70%', height: '100%', background: 'white', borderRadius: '1px' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Instagram шапка */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', padding: '2px', boxSizing: 'border-box', flexShrink: 0 }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#555' }} />
                          </div>
                          <div>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', fontFamily: 'sans-serif', lineHeight: 1.2 }}>askei.mirror</div>
                            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', fontFamily: 'sans-serif' }}>Анапа</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '3px' }}>{[0,1,2].map(i => <div key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'white' }} />)}</div>
                      </div>
                    </div>

                    {/* Нижняя наклейка */}
                    <div style={{
                      position: 'absolute', bottom: '6%', left: '9%', right: '9%',
                      background: 'rgba(0,0,0,0.72)',
                      backdropFilter: 'blur(6px)',
                      borderRadius: '0 0 18px 18px',
                      padding: '8px 12px 10px',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          {[
                            { icon: <svg style={{width:'15px',height:'15px'}} viewBox="0 0 24 24" fill="#ff4d6d"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>, label: '12 тыс.' },
                            { icon: <svg style={{width:'15px',height:'15px'}} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, label: '21' },
                            { icon: <svg style={{width:'15px',height:'15px'}} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>, label: '1 007' },
                          ].map(({icon, label}) => (
                            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                              {icon}
                              <span style={{ fontSize: '10px', color: '#fff', fontFamily: 'sans-serif', fontWeight: 600 }}>{label}</span>
                            </div>
                          ))}
                        </div>
                        <svg style={{width:'15px',height:'15px'}} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                      </div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.9)', fontFamily: 'sans-serif', lineHeight: 1.4 }}>
                        <span style={{ fontWeight: 700 }}>askei.mirror</span>{' '}Если зеркало, то только наше
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="relative flex flex-col flex-1 p-5 sm:p-6 lg:p-7">
                {/* Шапка */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${product.tagColor}22`,
                      border: `1px solid ${product.tagColor}44`,
                    }}
                  >
                    <Icon name={product.icon} size={18} style={{ color: product.tagColor }} />
                  </div>
                  <div className="flex items-center gap-2">
                    {product.popular && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse-neon"
                        style={{ background: 'linear-gradient(135deg, #94a3b8, #e2e8f0)', color: '#fff' }}
                      >
                        №1
                      </span>
                    )}
                    <span
                      className="text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full"
                      style={{
                        background: `${product.tagColor}22`,
                        color: product.tagColor,
                        border: `1px solid ${product.tagColor}44`,
                      }}
                    >
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Название */}
                <h3
                  className="text-xl sm:text-2xl font-black text-white mb-1 tracking-tight"
                  style={{ fontFamily: 'Orbitron, monospace', textShadow: product.popular ? '0 0 20px rgba(255,255,255,0.4)' : 'none' }}
                >
                  {product.name}
                </h3>

                {/* Тип подсветки */}
                <p
                  className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4"
                  style={{ color: product.tagColor }}
                >
                  {product.lightType}
                </p>

                {/* Описание */}
                <p className="text-white/55 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 flex-1">
                  {product.description}
                </p>

                {/* Цена */}
                <div className="mb-4 sm:mb-5">
                  <div className="flex items-end justify-between mb-1.5">
                    <span className="text-xs text-white/30 uppercase tracking-widest mb-1">цена</span>
                    <span
                      className="text-2xl sm:text-3xl font-black leading-none"
                      style={{ color: product.tagColor, fontFamily: 'Orbitron, monospace', textShadow: `0 0 20px ${product.tagColor}55` }}
                    >
                      {product.price} <span className="text-base sm:text-lg">₽</span>
                    </span>
                  </div>
                  <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${product.tagColor}40, transparent)` }} />
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollTo('#contacts')}
                  className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={
                    product.popular
                      ? {
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                          color: '#ffffff',
                          border: '1px solid rgba(255,255,255,0.35)',
                          boxShadow: '0 0 30px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.2)',
                          letterSpacing: '0.12em',
                        }
                      : {
                          background: `${product.tagColor}12`,
                          color: product.tagColor,
                          border: `1px solid ${product.tagColor}30`,
                          letterSpacing: '0.1em',
                        }
                  }
                  onMouseEnter={e => {
                    if (product.popular) {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 50px rgba(255,255,255,0.22), inset 0 1px 0 rgba(255,255,255,0.3)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 100%)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (product.popular) {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.2)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)';
                    }
                  }}
                >
                  <Icon name="Sparkles" size={13} />
                  Заказать зеркало
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;