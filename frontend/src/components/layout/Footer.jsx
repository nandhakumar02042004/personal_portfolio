import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile';

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 transition-colors ${
      darkMode ? 'border-[#1D334B]/60 bg-[#07111F]' : 'border-slate-200 bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright following unified pattern */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-netflix text-2xl tracking-widest uppercase">
            <span className="text-white">NANDHAKUMAR</span>
            <span className="text-[#FF9D00]">.</span>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <p className="font-mono text-xs text-slate-400">
            &copy; {new Date().getFullYear()} NANDHAKUMAR. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-[#FF9D00] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-[#FF9D00] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-[#FF9D00] transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
              darkMode
                ? 'bg-[#0D1B2D] border-[#1D334B] text-slate-300 hover:text-white hover:border-[#FF9D00]/60'
                : 'bg-white border-slate-300 text-slate-700 hover:text-black hover:border-[#FF9D00]'
            }`}
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
