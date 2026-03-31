import Icon from '@/components/ui/icon';

const steps = [
  {
    day: 'День 1',
    icon: 'MessageSquare',
    title: 'Заявка и согласование',
    description: 'Вы оставляете заявку, менеджер связывается в течение 15 минут. Уточняем детали: размер, подсветка, данные профиля.',
    color: '#a855f7',
  },
  {
    day: 'День 1–2',
    icon: 'Palette',
    title: 'Дизайн наклейки',
    description: 'Дизайнер создаёт макет с вашим Instagram-профилем и адресной лентой. Отправляем на согласование.',
    color: '#9333ea',
  },
  {
    day: 'День 2–4',
    icon: 'Layers',
    title: 'Производство',
    description: 'Раскрой стекла, монтаж подсветки, нанесение наклейки UV-печатью. Ручная сборка и проверка.',
    color: '#7c3aed',
  },
  {
    day: 'День 4–5',
    icon: 'Package',
    title: 'Упаковка',
    description: 'Зеркало упаковывается в многослойную защитную упаковку. Фото упакованного заказа — вам в WhatsApp.',
    color: '#6d28d9',
  },
  {
    day: 'День 5–7',
    icon: 'Truck',
    title: 'Доставка',
    description: 'Отправка СДЭК или другой транспортной компанией по всей России. Трек-номер для отслеживания.',
    color: '#e879f9',
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative" style={{ background: '#0a0a0f' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase" style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}>
            <Icon name="Clock" size={14} />
            Сроки производства
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            ОТ ЗАЯВКИ <span className="text-gradient">ДО ДОСТАВКИ</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Весь процесс занимает от 3 до 7 дней. Держим вас в курсе на каждом этапе
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.5), rgba(232,121,249,0.5), rgba(168,85,247,0.5), transparent)' }} />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-4 md:gap-0`}>
                <div className="md:w-1/2 md:pr-12 pl-16 md:pl-0">
                  {i % 2 === 0 ? (
                    <div className="card-dark rounded-2xl p-6 md:ml-auto md:max-w-sm group hover:neon-border-purple transition-all duration-300">
                      <StepCard step={step} />
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center z-10 flex-shrink-0" style={{ background: step.color, boxShadow: `0 0 15px ${step.color}` }}>
                  <Icon name={step.icon} size={14} className="text-white" />
                </div>

                <div className="md:w-1/2 md:pl-12 pl-16 md:pl-12">
                  {i % 2 !== 0 ? (
                    <div className="card-dark rounded-2xl p-6 md:max-w-sm group hover:neon-border-purple transition-all duration-300">
                      <StepCard step={step} />
                    </div>
                  ) : (
                    <div className="block md:hidden card-dark rounded-2xl p-6 group hover:neon-border-purple transition-all duration-300">
                      <StepCard step={step} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(124,58,237,0.1))', border: '1px solid rgba(168,85,247,0.3)' }}>
            <Icon name="Zap" size={20} className="text-yellow-400" />
            <span className="text-white font-semibold">Срочный заказ?</span>
            <span className="text-white/60">Экспресс-производство за 2–3 дня по запросу</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step }: { step: typeof steps[0] }) => (
  <>
    <div className="text-xs font-bold mb-2 px-2 py-1 rounded-md inline-block" style={{ background: `${step.color}22`, color: step.color }}>
      {step.day}
    </div>
    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
  </>
);

export default Timeline;
