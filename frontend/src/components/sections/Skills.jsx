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
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/40 bg-slate-950/10">
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          TECHNOLOGY TOOLBOX
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Technical Capabilities</h2>
        <p className="text-slate-400 text-sm">Detailed overview of core languages, systems, and deployment platforms categorized by domain.</p>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto pb-12">
        {Object.entries(categorizedSkills).map(([category, items], cIdx) => (
          <div key={category} className="space-y-4">
            {/* Category Subheading */}
            <h3 className="text-xs font-bold text-cyan-400 font-mono tracking-widest uppercase border-b border-slate-850/80 pb-2">
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
                    borderColor: 'rgba(0, 238, 255, 0.4)',
                    boxShadow: '0 0 15px rgba(0, 238, 255, 0.15)'
                  }}
                  onClick={() => setSelectedTech(item)}
                  className="bg-[#091122]/70 border border-slate-800/60 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 relative overflow-hidden group shadow-lg backdrop-blur-sm cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
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
          <div className="fixed inset-0 bg-[#020813]/90 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md rounded-3xl bg-[#091122] border border-slate-800 p-6 md:p-8 relative shadow-2xl overflow-hidden font-sans"
            >
              <div className="hud-scanner" />
              <button 
                onClick={() => setSelectedTech(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white font-mono font-bold text-sm bg-[#050e1e] border border-slate-800 px-2.5 py-1 rounded-xl"
              >
                [X] CLOSE
              </button>
              
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase border-b border-slate-850 pb-3.5 mb-5">
                <Layers className="w-4 h-4" />
                <span>Technology Intel Log</span>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  {renderIcon(selectedTech.iconName)}
                </div>
                
                <div>
                  <span className="text-[9px] font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/5 border border-cyan-500/10 uppercase tracking-wider font-sans select-none">
                    {selectedTech.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 font-mono uppercase tracking-tight">{selectedTech.name}</h3>
                </div>

                <div className="w-full border-t border-slate-850 pt-4 text-left space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Description & Core Use</span>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans">{selectedTech.desc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
