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
      <div style={{
        textAlign: 'center',
        padding: '0 8%',
        width: '100%',
        opacity: lit ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}>
        <div style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 'clamp(7px, 3cqw, 11px)',
          color: 'rgba(255,255,255,0.75)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '6%',
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
        <div style={{
          width: lit ? '60%' : '0%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.7), transparent)',
          margin: '0 auto 6%',
          transition: lit ? 'width 0.8s ease 0.9s' : 'width 0.3s ease',
        }} />
        <div style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(12px, 5.5cqw, 22px)',
          fontWeight: 600,
          color: 'rgba(255,255,255,1)',
          letterSpacing: '0.04em',
          textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
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
      className="animate-slide-in-right relative flex items-center justify-center mb-4 sm:mb-8 lg:mb-0"
      style={{ animationDelay: '400ms', willChange: 'transform, opacity', padding: '0 16px' }}
    >
      {/* Фоновое свечение */}
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
        style={{ width: 'clamp(200px, 46vw, 340px)', zIndex: 1 }}
      >
        {/* Рамка — iPhone-форма */}
        <div
          className="relative animate-mirror-frame-glow"
          style={{
            borderRadius: 'clamp(28px, 12%, 44px)',
            padding: '5px',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(200,210,220,0.95) 60%, rgba(255,255,255,0.8) 100%)',
          }}
        >
          {/* Экран зеркала */}
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: 'clamp(24px, 10%, 40px)',
              aspectRatio: '9 / 16',
              background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 20%, #141414 40%, #111111 60%, #0a0a0a 80%, #111111 100%)',
              containerType: 'inline-size',
            }}
          >
            {/* Блик */}
            <div
              className="absolute pointer-events-none animate-mirror-shine"
              style={{
                top: 0, left: '-60%', width: '40%', height: '100%',
                background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 70%)',
                transform: 'skewX(-15deg)',
                zIndex: 3,
              }}
            />

            {/* Поверхностный градиент */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.05) 30%, transparent 60%, rgba(200,210,220,0.06) 90%)',
                zIndex: 2,
              }}
            />

            {/* Наклейка сверху */}
            <div
              className="animate-mirror-content-reveal"
              style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 9, animationDelay: '800ms' }}
            >
              <MirrorStickerTop />
            </div>

            {/* Отражение интерьера */}
            <div
              className="absolute inset-0"
              style={{
                zIndex: 1,
                background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(200,184,160,0.12) 30%, rgba(180,160,130,0.08) 60%, rgba(255,255,255,0.05) 100%)',
              }}
            />

            {/* Текст при включении */}
            <CinemaText lit={lit} />

            {/* Кнопка подсветки — строго по центру по горизонтали, 50% от верха */}
            <div
              className="absolute animate-mirror-content-reveal cursor-pointer"
              onClick={() => setLit(v => !v)}
              style={{
                zIndex: 9,
                animationDelay: '950ms',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
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
                }} />
              </div>
            </div>

            {/* LED + диоды */}
            <MirrorLed lit={lit} dotsRef={dotsRef} />

            {/* Персонаж сверху */}
            <MirrorCharacterTop lit={lit} />

            {/* Наклейка снизу */}
            <div
              className="animate-mirror-content-reveal"
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, animationDelay: '900ms' }}
            >
              <MirrorStickerBottom />
            </div>
          </div>
        </div>

        {/* Боковые LED-лучи */}
        {['left', 'right'].map((side, i) => (
          <div
            key={side}
            className="absolute pointer-events-none animate-mirror-side-led"
            style={{
              [side]: '-16px', top: '10%', bottom: '10%', width: '14px',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.3) 60%, transparent)',
              borderRadius: '8px',
              filter: 'blur(10px)',
              zIndex: 0,
              animationDelay: i === 1 ? '0.5s' : '0s',
            }}
          />
        ))}
      </div>

      {/* Персонаж снизу */}
      <MirrorCharacter lit={lit} />
    </div>
  );
};

export default MirrorDecor;