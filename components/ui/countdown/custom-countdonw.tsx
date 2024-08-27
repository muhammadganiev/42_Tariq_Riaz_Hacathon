import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const CustomCountdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft.minutes !== timeLeft.minutes) {
        setShake(true);
        setTimeout(() => setShake(false), 500); // Remove shake after animation
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  return (
    <div className={`grid grid-flow-col gap-5 text-center auto-cols-max ${shake ? 'shake' : ''}`}>
      <div className="flex flex-col items-center font-bold p-2 border border-main_color rounded-box text-main_color">
        <span className="countdown text-6xl sm:text-9xl">
          <span style={{ '--value': timeLeft.days } as React.CSSProperties}></span>
        </span>
        <span className="countdown text-xl sm:text-4xl">DAYS</span>
      </div>
      <div className="flex flex-col items-center font-bold p-2 border border-main_color rounded-box text-main_color">
        <span className="countdown text-6xl sm:text-9xl">
          <span style={{ '--value': timeLeft.hours } as React.CSSProperties}></span>
        </span>
        <span className="countdown text-xl sm:text-4xl">HOURS</span>
      </div>
      <div className="flex flex-col items-center font-bold p-2 border border-main_color rounded-box text-main_color">
        <span className="countdown text-6xl sm:text-9xl">
          <span style={{ '--value': timeLeft.minutes } as React.CSSProperties}></span>
        </span>
        <span className="countdown text-xl sm:text-4xl">MIN</span>
      </div>
      <div className="flex flex-col items-center font-bold p-2 border border-main_color rounded-box text-main_color glow-border">
        <span className="countdown text-6xl sm:text-9xl">
          <span style={{ '--value': timeLeft.seconds } as React.CSSProperties}></span>
        </span>
        <span className="countdown text-xl sm:text-4xl">SEC</span>
      </div>

      <style jsx>{`
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

        .shake {
          animation: shake 0.5s;
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(236, 72, 153, 0.5); 
          }
          50% {
            box-shadow: 0 0 20px rgba(157, 78, 221, 1);
          }
        }

        .glow-border {
          animation: glow 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default CustomCountdown;
