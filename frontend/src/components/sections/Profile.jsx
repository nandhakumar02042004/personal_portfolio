import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Profile() {
  return (
    <section id="profile" className="max-w-7xl mx-auto px-6 py-12 sm:py-16 border-t border-white/10 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-sm font-semibold uppercase tracking-wider font-mono">
            <Award className="w-4 h-4" />
            ABOUT ME
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-bold text-white leading-tight">
            Engineering Scalable Web Solutions
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-justify">
            I'm Nandhakumar, a Web Application Developer passionate about building modern, scalable, and user-focused web applications. I specialize in React, Python, FastAPI, PostgreSQL, and responsive frontend development. I enjoy solving real-world problems through clean architecture, intuitive interfaces, and efficient backend systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
