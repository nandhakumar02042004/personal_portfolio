import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Profile() {
  return (
    <section id="profile" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex lg:col-span-5 justify-center relative group min-h-[320px]"
        >
          <motion.div 
            animate={{ 
              y: [10, -10, 10]
            }}
            whileHover={{
              scale: 1.03
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              scale: { duration: 0.3 }
            }}
            className="relative max-w-sm w-full flex items-center justify-center cursor-pointer"
          >
            {/* Subtle Ambient Radial Glow */}
            <div className="absolute w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Clean Developer's portrait image */}
            <img 
              src="/profile.png" 
              alt="Nandhakumar Profile" 
              className="w-full max-h-[420px] object-contain drop-shadow-[0_15px_35px_rgba(0,238,255,0.2)] select-none"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold uppercase tracking-wider font-mono">
            <Award className="w-4 h-4" />
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-3.5xl md:text-4xl font-bold text-white leading-tight">
            Engineering Scalable Web Solutions
          </h2>
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl leading-relaxed font-normal text-justify">
            I'm Nandhakumar, a Web Application Developer passionate about building modern, scalable, and user-focused web applications. I specialize in React, Python, FastAPI, PostgreSQL, and responsive frontend development. I enjoy solving real-world problems through clean architecture, intuitive interfaces, and efficient backend systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
