import { useRef, useState, useEffect } from 'react';
import MirrorLed from './MirrorLed';
import MirrorCharacter from './MirrorCharacter';
import MirrorCharacterTop from './MirrorCharacterTop';
import { MirrorStickerTop, MirrorStickerBottom } from './MirrorSticker';

const CinemaText = ({ lit }: { lit: boolean }) => {
  const line1 = 'сегодня';
  const line2 = 'ты в главной роли';
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (lit) setKey(k => k + 1);
  }, [lit]);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 6 }}
    >
      <div style={{ textAlign: 'center', padding: '0 8%', width: '100%', opacity: lit ? 1 : 0, transition: 'opacity 0.3s ease' }}>
        {/* Верхняя линия */}
        <div style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '10px',
          color: 'rgba(255,255,255,0.75)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'center',
          gap: '0.05em',
          textShadow: '0 0 12px rgba(255,255,255,0.6)',
        }}>
          {line1.split('').map((ch, i) => (
            <span key={`${key}-l1-${i}`} style={{
              display: 'inline-block',
              opacity: 0,
              animation: lit ? `charFadeIn 0.4s ease forwards` : 'none',
              animationDelay: `${0.5 + i * 0.07}s`,
            }}>{ch}</span>
          ))}
        </div>
        {/* Разделитель */}
        <div style={{
          width: lit ? '60%' : '0%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.7), transparent)',
          margin: '0 auto 12px',
          transition: lit ? 'width 0.8s ease 0.9s' : 'width 0.3s ease',
        }} />
        {/* Главная строка */}
        <div style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '20px',
          fontWeight: 600,
          fontStyle: 'normal',
          color: 'rgba(255,255,255,1)',
          letterSpacing: '0.06em',
          whiteSpace: 'nowrap',
          textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)',
          display: 'flex',
          justifyContent: 'center',
          gap: '0.05em',
        }}>
          {line2.split('').map((ch, i) => (
            <span key={`${key}-l2-${i}`} style={{
              display: 'inline-block',
              opacity: 0,
              animation: lit ? `charFadeIn 0.5s ease forwards` : 'none',
              animationDelay: `${1.1 + i * 0.055}s`,
            }}>{ch === ' ' ? '\u00A0' : ch}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const MirrorDecor = () => {
  const [lit, setLit] = useState(false);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      className="animate-slide-in-right relative flex items-center justify-center mb-16 sm:mb-12 lg:mb-0"
      style={{ animationDelay: '400ms', willChange: 'transform, opacity', padding: '0 16px' }}
    >
      {/* Дальнее фоновое свечение (halo) */}
      <div
        className="absolute pointer-events-none animate-mirror-outer-halo"
        style={{
          inset: '-40px',
          filter: 'blur(50px)',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, rgba(220,230,240,0.06) 60%, transparent 80%)',
          zIndex: 0,
        }}
      />

      {/* Обёртка зеркала */}
      <div
        className="relative animate-mirror-float"
        style={{ width: 'clamp(220px, 55vw, 300px)', zIndex: 1 }}
      >
        {/* Контурное свечение снаружи рамки — тёплый янтарный */}
        <div className="absolute pointer-events-none animate-mirror-outer-halo" style={{
          inset: '-24px',
          borderRadius: '32px',
          background: 'transparent',
          boxShadow: '0 0 30px 8px rgba(255,220,140,0.4), 0 0 70px 20px rgba(255,190,90,0.2), 0 0 120px 40px rgba(255,160,60,0.1)',
          zIndex: 0,
        }} />

        {/* Рамка зеркала — деревянная прямоугольная */}
        <div
          className="relative"
          style={{
            borderRadius: '16px',
            padding: '10px',
            background: 'linear-gradient(145deg, #8B6340 0%, #A0724A 15%, #6B4A2A 30%, #9B7350 45%, #7A5535 60%, #A07848 75%, #6B4A2A 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.4), 0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          {/* Деревянная текстура — горизонтальные полосы */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden" style={{ zIndex: 0 }}>
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                left: 0, right: 0,
                top: `${i * 8.5}%`,
                height: '3px',
                background: i % 2 === 0
                  ? 'rgba(0,0,0,0.07)'
                  : 'rgba(255,255,255,0.04)',
                borderRadius: '1px',
              }} />
            ))}
          </div>

          {/* Металлические вставки по бокам (как на фото) */}
          <div className="absolute pointer-events-none" style={{
            left: '8px', top: '30%', bottom: '30%', width: '6px',
            background: 'linear-gradient(to right, rgba(180,140,100,0.6), rgba(220,190,150,0.9), rgba(180,140,100,0.6))',
            borderRadius: '3px',
            boxShadow: '0 0 6px rgba(200,160,100,0.4)',
            zIndex: 2,
          }} />
          <div className="absolute pointer-events-none" style={{
            right: '8px', top: '30%', bottom: '30%', width: '6px',
            background: 'linear-gradient(to right, rgba(180,140,100,0.6), rgba(220,190,150,0.9), rgba(180,140,100,0.6))',
            borderRadius: '3px',
            boxShadow: '0 0 6px rgba(200,160,100,0.4)',
            zIndex: 2,
          }} />

          {/* Зеркальная поверхность */}
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: '8px',
              aspectRatio: '9 / 16',
              background: '#111',
            }}
          >
            {/* Фото интерьера */}
            <img
              src="https://cdn.poehali.dev/projects/af6d2ef4-20e2-486b-93ab-6d38dda52f4e/bucket/5782c6d9-7caf-44d7-9be9-c9c684105d8b.png"
              alt="интерьер"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 0, opacity: 0.85 }}
            />
            {/* Затемнение поверх фото */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.3) 100%)' }} />
            {/* Зеркальный блик */}
            <div
              className="absolute pointer-events-none animate-mirror-shine"
              style={{
                top: 0, left: '-60%', width: '40%', height: '100%',
                background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 70%)',
                transform: 'skewX(-15deg)',
                zIndex: 3,
              }}
            />

            {/* Отражение-градиент поверхности */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.05) 30%, transparent 60%, rgba(200,210,220,0.06) 90%)',
                zIndex: 2,
              }}
            />

            {/* Наклейка сверху */}
            <MirrorStickerTop />

            {/* Зеркальная поверхность (отражение интерьера) */}
            <div
              className="absolute inset-0"
              style={{
                zIndex: 1,
                background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(200,184,160,0.12) 30%, rgba(180,160,130,0.08) 60%, rgba(255,255,255,0.05) 100%)',
              }}
            />

            {/* Текст при включении */}
            <CinemaText lit={lit} />

            {/* Сенсорная кнопка подсветки — широкая зона клика по центру */}
            <div
              className="absolute animate-mirror-content-reveal cursor-pointer"
              onClick={() => setLit(v => !v)}
              style={{
                zIndex: 9,
                animationDelay: '950ms',
                bottom: 'calc(18px + 6% + 50px)',
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Видимая кнопка */}
                <div style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '5px',
                  background: lit ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.08)',
                  border: lit ? '2px solid #e2e8f0' : '2px solid rgba(200,230,255,0.95)',
                  boxShadow: lit
                    ? '0 0 8px 3px rgba(255,255,255,0.9), 0 0 18px 5px rgba(255,255,255,0.4)'
                    : '0 0 6px 2px rgba(180,220,255,0.9), 0 0 14px 4px rgba(150,200,255,0.5)',
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }} />
              </div>
            </div>

            {/* Диоды + LED-полоски */}
            <MirrorLed lit={lit} dotsRef={dotsRef} />

            {/* Персонаж — выезжает снизу при включении */}
            <MirrorCharacter lit={lit} />

            {/* Персонаж 2 — выглядывает сверху и падает */}
            <MirrorCharacterTop lit={lit} />

            {/* Наклейка снизу */}
            <MirrorStickerBottom />
          </div>
        </div>

        {/* Лейбл сверху */}
        <div
          className="absolute -top-8 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none animate-fade-in"
          style={{ animationDelay: '1200ms' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-neon" style={{ backgroundColor: '#e2e8f0' }} />
          <span className="text-[10px] uppercase tracking-widest" style={{ color: '#e2e8f0', fontFamily: 'Orbitron, monospace' }}>
            Ваш профиль
          </span>
        </div>

        {/* Метка размера снизу */}
        <div className="absolute left-0 right-0 flex flex-col items-center gap-1 pointer-events-none" style={{ top: 'calc(100% + 10px)' }}>
          <span className="text-[10px] uppercase tracking-widest" style={{ color: '#e2e8f0', opacity: 0.55, fontFamily: 'Orbitron, monospace' }}>
            60 × 120 см
          </span>
          <span
            className="tracking-wide animate-pulse"
            style={{
              fontFamily: 'sans-serif',
              fontSize: lit ? '8px' : '9px',
              color: lit ? 'rgba(255,255,255,0.5)' : 'rgba(255,220,100,0.95)',
              fontWeight: lit ? 400 : 700,
              textShadow: lit ? 'none' : '0 0 8px rgba(255,200,50,0.7)',
              letterSpacing: lit ? '0.03em' : '0.07em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {lit ? '· нажми чтобы выключить ·' : '✦ нажми кнопку на зеркале ✦'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MirrorDecor;