import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education({ darkMode = true }) {
  return (
    <section id="education" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 text-left">
          <div>
            <div className="flex items-center gap-2 text-[#FF9D00] text-xs sm:text-sm font-mono font-bold tracking-[0.3em] uppercase mb-2">
              <span>≡ ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="font-netflix text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-white">
              ACADEMIC{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FF9D00] to-[#E58500]">
                BACKGROUND
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm max-w-md text-slate-400 leading-relaxed font-normal">
            Formal collegiate education, computer application foundations, and professional full-stack engineering certifications.
          </p>
        </div>

        {/* Full-Width Grid: College Degree + Technical Certification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: College Degree (Cols 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-gradient-to-b from-[#0D1B2D]/95 via-[#0A1422]/98 to-[#060D17] border border-[#1D334B] hover:border-[#FF9D00]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Specular top highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF9D00]/40 to-transparent pointer-events-none" />

            <div>
              {/* College Campus Photo Banner */}
              <div className="w-full h-44 sm:h-56 rounded-xl overflow-hidden border border-white/10 mb-6 relative">
                <img
                  src="/images/collage/BCAS.webp"
                  alt="Bharathidasan College of Arts and Science"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1422] via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/70 border border-white/20 text-[#FFC928] backdrop-blur-md">
                  College Campus
                </span>
              </div>

              {/* Title & Qualification */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Bharathidasan College of Arts and Science
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#FF9D00] px-2.5 py-0.5 rounded-full bg-[#FF9D00]/15 border border-[#FF9D00]/30 shrink-0">
                  <Calendar size={12} />
                  <span>2021 – 2024</span>
                </span>
              </div>

              <div className="text-sm font-semibold text-[#FFC928] mb-2">
                Bachelor of Commerce with Computer Application (B.Com CA)
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
                <MapPin size={13} className="text-[#FF9D00]" />
                <span>Erode, Tamil Nadu</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                Completed comprehensive 3-year collegiate degree blending commerce systems with computer programming, relational databases (DBMS), web development fundamentals, and computational applications.
              </p>
            </div>

            {/* Coursework Tags */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {['DBMS & SQL', 'Web Application Basics', 'Programming Logic', 'Business Systems', 'Accounting'].map((tag) => (
                <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Professional Technical Certification (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-gradient-to-b from-[#0D1B2D]/95 via-[#0A1422]/98 to-[#060D17] border border-[#1D334B] hover:border-[#FF9D00]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Specular top highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFC928]/40 to-transparent pointer-events-none" />

            <div>
              {/* Certification Icon & Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#FF9D00]/15 border border-[#FF9D00]/30 flex items-center justify-center text-[#FF9D00] shadow-[0_0_20px_rgba(255,157,0,0.3)] mb-6">
                <Award size={26} />
              </div>

              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#FF9D00] uppercase">
                  PROFESSIONAL CERTIFICATION
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400">
                  Certified
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Python Fullstack Development
              </h3>

              <div className="text-sm font-semibold text-[#FFC928] mb-3">
                Indra Institute of Education
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                Intensive professional development curriculum covering Python, FastAPI, React frontend integration, PostgreSQL relational architecture, RESTful API design, and full-stack software deployment.
              </p>

              {/* Competencies checklist */}
              <div className="space-y-2.5 mb-6">
                {[
                  'Python Architecture & Object-Oriented Design',
                  'FastAPI Asynchronous Backend APIs',
                  'React.js Component Ecosystem & State',
                  'PostgreSQL Schema Design & Query Optimization'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-300">
                    <CheckCircle2 size={15} className="text-[#FF9D00] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Pills */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'REST APIs', 'Git'].map((s) => (
                <span key={s} className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[#FF9D00]/10 border border-[#FF9D00]/25 text-[#FFC928]">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
