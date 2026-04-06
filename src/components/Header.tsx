import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '#hero', icon: 'Home' },
  { label: 'Каталог', href: '#catalog', icon: 'Grid3x3' },
  { label: 'Производство', href: '#production', icon: 'Factory' },
  { label: 'Сроки', href: '#timeline', icon: 'Clock' },
  { label: 'Портфолио', href: '#portfolio', icon: 'Image' },
  { label: 'Контакты', href: '#contacts', icon: 'MessageCircle' },
];

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

  const scrollTo = (href: string) => {
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
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
            style={{
              background: menuOpen ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className="block h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block h-0.5 bg-white rounded-full transition-all duration-300"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? 'scaleX(0)' : 'none',
                }}
              />
              <span
                className="block h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Оверлей */}
      <div
        className="fixed inset-0 z-30 md:hidden transition-all duration-500"
        style={{
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: menuOpen ? 'blur(8px)' : 'blur(0px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Мобильное меню — слайд снизу */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        style={{
          transform: menuOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
          background: 'linear-gradient(180deg, #0d0620 0%, #080010 100%)',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '24px 24px 0 0',
          paddingBottom: 'env(safe-area-inset-bottom, 16px)',
        }}
      >
        {/* Ручка */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
        </div>

        {/* Пункты меню */}
        <div className="px-5 pt-3 pb-2 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="flex items-center gap-4 text-left py-3.5 px-4 rounded-2xl transition-all duration-200 group"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.4s cubic-bezier(0.32, 0.72, 0, 1) ${i * 50 + 150}ms, opacity 0.3s ease ${i * 50 + 150}ms, background 0.2s`,
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <Icon name={item.icon} size={16} className="text-white/60 group-active:text-white" />
              </div>
              <span className="text-white/70 font-medium text-sm uppercase tracking-widest group-active:text-white transition-colors">
                {item.label}
              </span>
              <Icon name="ChevronRight" size={14} className="text-white/20 ml-auto" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div
          className="px-5 pb-5 pt-2"
          style={{
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: menuOpen ? 1 : 0,
            transition: `transform 0.4s cubic-bezier(0.32, 0.72, 0, 1) ${navItems.length * 50 + 150}ms, opacity 0.3s ease ${navItems.length * 50 + 150}ms`,
          }}
        >
          <button
            onClick={() => scrollTo('#contacts')}
            className="neon-btn text-white w-full py-4 rounded-2xl text-sm font-bold tracking-wide"
          >
            Заказать зеркало
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
