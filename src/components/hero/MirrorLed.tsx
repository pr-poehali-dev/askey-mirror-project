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
      const clip = `inset(${topInset}% 0 0 0)`;

      const pulse = fill >= 1
        ? 0.3 * Math.pow(Math.max(0, Math.sin((timeRef.current / PULSE_PERIOD) * Math.PI * 2)), 2)
        : 0;

      const stripOpacity = fill > 0 ? Math.min(1, 0.9 + pulse * 0.1) : 0;
      const glowOpacity  = fill > 0 ? Math.min(1, 0.6 + pulse * 0.4) : 0;

      for (let s = 0; s < 2; s++) {
        const el = dotsRef.current[s];
        if (el) { el.style.clipPath = clip; el.style.opacity = String(stripOpacity); }
        const glow = glowRef.current[s];
        if (glow) { glow.style.clipPath = clip; glow.style.opacity = String(glowOpacity); }
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [dotsRef]);

  return (
    <>
      {/* ===== ЛЕВАЯ ПОЛОСКА ===== */}
      <div
        ref={el => { glowRef.current[0] = el; }}
        className="absolute pointer-events-none"
        style={{
          left: '1%', top: '15%', width: '9%', height: '70%',
          borderRadius: '6px',
          background: 'radial-gradient(ellipse 100% 50% at 50% 50%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
          filter: 'blur(8px)',
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
          zIndex: 4,
        }}
      />
      <div
        ref={el => { dotsRef.current[0] = el; }}
        className="absolute pointer-events-none"
        style={{
          left: '4%', top: '15%', width: '4%', height: '70%',
          borderRadius: '3px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 12%, #fff 40%, #fff 60%, rgba(255,255,255,0.95) 88%, rgba(255,255,255,0) 100%)',
          filter: 'blur(2.5px)',
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
          zIndex: 5,
        }}
      />

      {/* ===== ПРАВАЯ ПОЛОСКА ===== */}
      <div
        ref={el => { glowRef.current[1] = el; }}
        className="absolute pointer-events-none"
        style={{
          right: '1%', top: '15%', width: '9%', height: '70%',
          borderRadius: '6px',
          background: 'radial-gradient(ellipse 100% 50% at 50% 50%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
          filter: 'blur(8px)',
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
          zIndex: 4,
        }}
      />
      <div
        ref={el => { dotsRef.current[1] = el; }}
        className="absolute pointer-events-none"
        style={{
          right: '4%', top: '15%', width: '4%', height: '70%',
          borderRadius: '3px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 12%, #fff 40%, #fff 60%, rgba(255,255,255,0.95) 88%, rgba(255,255,255,0) 100%)',
          filter: 'blur(2.5px)',
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
          zIndex: 5,
        }}
      />

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
