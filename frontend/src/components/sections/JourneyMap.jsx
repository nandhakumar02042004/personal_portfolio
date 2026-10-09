import React from 'react';
import { Compass } from 'lucide-react';

export default function JourneyMap() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/40">
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4">
          <Compass className="w-3.5 h-3.5" />
          TECHNICAL PROGRESSION
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Professional Roadmap</h2>
        <p className="text-slate-400 text-sm">Career path trajectory and technical growth milestones.</p>
      </div>

      <div className="max-w-md mx-auto flex flex-col items-center gap-4 font-mono text-sm font-bold">
        {['Beginner', 'Frontend Developer', 'React Developer', 'Full Stack Developer', 'Senior Engineer'].map((node, index, arr) => (
          <React.Fragment key={index}>
            <div className={`px-6 py-3.5 rounded-2xl border text-center w-full shadow-md ${
              node === 'Full Stack Developer' 
                ? 'border-cyan-500 bg-cyan-500/15 text-cyan-300' 
                : 'border-slate-800 bg-[#091122]/70 text-slate-400'
            }`}>
              {node === 'Full Stack Developer' ? '⚡ ' : ''}{node}
            </div>
            {index < arr.length - 1 && (
              <div className="text-cyan-500 text-lg py-1">↓</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
