import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

export default function SystemHighlight() {
  return (
    <section id="boss-battles" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/40">
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4 border border-red-500/15">
          <Shield className="w-3.5 h-3.5" />
          FEATURED PROJECT
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Featured Enterprise Project</h2>
        <p className="text-slate-400 text-sm">High-scale, complex client web architectures built and optimized.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-[#091122]/80 border-2 border-red-500/20 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
        <div className="hud-scanner" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-red-500 text-2xl font-black font-mono animate-pulse">🚀 FEATURED PROJECT: KEC Website</span>
              <span className="text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded uppercase font-sans">Completed (100%)</span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              An extensive multi-page institutional portal containing high-performance database tables, private administration dashboards, responsive grid directories, and comprehensive search optimizations.
            </p>

            {/* Deployment Features */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400 w-4 h-4 shrink-0" />
                <span>Multi-page Portal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400 w-4 h-4 shrink-0" />
                <span>Admin Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400 w-4 h-4 shrink-0" />
                <span>Responsive UI Tables</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400 w-4 h-4 shrink-0" />
                <span>SEO Schema Project</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-36 h-36 rounded-3xl bg-red-500/5 border border-red-500/20 flex flex-col items-center justify-center relative shadow-lg shadow-red-500/5 group hover:border-red-500/40 transition-colors p-4 flex-col justify-center text-center font-mono text-xs space-y-2">
              <div>
                <span className="text-slate-500 block uppercase text-[9px]">Scale</span>
                <span className="text-red-400 font-bold text-sm">Enterprise</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[9px]">Users</span>
                <span className="text-red-400 font-bold text-sm">10,000+</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[9px]">Impact</span>
                <span className="text-emerald-400 font-bold text-sm">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
