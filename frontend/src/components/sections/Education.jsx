import React from 'react';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Heading and Stats Card */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              ACADEMIC PATHWAY
            </div>
            <h2 className="text-5xl font-extrabold text-white mb-2 leading-none select-none">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full mb-6 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            
            <h3 className="text-lg font-bold text-slate-200 mb-3">My Academic Journey</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              A strong academic foundation that shaped my problem-solving mindset and technical expertise. Continuous learning and growth drive my journey.
            </p>
          </div>

          {/* Academic stats card */}
          <div className="bg-[#091122]/50 border border-slate-800/80 rounded-2xl p-6 space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">3+ Years</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Academic Duration</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Erode, Tamil Nadu</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">India</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Focused On</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Development & Business</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Card Layout (Timeline line & Year node removed) */}
        <div className="lg:col-span-8 flex items-center justify-center">
          <div className="w-full bg-[#091122]/70 border border-slate-800/60 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 relative group shadow-lg backdrop-blur-sm flex flex-col gap-6">
            
            {/* College Image - Banner Style (Top) */}
            <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden border border-slate-800/80 bg-[#050e1e] relative transition-colors">
              <img 
                src="/images/collage/BCAS.webp" 
                alt="Bharathidasan College of Arts and Science" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091122]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* College Details (Bottom) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-white font-mono group-hover:text-cyan-400 transition-colors leading-tight">
                    Bharathidasan College of Arts and Science
                  </h4>
                  <div className="text-sm font-semibold text-cyan-400 font-mono mt-1">
                    Bachelor of Commerce, Computer Applications
                  </div>
                  <span className="text-xs text-slate-400 font-sans block mt-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500" /> Erode, Tamil Nadu
                  </span>
                </div>
                
                <div className="flex gap-2 shrink-0">
                  <span className="text-[10px] font-bold text-cyan-400 px-2.5 py-1 rounded-lg bg-cyan-500/5 border border-cyan-500/10 font-mono shrink-0">
                    2021 – 2024
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                Completed college education, studying business systems, databases, programming principles, and commerce application integration.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Accounting", "DBMS", "Programming", "Web Basics", "Business Systems"].map((tag, tIdx) => (
                  <span key={tIdx} className="text-[9px] font-semibold text-slate-300 px-2 py-0.5 rounded-lg bg-[#050e1e] border border-slate-800/60 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
