import React, { useEffect, useRef, useState } from 'react';

interface FloatingItemCountdownProps {
  itemCount: number;
  shake: boolean;
}

const FloatingItemCountdown: React.FC<FloatingItemCountdownProps> = ({ itemCount, shake }) => {
  const countdownRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          countdownRef.current?.classList.add('visible');
        } else {
          setIsVisible(false);
          countdownRef.current?.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const target = document.getElementById('part4');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div
      ref={countdownRef}
      className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-50 transition-transform duration-500 ease-in-out ${isVisible && shake ? 'shake' : ''}`}
      style={{ transform: 'translateX(100%)' }}
    >
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">Items Left:</span>
        <span className="text-4xl font-bold text-red-500">{itemCount}</span>
      </div>

      <style jsx>{`
        .visible {
          transform: translateX(0) !important;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }

        .shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FloatingItemCountdown;
