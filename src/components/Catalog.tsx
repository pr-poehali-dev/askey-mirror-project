import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Профиль',
    tag: 'Флагман',
    tagColor: '#a855f7',
    description: 'Умное зеркало с двойной подсветкой и статистикой — твой личный бренд прямо в отражении.',
    longDescription: 'Контурная подсветка по периметру + две вертикальные LED-полосы по бокам дают мягкий, равномерный свет. Идеально для макияжа, съёмки и профессиональных студий.',
    longDescriptionTitle: '✦ КОНТУРНАЯ + ФРОНТАЛЬНАЯ ПОДСВЕТКА',
    features: [
      { label: 'Адресная LED-лента', icon: 'Zap' },
      { label: 'Статистика подписчиков', icon: 'TrendingUp' },
      { label: 'Диммер яркости', icon: 'SlidersHorizontal' },
    ],
    icon: 'Sparkles',
    popular: true,
  },
  {
    id: 2,
    name: 'С подсветкой',
    tag: 'Хит',
    tagColor: '#e879f9',
    description: 'Зеркало с RGB-подсветкой по периметру, идеально для фото и видео',
    features: ['RGB-подсветка', 'Диммер яркости', '3 режима света'],
    icon: 'Lightbulb',
    popular: false,
    image: 'https://cdn.poehali.dev/projects/af6d2ef4-20e2-486b-93ab-6d38dda52f4e/bucket/fc1c50f0-8254-457b-b8cb-8429f51afeab.png',
  },

  {
    id: 4,
    name: 'Бизнес-зеркало',
    tag: 'B2B',
    tagColor: '#a855f7',
    description: 'Для салонов красоты и студий — с логотипом и фирменным стилем',
    features: ['Логотип бренда', 'Оптовые заказы', 'Монтаж включён'],
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
    <section
      id="catalog"
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0618 50%, #0a0a0f 100%)' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Заголовок секции */}
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

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product) =>
            product.popular ? (
              /* ── FLAGSHIP CARD ── */
              <div
                key={product.id}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden group col-span-1"
                style={{
                  background: 'linear-gradient(135deg, #13002a 0%, #1a0035 60%, #0d0618 100%)',
                  border: '1px solid rgba(168,85,247,0.5)',
                  boxShadow: '0 0 40px rgba(168,85,247,0.15), inset 0 1px 0 rgba(168,85,247,0.2)',
                }}
              >
                {/* Glow blobs */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }}
                />
                <div
                  className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
                />

                <div className="relative p-5 sm:p-6 lg:p-8">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center"
                        style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)' }}
                      >
                        <Icon name={product.icon} size={18} style={{ color: '#a855f7' }} />
                      </div>
                      <span
                        className="text-[10px] sm:text-xs font-black tracking-widest uppercase px-2 sm:px-3 py-1 rounded-full"
                        style={{ background: 'rgba(168,85,247,0.2)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.35)' }}
                      >
                        ★ {product.tag}
                      </span>
                    </div>
                    <div
                      className="text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full animate-pulse-neon"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff' }}
                    >
                      №1 в продажах
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight"
                    style={{ fontFamily: 'Orbitron, monospace', textShadow: '0 0 20px rgba(168,85,247,0.4)' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{product.description}</p>

                  {/* Light info block */}
                  {product.longDescription && (
                    <div
                      className="rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 flex gap-3"
                      style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.25)' }}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <Icon name="Lightbulb" size={14} style={{ color: '#a855f7' }} />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase mb-1" style={{ color: '#a855f7' }}>
                          {product.longDescriptionTitle}
                        </p>
                        <p className="text-white/55 text-[10px] sm:text-xs leading-relaxed">{product.longDescription}</p>
                      </div>
                    </div>
                  )}

                  {/* Features grid */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {(product.features as { label: string; icon: string }[]).map((feat) => (
                      <div
                        key={feat.label}
                        className="flex items-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2.5"
                        style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.18)' }}
                      >
                        <div
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(168,85,247,0.2)' }}
                        >
                          <Icon name={feat.icon} size={10} style={{ color: '#c084fc' }} />
                        </div>
                        <span className="text-[10px] sm:text-xs text-white/75 font-medium">{feat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => scrollTo('#contacts')}
                    className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                      color: '#fff',
                      boxShadow: '0 4px 20px rgba(168,85,247,0.35)',
                    }}
                  >
                    <Icon name="ShoppingBag" size={14} />
                    Заказать зеркало
                  </button>
                </div>
              </div>
            ) : (
              /* ── REGULAR CARD ── */
              <div
                key={product.id}
                className="card-dark rounded-2xl sm:rounded-3xl relative overflow-hidden group flex flex-col"
                style={{ minHeight: '320px' }}
              >
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 blur-2xl pointer-events-none"
                  style={{ background: product.tagColor }}
                />

                {'image' in product && product.image ? (
                  /* карточка с картинкой слева */
                  <div className="flex flex-1">
                    {/* Фото — 35% ширины, полная высота */}
                    <div className="relative flex-shrink-0 overflow-hidden rounded-l-2xl sm:rounded-l-3xl" style={{ width: '35%' }}>
                      <img
                        src={product.image as string}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(to right, transparent 70%, rgba(10,10,15,0.6))` }}
                      />
                    </div>

                    {/* Контент справа */}
                    <div className="flex-1 flex flex-col p-5 sm:p-6 lg:p-8 min-w-0">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center"
                          style={{ background: `${product.tagColor}22`, border: `1px solid ${product.tagColor}44` }}
                        >
                          <Icon name={product.icon} size={18} style={{ color: product.tagColor }} />
                        </div>
                        <span
                          className="text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full"
                          style={{ background: `${product.tagColor}22`, color: product.tagColor, border: `1px solid ${product.tagColor}44` }}
                        >
                          {product.tag}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-white mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                        {product.name}
                      </h3>
                      <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{product.description}</p>

                      <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6 flex-1">
                        {(product.features as string[]).map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.tagColor }} />
                            {feat}
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => scrollTo('#contacts')}
                        className="w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:opacity-80 flex items-center justify-center gap-2"
                        style={{ background: `${product.tagColor}22`, color: product.tagColor, border: `1px solid ${product.tagColor}44` }}
                      >
                        Узнать подробнее
                      </button>
                    </div>
                  </div>
                ) : (
                  /* обычная карточка */
                  <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center"
                        style={{ background: `${product.tagColor}22`, border: `1px solid ${product.tagColor}44` }}
                      >
                        <Icon name={product.icon} size={18} style={{ color: product.tagColor }} />
                      </div>
                      <span
                        className="text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full"
                        style={{ background: `${product.tagColor}22`, color: product.tagColor, border: `1px solid ${product.tagColor}44` }}
                      >
                        {product.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-white mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {product.name}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{product.description}</p>

                    <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6 flex-1">
                      {(product.features as string[]).map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.tagColor }} />
                          {feat}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => scrollTo('#contacts')}
                      className="w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:opacity-80 flex items-center justify-center gap-2"
                      style={{ background: `${product.tagColor}22`, color: product.tagColor, border: `1px solid ${product.tagColor}44` }}
                    >
                      Узнать подробнее
                    </button>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;