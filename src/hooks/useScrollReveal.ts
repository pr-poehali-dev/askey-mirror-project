import { useEffect, useRef } from 'react';

interface Options {
  threshold?: number;
  delay?: number;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: Options = {}) => {
  const ref = useRef<T>(null);
  const { threshold = 0.12, delay = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(36px)';
    el.style.transition = `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
};
