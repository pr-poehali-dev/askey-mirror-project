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

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('#hero')}>
          <div className="w-10 h-10 rounded-lg neon-border-purple flex items-center justify-center animate-glow-pulse">
            <span className="text-gradient font-black text-lg" style={{ fontFamily: 'Orbitron, monospace' }}>А</span>
          </div>
          <span className="text-2xl font-black tracking-widest neon-text-purple" style={{ fontFamily: 'Orbitron, monospace' }}>
            АСКЕЙ
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-white/70 hover:text-white hover:neon-text-purple transition-all duration-300 text-sm font-medium tracking-wide uppercase"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo('#contacts')}
          className="hidden md:block neon-btn text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide"
        >
          Заказать зеркало
        </button>

        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-purple-500/30 px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-white/70 hover:text-white text-left text-sm font-medium uppercase tracking-wide py-2 border-b border-purple-500/10"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contacts')}
            className="neon-btn text-white px-6 py-3 rounded-lg text-sm font-semibold mt-2"
          >
            Заказать зеркало
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
