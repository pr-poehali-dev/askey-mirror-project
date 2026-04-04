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
    day: 'День 1–3',
    icon: 'Palette',
    title: 'Дизайн наклейки',
    description: 'Дизайнер создаёт макет с вашим профилем и адресной лентой. Отправляем на согласование.',
    color: '#9333ea',
  },
  {
    day: 'День 3–7',
    icon: 'Layers',
    title: 'Производство',
    description: 'Раскрой стекла, монтаж подсветки, нанесение наклейки UV-печатью. Ручная сборка и проверка.',
    color: '#7c3aed',
  },
  {
    day: 'День 7–9',
    icon: 'Package',
    title: 'Упаковка',
    description: 'Зеркало упаковывается в многослойную защитную упаковку. Фото упакованного заказа — вам в WhatsApp.',
    color: '#6d28d9',
  },
  {
    day: 'День 9–12',
    icon: 'Truck',
    title: 'Доставка',
    description: 'Отправка СДЭК или другой транспортной компанией по всей России. Трек-номер для отслеживания.',
    color: '#e879f9',
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 sm:py-20 lg:py-24 relative" style={{ background: '#0a0a0f' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Заголовок */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}
          >
            <Icon name="Clock" size={12} />
            Сроки производства
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            ОТ ЗАЯВКИ <span className="text-gradient">ДО ДОСТАВКИ</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Весь процесс занимает 12 дней с момента оплаты. Держим вас в курсе на каждом этапе
          </p>
        </div>

        <div className="relative">
          {/* Вертикальная линия */}
          <div
            className="absolute left-5 sm:left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.5), rgba(232,121,249,0.5), rgba(168,85,247,0.5), transparent)' }}
          />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-0 md:gap-0`}
              >
                {/* Левая половина (чётные шаги на десктопе) */}
                <div className="md:w-1/2 md:pr-10 lg:pr-16 pl-14 sm:pl-16 md:pl-0">
                  {i % 2 === 0 ? (
                    <div className="card-dark rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 md:ml-auto md:max-w-sm lg:max-w-md group hover:neon-border-purple transition-all duration-300">
                      <StepCard step={step} />
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Иконка на линии */}
                <div
                  className="absolute left-2.5 sm:left-3.5 md:left-1/2 md:-translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center z-10 flex-shrink-0 mt-4 md:mt-0"
                  style={{ background: step.color, boxShadow: `0 0 15px ${step.color}` }}
                >
                  <Icon name={step.icon} size={12} className="text-white" />
                </div>

                {/* Правая половина (нечётные шаги на десктопе) */}
                <div className="md:w-1/2 md:pl-10 lg:pl-16 pl-14 sm:pl-16">
                  {i % 2 !== 0 ? (
                    <div className="card-dark rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 md:max-w-sm lg:max-w-md group hover:neon-border-purple transition-all duration-300">
                      <StepCard step={step} />
                    </div>
                  ) : (
                    <div className="block md:hidden card-dark rounded-2xl sm:rounded-3xl p-4 sm:p-5 group hover:neon-border-purple transition-all duration-300">
                      <StepCard step={step} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

const StepCard = ({ step }: { step: typeof steps[0] }) => (
  <>
    <div
      className="text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2 px-2 py-1 rounded-lg sm:rounded-xl inline-block"
      style={{ background: `${step.color}22`, color: step.color }}
    >
      {step.day}
    </div>
    <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{step.title}</h3>
    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{step.description}</p>
  </>
);

export default Timeline;