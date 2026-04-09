import { useEffect, useRef } from 'react';

interface MirrorLedProps {
  lit: boolean;
  dotsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const DURATION = 900;

const MirrorLed = ({ lit, dotsRef }: MirrorLedProps) => {
  const frameRef = useRef<number>(0);
  const fillRef = useRef(0);
  const litRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);
  const pulseRef = useRef<(HTMLDivElement | null)[]>([]);
  const flashRef = useRef<HTMLDivElement | null>(null);
  const prevLitRef = useRef(false);

  useEffect(() => {
    const wasLit = prevLitRef.current;
    litRef.current = lit;
    prevLitRef.current = lit;

    if (lit && !wasLit) {
      if (flashRef.current) {
        const el = flashRef.current;
        el.style.opacity = '1';
        el.style.transition = 'opacity 0s';
        setTimeout(() => {
          el.style.transition = 'opacity 0.8s ease-out';
          el.style.opacity = '0';
        }, 50);
      }
    }
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
      const bottomInset = Math.round((1 - fill) * 100);

      for (let s = 0; s < 2; s++) {
        const el = dotsRef.current[s];
        if (!el) continue;
        el.style.clipPath = `inset(0 0 ${bottomInset}% 0)`;
        el.style.opacity = fill > 0 ? String(0.7 + fill * 0.3) : '0';
        el.style.boxShadow = fill > 0.1
          ? `0 0 18px 6px rgba(255,255,255,${0.5 + fill * 0.5}), 0 0 35px 10px rgba(255,255,255,${0.2 + fill * 0.3})`
          : 'none';
      }

      for (let s = 0; s < 2; s++) {
        const el = pulseRef.current[s];
        if (!el) continue;
        if (fill > 0 && fill < 1) {
          const pos = 100 - Math.round(fill * 100);
          el.style.opacity = String(0.8 * Math.sin(fill * Math.PI));
          el.style.top = `calc(15% + ${pos / 100 * 70}%)`;
        } else {
          el.style.opacity = '0';
        }
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [dotsRef]);

  return (
    <>
      {/* Вспышка в центре зеркала при включении */}
      <div
        ref={el => { flashRef.current = el; }}
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)',
          opacity: 0,
          zIndex: 7,
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
          clipPath: 'inset(0 0 100% 0)',
          zIndex: 5,
        }}
      />

      {/* Бегущий импульс — левая */}
      <div
        ref={el => { pulseRef.current[0] = el; }}
        className="absolute pointer-events-none"
        style={{
          left: '2%',
          width: '9%',
          height: '6%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)',
          filter: 'blur(3px)',
          opacity: 0,
          zIndex: 6,
          transition: 'top 0.05s linear',
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
          clipPath: 'inset(0 0 100% 0)',
          zIndex: 5,
        }}
      />

      {/* Бегущий импульс — правая */}
      <div
        ref={el => { pulseRef.current[1] = el; }}
        className="absolute pointer-events-none"
        style={{
          right: '2%',
          width: '9%',
          height: '6%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 50%, transparent 80%)',
          filter: 'blur(3px)',
          opacity: 0,
          zIndex: 6,
          transition: 'top 0.05s linear',
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
