import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const letters = 'NANDHAKUMAR'.split('');
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    // Trigger light shimmer sweep across the letters
    const shimmerTimer = setTimeout(() => {
      setShimmer(true);
    }, 1600);

    // Complete preloader and transition smoothly to home page
    const exitTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3800);

    return () => {
      clearTimeout(shimmerTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleSkip}
      className="fixed inset-0 z-[9999] bg-black text-white flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none px-4"
    >
      {/* Skip button in top-right corner */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-6 right-6 z-50 text-[11px] sm:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#FF9D00]/30 bg-black/60 hover:bg-[#FF9D00]/20 text-[#FF9D00] hover:text-white transition-all backdrop-blur-md cursor-pointer"
      >
        Skip &rarr;
      </button>

      {/* Atmospheric Orange Eclipse Halo Flare in Center */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: [0.9, 1.25, 1],
          opacity: [0.35, 0.7, 0.45]
        }}
        transition={{
          scale: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[720px] md:h-[720px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,157,0,0.45) 0%, rgba(255,183,0,0.18) 38%, rgba(0,0,0,0) 70%)',
          filter: 'blur(70px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Kinetic Typography Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl text-center">
        
        {/* Big Staggered Letters: N A N D H A K U M A R */}
        <div className="relative overflow-visible flex items-center justify-center flex-wrap">
          <h1 className="font-netflix text-6xl sm:text-8.5xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-wider leading-none select-none flex items-center justify-center">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 1.35,
                  filter: 'blur(10px)'
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: 'blur(0px)'
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.2 + index * 0.055,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`inline-block relative text-transparent bg-clip-text transition-all duration-700 ${
                  shimmer
                    ? 'bg-gradient-to-b from-white via-[#FFF4D6] to-[#CBD5E1] drop-shadow-[0_0_45px_rgba(255,157,0,0.6)]'
                    : 'bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_0_30px_rgba(255,157,0,0.35)]'
                }`}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Luminous light sweep flare across the text */}
          <motion.div
            initial={{ x: '-120%', opacity: 0 }}
            animate={
              shimmer
                ? { x: '120%', opacity: [0, 0.8, 0] }
                : { x: '-120%', opacity: 0 }
            }
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none transform -skew-x-25 blur-sm"
          />
        </div>

      </div>

      {/* Cinematic Golden Orange Bottom Progress Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3.8, ease: 'linear' }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF9D00] to-transparent origin-left opacity-90 shadow-[0_0_12px_rgba(255,157,0,0.85)]"
      />
    </motion.div>
  );
}
