import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Производство', href: '#production' },
  { label: 'Сроки', href: '#timeline' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Контакты', href: '#contacts' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем меню при ресайзе на десктоп
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Логотип */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0"
          onClick={() => scrollTo('#hero')}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl neon-border-purple flex items-center justify-center animate-glow-pulse">
            <span
              className="text-gradient font-black text-sm sm:text-lg"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              А
            </span>
          </div>
          <span
            className="text-lg sm:text-2xl font-black tracking-widest neon-text-purple"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            АСКЕЙ
          </span>
        </div>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-white/70 hover:text-white hover:neon-text-purple transition-all duration-300 text-xs lg:text-sm font-medium tracking-wide uppercase whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA кнопка (desktop) */}
        <button
          onClick={() => scrollTo('#contacts')}
          className="hidden md:block neon-btn text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl lg:rounded-2xl text-xs lg:text-sm font-semibold tracking-wide whitespace-nowrap flex-shrink-0"
        >
          Заказать зеркало
        </button>

        {/* Бургер (mobile) */}
        <button
          className="md:hidden text-white/80 hover:text-white p-1 -mr-1 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden bg-black/97 backdrop-blur-md border-t border-purple-500/30 px-4 sm:px-6 py-5 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-white/70 hover:text-white hover:bg-purple-500/10 text-left text-sm font-medium uppercase tracking-wide py-3 px-3 rounded-xl border-b border-purple-500/10 last:border-0 transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contacts')}
            className="neon-btn text-white px-6 py-3.5 rounded-2xl text-sm font-semibold mt-3 w-full"
          >
            Заказать зеркало
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;