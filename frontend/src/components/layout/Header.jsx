import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#020813]/80 border-b border-slate-800/40"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#home" className="text-cyan-400 font-semibold transition-colors">Hero</a>
          <a href="#profile" className="hover:text-cyan-400 transition-colors">Profile</a>
          <a href="#quests" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Core Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="/resume.pdf" 
            download
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-cyan-400 bg-transparent border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/5 active:scale-[0.98] transition-all group"
          >
            <span>Download CV</span>
            <FileText className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="hidden sm:flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 active:scale-[0.98] transition-all"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.header>
  );
}
