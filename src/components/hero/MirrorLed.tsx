import { useEffect, useRef } from 'react';

interface MirrorLedProps {
  lit: boolean;
  dotsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const DURATION = 1200; // мс на полное заполнение/опускание

const MirrorLed = ({ lit, dotsRef }: MirrorLedProps) => {
  const frameRef = useRef<number>(0);
  const fillRef = useRef(0);       // 0 = погашено, 1 = полностью заполнено
  const litRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    litRef.current = lit;
  }, [lit]);

  useEffect(() => {
    const tick = (now: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = now;
      const dt = (now - lastTimeRef.current) / DURATION;
      lastTimeRef.current = now;

      if (litRef.current) {
        fillRef.current = Math.min(1, fillRef.current + dt);
      } else {
        fillRef.current = Math.max(0, fillRef.current - dt);
      }

      const fill = fillRef.current;
      const topInset = Math.round((1 - fill) * 100);

      for (let s = 0; s < 2; s++) {
        const el = dotsRef.current[s];
        if (!el) continue;
        el.style.clipPath = `inset(${topInset}% 0 0 0)`;
        el.style.opacity = fill > 0 ? String(0.7 + fill * 0.3) : '0';
        el.style.boxShadow = fill > 0.1
          ? `0 0 18px 6px rgba(255,255,255,${0.5 + fill * 0.5}), 0 0 35px 10px rgba(255,255,255,${0.2 + fill * 0.3})`
          : 'none';
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [dotsRef]);

  return (
    <>
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
