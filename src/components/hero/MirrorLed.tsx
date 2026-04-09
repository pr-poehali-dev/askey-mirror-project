import { useEffect, useRef } from 'react';

interface MirrorLedProps {
  lit: boolean;
  dotsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const DURATION = 1200;
const PULSE_PERIOD = 1400;

const MirrorLed = ({ lit, dotsRef }: MirrorLedProps) => {
  const frameRef = useRef<number>(0);
  const fillRef = useRef(0);
  const litRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  // [0,1] — левая/правая узкая сердцевина, [2,3] — ореол
  const glowRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    litRef.current = lit;
  }, [lit]);

  useEffect(() => {
    const tick = (now: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = now;
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;
      const dt = delta / DURATION;

      if (litRef.current) {
        fillRef.current = Math.min(1, fillRef.current + dt);
        timeRef.current += delta;
      } else {
        fillRef.current = Math.max(0, fillRef.current - dt);
        timeRef.current = 0;
      }

      const fill = fillRef.current;
      const topInset = Math.round((1 - fill) * 100);

      const pulse = fill >= 1
        ? 0.3 * Math.pow(Math.max(0, Math.sin((timeRef.current / PULSE_PERIOD) * Math.PI * 2)), 2)
        : 0;

      const stripOpacity = fill > 0 ? Math.min(1, 0.85 + pulse * 0.15) : 0;
      const coreOpacity  = fill > 0 ? Math.min(1, 0.9 + pulse * 0.1) : 0;
      const haloOpacity  = fill > 0 ? Math.min(1, 0.55 + pulse * 0.45) : 0;
      const clip = `inset(${topInset}% 0 0 0)`;

      for (let s = 0; s < 2; s++) {
        const el = dotsRef.current[s];
        if (el) {
          el.style.clipPath = clip;
          el.style.opacity = String(stripOpacity);
        }
        const core = glowRef.current[s];
        if (core) {
          core.style.clipPath = clip;
          core.style.opacity = String(coreOpacity);
        }
        const halo = glowRef.current[s + 2];
        if (halo) {
          halo.style.clipPath = clip;
          halo.style.opacity = String(haloOpacity);
        }
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [dotsRef]);

  const STRIP = [
    { side: 'left',  pos: { left: '4%' },  },
    { side: 'right', pos: { right: '4%' }, },
  ];

  return (
    <>
      {STRIP.map((s, i) => (
        <div key={i} style={{ position: 'absolute', pointerEvents: 'none', top: '15%', height: '70%', width: '5%', ...s.pos, zIndex: 5 }}>
          {/* Полоска (clipPath) */}
          <div
            ref={el => { dotsRef.current[i] = el; }}
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: '4px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 20%, #fff 80%, rgba(255,255,255,0) 100%)',
              filter: 'blur(2px)',
              opacity: 0,
              clipPath: 'inset(100% 0 0 0)',
            }}
          />
          {/* Сердцевина свечения */}
          <div
            ref={el => { glowRef.current[i] = el; }}
            className="absolute pointer-events-none"
            style={{
              top: 0, bottom: 0,
              left: '-60%', right: '-60%',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.95) 80%, rgba(255,255,255,0) 100%)',
              filter: 'blur(6px)',
              opacity: 0,
              clipPath: 'inset(100% 0 0 0)',
            }}
          />
          {/* Ореол */}
          <div
            ref={el => { glowRef.current[i + 2] = el; }}
            className="absolute pointer-events-none"
            style={{
              top: 0, bottom: 0,
              left: '-160%', right: '-160%',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.5) 80%, rgba(255,255,255,0) 100%)',
              filter: 'blur(14px)',
              opacity: 0,
              clipPath: 'inset(100% 0 0 0)',
            }}
          />
        </div>
      ))}

      {/* LED-полоска снизу */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none animate-led-strip"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, transparent)',
          filter: 'blur(1px)',
          zIndex: 5,
        }}
      />

      {/* LED-полоска сверху */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none animate-led-strip"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, transparent)',
          filter: 'blur(1px)',
          zIndex: 5,
          animationDelay: '0.3s',
        }}
      />
    </>
  );
};

export default MirrorLed;
