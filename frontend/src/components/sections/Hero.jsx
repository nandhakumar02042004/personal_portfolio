import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

const headlineQuotes = [
  {
    prefix: "BUILDING MODERN",
    highlight: "WEB & MOBILE",
    suffix: "EXPERIENCES"
  },
  {
    prefix: "TURNING IDEAS INTO",
    highlight: "DIGITAL EXPERIENCES",
    suffix: "THAT MAKE AN IMPACT"
  },
  {
    prefix: "PASSIONATE ABOUT BUILDING",
    highlight: "DRIVEN BY INNOVATION",
    suffix: "FOCUSED ON RESULTS"
  },
  {
    prefix: "FROM CREATIVE IDEAS",
    highlight: "TO FUNCTIONAL CODE",
    suffix: "I BUILD WITH PURPOSE"
  },
  {
    prefix: "SOLVING REAL PROBLEMS",
    highlight: "CREATING MEANINGFUL",
    suffix: "DIGITAL PRODUCTS"
  },
  {
    prefix: "BUILDING WITH PASSION",
    highlight: "DRIVEN BY PURPOSE",
    suffix: "GROWING WITH EVERY LINE"
  }
];

export default function Hero({ darkMode }) {
  const heroRef = useRef(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % headlineQuotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth gentle scroll parallax for text and background
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, -30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className={`relative min-h-0 lg:h-screen lg:min-h-[720px] flex items-start lg:items-center overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#07111F]' : 'bg-[#F4F7FC]'
      }`}
    >
      {/* 
        Dark Mode Desktop Background: 
        Edge-to-edge seamless artwork with NK_logo.png.
        Inset-0 ensures ZERO gap between navbar and hero section.
        object-[82%_top] ensures the hair sits safely below the navbar.
      */}
      {darkMode && (
        <motion.div 
          style={{ y: backgroundY, scale: backgroundScale }}
          className="hidden lg:block absolute inset-0 z-0 will-change-transform pointer-events-none"
        >
          <img
            src="/NK_logo.png"
            alt="Nandhakumar - Full-Stack Developer"
            className="w-full h-full object-cover object-[82%_top] select-none"
          />
          
          {/* Seamless dark horizontal gradient strictly on the left for maximum text contrast and zero edge line */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/85 via-42% lg:via-[#07111F]/30 lg:via-60% to-transparent"
          />
        </motion.div>
      )}

      {/* 
        Light Mode / White Theme Ambient Glows:
        Soft warm amber ambient lighting matching the portfolio's golden accent.
      */}
      {!darkMode && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-0 w-[550px] h-[550px] bg-amber-400/12 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-orange-400/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl" />
        </div>
      )}

      {/* Foreground Content: Responsive Grid */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column on Desktop / Content Below Image on Mobile: Headline, Action Buttons, Social Icons */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left will-change-transform w-full"
          >
            {/* Large Bold Cinematic Headline with Animated Rotating Taglines (Strictly 3 Lines, Centered on Mobile) */}
            <div className="min-h-[145px] sm:min-h-[175px] md:min-h-[205px] lg:min-h-[230px] flex items-center justify-center lg:justify-start mb-6 sm:mb-8 drop-shadow-sm w-full">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={quoteIndex}
                  initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(3px)' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="font-netflix text-4xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] uppercase tracking-wide leading-[1.06] text-center lg:text-left"
                >
                  <span className={`block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {headlineQuotes[quoteIndex].prefix}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF9D00] via-[#FFB700] to-[#FFC928]">
                    {headlineQuotes[quoteIndex].highlight}
                  </span>
                  <span className={`block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {headlineQuotes[quoteIndex].suffix}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Action Buttons: View My Work & View Resume (Centered on Mobile) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-7 w-full">
              <button
                onClick={() => handleScroll('#projects')}
                className="flex items-center gap-2.5 px-6.5 py-3 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-black bg-gradient-to-r from-[#FF9D00] to-[#FFC928] hover:shadow-[0_0_25px_rgba(255,157,0,0.55)] hover:scale-[1.02] active:scale-95 transition-all shadow-lg cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6.5 py-3 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all border active:scale-95 cursor-pointer backdrop-blur-md border-white/20 text-white bg-white/10 hover:bg-white/20 hover:border-[#FF9D00]/60"
              >
                <FileText size={16} className="text-[#FF9D00] stroke-[2.5]" />
                <span>View Resume</span>
              </a>
            </div>

            {/* Social Icons (Centered on Mobile) */}
            <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className={`w-9.5 h-9.5 rounded-full flex items-center justify-center transition-all border backdrop-blur-md ${
                  darkMode
                    ? 'border-white/20 bg-white/10 text-slate-200 hover:text-white hover:border-[#FF9D00]/60 hover:bg-white/20'
                    : 'border-slate-300 bg-white/90 text-slate-700 hover:text-[#FF9D00] hover:border-[#FF9D00]/60 shadow-sm hover:bg-slate-50'
                }`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className={`w-9.5 h-9.5 rounded-full flex items-center justify-center transition-all border backdrop-blur-md ${
                  darkMode
                    ? 'border-white/20 bg-white/10 text-slate-200 hover:text-white hover:border-[#FF9D00]/60 hover:bg-white/20'
                    : 'border-slate-300 bg-white/90 text-slate-700 hover:text-[#FF9D00] hover:border-[#FF9D00]/60 shadow-sm hover:bg-slate-50'
                }`}
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email Nandhakumar"
                className={`w-9.5 h-9.5 rounded-full flex items-center justify-center transition-all border backdrop-blur-md ${
                  darkMode
                    ? 'border-white/20 bg-white/10 text-slate-200 hover:text-white hover:border-[#FF9D00]/60 hover:bg-white/20'
                    : 'border-slate-300 bg-white/90 text-slate-700 hover:text-[#FF9D00] hover:border-[#FF9D00]/60 shadow-sm hover:bg-slate-50'
                }`}
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

          {/* 
            Mobile & Tablet Developer Visual:
            - Order 1 on mobile: appears FIRST at the top!
            - FULL WIDTH: stretches edge-to-edge across mobile screen (-mx-4 sm:-mx-6 lg:mx-0)
            - NO card frame / NO card border: seamless natural blend into #07111F
            - Hidden on desktop dark mode (lg:hidden) because the full-bleed desktop background handles it.
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`order-1 lg:order-2 w-[calc(100%+2rem)] -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6 lg:w-full lg:mx-0 lg:max-w-none lg:col-span-5 relative flex justify-center items-center mb-6 sm:mb-8 lg:mb-0 ${
              darkMode ? 'lg:hidden' : 'block'
            }`}
          >
            <div className="relative w-full overflow-hidden">
              {/* Warm Ambient Backlight Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9D00]/25 via-[#FFC928]/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Seamless Full-Width Natural Image - NO Card Frame, NO Box Borders */}
              <div className="relative w-full overflow-hidden select-none">
                <img
                  src="/NK_logo.png"
                  alt="Nandhakumar - Full-Stack Developer"
                  className="w-full h-auto max-h-[340px] sm:max-h-[420px] object-cover object-[78%_center] select-none"
                />
                {/* Subtle soft bottom and top fade into #07111F */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/20 via-15% to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
