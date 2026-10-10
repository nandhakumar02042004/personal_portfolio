import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Profile from '../components/sections/Profile';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#090514] text-slate-100 font-sans antialiased selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden relative">
      {/* Top Dynamic Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 origin-left z-50 shadow-[0_0_12px_rgba(168,85,247,0.9)]"
        style={{ scaleX }}
      />
      <Header />
      <Hero />
      <Profile />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
