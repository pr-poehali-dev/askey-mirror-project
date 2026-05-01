import { useRef, useState, useEffect } from 'react';
import MirrorLed from './MirrorLed';
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
          fontSize: 'clamp(7px,2.5cqw,11px)',
          color: 'rgba(255,255,255,0.75)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '4%',
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
          width: lit ? '55%' : '0%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.7), transparent)',
          margin: '0 auto 4%',
          transition: lit ? 'width 0.8s ease 0.9s' : 'width 0.3s ease',
        }} />
        <div style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(11px,4cqw,20px)',
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
  const [scale, setScale] = useState(1);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([e]) => setScale(e.contentRect.width / 300));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="animate-slide-in-right relative flex items-center justify-center mb-4 sm:mb-8 lg:mb-0"
      style={{ animationDelay: '400ms', willChange: 'transform, opacity', padding: '0 20px' }}
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

      {/* Обёртка зеркала — пропорции 60×120 см = 1:2 */}
      <div
        className="relative animate-mirror-float"
        style={{ width: 'clamp(180px, 40vw, 320px)', zIndex: 1 }}
      >
        {/* Рамка зеркала — тонкая, как настоящее зеркало */}
        <div
          className="relative animate-mirror-frame-glow"
          style={{
            borderRadius: 'clamp(8px, 2.5%, 14px)',
            padding: '4px',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(220,225,235,0.85) 40%, rgba(255,255,255,0.9) 70%, rgba(200,210,220,0.95) 100%)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.3)',
          }}
        >
          {/* Экран — соотношение 1:2 как зеркало 60×120 см */}
          <div
            ref={screenRef}
            className="relative overflow-hidden"
            style={{
              borderRadius: 'clamp(5px, 1.5%, 10px)',
              aspectRatio: '1 / 2',
              background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 20%, #141414 40%, #111111 60%, #0a0a0a 80%, #111111 100%)',
            }}
          >
            {/* Блик */}
            <div
              className="absolute pointer-events-none animate-mirror-shine"
              style={{
                top: 0, left: '-60%', width: '40%', height: '100%',
                background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.05) 60%, transparent 70%)',
                transform: 'skewX(-15deg)',
                zIndex: 3,
              }}
            />

            {/* Поверхностный градиент */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 30%, transparent 60%, rgba(200,210,220,0.04) 90%)',
                zIndex: 2,
              }}
            />

            {/* ── Наклейка сверху ── */}
            <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9, transformOrigin: 'top left', transform: `scale(${scale})` }}>
              <MirrorStickerTop />
            </div>

            {/* Отражение интерьера */}
            <div
              className="absolute inset-0"
              style={{
                zIndex: 1,
                background: 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(200,184,160,0.08) 30%, rgba(180,160,130,0.05) 60%, rgba(255,255,255,0.03) 100%)',
              }}
            />

            {/* Текст при включении */}
            <CinemaText lit={lit} />

            {/* ── Кнопка подсветки ── */}
            <div
              className="absolute animate-mirror-content-reveal cursor-pointer"
              onClick={() => setLit(v => !v)}
              style={{
                zIndex: 9,
                animationDelay: '950ms',
                top: '72%',
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                transform: 'translateY(-50%)',
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
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '5px',
                  background: lit ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.06)',
                  border: lit ? '2px solid rgba(255,255,255,0.9)' : '2px solid rgba(180,220,255,0.95)',
                  boxShadow: lit
                    ? '0 0 10px 4px rgba(255,255,255,0.85), 0 0 24px 6px rgba(255,255,255,0.35)'
                    : '0 0 6px 2px rgba(160,210,255,0.9), 0 0 16px 4px rgba(130,190,255,0.45)',
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.3s ease',
                }} />
              </div>
            </div>

            {/* LED + диоды */}
            <MirrorLed lit={lit} dotsRef={dotsRef} />

            {/* Персонаж сверху (выглядывает при включении) */}
            <MirrorCharacterTop lit={lit} />

            {/* ── Наклейка снизу ── */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 10, transformOrigin: 'bottom left', transform: `scale(${scale})` }}>
              <MirrorStickerBottom />
            </div>
          </div>
        </div>

        {/* Подписи под зеркалом */}
        <div style={{
          position: 'absolute',
          bottom: '-38px',
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          pointerEvents: 'none',
        }}>
          <div style={{
            fontSize: '11px',
            color: 'rgba(255,255,255,0.35)',
            fontFamily: 'Orbitron, monospace',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>60 × 120 см</div>
          <div
            className="animate-mirror-content-reveal"
            style={{
              animationDelay: '1200ms',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <span style={{ opacity: 0.7 }}>↑</span>
            нажми на кнопку
          </div>
        </div>

        {/* Боковые LED-лучи */}
        {([['left', '0s'], ['right', '0.5s']] as const).map(([side, delay]) => (
          <div
            key={side}
            className="absolute pointer-events-none animate-mirror-side-led"
            style={{
              [side]: '-14px', top: '12%', bottom: '12%', width: '12px',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 40%, rgba(255,255,255,0.25) 60%, transparent)',
              borderRadius: '8px',
              filter: 'blur(8px)',
              zIndex: 0,
              animationDelay: delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MirrorDecor;