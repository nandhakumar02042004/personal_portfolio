import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MessageSquare } from 'lucide-react';
import Typewriter from '../ui/Typewriter';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full pt-24 pb-12 sm:pt-28 sm:pb-16 min-h-[calc(100vh-2rem)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c0e35] via-[#120822] to-[#090514] scroll-mt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)] pointer-events-none" />
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
            <span className="text-violet-400"><Typewriter words={["Web Application Developer"]} delay={3000} /></span>
          </h3>

          <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8 text-justify">
            Building scalable web applications, modern user interfaces, and high-performance backend systems using React, Python, FastAPI, PostgreSQL, and cloud technologies.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#quests" 
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-full shadow-lg shadow-purple-900/30 transition-all hover:scale-[1.02] text-base"
            >
              <span>View Projects</span>
              <Compass className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-purple-800/80 hover:border-violet-400 text-white font-bold rounded-full transition-all text-base hover:scale-[1.02]"
            >
              <span>Let's Talk</span>
              <MessageSquare className="w-4.5 h-4.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Sleek Floating Developer Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 w-full flex items-center justify-center relative min-h-[380px] lg:min-h-[480px]"
        >
          {/* Subtle Ambient Radial Glows in violet/purple */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-purple-600/25 rounded-full blur-3xl pointer-events-none -top-10 -right-10" />
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none -bottom-10 -left-10" />

          {/* Floating Showcase Image Card */}
          <motion.div 
            animate={{ 
              y: [-8, 8, -8]
            }}
            whileHover={{
              scale: 1.02
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              scale: { duration: 0.3 }
            }}
            className="relative z-10 max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl w-full flex items-center justify-center p-1 sm:p-1.5 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-violet-600/40 via-purple-500/50 to-fuchsia-500/40 backdrop-blur-md shadow-2xl shadow-purple-950/60"
          >
            <div className="w-full overflow-hidden rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] bg-[#090514]/90">
              <img 
                src="/hero_developer.jpg" 
                alt="Nandhakumar - Web Application Developer" 
                className="w-full h-auto max-h-[520px] md:max-h-[580px] object-cover object-center select-none transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
