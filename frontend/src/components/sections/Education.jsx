import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-12 sm:py-16 border-t border-purple-900/25 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Heading and Stats Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 space-y-6"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              ACADEMIC PATHWAY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Education
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 rounded-full mb-4 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            
            <h3 className="text-lg font-bold text-slate-200 mb-3">My Academic Journey</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              A strong academic foundation that shaped my problem-solving mindset and technical expertise. Continuous learning and growth drive my journey.
            </p>
          </div>

          {/* Academic stats card */}
          <div className="bg-[#130b24]/50 border border-purple-900/35 rounded-2xl p-6 space-y-4 max-w-sm shadow-md shadow-purple-950/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">3+ Years</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Academic Duration</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Erode, Tamil Nadu</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">India</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Focused On</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Development & Business</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Card Layout */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 flex items-center justify-center"
        >
          <div className="w-full bg-[#130b24]/75 border border-purple-900/30 hover:border-violet-500/40 rounded-2xl p-6 transition-all duration-300 relative group shadow-lg shadow-purple-950/30 backdrop-blur-sm flex flex-col gap-6">
            
            {/* College Image - Banner Style (Top) */}
            <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden border border-purple-900/40 bg-[#0c0717] relative transition-colors">
              <img 
                src="/images/collage/BCAS.webp" 
                alt="Bharathidasan College of Arts and Science" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#130b24]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* College Details (Bottom) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-white font-mono group-hover:text-violet-400 transition-colors leading-tight">
                    Bharathidasan College of Arts and Science
                  </h4>
                  <div className="text-sm font-semibold text-violet-400 font-mono mt-1">
                    Bachelor of Commerce, Computer Applications
                  </div>
                  <span className="text-xs text-slate-400 font-sans block mt-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" /> Erode, Tamil Nadu
                  </span>
                </div>
                
                <div className="flex gap-2 shrink-0">
                  <span className="text-[10px] font-bold text-violet-400 px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 font-mono shrink-0">
                    2021 – 2024
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                Completed college education, studying business systems, databases, programming principles, and commerce application integration.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Accounting", "DBMS", "Programming", "Web Basics", "Business Systems"].map((tag, tIdx) => (
                  <span key={tIdx} className="text-[9px] font-semibold text-slate-300 px-2 py-0.5 rounded-lg bg-[#0c0717] border border-purple-900/40 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
