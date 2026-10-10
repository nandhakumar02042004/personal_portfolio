import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';
import { categorizedSkills } from '../../constants/skills';
import * as Icons from '../ui/Icons';

export default function Skills() {
  const [selectedTech, setSelectedTech] = useState(null);

  const renderIcon = (iconName, className = "w-7 h-7") => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-12 sm:py-16 border-t border-purple-900/25 bg-[#0c0717]/40 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-14"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          TECHNOLOGY TOOLBOX
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Capabilities</h2>
        <p className="text-slate-400 text-sm">Detailed overview of core languages, systems, and deployment platforms categorized by domain.</p>
      </motion.div>

      <div className="space-y-12 max-w-6xl mx-auto pb-12">
        {Object.entries(categorizedSkills).map(([category, items], cIdx) => (
          <div key={category} className="space-y-4">
            {/* Category Subheading */}
            <h3 className="text-xs font-bold text-violet-400 font-mono tracking-widest uppercase border-b border-purple-900/40 pb-2">
              // {category} Stack
            </h3>
            
            {/* Skills Grid for this Category */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: [0, -8, 0] 
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    opacity: { duration: 0.4, delay: idx * 0.03 },
                    y: {
                      repeat: Infinity,
                      duration: 4 + (idx % 3) * 0.5,
                      ease: "easeInOut",
                      delay: (idx % 6) * 0.1
                    }
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    boxShadow: '0 0 18px rgba(168, 85, 247, 0.2)'
                  }}
                  onClick={() => setSelectedTech(item)}
                  className="bg-[#130b24]/75 border border-purple-900/35 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 relative overflow-hidden group shadow-lg shadow-purple-950/30 backdrop-blur-sm cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(item.iconName)}
                  </div>
                  
                  <span className="font-bold font-mono text-xs text-white uppercase tracking-wide truncate max-w-full">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technology Details Modal */}
      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 bg-[#090514]/90 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md rounded-3xl bg-[#130b24] border border-purple-900/50 p-6 md:p-8 relative shadow-2xl shadow-purple-950/70 overflow-hidden font-sans"
            >
              <div className="hud-scanner" />
              <button 
                onClick={() => setSelectedTech(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white font-mono font-bold text-sm bg-[#0c0717] border border-purple-900/50 px-2.5 py-1 rounded-xl"
              >
                [X] CLOSE
              </button>
              
              <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-bold uppercase border-b border-purple-900/40 pb-3.5 mb-5">
                <Layers className="w-4 h-4" />
                <span>Technology Intel Log</span>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400">
                  {renderIcon(selectedTech.iconName)}
                </div>
                
                <div>
                  <span className="text-[9px] font-mono font-bold text-violet-400 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 uppercase tracking-wider font-sans select-none">
                    {selectedTech.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 font-mono uppercase tracking-tight">{selectedTech.name}</h3>
                </div>

                <div className="w-full border-t border-purple-900/40 pt-4 text-left space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Description & Core Use</span>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">{selectedTech.desc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
