import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { storyChapters } from '../../constants/experience';

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-12 sm:py-16 border-t border-purple-900/25 scroll-mt-20">
      {/* Centered Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-14"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          CAREER CHRONICLES
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Professional History</h2>
        <p className="text-slate-400 text-sm">Chronological history of professional roles and technical milestones.</p>
      </motion.div>

      {/* Centered Content */}
      <div className="max-w-3xl mx-auto space-y-6 relative before:absolute before:left-4 sm:before:left-6 before:top-4 before:bottom-4 before:w-[1px] before:bg-purple-900/40">
        {storyChapters.map((chapter, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-10 sm:pl-14 group" 
            key={index}
          >
            <div className="absolute left-2.5 sm:left-4.5 top-6 w-3.5 h-3.5 rounded-full bg-[#090514] border-2 border-violet-500 group-hover:bg-violet-400 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
            
            <div className="bg-[#130b24]/75 border border-purple-900/30 rounded-2xl p-6 group-hover:border-violet-500/40 transition-all shadow-md shadow-purple-950/30 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors font-mono">{chapter.title}</h4>
                <span className="text-xs font-bold text-violet-400 px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 font-mono w-fit">
                  {chapter.year}
                </span>
              </div>
              {chapter.company && (
                <div className="text-xs text-slate-300 font-sans mb-3 flex flex-wrap gap-x-2.5 gap-y-1 font-mono items-center">
                  <span className="font-semibold text-violet-400/90">{chapter.company}</span>
                  {chapter.dateRange && <span className="text-slate-600 font-sans">|</span>}
                  {chapter.dateRange && <span className="text-slate-400 text-[11px]">{chapter.dateRange}</span>}
                </div>
              )}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{chapter.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
