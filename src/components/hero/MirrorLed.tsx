import { useEffect, useRef } from 'react';

interface MirrorLedProps {
  lit: boolean;
  dotsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const DURATION = 1200;
const PULSE_PERIOD = 1400;

// Рисует реалистичную LED-полоску на canvas
const drawLedStrip = (ctx: CanvasRenderingContext2D, w: number, h: number, brightness: number) => {
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;

  // Рисуем по вертикали как набор точек с радиальным свечением
  const steps = Math.ceil(h / 3);
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1); // 0..1
    // яркость: сильнее в центре по высоте, fade к краям
    const edgeFade = Math.pow(Math.sin(t * Math.PI), 0.6);
    const y = t * h;

    // ореол широкий
    const grd = ctx.createRadialGradient(cx, y, 0, cx, y, w * 1.8);
    grd.addColorStop(0, `rgba(255,255,255,${0.18 * edgeFade * brightness})`);
    grd.addColorStop(0.3, `rgba(255,255,255,${0.08 * edgeFade * brightness})`);
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, y - w * 1.8, w * 4, w * 3.6);

    // сердцевина узкая
    const core = ctx.createRadialGradient(cx, y, 0, cx, y, w * 0.5);
    core.addColorStop(0, `rgba(255,255,255,${0.9 * edgeFade * brightness})`);
    core.addColorStop(0.5, `rgba(255,255,255,${0.4 * edgeFade * brightness})`);
    core.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = core;
    ctx.fillRect(cx - w * 0.5, y - w * 0.5, w, w);
  }
};

const MirrorLed = ({ lit, dotsRef }: MirrorLedProps) => {
  const frameRef = useRef<number>(0);
  const fillRef = useRef(0);
  const litRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const canvasRef = useRef<(HTMLCanvasElement | null)[]>([]);
  const wrapRef = useRef<(HTMLDivElement | null)[]>([]);

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
        ? 0.25 * Math.pow(Math.max(0, Math.sin((timeRef.current / PULSE_PERIOD) * Math.PI * 2)), 2)
        : 0;

      const brightness = fill > 0 ? Math.min(1, fill + pulse) : 0;

      for (let s = 0; s < 2; s++) {
        // Обёртка с clipPath для анимации заполнения
        const wrap = wrapRef.current[s];
        if (wrap) {
          wrap.style.clipPath = `inset(${topInset}% 0 0 0)`;
          wrap.style.opacity = fill > 0 ? '1' : '0';
        }

        // Перерисовываем canvas с текущей яркостью
        const canvas = canvasRef.current[s];
        if (canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx) drawLedStrip(ctx, canvas.width, canvas.height, brightness);
        }

        // dotsRef для совместимости
        const el = dotsRef.current[s];
        if (el) {
          el.style.clipPath = `inset(${topInset}% 0 0 0)`;
          el.style.opacity = fill > 0 ? '1' : '0';
        }
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [dotsRef]);

  const sides = [
    { left: '-8px' },
    { right: '-8px' },
  ] as const;

  return (
    <>
      {sides.map((pos, i) => (
        <div
          key={i}
          ref={el => { wrapRef.current[i] = el; }}
          className="absolute pointer-events-none"
          style={{
            top: '10%',
            height: '80%',
            width: '60px',
            opacity: 0,
            clipPath: 'inset(100% 0 0 0)',
            zIndex: 5,
            ...pos,
          }}
        >
          <canvas
            ref={el => {
              canvasRef.current[i] = el;
              if (el) {
                el.width = 60;
                el.height = el.parentElement?.offsetHeight || 400;
              }
            }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ))}

      {/* Невидимые div для совместимости с dotsRef */}
      <div ref={el => { dotsRef.current[0] = el; }} className="absolute pointer-events-none" style={{ opacity: 0 }} />
      <div ref={el => { dotsRef.current[1] = el; }} className="absolute pointer-events-none" style={{ opacity: 0 }} />

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
