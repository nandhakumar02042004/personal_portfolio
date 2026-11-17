import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechIcon } from '../ui/TechIcons';
import { skillCategories, skillsList } from '../../data/skills';

export default function Skills({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = ['All', ...skillCategories];

  const filteredSkills = activeCategory === 'All'
    ? skillsList
    : skillsList.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div>
            <h2 className="font-netflix text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-white">
              TECHNOLOGIES &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FF9D00] to-[#E58500]">
                SKILLS
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm max-w-md text-slate-400 leading-relaxed font-normal">
            Specialized modern toolkit for building high-performance web applications, fast APIs, and responsive digital products.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF9D00] to-[#FFC928] text-black shadow-md shadow-[#FF9D00]/25'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#FF9D00]/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid with Rich Hover Popups */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4 overflow-visible"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const isHovered = hoveredSkill?.name === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 cursor-pointer group ${
                    isHovered ? 'z-50' : 'z-10'
                  } ${
                    darkMode
                      ? 'bg-[#0D1B2D] border-[#1D334B] hover:border-[#FF9D00] shadow-lg shadow-black/40 hover:shadow-[0_8px_30px_rgba(255,157,0,0.25)]'
                      : 'bg-white border-slate-200 hover:border-[#FF9D00] shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Tech Icon Container */}
                  <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TechIcon name={skill.name} className="w-9 h-9" />
                  </div>

                  {/* Technology Name */}
                  <span className={`text-xs font-semibold tracking-tight truncate max-w-full ${
                    darkMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
                  }`}>
                    {skill.name}
                  </span>

                  {/* ── RICH INTERACTIVE HOVER POPUP ── */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 z-[9999] w-64 sm:w-72 p-3.5 rounded-2xl bg-[#091322]/98 border-2 border-[#FF9D00] shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_30px_rgba(255,157,0,0.4)] backdrop-blur-2xl pointer-events-none text-left"
                      >
                        {/* Specular top highlight */}
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFC928] to-transparent pointer-events-none" />

                        {/* Header: Icon, Name & Category */}
                        <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 flex items-center justify-center shrink-0">
                              <TechIcon name={skill.name} className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-sm text-white tracking-wide">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FF9D00]/15 text-[#FF9D00] border border-[#FF9D00]/30 uppercase tracking-wider">
                            {skill.category}
                          </span>
                        </div>

                        {/* Detailed Information */}
                        <p className="text-xs text-slate-300 leading-relaxed font-normal">
                          {skill.desc}
                        </p>

                        {/* Arrow Pointer downward */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#091322] border-r-2 border-b-2 border-[#FF9D00] rotate-45" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
