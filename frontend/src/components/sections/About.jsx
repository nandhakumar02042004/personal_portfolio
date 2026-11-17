import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';
import { profileData } from '../../data/profile';

export default function About({ darkMode }) {
  const getCardIcon = (iconType) => {
    switch (iconType) {
      case 'mapPin':
        return <MapPin className="w-5 h-5 text-amber-500" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      case 'graduation':
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'shieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return null;
    }
  };

  const getIconContainerStyle = (color) => {
    switch (color) {
      case 'orange':
        return 'bg-amber-500/15 border border-amber-500/30';
      case 'purple':
        return 'bg-purple-500/15 border border-purple-500/30';
      case 'blue':
        return 'bg-blue-500/15 border border-blue-500/30';
      case 'green':
        return 'bg-emerald-500/15 border border-emerald-500/30';
      default:
        return 'bg-white/10';
    }
  };

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded Container Card with smooth scroll rise */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`rounded-3xl p-6 sm:p-10 md:p-12 border transition-all ${
            darkMode
              ? 'bg-[#0D1B2D] border-[#1D334B] shadow-2xl shadow-black/60'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Biography & Intro */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-5">
                <span>About Me</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-5">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                  A Problem Solver Who Loves Building{' '}
                </span>
                <span className="text-[#FF9D00]">
                  Useful Products
                </span>
              </h2>

              {/* Bio Paragraph */}
              <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
                darkMode ? 'text-[#A7B2C5]' : 'text-slate-600'
              }`}>
                {profileData.aboutBio}
              </p>

              {/* "More About Me" Button */}
              <button
                onClick={() => handleScroll('#experience')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-black bg-gradient-to-r from-[#FF9D00] to-[#FFC928] hover:shadow-[0_0_20px_rgba(255,157,0,0.4)] active:scale-95 transition-all shadow-md cursor-pointer group"
              >
                <span>More About Me</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>
            </div>

            {/* Right Column: 4 Information Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {profileData.aboutCards.map((card) => (
                <div
                  key={card.id}
                  className={`p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 ${
                    darkMode
                      ? 'bg-[#07111F]/70 border-[#1D334B] hover:border-[#FF9D00]/40'
                      : 'bg-slate-50 border-slate-200 hover:border-[#FF9D00]/50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${getIconContainerStyle(card.color)}`}>
                    {getCardIcon(card.iconType)}
                  </div>
                  <div>
                    <span className={`text-[11px] font-semibold uppercase tracking-wider block ${
                      darkMode ? 'text-[#A7B2C5]' : 'text-slate-400'
                    }`}>
                      {card.label}
                    </span>
                    <span className={`text-sm font-bold leading-snug block mt-0.5 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {card.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
