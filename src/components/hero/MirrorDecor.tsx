import { useRef, useState } from 'react';
import MirrorLed from './MirrorLed';
import { MirrorStickerTop, MirrorStickerBottom } from './MirrorSticker';

const MirrorDecor = () => {
  const [lit, setLit] = useState(false);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      className="animate-slide-in-right relative flex items-center justify-center"
      style={{ animationDelay: '400ms', willChange: 'transform, opacity', padding: '0 40px' }}
    >
      {/* Дальнее фоновое свечение (halo) */}
      <div
        className="absolute pointer-events-none animate-mirror-outer-halo"
        style={{
          inset: '-60px',
          filter: 'blur(60px)',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.30) 0%, rgba(200,210,220,0.15) 50%, transparent 75%)',
          zIndex: 0,
        }}
      />

      {/* Обёртка зеркала */}
      <div
        className="relative animate-mirror-float"
        style={{ width: 'clamp(200px, 40vw, 280px)', zIndex: 1 }}
      >
        {/* Рамка зеркала */}
        <div
          className="relative animate-mirror-frame-glow"
          style={{
            borderRadius: '48px',
            padding: '6px',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(200,210,220,0.95) 60%, rgba(255,255,255,0.8) 100%)',
          }}
        >
          {/* Зеркальная поверхность */}
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: '42px',
              aspectRatio: '9 / 16',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 20%, #0f3460 40%, #1a1a2e 60%, #0d0d1a 80%, #1a1a2e 100%)',
            }}
          >
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

            {/* Сенсорная кнопка подсветки */}
            <div
              className="absolute animate-mirror-content-reveal cursor-pointer"
              onClick={() => setLit(v => !v)}
              style={{
                zIndex: 6,
                animationDelay: '950ms',
                bottom: 'calc(18px + 6% + 50px)',
                left: 'calc(50% - 3px)',
                transform: 'translateX(-50%)',
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
              }}
            />

            {/* Диоды + LED-полоски */}
            <MirrorLed lit={lit} dotsRef={dotsRef} />

            {/* Наклейка снизу */}
            <MirrorStickerBottom />
          </div>
        </div>

        {/* Боковые LED-лучи (исходят из рамки наружу) */}
        <div
          className="absolute pointer-events-none animate-mirror-side-led"
          style={{
            left: '-22px', top: '10%', bottom: '10%', width: '20px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.95) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.95) 80%, transparent)',
            filter: 'blur(8px)',
            zIndex: 0,
          }}
        />
        <div
          className="absolute pointer-events-none animate-mirror-side-led"
          style={{
            right: '-22px', top: '10%', bottom: '10%', width: '20px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.95) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.95) 80%, transparent)',
            filter: 'blur(8px)',
            zIndex: 0,
            animationDelay: '0.5s',
          }}
        />

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
        <div className="absolute -bottom-8 left-0 right-0 flex flex-col items-center gap-1 pointer-events-none">
          <span className="text-[10px] uppercase tracking-widest" style={{ color: '#e2e8f0', opacity: 0.55, fontFamily: 'Orbitron, monospace' }}>
            60 × 120 см
          </span>
          <span className="text-[9px] tracking-wide animate-pulse" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'sans-serif' }}>
            {lit ? '· нажми чтобы выключить ·' : '· нажми кнопку на зеркале ·'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MirrorDecor;