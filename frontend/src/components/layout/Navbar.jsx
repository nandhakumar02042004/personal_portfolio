import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bouncingItem, setBouncingItem] = useState(null);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href, label) => {
    e.preventDefault();
    if (label) {
      setBouncingItem(label);
    }
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: href === '#home' ? 0 : offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 w-full z-50 border-b backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 bg-[#07111F]/80 border-white/[0.08] shadow-2xl"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', 'logo')}
          className="text-xl sm:text-2xl font-extrabold tracking-tight flex items-center group cursor-pointer"
        >
          <motion.span 
            className="text-white drop-shadow-sm inline-block"
            animate={bouncingItem === 'logo' ? { y: [0, -5, 2, 0] } : {}}
            whileHover={{ 
              y: -3, 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 17 } 
            }}
            whileTap={{ y: 2, scale: 0.98 }}
            onAnimationComplete={() => {
              if (bouncingItem === 'logo') setBouncingItem(null);
            }}
          >
            Nandhakumar
          </motion.span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.label)}
              className="relative text-white/90 hover:text-[#FF9D00] transition-colors duration-200 cursor-pointer drop-shadow-sm py-1.5 group"
            >
              <motion.span
                className="inline-block select-none"
                animate={bouncingItem === link.label ? { y: [0, -6, 2, 0] } : {}}
                whileHover={{ 
                  y: -4, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 } 
                }}
                whileTap={{ 
                  y: 2, 
                  scale: 0.95,
                  transition: { type: "spring", stiffness: 400, damping: 17 } 
                }}
                onAnimationComplete={() => {
                  if (bouncingItem === link.label) setBouncingItem(null);
                }}
              >
                {link.label}
              </motion.span>
              
              {/* Subtle underline indicator on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF9D00] to-[#FFC928] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions: Resume Button & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Download Resume Button */}
          <motion.a
            href={profileData.resumeUrl}
            download
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ y: 2, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FF9D00] to-[#FFC928] hover:shadow-[0_0_20px_rgba(255,157,0,0.45)] transition-all shadow-md group cursor-pointer"
          >
            <span>Download Resume</span>
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform stroke-[2.5]" />
          </motion.a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl border transition-colors cursor-pointer bg-white/10 border-white/20 text-white hover:bg-white/15"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Full Width */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t px-6 py-5 space-y-2 backdrop-blur-2xl shadow-2xl border-white/[0.08] bg-[#07111F]/95 text-white"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.label)}
                  className="py-2.5 text-base font-semibold transition-colors flex items-center justify-between text-white hover:text-[#FF9D00]"
                >
                  <motion.span
                    className="inline-block"
                    animate={bouncingItem === link.label ? { y: [0, -5, 0] } : {}}
                    whileTap={{ y: 2 }}
                    transition={{ duration: 0.25 }}
                    onAnimationComplete={() => {
                      if (bouncingItem === link.label) setBouncingItem(null);
                    }}
                  >
                    {link.label}
                  </motion.span>
                  <ArrowUpRight size={16} className="opacity-70 text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
