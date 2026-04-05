import { useEffect, useRef } from 'react';

export const DOT_COUNT = 18;

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

      for (let i = 0; i < DOT_COUNT * 2; i++) {
        const el = dotsRef.current[i];
        if (!el) continue;
        const dotIdx = i % DOT_COUNT;

        if (!isLit) {
          el.style.opacity = '0.08';
          el.style.boxShadow = 'none';
          el.style.background = '#a855f7';
          continue;
        }

        const cycle = (Math.sin(t * 0.5) + 1) / 2;
        const fillLevel = cycle * DOT_COUNT;
        const fromBottom = DOT_COUNT - 1 - dotIdx;
        const diff = fillLevel - fromBottom;
        const bright = Math.max(0, Math.min(1, diff));
        el.style.opacity = String(0.08 + bright * 0.92);
        el.style.background = '#c084fc';
        el.style.boxShadow = bright > 0.5 ? `0 0 8px 3px #a855f7` : 'none';
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [dotsRef]);

  return (
    <>
      {/* Боковые диоды слева */}
      <div className="absolute top-[10%] bottom-[15%] left-0 flex flex-col justify-between items-center" style={{ width: '6px', zIndex: 5 }}>
        {Array.from({ length: DOT_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={el => { dotsRef.current[i] = el; }}
            style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#a855f7', opacity: 0.08, flexShrink: 0 }}
          />
        ))}
      </div>

      {/* Боковые диоды справа */}
      <div className="absolute top-[10%] bottom-[15%] right-0 flex flex-col justify-between items-center" style={{ width: '6px', zIndex: 5 }}>
        {Array.from({ length: DOT_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={el => { dotsRef.current[DOT_COUNT + i] = el; }}
            style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#a855f7', opacity: 0.08, flexShrink: 0 }}
          />
        ))}
      </div>

      {/* LED-полоска снизу */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none animate-led-strip"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent, rgba(168,85,247,1) 20%, rgba(232,121,249,1) 50%, rgba(168,85,247,1) 80%, transparent)',
          filter: 'blur(1px)',
          zIndex: 5,
        }}
      />

      {/* LED-полоска сверху */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none animate-led-strip"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent, rgba(168,85,247,1) 20%, rgba(232,121,249,1) 50%, rgba(168,85,247,1) 80%, transparent)',
          filter: 'blur(1px)',
          zIndex: 5,
          animationDelay: '0.3s',
        }}
      />
    </>
  );
};

export default MirrorLed;
