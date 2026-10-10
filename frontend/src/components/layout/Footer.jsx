import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/30 bg-[#0c0717] font-mono text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center justify-center gap-1.5 font-mono text-[11px] text-slate-400 text-center">
        <p>&copy; {new Date().getFullYear()} Nandhakumar. All rights reserved.</p>
        <p className="text-[10px] text-slate-500">Designed and Developed by Nandhakumar</p>
      </div>
    </footer>
  );
}
