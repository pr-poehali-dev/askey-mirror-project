import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Профиль',
    tag: 'Флагман',
    tagColor: '#a855f7',
    description: 'Умное зеркало с двойной подсветкой, QR-кодом и статистикой — твой личный бренд прямо в отражении.',
    longDescription: 'Контурная подсветка по периметру + две вертикальные LED-полосы по бокам дают мягкий, равномерный свет. Идеально для макияжа, съёмки и профессиональных студий.',
    longDescriptionTitle: '✦ КОНТУРНАЯ + ФРОНТАЛЬНАЯ ПОДСВЕТКА',
    features: [
      { label: 'Адресная LED-лента', icon: 'Zap' },
      { label: 'QR-код профиля', icon: 'QrCode' },
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
          {products.map((product) =>
            product.popular ? (
              /* ── FLAGSHIP CARD ── */
              <div
                key={product.id}
                className="relative rounded-2xl overflow-hidden group col-span-1"
                style={{
                  background: 'linear-gradient(135deg, #13002a 0%, #1a0035 60%, #0d0618 100%)',
                  border: '1px solid rgba(168,85,247,0.5)',
                  boxShadow: '0 0 40px rgba(168,85,247,0.15), inset 0 1px 0 rgba(168,85,247,0.2)',
                }}
              >
                {/* Glow blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }} />

                <div className="relative p-8">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)' }}
                      >
                        <Icon name={product.icon} size={22} style={{ color: '#a855f7' }} />
                      </div>
                      <span
                        className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full"
                        style={{ background: 'rgba(168,85,247,0.2)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.35)' }}
                      >
                        ★ {product.tag}
                      </span>
                    </div>
                    <div
                      className="text-xs font-bold px-3 py-1 rounded-full animate-pulse-neon"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff' }}
                    >
                      №1 в продажах
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl font-black text-white mb-2 tracking-tight"
                    style={{ fontFamily: 'Orbitron, monospace', textShadow: '0 0 20px rgba(168,85,247,0.4)' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{product.description}</p>

                  {/* Light info block */}
                  {product.longDescription && (
                    <div
                      className="rounded-xl p-4 mb-6 flex gap-3"
                      style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.25)' }}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <Icon name="Lightbulb" size={16} style={{ color: '#a855f7' }} />
                      </div>
                      <div>
                        <p className="text-xs font-black tracking-widest uppercase mb-1" style={{ color: '#a855f7' }}>
                          {product.longDescriptionTitle}
                        </p>
                        <p className="text-white/55 text-xs leading-relaxed">{product.longDescription}</p>
                      </div>
                    </div>
                  )}

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {(product.features as { label: string; icon: string }[]).map((feat) => (
                      <div
                        key={feat.label}
                        className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                        style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.18)' }}
                      >
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(168,85,247,0.2)' }}
                        >
                          <Icon name={feat.icon} size={12} style={{ color: '#c084fc' }} />
                        </div>
                        <span className="text-xs text-white/75 font-medium">{feat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => scrollTo('#contacts')}
                    className="w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                      color: '#fff',
                      boxShadow: '0 4px 20px rgba(168,85,247,0.35)',
                    }}
                  >
                    <Icon name="ShoppingBag" size={15} />
                    Заказать зеркало
                  </button>
                </div>
              </div>
            ) : (
              /* ── REGULAR CARD ── */
              <div
                key={product.id}
                className="card-dark rounded-2xl p-8 relative overflow-hidden group"
              >
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

                <div className="grid grid-cols-2 gap-2 mb-8">
                  {(product.features as string[]).map((feat) => (
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
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;