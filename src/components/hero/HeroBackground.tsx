import { useEffect, useRef } from 'react';

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

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

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

    const init = () => {
      particlesRef.current = Array.from({ length: COUNT }, () =>
        spawn(canvas.width, canvas.height)
      );
      particlesRef.current.forEach(p => {
        p.opacity = Math.random() * p.opacityTarget;
      });
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