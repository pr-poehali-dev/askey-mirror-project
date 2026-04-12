import { useEffect, useRef } from 'react';

interface Moon {
  x: number;
  y: number;
  radius: number;
  speed: number;
  angle: number;       // текущий угол по орбите (радианы)
  orbitA: number;      // полуось X эллипса
  orbitB: number;      // полуось Y эллипса
  cx: number;          // центр орбиты X
  cy: number;          // центр орбиты Y
  tilt: number;        // наклон орбиты
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacityTarget: number;
  opacitySpeed: number;
  pulse: number;
  pulseSpeed: number;
}

const drawMoon = (ctx: CanvasRenderingContext2D, moon: Moon) => {
  const { x, y, radius } = moon;

  ctx.save();
  ctx.translate(x, y);

  // Внешнее свечение луны
  const halo = ctx.createRadialGradient(0, 0, radius * 0.8, 0, 0, radius * 3.5);
  halo.addColorStop(0, 'rgba(220,230,255,0.12)');
  halo.addColorStop(0.5, 'rgba(180,200,240,0.04)');
  halo.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.beginPath();
  ctx.arc(0, 0, radius * 3.5, 0, Math.PI * 2);
  ctx.fillStyle = halo;
  ctx.fill();

  // Тело луны
  const bodyGrad = ctx.createRadialGradient(-radius * 0.3, -radius * 0.3, 0, 0, 0, radius);
  bodyGrad.addColorStop(0, 'rgba(235,240,255,0.92)');
  bodyGrad.addColorStop(0.5, 'rgba(200,210,240,0.85)');
  bodyGrad.addColorStop(1, 'rgba(140,155,195,0.75)');
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fillStyle = bodyGrad;
  ctx.fill();

  // Кратеры
  const craters: [number, number, number, number][] = [
    [-0.3, -0.2, 0.18, 0.08],
    [0.25, 0.15, 0.13, 0.06],
    [-0.1, 0.35, 0.1, 0.045],
    [0.4, -0.3, 0.09, 0.04],
  ];
  craters.forEach(([cx, cy, cr, shadow]) => {
    ctx.beginPath();
    ctx.arc(cx * radius, cy * radius, cr * radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(120,135,175,${shadow * 8})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx * radius - cr * radius * 0.3, cy * radius - cr * radius * 0.3, cr * radius * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(240,245,255,${shadow * 4})`;
    ctx.fill();
  });

  // Тень (фаза — серп справа)
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.clip();
  const shadowGrad = ctx.createLinearGradient(radius * 0.2, 0, radius, 0);
  shadowGrad.addColorStop(0, 'rgba(0,0,0,0)');
  shadowGrad.addColorStop(0.5, 'rgba(5,8,20,0.45)');
  shadowGrad.addColorStop(1, 'rgba(5,8,20,0.72)');
  ctx.fillStyle = shadowGrad;
  ctx.fillRect(-radius, -radius, radius * 2, radius * 2);
  ctx.restore();

  ctx.restore();
};

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const moonRef = useRef<Moon | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COUNT = 90;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const spawn = (w: number, h: number): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.18,
      radius: Math.random() * 1.6 + 0.3,
      opacity: 0,
      opacityTarget: Math.random() * 0.55 + 0.08,
      opacitySpeed: Math.random() * 0.004 + 0.001,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.012 + 0.004,
    });

    const initMoon = (w: number, h: number) => {
      moonRef.current = {
        x: 0, y: 0,
        radius: Math.min(w, h) * 0.045,
        speed: 0.00018,
        angle: Math.random() * Math.PI * 2,
        orbitA: w * 0.42,
        orbitB: h * 0.32,
        cx: w * 0.5,
        cy: h * 0.46,
        tilt: -0.22,
      };
    };

    const init = () => {
      particlesRef.current = Array.from({ length: COUNT }, () =>
        spawn(canvas.width, canvas.height)
      );
      particlesRef.current.forEach(p => {
        p.opacity = Math.random() * p.opacityTarget;
      });
      initMoon(canvas.width, canvas.height);
    };

    const drawNebula = (w: number, h: number) => {
      // Центральное свечение
      const g1 = ctx!.createRadialGradient(w * 0.5, h * 0.4, 0, w * 0.5, h * 0.4, w * 0.5);
      g1.addColorStop(0, 'rgba(180,195,220,0.07)');
      g1.addColorStop(0.4, 'rgba(120,140,180,0.03)');
      g1.addColorStop(1, 'rgba(0,0,0,0)');
      ctx!.fillStyle = g1;
      ctx!.fillRect(0, 0, w, h);

      // Боковые блики — эффект зала с зеркалами
      const g2 = ctx!.createRadialGradient(0, h * 0.5, 0, 0, h * 0.5, w * 0.4);
      g2.addColorStop(0, 'rgba(160,185,210,0.05)');
      g2.addColorStop(1, 'rgba(0,0,0,0)');
      ctx!.fillStyle = g2;
      ctx!.fillRect(0, 0, w, h);

      const g3 = ctx!.createRadialGradient(w, h * 0.5, 0, w, h * 0.5, w * 0.4);
      g3.addColorStop(0, 'rgba(160,185,210,0.05)');
      g3.addColorStop(1, 'rgba(0,0,0,0)');
      ctx!.fillStyle = g3;
      ctx!.fillRect(0, 0, w, h);
    };

    const drawConnections = (particles: Particle[], w: number, h: number) => {
      const threshold = Math.min(w, h) * 0.14;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < threshold) {
            const alpha = (1 - dist / threshold) * 0.06 * Math.min(particles[i].opacity, particles[j].opacity) / 0.5;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(200,215,235,${alpha})`;
            ctx!.lineWidth = 0.4;
            ctx!.stroke();
          }
        }
      }
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx!.clearRect(0, 0, w, h);

      drawNebula(w, h);

      drawConnections(particlesRef.current, w, h);

      particlesRef.current.forEach(p => {
        // Плавный fade к цели
        if (p.opacity < p.opacityTarget) p.opacity = Math.min(p.opacity + p.opacitySpeed, p.opacityTarget);
        else p.opacity = Math.max(p.opacity - p.opacitySpeed * 0.5, p.opacityTarget * 0.3);

        // Пульс радиуса
        p.pulse += p.pulseSpeed;
        const r = p.radius + Math.sin(p.pulse) * p.radius * 0.4;

        // Движение
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Смена целевой прозрачности
        if (Math.random() < 0.003) {
          p.opacityTarget = Math.random() * 0.55 + 0.05;
        }

        // Рисуем частицу с мягким свечением
        const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
        grd.addColorStop(0, `rgba(220,230,245,${p.opacity})`);
        grd.addColorStop(0.4, `rgba(180,200,225,${p.opacity * 0.3})`);
        grd.addColorStop(1, 'rgba(0,0,0,0)');

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, r * 3, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
};

export default HeroBackground;