import { useEffect, useRef } from 'react';

interface MirrorLedProps {
  lit: boolean;
  dotsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const MirrorLed = ({ lit, dotsRef }: MirrorLedProps) => {
  const frameRef = useRef<number>(0);
  const tRef = useRef(0);
  const litRef = useRef(false);

  useEffect(() => {
    litRef.current = lit;
  }, [lit]);

  useEffect(() => {
    const tick = () => {
      tRef.current += 0.025;
      const t = tRef.current;
      const isLit = litRef.current;

      // 0 = левая полоса, 1 = правая полоса
      for (let s = 0; s < 2; s++) {
        const el = dotsRef.current[s];
        if (!el) continue;

        if (!isLit) {
          el.style.clipPath = 'inset(100% 0 0 0)';
          el.style.opacity = '0';
          continue;
        }

        // Медленная волна заполнения снизу вверх
        const cycle = (Math.sin(t * 0.5) + 1) / 2; // 0..1
        const fillPct = Math.round(cycle * 100);
        // clipPath: inset(top right bottom left)
        // заполняем снизу вверх — уменьшаем top
        el.style.clipPath = `inset(${100 - fillPct}% 0 0 0)`;
        el.style.opacity = String(0.5 + cycle * 0.5);
        el.style.boxShadow = `0 0 12px 4px rgba(255,255,255,${0.3 + cycle * 0.4})`;
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [dotsRef]);

  return (
    <>
      {/* Левая лента — единая полоса, отступ 5% от края, высота 70% */}
      <div
        ref={el => { dotsRef.current[0] = el; }}
        className="absolute pointer-events-none"
        style={{
          left: '4%',
          top: '15%',
          width: '5%',
          height: '70%',
          borderRadius: '4px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 70%, rgba(255,255,255,0.0) 100%)',
          filter: 'blur(3px)',
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
          zIndex: 5,
          transition: 'opacity 0.3s ease',
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
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 70%, rgba(255,255,255,0.0) 100%)',
          filter: 'blur(3px)',
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
          zIndex: 5,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* LED-полоска снизу (постоянная) */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none animate-led-strip"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, transparent)',
          filter: 'blur(1px)',
          zIndex: 5,
        }}
      />

      {/* LED-полоска сверху (постоянная) */}
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
