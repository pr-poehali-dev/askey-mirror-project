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

      const pulse = fill >= 1
        ? 0.35 * Math.pow(Math.max(0, Math.sin((timeRef.current / PULSE_PERIOD) * Math.PI * 2)), 2)
        : 0;

      const opacity = fill > 0 ? Math.min(1, 0.8 + pulse * 0.2) : 0;
      const glowOpacity = fill > 0 ? Math.min(1, fill * 0.6 + pulse * 0.5) : 0;
      const glowSize = 20 + pulse * 30;

      for (let s = 0; s < 2; s++) {
        // полоска с clipPath
        const el = dotsRef.current[s];
        if (el) {
          el.style.clipPath = `inset(${topInset}% 0 0 0)`;
          el.style.opacity = String(opacity);
        }
        // свечение без clipPath
        const glow = glowRef.current[s];
        if (glow) {
          glow.style.opacity = String(glowOpacity);
          glow.style.filter = `blur(${glowSize}px)`;
        }
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [dotsRef]);

  return (
    <>
      {/* Свечение левой ленты (без clipPath) */}
      <div
        ref={el => { glowRef.current[0] = el; }}
        className="absolute pointer-events-none"
        style={{
          left: '-2%',
          top: '10%',
          width: '14%',
          height: '80%',
          borderRadius: '8px',
          background: 'rgba(255,255,255,0.9)',
          filter: 'blur(20px)',
          opacity: 0,
          zIndex: 4,
        }}
      />

      {/* Левая лента */}
      <div
        ref={el => { dotsRef.current[0] = el; }}
        className="absolute pointer-events-none"
        style={{
          left: '4%',
          top: '15%',
          width: '5%',
          height: '70%',
          borderRadius: '4px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(255,255,255,0.0) 100%)',
          filter: 'blur(4px)',
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
          zIndex: 5,
        }}
      />

      {/* Свечение правой ленты (без clipPath) */}
      <div
        ref={el => { glowRef.current[1] = el; }}
        className="absolute pointer-events-none"
        style={{
          right: '-2%',
          top: '10%',
          width: '14%',
          height: '80%',
          borderRadius: '8px',
          background: 'rgba(255,255,255,0.9)',
          filter: 'blur(20px)',
          opacity: 0,
          zIndex: 4,
        }}
      />

      {/* Правая лента */}
      <div
        ref={el => { dotsRef.current[1] = el; }}
        className="absolute pointer-events-none"
        style={{
          right: '4%',
          top: '15%',
          width: '5%',
          height: '70%',
          borderRadius: '4px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(255,255,255,0.0) 100%)',
          filter: 'blur(4px)',
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
