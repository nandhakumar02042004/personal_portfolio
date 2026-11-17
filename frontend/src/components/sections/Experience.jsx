import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { workExperience } from '../../data/experience';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 text-left">
          <div>
            <div className="flex items-center gap-2 text-[#FF9D00] text-xs sm:text-sm font-mono font-bold tracking-[0.3em] uppercase mb-2">
              <span>≡ CAREER TIMELINE</span>
            </div>
            <h2 className="font-netflix text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-white">
              WORK{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FF9D00] to-[#E58500]">
                EXPERIENCE
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm max-w-md text-slate-400 leading-relaxed font-normal">
            Professional journey building real-world web applications, production systems, and client solutions.
          </p>
        </div>

        {/* Full-Width Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#FF9D00] before:via-[#FF9D00]/50 before:to-transparent">
          {workExperience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Node Dot on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full bg-[#07111F] border-2 border-[#FF9D00] shadow-[0_0_15px_rgba(255,157,0,0.85)] group-hover:scale-125 transition-transform" />

              {/* Full Width Experience Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  darkMode
                    ? 'bg-gradient-to-b from-[#0D1B2D]/95 via-[#0A1422]/98 to-[#060D17] border-[#1D334B] hover:border-[#FF9D00]/50 shadow-xl shadow-black/50'
                    : 'bg-white border-slate-200 hover:border-[#FF9D00]/50 shadow-md'
                }`}
              >
                {/* Specular top highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                {/* Role, Period & Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                      <span className="text-[#FFC928]">{exp.company}</span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                          <MapPin size={12} className="text-[#FF9D00]" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Period Badge */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FF9D00]/15 text-[#FF9D00] border border-[#FF9D00]/30 shrink-0 self-start md:self-auto">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </span>
                </div>

                {/* Paragraph Description */}
                {exp.desc && (
                  <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300 mb-5 font-normal">
                    {exp.desc}
                  </p>
                )}

                {/* Bullet Points */}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 text-slate-300"
                      >
                        <CheckCircle2 size={16} className="text-[#FF9D00] mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
