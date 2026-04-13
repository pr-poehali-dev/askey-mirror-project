import { useRef, useState } from 'react';
import MirrorLed from './MirrorLed';
import { MirrorStickerTop, MirrorStickerBottom } from './MirrorSticker';

const MirrorDecor = () => {
  const [lit, setLit] = useState(false);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      className="animate-slide-in-right relative flex items-center justify-center mb-16 sm:mb-12 lg:mb-0"
      style={{ animationDelay: '400ms', willChange: 'transform, opacity', padding: '0 24px' }}
    >
      {/* Обёртка зеркала */}
      <div
        className="relative animate-mirror-float"
        style={{ width: 'clamp(200px, 48vw, 280px)', zIndex: 1 }}
      >
        {/* Янтарное контурное свечение снаружи */}
        <div className="absolute pointer-events-none" style={{
          inset: '-20px',
          borderRadius: '24px',
          boxShadow: lit
            ? '0 0 40px 14px rgba(255,220,140,0.55), 0 0 90px 30px rgba(255,190,80,0.28), 0 0 150px 50px rgba(255,160,50,0.12)'
            : '0 0 30px 8px rgba(255,210,120,0.3), 0 0 70px 20px rgba(255,180,70,0.14)',
          transition: 'box-shadow 1s ease',
          zIndex: 0,
        }} />

        {/* Деревянная рамка */}
        <div
          className="relative"
          style={{
            borderRadius: '14px',
            padding: '10px 12px',
            background: 'linear-gradient(160deg, #c49a6c 0%, #a07040 20%, #7a5230 40%, #b08050 55%, #8a6035 70%, #c09060 85%, #7a5230 100%)',
            boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.2), inset 0 -2px 6px rgba(0,0,0,0.5), 0 6px 30px rgba(0,0,0,0.6)',
          }}
        >
          {/* Волокна дерева */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ borderRadius: '14px', zIndex: 0 }}>
            {[...Array(18)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                left: 0, right: 0,
                top: `${i * 5.8}%`,
                height: i % 3 === 0 ? '2px' : '1px',
                background: i % 2 === 0 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)',
              }} />
            ))}
            {/* Вертикальные полосы для реалистичности */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.15) 0%, transparent 20%, rgba(0,0,0,0.08) 50%, transparent 80%, rgba(0,0,0,0.12) 100%)' }} />
          </div>

          {/* Металлические боковые вставки */}
          <div className="absolute pointer-events-none" style={{
            left: '6px', top: '28%', bottom: '28%', width: '4px',
            background: 'linear-gradient(to right, #b89060, #e8c898, #c8a070, #e0b880, #b89060)',
            borderRadius: '2px',
            boxShadow: '0 0 4px rgba(220,180,100,0.5)',
            zIndex: 2,
          }} />
          <div className="absolute pointer-events-none" style={{
            right: '6px', top: '28%', bottom: '28%', width: '4px',
            background: 'linear-gradient(to right, #b89060, #e8c898, #c8a070, #e0b880, #b89060)',
            borderRadius: '2px',
            boxShadow: '0 0 4px rgba(220,180,100,0.5)',
            zIndex: 2,
          }} />

          {/* Зеркальная поверхность */}
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: '6px', aspectRatio: '9 / 16' }}
          >
            {/* Фото интерьера */}
            <img
              src="https://cdn.poehali.dev/projects/af6d2ef4-20e2-486b-93ab-6d38dda52f4e/bucket/5782c6d9-7caf-44d7-9be9-c9c684105d8b.png"
              alt="интерьер"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 0 }}
            />

            {/* Лёгкое зеркальное отражение поверх */}
            <div className="absolute inset-0 pointer-events-none" style={{
              zIndex: 1,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(200,180,150,0.04) 100%)',
            }} />

            {/* Блик */}
            <div className="absolute pointer-events-none animate-mirror-shine" style={{
              top: 0, left: '-60%', width: '35%', height: '100%',
              background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
              transform: 'skewX(-15deg)',
              zIndex: 3,
            }} />

            {/* Наклейка сверху — Instagram статус-бар */}
            <MirrorStickerTop />

            {/* Сенсорная кнопка */}
            <div
              className="absolute animate-mirror-content-reveal cursor-pointer"
              onClick={() => setLit(v => !v)}
              style={{
                zIndex: 9,
                animationDelay: '950ms',
                bottom: 'calc(6% + 50px)',
                left: 0, right: 0,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: '13px', height: '13px',
                  borderRadius: '4px',
                  background: lit ? 'rgba(255,235,180,0.5)' : 'rgba(255,220,140,0.15)',
                  border: lit ? '2px solid rgba(255,230,150,0.9)' : '2px solid rgba(255,210,120,0.7)',
                  boxShadow: lit
                    ? '0 0 8px 3px rgba(255,220,120,0.9), 0 0 18px 5px rgba(255,200,80,0.5)'
                    : '0 0 6px 2px rgba(255,200,100,0.6), 0 0 12px 3px rgba(255,170,60,0.3)',
                  transition: 'all 0.3s ease',
                }} />
              </div>
            </div>

            {/* LED-полоски */}
            <MirrorLed lit={lit} dotsRef={dotsRef} />

            {/* Наклейка снизу — Instagram лайки */}
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
              fontSize: '9px',
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
