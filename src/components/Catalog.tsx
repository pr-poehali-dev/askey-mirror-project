import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Стандарт',
    tag: 'Хит',
    tagColor: '#e879f9',
    lightType: 'Контурная подсветка',
    description: 'Светодиодная лента расположена по периметру зеркала, за корпусом между зеркалом и стеной. Оснащена сенсорной кнопкой, с помощью которой можно настраивать режимы свечения.',
    price: '12 590',
    icon: 'Lightbulb',
    popular: false,
  },
  {
    id: 2,
    name: 'Премиум',
    tag: 'Флагман',
    tagColor: '#a855f7',
    lightType: 'Контурная + фронтальная подсветка',
    description: 'Зеркало оснащено сочетанием контурной и фронтальной подсветкой, создающим комфортное и выразительное освещение. Фронтальная подсветка выполнена в виде двух вертикальных полос по бокам зеркала.',
    price: '15 590',
    icon: 'Sparkles',
    popular: true,
  },
  {
    id: 3,
    name: 'Премиум +',
    tag: 'Exclusive',
    tagColor: '#818cf8',
    lightType: 'Контурная + фронтальная подсветка',
    description: 'Зеркало оснащено комбинированной подсветкой: контурная + фронтальная. Дополнительно декорировано полупрозрачными наклейками в черном исполнении.',
    price: '18 590',
    icon: 'Gem',
    popular: false,
  },
];

const Catalog = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="catalog"
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0618 50%, #0a0a0f 100%)' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Заголовок */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: product.popular
                  ? 'linear-gradient(135deg, #13002a 0%, #1a0035 60%, #0d0618 100%)'
                  : 'linear-gradient(135deg, #0d0618 0%, #110220 100%)',
                border: `1px solid ${product.popular ? 'rgba(168,85,247,0.5)' : 'rgba(168,85,247,0.2)'}`,
                boxShadow: product.popular
                  ? '0 0 40px rgba(168,85,247,0.15), inset 0 1px 0 rgba(168,85,247,0.2)'
                  : 'none',
              }}
            >
              {/* Glow */}
              {product.popular && (
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }}
                />
              )}

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
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff' }}
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
                  style={{ fontFamily: 'Orbitron, monospace', textShadow: product.popular ? '0 0 20px rgba(168,85,247,0.4)' : 'none' }}
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
                <div
                  className="rounded-xl sm:rounded-2xl px-4 py-3 mb-4 sm:mb-5 flex items-center justify-between"
                  style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}
                >
                  <span className="text-white/50 text-xs">Стоимость</span>
                  <span
                    className="text-lg sm:text-xl font-black"
                    style={{ color: product.tagColor, fontFamily: 'Orbitron, monospace' }}
                  >
                    {product.price} ₽
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollTo('#contacts')}
                  className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={
                    product.popular
                      ? {
                          background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                          color: '#fff',
                          boxShadow: '0 4px 20px rgba(168,85,247,0.35)',
                        }
                      : {
                          background: `${product.tagColor}22`,
                          color: product.tagColor,
                          border: `1px solid ${product.tagColor}44`,
                        }
                  }
                >
                  <Icon name="ShoppingBag" size={14} />
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
