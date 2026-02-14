
import React, { useState, useEffect, useCallback, useRef } from 'react';
import TeddyBear from './components/TeddyBear';
import FloatingHearts from './components/FloatingHearts';
import { Position } from './types';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState<Position | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    const padding = 50;
    const maxX = window.innerWidth - 120 - padding;
    const maxY = window.innerHeight - 60 - padding;
    
    // Generate a new position that is definitely different and within bounds
    const newX = Math.max(padding, Math.random() * maxX);
    const newY = Math.max(padding, Math.random() * maxY);
    
    setNoButtonPos({ x: newX, y: newY });
  }, []);

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  // Reset No button position if screen is resized
  useEffect(() => {
    const handleResize = () => setNoButtonPos(null);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 select-none">
      <FloatingHearts />

      {/* Main Content Area */}
      <div 
        ref={containerRef}
        className="z-10 text-center space-y-8 max-w-2xl"
      >
        {!isAccepted ? (
          <>
            <div className="mb-4">
              <TeddyBear />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-cursive text-pink-600 drop-shadow-sm px-2">
              Sana, will you be my Valentine?
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-12 relative h-20 md:h-auto">
              <button
                onClick={handleYesClick}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-110 active:scale-95 transition-all duration-300 text-xl"
              >
                Yes 🥰
              </button>

              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={
                  noButtonPos 
                    ? { position: 'fixed', left: noButtonPos.x, top: noButtonPos.y, zIndex: 50 } 
                    : { position: 'relative' }
                }
                className="bg-gray-400 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-200 text-lg hover:shadow-xl active:bg-gray-500"
              >
                No 😔
              </button>
            </div>
          </>
        ) : (
          <div className="animate-in fade-in zoom-in duration-700 space-y-6">
             <div className="text-8xl mb-6">🎉❤️🥰</div>
             <h2 className="text-4xl md:text-6xl font-cursive text-pink-600 px-4">
               Yaaay! I knew you'd say yes!
             </h2>
             <p className="text-xl text-pink-500 font-semibold italic">
               You just made my heart skip a beat! 💓
             </p>
             <div className="mt-8 flex justify-center">
                <div className="animate-bounce">
                    <TeddyBear />
                </div>
             </div>
             <button 
               onClick={() => setIsAccepted(false)}
               className="mt-12 text-pink-400 hover:text-pink-600 underline text-sm"
             >
               Go back and try to click 'No' again? (Good luck!)
             </button>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="fixed top-10 left-10 text-pink-200 -rotate-12 pointer-events-none opacity-50 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100">
           <path d="M50 80 C20 60 10 40 10 25 C10 15 20 10 30 10 C40 10 45 15 50 20 C55 15 60 10 70 10 C80 10 90 15 90 25 C90 40 80 60 50 80" fill="currentColor" />
        </svg>
      </div>
      <div className="fixed bottom-10 right-10 text-pink-200 rotate-12 pointer-events-none opacity-50 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 100 100">
           <path d="M50 80 C20 60 10 40 10 25 C10 15 20 10 30 10 C40 10 45 15 50 20 C55 15 60 10 70 10 C80 10 90 15 90 25 C90 40 80 60 50 80" fill="currentColor" />
        </svg>
      </div>

      <style>{`
        .animate-in {
          animation-duration: 0.7s;
          animation-fill-mode: both;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.9); } to { transform: scale(1); } }
        .fade-in { animation-name: fadeIn; }
        .zoom-in { animation-name: zoomIn; }
      `}</style>
    </div>
  );
};

export default App;
