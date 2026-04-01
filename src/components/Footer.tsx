import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t" style={{ background: '#060609', borderColor: 'rgba(168,85,247,0.2)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg neon-border-purple flex items-center justify-center">
                <span className="text-gradient font-black text-sm" style={{ fontFamily: 'Orbitron, monospace' }}>А</span>
              </div>
              <span className="text-xl font-black tracking-widest neon-text-purple" style={{ fontFamily: 'Orbitron, monospace' }}>АСКЕЙ</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Производство премиальных зеркал с наклейками и неоновой подсветкой. Доставка по всей России.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: 'Camera', color: '#e879f9' },
                { icon: 'Send', color: '#22d3ee' },
                { icon: 'MessageCircle', color: '#22c55e' },
              ].map((social) => (
                <button key={social.icon} className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: `${social.color}22`, border: `1px solid ${social.color}44` }}>
                  <Icon name={social.icon} size={16} style={{ color: social.color }} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Навигация</h4>
            <div className="space-y-2">
              {[
                { label: 'Каталог', href: '#catalog' },
                { label: 'О производстве', href: '#production' },
                { label: 'Сроки', href: '#timeline' },
                { label: 'Портфолио', href: '#portfolio' },
                { label: 'Контакты', href: '#contacts' },
              ].map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)} className="block text-white/40 hover:text-purple-400 text-sm transition-colors duration-200">
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Гарантии</h4>
            <div className="space-y-3">
              {[
                { icon: 'Shield', text: 'Гарантия 12 месяцев на подсветку' },
                { icon: 'RotateCcw', text: 'Возврат в течение 14 дней' },
                { icon: 'Truck', text: 'Доставка по всей России' },
                { icon: 'Award', text: 'Сертификаты качества материалов' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <Icon name={item.icon} size={14} className="text-purple-400 flex-shrink-0" />
                  <span className="text-white/40 text-xs">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(168,85,247,0.15)' }}>
          <p className="text-white/25 text-xs">© 2024 Аскей. Все права защищены.</p>
          <p className="text-white/25 text-xs">Производство зеркал с наклейками</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;