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

const haptic = () => {
  if ('vibrate' in navigator) navigator.vibrate(6);
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleMenu = () => {
    haptic();
    setMenuOpen(v => !v);
  };

  const scrollTo = (href: string) => {
    haptic();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
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
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
              <div
                className="animate-logo-glow"
                style={{
                  position: 'absolute',
                  inset: '-10px -20px',
                  background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 50%, transparent 75%)',
                  filter: 'blur(10px)',
                  pointerEvents: 'none',
                }}
              />
              <img
                src="https://cdn.poehali.dev/projects/af6d2ef4-20e2-486b-93ab-6d38dda52f4e/bucket/3e7a1b92-00f2-4fbf-b8da-9fcb2d78b9ad.png"
                alt="АСКЕЙ"
                className="h-9 sm:h-12 w-auto object-contain relative"
                style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.5)) drop-shadow(0 0 14px rgba(255,255,255,0.25))' }}
              />
            </div>
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
            className="md:hidden relative z-50 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300"
            style={{ background: menuOpen ? 'rgba(255,255,255,0.1)' : 'transparent' }}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <div className="w-5 flex flex-col gap-[5px] items-start">
              <span
                className="block h-px rounded-full bg-white transition-all duration-300 origin-center w-full"
                style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
              />
              <span
                className="block h-px rounded-full bg-white transition-all duration-300 w-[70%]"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-px rounded-full bg-white transition-all duration-300 origin-center w-full"
                style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Оверлей */}
      <div
        className="fixed inset-0 z-30 md:hidden"
        style={{
          backdropFilter: menuOpen ? 'blur(20px) saturate(180%)' : 'blur(0px)',
          background: menuOpen ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease, backdrop-filter 0.3s ease',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Меню — выпадает сверху под хедером */}
      <div
        className="fixed inset-x-4 z-40 md:hidden"
        style={{
          top: '64px',
          transform: menuOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.98)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'transform 0.32s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.22s ease',
          background: 'rgba(14,14,20,0.96)',
          backdropFilter: 'blur(40px) saturate(180%)',
          borderRadius: '18px',
          border: '1px solid rgba(255,255,255,0.07)',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
        }}
      >
        <nav className="py-1.5">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="w-full text-left px-5 py-3.5 flex items-center justify-between active:bg-white/5 transition-colors duration-100"
              style={{
                borderBottom: i < navItems.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transform: menuOpen ? 'translateY(0)' : 'translateY(-6px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.32s cubic-bezier(0.32, 0.72, 0, 1) ${i * 28 + 50}ms, opacity 0.22s ease ${i * 28 + 50}ms, background 0.1s`,
              }}
            >
              <span className="text-white/75 text-[15px] font-light tracking-wide">
                {item.label}
              </span>
              <Icon name="ChevronRight" size={13} style={{ color: 'rgba(255,255,255,0.18)' }} />
            </button>
          ))}
        </nav>

        <div
          className="px-4 py-3.5"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            transform: menuOpen ? 'translateY(0)' : 'translateY(-6px)',
            opacity: menuOpen ? 1 : 0,
            transition: `transform 0.32s cubic-bezier(0.32, 0.72, 0, 1) ${navItems.length * 28 + 50}ms, opacity 0.22s ease ${navItems.length * 28 + 50}ms`,
          }}
        >
          <button
            onClick={() => scrollTo('#contacts')}
            className="neon-btn text-white w-full py-3 rounded-xl text-[15px] font-medium active:scale-[0.98] transition-transform duration-100"
          >
            Заказать зеркало
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
