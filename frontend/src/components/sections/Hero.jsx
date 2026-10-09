import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MessageSquare } from 'lucide-react';
import Typewriter from '../ui/Typewriter';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full pt-32 pb-16 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#081b29] via-[#040e1a] to-[#020813]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,238,255,0.04),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Column: Developer Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 text-left flex flex-col justify-center"
        >
          <h1 className="text-5.5xl sm:text-6.5xl md:text-7xl lg:text-7.5xl font-extrabold tracking-tight text-white mb-3 leading-none select-none">
            Hi, I'm Nandhakumar
          </h1>

          <h3 className="text-3xl sm:text-3.5xl md:text-4xl lg:text-4.5xl font-extrabold text-white mb-6 font-mono">
            <span className="text-cyan-400"><Typewriter words={["Web Application Developer"]} delay={3000} /></span>
          </h3>

          <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8 text-justify">
            Building scalable web applications, modern user interfaces, and high-performance backend systems using React, Python, FastAPI, PostgreSQL, and cloud technologies.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#quests" 
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold rounded-full shadow-lg shadow-cyan-500/10 transition-all hover:scale-[1.02] text-base"
            >
              <span>View Projects</span>
              <Compass className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-slate-700 hover:border-white text-white font-bold rounded-full transition-all text-base hover:scale-[1.02]"
            >
              <span>Let's Talk</span>
              <MessageSquare className="w-4.5 h-4.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean Floating Profile Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 w-full flex items-center justify-center relative min-h-[380px] lg:min-h-[480px]"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Clean Floating Profile Image without colored border line */}
          <motion.div 
            animate={{ 
              y: [-10, 10, -10]
            }}
            whileHover={{
              scale: 1.03
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              scale: { duration: 0.3 }
            }}
            className="relative z-10 max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl w-full flex items-center justify-center cursor-pointer"
          >
            <img 
              src="/profile.png" 
              alt="Nandhakumar - Web Application Developer" 
              className="w-full max-h-[560px] md:max-h-[620px] object-contain drop-shadow-[0_20px_45px_rgba(0,238,255,0.25)] select-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
