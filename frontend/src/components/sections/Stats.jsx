import React from 'react';

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 border-t border-purple-900/25">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto text-center font-mono">
        <div className="bg-[#130b24]/70 border border-purple-900/30 p-5 rounded-2xl shadow-sm hover:border-violet-500/30 transition-colors">
          <h4 className="text-2xl font-extrabold text-violet-400 mb-1">25+</h4>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
            <span>📂</span> Projects
          </p>
        </div>
        <div className="bg-[#130b24]/70 border border-purple-900/30 p-5 rounded-2xl shadow-sm hover:border-violet-500/30 transition-colors">
          <h4 className="text-2xl font-extrabold text-violet-400 mb-1">1000+</h4>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
            <span>💻</span> Commits
          </p>
        </div>
        <div className="bg-[#130b24]/70 border border-purple-900/30 p-5 rounded-2xl shadow-sm hover:border-violet-500/30 transition-colors">
          <h4 className="text-2xl font-extrabold text-violet-400 mb-1">15+</h4>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
            <span>🏢</span> Clients
          </p>
        </div>
        <div className="bg-[#130b24]/70 border border-purple-900/30 p-5 rounded-2xl shadow-sm hover:border-violet-500/30 transition-colors">
          <h4 className="text-2xl font-extrabold text-violet-400 mb-1">40+</h4>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
            <span>⭐</span> Repositories
          </p>
        </div>
        <div className="bg-[#130b24]/70 border border-purple-900/30 p-5 rounded-2xl shadow-sm col-span-2 md:col-span-1 hover:border-violet-500/30 transition-colors">
          <h4 className="text-2xl font-extrabold text-violet-400 mb-1">∞</h4>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1 font-sans">
            <span>☕</span> Coffee
          </p>
        </div>
      </div>
    </section>
  );
}
