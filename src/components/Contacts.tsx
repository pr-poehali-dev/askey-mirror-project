import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', profile: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-24 relative" style={{ background: '#0a0a0f' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase" style={{ border: '1px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}>
            <Icon name="Send" size={14} />
            Контакты
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            ЗАКАЗАТЬ <span className="text-gradient">ЗЕРКАЛО</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Оставьте заявку — менеджер свяжется с вами в течение 15 минут
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            {sent ? (
              <div className="rounded-3xl p-12 text-center" style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.4)' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center animate-glow-pulse" style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.5)' }}>
                  <Icon name="Check" size={32} className="text-purple-400" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>Заявка отправлена!</h3>
                <p className="text-white/60">Мы свяжемся с вами в течение 15 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: 'name', label: 'Ваше имя', placeholder: 'Как вас зовут?', icon: 'User' },
                  { key: 'phone', label: 'Телефон', placeholder: '+7 (999) 999-99-99', icon: 'Phone' },
                  { key: 'profile', label: 'Ссылка на ваш профиль', placeholder: '@username', icon: 'AtSign' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-white/60 text-sm mb-2">{field.label}</label>
                    <div className="relative">
                      <Icon name={field.icon} size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/60" />
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form] ?? ''}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-white placeholder-white/30 outline-none focus:border-purple-400 transition-all duration-300 text-sm"
                        style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <label className="block text-white/60 text-sm mb-2">Пожелания</label>
                  <textarea
                    placeholder="Опишите желаемый размер, цвет подсветки, особые пожелания..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-2xl text-white placeholder-white/30 outline-none focus:border-purple-400 transition-all duration-300 text-sm resize-none"
                    style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full neon-btn text-white py-4 rounded-2xl font-bold text-base tracking-wide flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </button>

                <p className="text-white/30 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="card-dark rounded-3xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Как с нами связаться</h3>
              <div className="space-y-4">
                {[
                  { icon: 'MessageCircle', label: 'WhatsApp', value: '+7 (999) 000-00-00', color: '#22c55e' },
                  { icon: 'Send', label: 'Telegram', value: '@askey_mirrors', color: '#22d3ee' },
                  { icon: 'AtSign', label: 'Профиль', value: '@askey.mirrors', color: '#e879f9' },
                  { icon: 'Mail', label: 'Email', value: 'info@askey.ru', color: '#a855f7' },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${contact.color}22` }}>
                      <Icon name={contact.icon} size={18} style={{ color: contact.color }} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">{contact.label}</p>
                      <p className="text-white font-medium text-sm">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-dark rounded-3xl p-6">
              <h3 className="text-white font-bold mb-3">Режим работы</h3>
              <div className="space-y-2">
                {[
                  { day: 'Пн–Пт', time: '9:00 – 20:00' },
                  { day: 'Сб–Вс', time: '10:00 – 18:00' },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-white/50 text-sm">{item.day}</span>
                    <span className="text-purple-400 font-semibold text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 pt-4 border-t border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Сейчас онлайн</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;