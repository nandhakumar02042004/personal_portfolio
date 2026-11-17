import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FolderGit2, Users, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profile';

export default function StatsBar({ darkMode }) {
  const getIcon = (type) => {
    switch (type) {
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-amber-500" strokeWidth={2.5} />;
      case 'folder':
        return <FolderGit2 className="w-5 h-5 text-blue-400" strokeWidth={2.5} />;
      case 'users':
        return <Users className="w-5 h-5 text-orange-400" strokeWidth={2.5} />;
      case 'check':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" strokeWidth={2.5} />;
      default:
        return null;
    }
  };

  const getIconBg = (color) => {
    switch (color) {
      case 'orange':
        return 'bg-amber-500/15 border border-amber-500/30';
      case 'blue':
        return 'bg-blue-500/15 border border-blue-500/30';
      case 'green':
        return 'bg-emerald-500/15 border border-emerald-500/30';
      default:
        return 'bg-white/10 border border-white/20';
    }
  };

  return (
    <section className="relative -mt-4 pb-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {profileData.stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-[#0D1B2D] border-[#1D334B] hover:border-[#FF9D00]/40 shadow-lg shadow-black/40'
                  : 'bg-white border-slate-200 hover:border-[#FF9D00]/50 shadow-sm'
              }`}
            >
              {/* Colored Rounded Icon Box */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getIconBg(stat.color)}`}>
                {getIcon(stat.iconType)}
              </div>

              {/* Stat Value & Label */}
              <div>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-xs sm:text-[13px] font-medium leading-snug mt-0.5 ${
                  darkMode ? 'text-[#A7B2C5]' : 'text-slate-500'
                }`}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
