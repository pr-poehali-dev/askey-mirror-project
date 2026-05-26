import Icon from '@/components/ui/icon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const products = [
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
  const card0Ref = useScrollReveal<HTMLDivElement>({ threshold: 0.05, delay: 0 });
  const card1Ref = useScrollReveal<HTMLDivElement>({ threshold: 0.05, delay: 120 });
  const cardRefs = [card0Ref, card1Ref];

  return (
    <section
      id="catalog"
      className="py-16 sm:py-20 lg:py-28 relative"
      style={{ background: '#080808' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Заголовок */}
        <div ref={titleRef} className="text-center mb-16 sm:mb-20 lg:mb-24">
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

        {/* Блоки на всю ширину */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {products.map((product, i) => {
            const isDark = (product as typeof product & { darkSticker?: boolean }).darkSticker;
            const isEven = i % 2 === 0;

            return (
              <div
                key={product.id}
                ref={cardRefs[i]}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
                style={{
                  background: product.popular
                    ? 'linear-gradient(135deg, #141414 0%, #1c1c1c 60%, #0e0e0e 100%)'
                    : 'linear-gradient(135deg, #0e0e0e 0%, #131313 100%)',
                  border: `1px solid ${product.popular ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.12)'}`,
                  boxShadow: product.popular ? '0 0 60px rgba(255,255,255,0.06)' : 'none',
                }}
              >
                {/* Glow */}
                {product.popular && (
                  <div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #e2e8f0, transparent 70%)' }}
                  />
                )}

                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]`}>

                  {/* Фото */}
                  <div className="relative w-full lg:w-1/2 overflow-hidden" style={{ minHeight: '280px' }}>
                    {isDark ? (
                      <div
                        className="w-full h-full"
                        style={{
                          minHeight: '280px',
                          background: 'linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '16px',
                        }}
                      >
                        <div style={{
                          fontSize: '11px',
                          fontFamily: 'Orbitron, monospace',
                          letterSpacing: '0.35em',
                          color: 'rgba(255,255,255,0.2)',
                          textTransform: 'uppercase',
                        }}>coming soon</div>
                        <div style={{
                          fontSize: '36px',
                          fontFamily: 'Orbitron, monospace',
                          fontWeight: 900,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          background: 'linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.85), rgba(255,255,255,0.4))',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          textAlign: 'center',
                          lineHeight: 1.2,
                        }}>СКОРО<br />В ПРОДАЖЕ</div>
                        <div style={{ width: '48px', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                      </div>
                    ) : (
                      <>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          style={{ minHeight: '280px' }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: isEven
                              ? 'linear-gradient(to right, transparent 60%, rgba(10,10,15,0.85) 100%)'
                              : 'linear-gradient(to left, transparent 60%, rgba(10,10,15,0.85) 100%)',
                          }}
                        />
                      </>
                    )}
                  </div>

                  {/* Контент */}
                  <div className="relative flex flex-col justify-center w-full lg:w-1/2 p-8 sm:p-10 lg:p-14">
                    {/* Тег */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${product.tagColor}18`, border: `1px solid ${product.tagColor}33` }}
                      >
                        <Icon name={product.icon} size={18} style={{ color: product.tagColor }} />
                      </div>
                      <div className="flex items-center gap-2">
                        {product.popular && (
                          <span
                            className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                            style={{ background: 'linear-gradient(135deg, #94a3b8, #e2e8f0)', color: '#0a0a0a' }}
                          >
                            №1
                          </span>
                        )}
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest uppercase"
                          style={{ background: `${product.tagColor}18`, color: product.tagColor, border: `1px solid ${product.tagColor}33` }}
                        >
                          {product.tag}
                        </span>
                      </div>
                    </div>

                    {/* Название */}
                    <h3
                      className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight"
                      style={{
                        fontFamily: 'Orbitron, monospace',
                        textShadow: product.popular ? '0 0 30px rgba(255,255,255,0.3)' : 'none',
                      }}
                    >
                      {product.name}
                    </h3>

                    {/* Тип подсветки */}
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-5"
                      style={{ color: product.tagColor, opacity: 0.7 }}
                    >
                      {product.lightType}
                    </p>

                    {/* Описание */}
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                      {product.description}
                    </p>

                    {/* Цена + кнопка */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div>
                        <div className="text-white/30 text-[10px] uppercase tracking-widest mb-1">цена</div>
                        <div
                          className="text-3xl sm:text-4xl font-black leading-none"
                          style={{
                            color: product.tagColor,
                            fontFamily: 'Orbitron, monospace',
                            textShadow: `0 0 24px ${product.tagColor}44`,
                          }}
                        >
                          {product.price} <span className="text-xl">₽</span>
                        </div>
                      </div>

                      <button
                        onClick={() => scrollTo('#contacts')}
                        className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-[1.03]"
                        style={
                          product.popular
                            ? {
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                                color: '#ffffff',
                                border: '1px solid rgba(255,255,255,0.3)',
                                boxShadow: '0 0 30px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15)',
                                letterSpacing: '0.1em',
                              }
                            : {
                                background: `${product.tagColor}12`,
                                color: product.tagColor,
                                border: `1px solid ${product.tagColor}28`,
                                letterSpacing: '0.1em',
                              }
                        }
                      >
                        <Icon name="Sparkles" size={14} />
                        Заказать зеркало
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
