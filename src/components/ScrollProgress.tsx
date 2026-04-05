import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none"
      style={{ height: '2px', background: 'rgba(255,255,255,0.06)' }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,1))',
          boxShadow: '0 0 8px 2px rgba(255,255,255,0.6), 0 0 20px 4px rgba(255,255,255,0.2)',
          transition: 'width 0.1s linear',
          borderRadius: '0 2px 2px 0',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
