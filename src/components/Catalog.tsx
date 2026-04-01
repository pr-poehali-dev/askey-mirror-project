import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Профиль',
    tag: 'Флагман',
    tagColor: '#a855f7',
    description: 'Ваш профиль в виде наклейки на зеркало с уникальной адресной лентой',
    longDescription: 'Зеркало оснащено сочетанием контурной и фронтальной подсветки, создающим комфортное и выразительное освещение. Фронтальная подсветка выполнена в виде двух вертикальных полос по бокам зеркала, которые мягко освещают лицо и обеспечивают равномерный свет для макияжа, умывания или бритья.',
    longDescriptionTitle: '2\nКОНТУРНАЯ + ФРОНТАЛЬНАЯ ПОДСВЕТКА',
    features: ['Адресная лента', 'QR-код профиля', 'Статистика подписчиков', 'LED-подсветка'],
    icon: 'Camera',
    popular: true,
  },
  {
    id: 2,
    name: 'С подсветкой',
    tag: 'Хит',
    tagColor: '#e879f9',
    description: 'Зеркало с RGB-подсветкой по периметру, идеально для фото и видео',
    features: ['RGB-подсветка', 'Диммер яркости', '3 режима света', 'Антизапотевание'],
    icon: 'Lightbulb',
    popular: false,
  },
  {
    id: 3,
    name: 'Именное зеркало',
    tag: 'Подарок',
    tagColor: '#22d3ee',
    description: 'Персонализированное зеркало с именем, датой или любым текстом',
    features: ['Любой текст', 'Выбор шрифта', 'Гравировка', 'Подарочная упаковка'],
    icon: 'Heart',
    popular: false,
  },
  {
    id: 4,
    name: 'Бизнес-зеркало',
    tag: 'B2B',
    tagColor: '#a855f7',
    description: 'Для салонов красоты и студий — с логотипом и фирменным стилем',
    features: ['Логотип бренда', 'QR для записи', 'Оптовые заказы', 'Монтаж включён'],
    icon: 'Building2',
    popular: false,
  },
];

const Catalog = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="catalog" className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0618 50%, #0a0a0f 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase" style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}>
            <Icon name="Grid3X3" size={14} />
            Каталог продукции
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            НАШИ <span className="text-gradient">ЗЕРКАЛА</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Каждое зеркало — это уникальный арт-объект, созданный с точностью до миллиметра
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`card-dark rounded-2xl p-8 relative overflow-hidden group ${product.popular ? 'neon-border-purple' : ''}`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white animate-pulse-neon" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
                  ★ Популярное
                </div>
              )}

              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 blur-2xl"
                style={{ background: product.tagColor }}
              />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${product.tagColor}22`, border: `1px solid ${product.tagColor}44` }}>
                  <Icon name={product.icon} size={26} style={{ color: product.tagColor }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: `${product.tagColor}22`, color: product.tagColor }}>
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {product.name}
                  </h3>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">{product.description}</p>

              {product.longDescription && (
                <div className="mb-6 rounded-xl p-4" style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.2)' }}>
                  {product.longDescriptionTitle && (
                    <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: '#a855f7', whiteSpace: 'pre-line' }}>
                      {product.longDescriptionTitle}
                    </p>
                  )}
                  <p className="text-white/60 text-xs leading-relaxed">{product.longDescription}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 mb-8">
                {product.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.tagColor }} />
                    {feat}
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo('#contacts')}
                className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${product.tagColor}33, ${product.tagColor}22)`,
                  border: `1px solid ${product.tagColor}44`,
                  color: product.tagColor,
                }}
              >
                Заказать →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;