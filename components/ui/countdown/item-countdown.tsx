import React from 'react';

interface ItemCountdownProps {
  itemCount: number;
  shake: boolean;
}

const ItemCountdown: React.FC<ItemCountdownProps> = ({ itemCount, shake }) => {
  return (
    <div className={`flex flex-col items-center font-bold p-2 text-main_color ${shake ? 'shake' : ''}`}>
      <span className="text-6xl sm:text-9xl">{itemCount}</span>
      <span className="text-xl sm:text-4xl">ITEMS LEFT</span>

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
      `}</style>
    </div>
  );
};

export default ItemCountdown;
