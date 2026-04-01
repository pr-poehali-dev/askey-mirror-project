import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative py-10 sm:py-12 border-t"
      style={{ background: '#060609', borderColor: 'rgba(168,85,247,0.2)' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* О компании */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl neon-border-purple flex items-center justify-center">
                <span
                  className="text-gradient font-black text-xs sm:text-sm"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  А
                </span>
              </div>
              <span
                className="text-lg sm:text-xl font-black tracking-widest neon-text-purple"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                АСКЕЙ
              </span>
            </div>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Производство премиальных зеркал с наклейками и неоновой подсветкой. Доставка по всей России.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              {[
                { icon: 'Camera', color: '#e879f9' },
                { icon: 'Send', color: '#22d3ee' },
                { icon: 'MessageCircle', color: '#22c55e' },
              ].map((social) => (
                <button
                  key={social.icon}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: `${social.color}22`, border: `1px solid ${social.color}44` }}
                >
                  <Icon name={social.icon} size={14} style={{ color: social.color }} />
                </button>
              ))}
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Навигация</h4>
            <div className="space-y-1.5 sm:space-y-2">
              {[
                { label: 'Каталог', href: '#catalog' },
                { label: 'О производстве', href: '#production' },
                { label: 'Сроки', href: '#timeline' },
                { label: 'Портфолио', href: '#portfolio' },
                { label: 'Контакты', href: '#contacts' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-white/40 hover:text-purple-400 text-xs sm:text-sm transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Гарантии */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Гарантии</h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                { icon: 'Shield', text: 'Гарантия 12 месяцев на подсветку' },
                { icon: 'RotateCcw', text: 'Возврат в течение 14 дней' },
                { icon: 'Truck', text: 'Доставка по всей России' },
                { icon: 'Award', text: 'Сертификаты качества материалов' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 sm:gap-3">
                  <Icon name={item.icon} size={12} className="text-purple-400 flex-shrink-0" />
                  <span className="text-white/40 text-[10px] sm:text-xs">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div
          className="pt-5 sm:pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
          style={{ borderColor: 'rgba(168,85,247,0.15)' }}
        >
          <p className="text-white/25 text-[10px] sm:text-xs">© 2024 Аскей. Все права защищены.</p>
          <p className="text-white/25 text-[10px] sm:text-xs">Производство зеркал с наклейками</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
