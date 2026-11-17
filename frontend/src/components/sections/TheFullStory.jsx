import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Brain, 
  TrendingUp, 
  Heart, 
  Code2, 
  Layers, 
  Rocket,
  Eye,
  Download
} from 'lucide-react';

export default function TheFullStory({ darkMode = true }) {
  const cards = [
    {
      title: "My Focus",
      icon: Target,
      desc: "Frontend, Backend Development, CMS Platforms and E-commerce Solutions."
    },
    {
      title: "My Approach",
      icon: Brain,
      desc: "Clean Code, Modern Interfaces, Practical Thinking and Reliable Solutions."
    },
    {
      title: "My Goal",
      icon: TrendingUp,
      desc: "To build useful digital products, solve real-world challenges and continuously evolve with technology."
    },
    {
      title: "Beyond Code",
      icon: Heart,
      desc: "Exploring new technologies, travelling, gaming and discovering creative ideas."
    }
  ];

  return (
    <section id="about" className="relative z-20 pt-6 sm:pt-8 pb-12 sm:pb-16 bg-[#07111F] text-[#F8FAFC] overflow-hidden scroll-mt-20">
      
      {/* ── ATMOSPHERIC CORNER GLOW ARCS ── */}
      <div 
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(255,157,0,0.35) 0%, rgba(255,183,0,0.12) 40%, rgba(0,0,0,0) 70%)',
          filter: 'blur(75px)'
        }}
      />
      <div 
        className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(255,157,0,0.3) 0%, rgba(224,122,0,0.1) 45%, rgba(0,0,0,0) 70%)',
          filter: 'blur(75px)'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* ── MAIN 2-COLUMN SECTION: LEFT INTRO + RIGHT 2x2 CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Justified Bio, Actions */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left w-full"
          >
            {/* Bold Headline: THE PERSON BEHIND THE PIXELS */}
            <h2 className="font-netflix text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem] uppercase tracking-wider text-white leading-[1.06] mb-6">
              THE PERSON BEHIND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FF9D00] to-[#E58500] drop-shadow-[0_0_25px_rgba(255,157,0,0.55)]">
                THE PIXELS
              </span>
            </h2>

            {/* Bio Paragraphs with full text-justify and highlighted name */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify mb-8 w-full max-w-xl font-normal">
              <p>
                Hi, I am{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FF9D00] to-[#E58500] drop-shadow-[0_0_12px_rgba(255,157,0,0.5)]">
                  Nandhakumar
                </span>
                , a Web Application Developer working across frontend, backend, and CMS platforms. From crafting responsive interfaces to developing web applications, managing websites, and handling deployment, I take care of the complete web development process.
              </p>
              <p>
                My technical toolkit includes HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, NestJS, Python FastAPI, and Node.js, along with WordPress, Shopify, Git, domain management, hosting, and website maintenance.
              </p>
              <p>
                I enjoy turning complex requirements into practical, functional, and well-crafted digital solutions.
              </p>
            </div>

            {/* Action Pills Row: Build | Create | Improve */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2 text-white text-sm font-semibold tracking-wide">
                <Code2 className="w-4 h-4 text-[#FF9D00]" />
                <span>Build</span>
              </div>
              <div className="w-[1px] h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white text-sm font-semibold tracking-wide">
                <Layers className="w-4 h-4 text-[#FF9D00]" />
                <span>Create</span>
              </div>
              <div className="w-[1px] h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white text-sm font-semibold tracking-wide">
                <Rocket className="w-4 h-4 text-[#FF9D00]" />
                <span>Improve</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Cards in 2x2 Grid with Smooth Scroll Entrance & Amber Glow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full"
          >
            {cards.map((card, idx) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0E1726]/90 via-[#0A101C]/95 to-[#060A13] border border-amber-500/25 hover:border-[#FF9D00] shadow-[0_0_20px_rgba(255,157,0,0.12),0_15px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_rgba(255,157,0,0.3),0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-300 flex flex-col justify-start"
                >
                  {/* Subtle top edge specular reflection */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFC928]/40 to-transparent pointer-events-none" />

                  {/* Icon & Title Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FF9D00]/15 border border-[#FF9D00]/30 flex items-center justify-center text-[#FF9D00] shadow-[0_0_12px_rgba(255,157,0,0.25)] group-hover:scale-110 group-hover:border-[#FF9D00] transition-transform">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-white tracking-wide group-hover:text-[#FFC928] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-300 font-normal">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* ── RESUME OVERVIEW BANNER (Every episode, on one page.) ── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-14 bg-gradient-to-r from-[#0E1726]/95 via-[#0A101C]/98 to-[#060A13] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle top amber highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9D00]/50 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-2 text-left">
              <h3 className="text-2xl sm:text-3xl text-amber-200/95 font-medium leading-snug">
                Every episode, on one page.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                All stories, coding, projects, work experience and certifications — review online or download an authentic copy to take with you.
              </p>
            </div>

            {/* Middle: Action Buttons */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#FF9D00] via-[#FFB700] to-[#FFC928] text-black flex items-center justify-center gap-2 shadow-[0_0_22px_rgba(255,157,0,0.4)] hover:shadow-[0_0_30px_rgba(255,157,0,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 stroke-[2.5]" />
                <span>View Resume</span>
              </a>

              <a
                href="/resume.pdf"
                download="Nandhakumar_Resume.pdf"
                className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase bg-white/5 border border-white/15 hover:border-[#FF9D00]/60 text-white hover:text-[#FFC928] hover:bg-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Right: Key Stats */}
            <div className="lg:col-span-3 grid grid-cols-3 gap-3 text-center border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">
                  1+
                </div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                  Years Exp
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xl sm:text-2xl font-black text-[#FF9D00] font-mono">
                  6+
                </div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                  Projects
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xl sm:text-2xl font-black text-[#FFC928] font-mono">
                  100%
                </div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                  Quality
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
