import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X, Home, User, Compass, Layers, BookOpen, GraduationCap, Award, Mail, MessageSquare } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#profile', icon: User },
    { label: 'Projects', href: '#quests', icon: Compass },
    { label: 'Skills', href: '#skills', icon: Layers },
    { label: 'Experience', href: '#experience', icon: BookOpen },
    { label: 'Education', href: '#education', icon: GraduationCap },
    { label: 'Certifications', href: '#certifications', icon: Award },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Smooth and accurate scroll to the target section
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 75;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: href === '#home' ? 0 : offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#090514]/90 border-b border-purple-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left Side: Styled Violet Button for Nandhakumar */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold font-mono text-white bg-gradient-to-r from-violet-600/30 via-purple-600/25 to-fuchsia-600/20 border border-violet-500/40 hover:border-violet-400 hover:bg-violet-600/40 shadow-md shadow-purple-950/40 active:scale-[0.98] transition-all group cursor-pointer"
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.9)] animate-pulse" />
          <span className="tracking-tight group-hover:text-violet-300 transition-colors">Nandhakumar</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-violet-400 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Hamburger Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="/resume.pdf" 
            download
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold text-violet-400 bg-violet-500/5 border border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10 active:scale-[0.98] transition-all group"
          >
            <span>CV</span>
            <span className="hidden sm:inline">Download</span>
            <FileText className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-purple-900/30 active:scale-[0.98] transition-all cursor-pointer"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-[#130b24] border border-purple-900/50 text-slate-200 hover:text-white hover:border-violet-400 transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#090514]/98 border-b border-purple-900/40 backdrop-blur-xl px-5 py-4 space-y-2 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-violet-500/10 hover:border hover:border-violet-500/20 transition-all font-mono cursor-pointer"
                  >
                    <IconComponent className="w-4 h-4 text-violet-400" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-purple-900/30 flex gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-purple-900/30 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Let's Talk</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
