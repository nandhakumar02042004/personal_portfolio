import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, LayoutGrid, TrendingUp, Send } from 'lucide-react';

/* ── 01. THE DEVELOPER: Sleek Code IDE Terminal ── */
function DeveloperVisual() {
  return (
    <div className="w-full h-full bg-[#050B14] p-3 flex flex-col justify-between select-none relative overflow-hidden font-mono text-[11px]">
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF9D00]/10 rounded-full blur-2xl pointer-events-none" />
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
        </div>
        <span className="text-[10px] text-slate-500 font-mono tracking-wider">developer.tsx</span>
      </div>

      {/* Code Snippet */}
      <div className="space-y-1 text-[11px] leading-relaxed pt-1">
        <div className="flex items-center gap-1 text-slate-400">
          <span className="text-[#FF9D00]">const</span>
          <span className="text-white font-semibold">dev</span>
          <span className="text-[#FF9D00]">=</span>
          <span className="text-[#38BDF8]">&#123;</span>
        </div>
        <div className="pl-3 flex items-center gap-1.5 text-slate-300">
          <span className="text-slate-400">role:</span>
          <span className="text-[#FFC928]">'Full-Stack'</span>
          <span className="text-slate-500">,</span>
        </div>
        <div className="pl-3 flex items-center gap-1.5 text-slate-300">
          <span className="text-slate-400">status:</span>
          <span className="text-[#34D399] font-medium">'Building'</span>
          <span className="w-1.5 h-3 bg-[#FF9D00] animate-pulse inline-block" />
        </div>
      </div>
    </div>
  );
}

/* ── 02. TECH STACK: Floating Glowing Tech Badges ── */
function TechStackVisual() {
  return (
    <div className="w-full h-full bg-[#050B14] p-2 flex flex-col justify-center items-center select-none relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FF9D00]/10 blur-xl pointer-events-none" />
      
      {/* Grid of Tech Badges */}
      <div className="grid grid-cols-3 gap-1.5 w-full z-10">
        <div className="flex items-center justify-center py-1.5 px-1 rounded-md bg-white/[0.04] border border-cyan-500/30 shadow-[0_0_8px_rgba(6,182,212,0.15)] group-hover:border-cyan-400 transition-colors">
          <span className="text-[10px] font-bold text-cyan-400 tracking-tight">⚛ React</span>
        </div>
        <div className="flex items-center justify-center py-1.5 px-1 rounded-md bg-white/[0.04] border border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.15)] group-hover:border-emerald-400 transition-colors">
          <span className="text-[10px] font-bold text-emerald-400 tracking-tight">⚡ FastAPI</span>
        </div>
        <div className="flex items-center justify-center py-1.5 px-1 rounded-md bg-white/[0.04] border border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.15)] group-hover:border-amber-400 transition-colors">
          <span className="text-[10px] font-bold text-amber-400 tracking-tight">🐍 Python</span>
        </div>
        <div className="flex items-center justify-center py-1.5 px-1 rounded-md bg-white/[0.04] border border-sky-500/30 shadow-[0_0_8px_rgba(14,165,233,0.15)] group-hover:border-sky-400 transition-colors">
          <span className="text-[10px] font-bold text-sky-400 tracking-tight">🐘 Postgres</span>
        </div>
        <div className="flex items-center justify-center py-1.5 px-1 rounded-md bg-white/[0.04] border border-[#FF9D00]/40 shadow-[0_0_8px_rgba(255,157,0,0.2)] group-hover:border-[#FF9D00] transition-colors">
          <span className="text-[10px] font-bold text-[#FF9D00] tracking-tight">▲ Next.js</span>
        </div>
        <div className="flex items-center justify-center py-1.5 px-1 rounded-md bg-white/[0.04] border border-purple-500/30 shadow-[0_0_8px_rgba(168,85,247,0.15)] group-hover:border-purple-400 transition-colors">
          <span className="text-[10px] font-bold text-purple-400 tracking-tight">⬢ Node.js</span>
        </div>
      </div>
    </div>
  );
}

/* ── 03. SELECTED WORK: Modern Web Platform UI Mockup ── */
function SelectedWorkVisual() {
  return (
    <div className="w-full h-full bg-[#050B14] p-2 flex flex-col justify-between select-none relative overflow-hidden">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#FF9D00]/10 rounded-full blur-xl pointer-events-none" />

      {/* Browser Bar */}
      <div className="flex items-center gap-1.5 pb-1.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
        </div>
        <div className="flex-1 h-3 rounded bg-white/[0.06] border border-white/[0.08] flex items-center px-1.5">
          <span className="text-[8.5px] text-[#FF9D00] font-mono truncate">portal.kiot.ac.in</span>
        </div>
      </div>

      {/* Mock UI Dashboard Metrics */}
      <div className="grid grid-cols-3 gap-1 pt-1">
        <div className="h-9 rounded bg-[#0A1322] border border-[#FF9D00]/30 p-1 flex flex-col justify-between">
          <span className="text-[7.5px] text-slate-400 uppercase font-mono">Users</span>
          <span className="text-[10px] font-bold text-white font-mono">4.2k+</span>
        </div>
        <div className="h-9 rounded bg-[#0A1322] border border-white/[0.08] p-1 flex flex-col justify-between">
          <span className="text-[7.5px] text-slate-400 uppercase font-mono">Modules</span>
          <span className="text-[10px] font-bold text-[#FFC928] font-mono">24</span>
        </div>
        <div className="h-9 rounded bg-[#0A1322] border border-white/[0.08] p-1 flex flex-col justify-between">
          <span className="text-[7.5px] text-slate-400 uppercase font-mono">Status</span>
          <span className="text-[10px] font-bold text-emerald-400 font-mono">99.9%</span>
        </div>
      </div>
    </div>
  );
}

/* ── 04. EXPERIENCE: Career Growth & Analytics ── */
function ExperienceVisual() {
  return (
    <div className="w-full h-full bg-[#050B14] p-2.5 flex flex-col justify-between select-none relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#FF9D00]/15 rounded-full blur-xl pointer-events-none" />

      {/* Header Stat */}
      <div className="flex items-center justify-between">
        <span className="text-[9.5px] uppercase tracking-wider text-slate-400 font-mono">Impact</span>
        <span className="text-[9.5px] font-bold text-[#FF9D00] font-mono">+100% Growth</span>
      </div>

      {/* Ascending Chart Bars with Golden Gradient */}
      <div className="flex items-end justify-between gap-1.5 h-10 px-1 pt-1">
        <div className="w-1/5 h-3 bg-white/10 rounded-t" />
        <div className="w-1/5 h-5 bg-[#FF9D00]/40 rounded-t" />
        <div className="w-1/5 h-7 bg-[#FF9D00]/70 rounded-t" />
        <div className="w-1/5 h-9 bg-gradient-to-t from-[#FF9D00] to-[#FFC928] rounded-t shadow-[0_0_10px_rgba(255,157,0,0.5)]" />
        <div className="w-1/5 h-10 bg-white rounded-t shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
      </div>
    </div>
  );
}

/* ── 05. LET'S CONNECT: Glowing Message Card ── */
function ConnectVisual() {
  return (
    <div className="w-full h-full bg-[#050B14] p-2.5 flex flex-col justify-between select-none relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FF9D00]/10 blur-xl pointer-events-none" />

      {/* Status Pill */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[8.5px] text-emerald-400 font-mono font-semibold uppercase">Open to work</span>
        </div>
        <span className="text-[9.5px] text-[#FF9D00] font-mono">Chennai, IN</span>
      </div>

      {/* Interactive Communication Prompt */}
      <div className="py-1.5 px-2 rounded-lg bg-white/[0.04] border border-[#FF9D00]/30 shadow-[0_0_12px_rgba(255,157,0,0.15)] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-[#FF9D00]/20 flex items-center justify-center text-[#FF9D00] text-[10px]">
            ✉
          </div>
          <span className="text-[10px] font-bold text-white">Start Conversation</span>
        </div>
        <span className="text-xs text-[#FFC928]">&rarr;</span>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT: EXPLORE MY JOURNEY ── */
export default function ContinueExploring() {
  // Default to Card 02 (index 1) active, matching the design!
  const [activeCard, setActiveCard] = useState(1);

  const chapters = [
    {
      number: '01',
      title: 'THE DEVELOPER',
      subtitle: 'My story, mindset & what drives me',
      target: '#about',
      icon: Code2,
      visual: <DeveloperVisual />
    },
    {
      number: '02',
      title: 'TECH STACK',
      subtitle: 'React, Next.js, Node.js & PostgreSQL',
      target: '#skills',
      icon: Layers,
      visual: <TechStackVisual />
    },
    {
      number: '03',
      title: 'SELECTED WORK',
      subtitle: 'College ERP, web platforms & real-world builds',
      target: '#projects',
      icon: LayoutGrid,
      visual: <SelectedWorkVisual />
    },
    {
      number: '04',
      title: 'EXPERIENCE',
      subtitle: 'Projects, teams & professional growth',
      target: '#experience',
      icon: TrendingUp,
      visual: <ExperienceVisual />
    },
    {
      number: '05',
      title: "LET'S CONNECT",
      subtitle: 'Ideas, collaboration & contact',
      target: '#contact',
      icon: Send,
      visual: <ConnectVisual />
    }
  ];

  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Detect when user scrolls into the section ("NA ANGA VANTHA APDINA CHNAGE AGUM")
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll every 3 seconds on mobile when in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      // Only auto-scroll on screens narrower than desktop (< 1024px)
      if (window.innerWidth >= 1024) return;

      setActiveCard((prev) => {
        const next = (prev + 1) % chapters.length;
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const cardElements = container.children;
          if (cardElements && cardElements[next]) {
            cardElements[next].scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            });
          }
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, chapters.length]);

  const handleCardClick = (target, index) => {
    setActiveCard(index);
    const el = document.querySelector(target);
    if (el) {
      const offset = 60;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative z-20 pt-6 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 bg-[#07111F] overflow-hidden">
      {/* Ambient background golden radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[250px] bg-[#FF9D00]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: EXPLORE MY JOURNEY (Sub-text removed as requested) */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-netflix text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider text-white"
          >
            EXPLORE MY{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FF9D00] to-[#E58500] drop-shadow-[0_0_25px_rgba(255,157,0,0.5)]">
              JOURNEY
            </span>
          </motion.h2>
        </div>

        {/* 5 Chapters Grid (Desktop: 5 Columns, Mobile: Full Width Responsive Horizontal Snap Scroll with Auto-Scroll) */}
        <div 
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-5 gap-4 sm:gap-5 overflow-x-auto lg:overflow-visible pb-6 pt-2 px-4 -mx-4 sm:px-0 sm:mx-0 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {chapters.map((ch, idx) => {
            const Icon = ch.icon;
            const isActive = activeCard === idx;

            return (
              <motion.div
                key={ch.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
                onClick={() => handleCardClick(ch.target, idx)}
                onMouseEnter={() => setActiveCard(idx)}
                className="group relative flex-shrink-0 w-[260px] sm:w-[270px] lg:w-auto snap-center cursor-pointer select-none"
              >
                {/* Premium Reduced Height Card (No personal photos, No bottom underline) */}
                <div
                  className={`relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0E1726]/95 via-[#0A101C]/98 to-[#060A13] transition-all duration-300 ${
                    isActive
                      ? 'border-2 border-[#FF9D00] shadow-[0_0_30px_rgba(255,157,0,0.35),0_12px_24px_rgba(0,0,0,0.8)] -translate-y-1'
                      : 'border border-white/[0.08] hover:border-white/20 hover:-translate-y-0.5'
                  }`}
                  style={{ minHeight: '260px' }}
                >
                  {/* Subtle top edge specular reflection */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  {/* Top: Chapter Number & Premium Icon Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-300 tracking-wider font-mono">
                        {ch.number}
                      </span>
                      <div className="w-6 h-[1.5px] bg-slate-600/70 rounded-full" />
                    </div>

                    {/* Premium Icon Badge */}
                    <div className="w-7 h-7 rounded-lg bg-[#FF9D00]/15 border border-[#FF9D00]/30 flex items-center justify-center text-[#FF9D00] shadow-[0_0_12px_rgba(255,157,0,0.25)] group-hover:scale-110 group-hover:bg-[#FF9D00]/25 group-hover:border-[#FF9D00] transition-all">
                      <Icon size={14} />
                    </div>
                  </div>

                  {/* Relevant Premium Thematic Visual (No Personal Photos) */}
                  <div className="relative w-full h-[100px] sm:h-[105px] rounded-xl overflow-hidden bg-[#050B14] border border-white/[0.08] mb-3 group-hover:border-[#FF9D00]/40 transition-colors shadow-inner">
                    {ch.visual}
                  </div>

                  {/* Chapter Title */}
                  <h3 className="text-sm font-black tracking-wider text-white uppercase mb-1 group-hover:text-[#FFC928] transition-colors leading-tight">
                    {ch.title}
                  </h3>

                  {/* Chapter Subtitle / Description */}
                  <p className="text-xs text-slate-400 font-normal leading-relaxed line-clamp-2">
                    {ch.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
