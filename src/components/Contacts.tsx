import { useState } from 'react';
import Icon from '@/components/ui/icon';
import DocumentModal from '@/components/DocumentModal';
import func2url from '../../backend/func2url.json';

const Contacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', profile: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    try {
      await fetch(func2url['send-order'], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <>
    <section id="contacts" className="py-16 sm:py-20 lg:py-24 relative" style={{ background: '#0a0a0f' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)' }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Заголовок */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}
          >
            <Icon name="Send" size={12} />
            Контакты
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            ЗАКАЗАТЬ <span className="text-gradient">ЗЕРКАЛО</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Оставьте заявку — менеджер свяжется с вами в течение 15 минут
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Форма */}
          <div>
            {sent ? (
              <div
                className="rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center"
                style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.4)' }}
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center animate-glow-pulse"
                  style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.5)' }}
                >
                  <Icon name="Check" size={28} className="text-purple-400" />
                </div>
                <h3
                  className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-3"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  Заявка отправлена!
                </h3>
                <p className="text-white/60 text-sm sm:text-base">Мы свяжемся с вами в течение 15 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {[
                  { key: 'name', label: 'Ваше имя', placeholder: 'Как вас зовут?', icon: 'User' },
                  { key: 'phone', label: 'Телефон', placeholder: '+7 (999) 999-99-99', icon: 'Phone' },
                  { key: 'profile', label: 'Ссылка на ваш профиль', placeholder: '@username', icon: 'AtSign' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-white/60 text-xs sm:text-sm mb-1.5 sm:mb-2">{field.label}</label>
                    <div className="relative">
                      <Icon
                        name={field.icon}
                        size={14}
                        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-purple-400/60"
                      />
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form] ?? ''}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-white placeholder-white/30 outline-none focus:border-purple-400 transition-all duration-300 text-xs sm:text-sm"
                        style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <label className="block text-white/60 text-xs sm:text-sm mb-1.5 sm:mb-2">Пожелания</label>
                  <textarea
                    placeholder="Опишите желаемый размер, цвет подсветки, особые пожелания..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-white placeholder-white/30 outline-none focus:border-purple-400 transition-all duration-300 text-xs sm:text-sm resize-none"
                    style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div
                    onClick={() => setAgreed(!agreed)}
                    className="flex-shrink-0 w-4 h-4 mt-0.5 rounded flex items-center justify-center transition-all duration-200"
                    style={{
                      background: agreed ? 'rgba(168,85,247,0.8)' : 'transparent',
                      border: agreed ? '1px solid #a855f7' : '1px solid rgba(168,85,247,0.4)',
                    }}
                  >
                    {agreed && <Icon name="Check" size={10} className="text-white" />}
                  </div>
                  <span className="text-white/40 text-[10px] sm:text-xs leading-relaxed">
                    Я согласен(а) с{' '}
                    <button
                      type="button"
                      onClick={() => setPrivacyOpen(true)}
                      className="text-purple-400 underline underline-offset-2 hover:text-purple-300 transition-colors"
                    >
                      политикой конфиденциальности
                    </button>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreed || loading}
                  className="w-full neon-btn text-white py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Icon name={loading ? 'Loader' : 'Send'} size={16} className={loading ? 'animate-spin' : ''} />
                  {loading ? 'Отправляем...' : 'Отправить заявку'}
                </button>
              </form>
            )}
          </div>

          {/* Контактная информация */}
          <div className="space-y-4 sm:space-y-6">
            <div className="card-dark rounded-2xl sm:rounded-3xl p-5 sm:p-6">
              <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Как с нами связаться</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: 'MessageCircle', label: 'WhatsApp', value: '+7 (999) 000-00-00', color: '#22c55e' },
                  { icon: 'Send', label: 'Telegram', value: '@askey_mirrors', color: '#22d3ee' },
                  { icon: 'AtSign', label: 'Профиль', value: '@askey.mirrors', color: '#e879f9' },
                  { icon: 'Mail', label: 'Email', value: 'info@askey.ru', color: '#a855f7' },
                ].map((contact) => (
                  <div
                    key={contact.label}
                    className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 border-b border-white/5 last:border-0"
                  >
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${contact.color}22` }}
                    >
                      <Icon name={contact.icon} size={16} style={{ color: contact.color }} />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] sm:text-xs">{contact.label}</p>
                      <p className="text-white font-medium text-xs sm:text-sm">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-dark rounded-2xl sm:rounded-3xl p-5 sm:p-6">
              <h3 className="text-white font-bold text-sm sm:text-base mb-2 sm:mb-3">Режим работы</h3>
              <div className="space-y-1.5 sm:space-y-2">
                {[
                  { day: 'Пн–Пт', time: '9:00 – 20:00' },
                  { day: 'Сб–Вс', time: '10:00 – 18:00' },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-white/50 text-xs sm:text-sm">{item.day}</span>
                    <span className="text-purple-400 font-semibold text-xs sm:text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 sm:mt-4 flex items-center gap-2 pt-3 sm:pt-4 border-t border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs sm:text-sm font-medium">Сейчас онлайн</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <DocumentModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Политика конфиденциальности"
      >
        <p>Настоящая политика конфиденциальности определяет порядок обработки персональных данных пользователей сайта оператором: ИП Шевченко Андрей Игоревич, ИНН: 650401990699, ОГРНИП: 321392600054674.</p>
        <p>Мы собираем имя, телефон, e-mail и адрес доставки исключительно для оформления и исполнения заказов. Данные не передаются третьим лицам, кроме случаев, необходимых для доставки товара и предусмотренных законодательством РФ.</p>
        <p>Обработка персональных данных осуществляется в соответствии с ФЗ от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
        <p>По вопросам обработки данных: <span className="text-white/80">Comp.askei@gmail.com</span>, <span className="text-white/80">+7 966 767-03-33</span>.</p>
      </DocumentModal>
    </>
  );
};

export default Contacts;