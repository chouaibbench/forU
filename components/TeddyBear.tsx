
import React from 'react';

const TeddyBear: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto drop-shadow-xl animate-bounce-slow">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Ears */}
        <circle cx="60" cy="50" r="25" fill="#a67c52" />
        <circle cx="140" cy="50" r="25" fill="#a67c52" />
        <circle cx="60" cy="50" r="15" fill="#c4a484" />
        <circle cx="140" cy="50" r="15" fill="#c4a484" />
        
        {/* Head */}
        <circle cx="100" cy="80" r="50" fill="#a67c52" />
        
        {/* Eyes */}
        <circle cx="80" cy="75" r="5" fill="#333" />
        <circle cx="120" cy="75" r="5" fill="#333" />
        
        {/* Muzzle */}
        <ellipse cx="100" cy="95" rx="18" ry="12" fill="#c4a484" />
        <circle cx="100" cy="90" r="4" fill="#333" />
        <path d="M90 100 Q100 110 110 100" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        
        {/* Body */}
        <ellipse cx="100" cy="140" rx="45" ry="50" fill="#a67c52" />
        
        {/* Arms holding the heart */}
        <ellipse cx="60" cy="130" rx="15" ry="25" fill="#a67c52" transform="rotate(-30 60 130)" />
        <ellipse cx="140" cy="130" rx="15" ry="25" fill="#a67c52" transform="rotate(30 140 130)" />
        
        {/* The Heart */}
        <path 
          d="M100 160 C100 160 70 140 70 120 C70 105 90 100 100 115 C110 100 130 105 130 120 C130 140 100 160 100 160" 
          fill="#ff4d6d" 
        />
        <text x="100" y="132" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" className="font-sans">LOVE</text>
        
        {/* Feet */}
        <circle cx="70" cy="180" r="20" fill="#a67c52" />
        <circle cx="130" cy="180" r="20" fill="#a67c52" />
        <circle cx="70" cy="180" r="12" fill="#c4a484" />
        <circle cx="130" cy="180" r="12" fill="#c4a484" />
      </svg>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TeddyBear;
