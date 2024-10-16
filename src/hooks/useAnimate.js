import { useState, useEffect } from 'react';

export default function useAnimate(ref) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if ("ref.current") observer.unobserve("ref.current");
    };
  }, [ref]);

  return isVisible;
}