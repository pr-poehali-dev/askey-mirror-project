import Icon from '@/components/ui/icon';

const qualities = [
  {
    icon: 'Layers',
    title: 'Премиальное стекло',
    description: 'Используем зеркальное стекло толщиной 4–6 мм с антибликовым покрытием. Каждый лист проходит контроль на дефекты.',
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
    <section id="production" className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0620 50%, #0a0a0f 100%)' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase" style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}>
            <Icon name="Factory" size={14} />
            О производстве
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            КАЧЕСТВО <span className="text-gradient">БЕЗ КОМПРОМИССОВ</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Собственное производство в России. Полный контроль качества на каждом этапе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {qualities.map((item, i) => (
            <div key={i} className="card-dark rounded-2xl p-6 group hover:neon-border-purple transition-all duration-300">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}>
                <Icon name={item.icon} size={22} className="text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))', border: '1px solid rgba(168,85,247,0.3)' }}>
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
                АДРЕСНАЯ <span className="text-gradient">ЛЕНТА</span>
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-4">
                Наше главное отличие от конкурентов — уникальная технология адресной ленты.
                На наклейке отображается реальная лента публикаций вашего профиля,
                обновлённая на дату заказа.
              </p>
              <ul className="space-y-2">
                {[
                  'Реальные фото из вашего профиля',
                  'Количество подписчиков на дату заказа',
                  'Имя профиля и ник',
                  'QR-код для перехода на профиль',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <div className="w-48 h-64 rounded-2xl relative animate-float" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(255,255,255,0.05))', border: '1px solid rgba(168,85,247,0.4)', boxShadow: '0 0 40px rgba(168,85,247,0.3)' }}>
                <div className="absolute inset-4 rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.5)' }}>
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg, #a855f7, #e879f9)' }} />
                      <div>
                        <div className="h-2 w-16 rounded" style={{ background: 'rgba(255,255,255,0.5)' }} />
                        <div className="h-1.5 w-10 rounded mt-1" style={{ background: 'rgba(255,255,255,0.2)' }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="aspect-square rounded" style={{ background: `rgba(168,85,247,${0.1 + (i % 3) * 0.1})` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -left-1 top-4 bottom-4 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, transparent, #a855f7, #e879f9, #a855f7, transparent)', boxShadow: '0 0 10px #a855f7' }} />
                <div className="absolute -right-1 top-4 bottom-4 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, transparent, #a855f7, #e879f9, #a855f7, transparent)', boxShadow: '0 0 10px #a855f7' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;