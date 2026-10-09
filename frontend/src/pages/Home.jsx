import React from 'react';
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
  return (
    <div className="min-h-screen bg-[#020813] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
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
