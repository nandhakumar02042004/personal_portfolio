import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Preloader from '../components/ui/Preloader';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import ContinueExploring from '../components/sections/ContinueExploring';
import TheFullStory from '../components/sections/TheFullStory';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import ContactBanner from '../components/sections/ContactBanner';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const darkMode = true;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      {/* Netflix-Style Opening Preloader Intro */}
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen selection:bg-[#FF9D00]/30 selection:text-white overflow-x-hidden relative bg-[#07111F] text-[#F8FAFC]">
        {/* Top Dynamic Scroll Progress Indicator in Golden Orange */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9D00] via-[#FFC928] to-[#FF9D00] origin-left z-50 shadow-[0_0_12px_rgba(255,157,0,0.8)]"
          style={{ scaleX }}
        />

        {/* Cinematic Header / Navbar */}
        <Navbar />

        {/* Main Portfolio Sections */}
        <main>
          <Hero darkMode={darkMode} />
          <ContinueExploring />
          <TheFullStory darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <ContactBanner darkMode={darkMode} />
        </main>

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}
