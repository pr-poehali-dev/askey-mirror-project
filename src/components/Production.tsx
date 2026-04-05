import Icon from '@/components/ui/icon';

const qualities = [
  {
    icon: 'Layers',
    title: 'Премиальное стекло',
    description: 'Используем зеркальное стекло 4 мм. Каждый лист проходит контроль на дефекты.',
  },
  {
    icon: 'Zap',
    title: 'LED-подсветка',
    description: 'Светодиодная лента 120 диодов/м с температурой 3000–6500K. Равномерный свет без пересвета — идеально для съёмки.',
  },
  {
    icon: 'Shield',
    title: 'Надёжный каркас',
    description: 'Алюминиевый профиль и усиленная задняя панель из МДФ 18 мм. Зеркало не деформируется со временем.',
  },
  {
    icon: 'Printer',
    title: 'Точная печать',
    description: 'UV-печать наклеек с разрешением 1440 dpi. Цвета не выгорают до 5 лет. Адресная лента с реальными данными вашего профиля.',
  },
  {
    icon: 'Settings',
    title: 'Ручная сборка',
    description: 'Каждое зеркало собирается вручную мастером. Финальная проверка — 14 пунктов контроля качества.',
  },
  {
    icon: 'Package',
    title: 'Безопасная упаковка',
    description: 'Многослойная упаковка: пупырчатая плёнка + пенопласт + деревянный короб. Доставляем по всей России.',
  },
];

const Production = () => {
  return (
    <section
      id="production"
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0620 50%, #0a0a0f 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Заголовок */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}
          >
            <Icon name="Factory" size={12} />
            О производстве
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            КАЧЕСТВО <span className="text-gradient">БЕЗ КОМПРОМИССОВ</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Собственное производство в России. Полный контроль качества на каждом этапе
          </p>
        </div>

        {/* Карточки качества */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">
          {qualities.map((item, i) => (
            <div
              key={i}
              className="card-dark rounded-2xl sm:rounded-3xl p-5 sm:p-6 group hover:neon-border-purple transition-all duration-300"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 flex items-center justify-center"
                style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
              >
                <Icon name={item.icon} size={18} className="text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{item.title}</h3>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Блок адресной ленты */}
        <div
          className="rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))', border: '1px solid rgba(168,85,247,0.3)' }}
        >
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-3"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                АДРЕСНАЯ <span className="text-gradient">ЛЕНТА</span>
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Наше главное отличие от конкурентов — уникальная технология адресной ленты.
                На наклейке отображается реальная лента публикаций вашего профиля,
                обновлённая на дату заказа.
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  'Реальные фото из вашего профиля',
                  'Количество подписчиков на дату заказа',
                  'Имя профиля и ник',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/70 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <div
                className="w-40 h-56 sm:w-48 sm:h-64 rounded-2xl sm:rounded-3xl relative animate-float"
                style={{
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(255,255,255,0.05))',
                  border: '1px solid rgba(168,85,247,0.4)',
                  boxShadow: '0 0 40px rgba(168,85,247,0.3)',
                }}
              >
                <div
                  className="absolute inset-3 sm:inset-4 rounded-xl sm:rounded-2xl overflow-hidden"
                  style={{ background: 'rgba(0,0,0,0.5)' }}
                >
                  <div className="p-2 sm:p-3">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #a855f7, #e879f9)' }}
                      />
                      <div>
                        <div className="h-1.5 sm:h-2 w-12 sm:w-16 rounded" style={{ background: 'rgba(255,255,255,0.5)' }} />
                        <div className="h-1 sm:h-1.5 w-8 sm:w-10 rounded mt-1" style={{ background: 'rgba(255,255,255,0.2)' }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded"
                          style={{ background: `rgba(168,85,247,${0.1 + (i % 3) * 0.1})` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -left-0.5 top-4 bottom-4 w-0.5 sm:w-1 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, transparent, #a855f7, #e879f9, #a855f7, transparent)', boxShadow: '0 0 10px #a855f7' }}
                />
                <div
                  className="absolute -right-0.5 top-4 bottom-4 w-0.5 sm:w-1 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, transparent, #a855f7, #e879f9, #a855f7, transparent)', boxShadow: '0 0 10px #a855f7' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;