import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { quests } from '../../constants/projects';

function ProjectImageCarousel({ images, title, onImageClick, direction = 'ltr', zoom = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full aspect-[2.22] rounded-xl overflow-hidden border border-purple-900/40 mb-4 relative group/img cursor-pointer">
      <div 
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full h-full shrink-0 overflow-hidden relative">
            <img 
              src={src} 
              alt={`${title} Screenshot ${idx + 1}`} 
              className={`w-full h-full object-cover cursor-zoom-in transition-transform duration-500 ${
                zoom 
                  ? 'scale-[1.22] origin-bottom hover:scale-[1.25]' 
                  : 'hover:scale-105'
              }`} 
              onClick={() => onImageClick(images, idx, title)}
            />
          </div>
        ))}
      </div>

      {/* Manual Left/Right Arrows on Card Hover */}
      <button 
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 hover:bg-violet-600 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all z-20 hover:scale-110 shadow-md border border-purple-900/40"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button 
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 hover:bg-violet-600 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all z-20 hover:scale-110 shadow-md border border-purple-900/40"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
      
      {/* Dot Indicators */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, idx) => (
          <button 
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-violet-400 w-3.5' : 'bg-white/45 hover:bg-white/70'}`}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#130b24]/50 via-transparent to-transparent opacity-60 pointer-events-none" />
    </div>
  );
}

export default function Projects() {
  const [modalState, setModalState] = useState(null); // { images: [], index: 0, title: '' }

  const handleOpenModal = (images, index, title) => {
    setModalState({ images, index, title });
  };

  const handleCloseModal = () => {
    setModalState(null);
  };

  const handlePrevImage = useCallback(() => {
    if (!modalState) return;
    setModalState((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  }, [modalState]);

  const handleNextImage = useCallback(() => {
    if (!modalState) return;
    setModalState((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  }, [modalState]);

  // Keyboard Navigation (Left/Right Arrows, Escape)
  useEffect(() => {
    if (!modalState) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState, handlePrevImage, handleNextImage]);

  return (
    <section id="quests" className="max-w-7xl mx-auto px-6 py-12 sm:py-16 border-t border-purple-900/25 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center sm:text-left flex flex-col items-center sm:items-start"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4">
          <Compass className="w-3.5 h-3.5" />
          PROJECTS GRID
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Featured Projects</h2>
        <p className="text-slate-400">Browse completed web architectures and tech stacks.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch justify-center">
        {quests.map((quest, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#130b24]/75 border border-purple-900/30 hover:border-violet-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-lg shadow-purple-950/30 backdrop-blur-sm"
            key={index}
          >
            <div>
              {/* Project Image Thumbnail or Slider */}
              {quest.images && quest.images.length > 0 ? (
                <ProjectImageCarousel 
                  images={quest.images} 
                  title={quest.title} 
                  onImageClick={handleOpenModal}
                  direction={index % 2 === 0 ? 'ltr' : 'rtl'}
                  zoom={quest.zoom}
                />
              ) : (
                <div 
                  className="w-full aspect-[2.22] rounded-xl overflow-hidden border border-purple-900/40 mb-4 relative group/img cursor-zoom-in" 
                  onClick={() => handleOpenModal([quest.image], 0, quest.title)}
                >
                  <img 
                    src={quest.image} 
                    alt={quest.title} 
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      quest.zoom ? 'scale-[1.22] origin-bottom group-hover/img:scale-[1.25]' : 'group-hover/img:scale-105'
                    }`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130b24]/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              )}

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors font-mono uppercase tracking-tight">
                {quest.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                {quest.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {quest.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="text-[9px] font-semibold text-slate-300 px-2 py-0.5 rounded-lg bg-[#0c0717] border border-purple-900/35 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Buttons directly visible inside the card */}
              <div className="flex gap-3 pt-3 border-t border-purple-900/30">
                <a 
                  href={quest.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold rounded-xl text-xs active:scale-[0.98] transition-all shadow-md shadow-purple-900/30"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit</span>
                </a>
                {quest.githubLink && (
                  <a 
                    href={quest.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-purple-800/80 hover:border-violet-400 text-white font-bold rounded-xl text-xs active:scale-[0.98] transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-screen Image Slideshow Popup Modal */}
      <AnimatePresence>
        {modalState && (
          <div 
            className="fixed inset-0 bg-[#090514]/95 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md cursor-pointer select-none"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl w-full max-h-[92vh] overflow-hidden rounded-3xl border border-purple-900/50 bg-[#130b24]/95 p-3 sm:p-4 shadow-2xl shadow-purple-950/90 flex flex-col items-center justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="w-full flex items-center justify-between px-3 py-2 border-b border-purple-900/30 mb-2">
                <div className="flex items-center gap-3">
                  <h4 className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-wide">
                    {modalState.title}
                  </h4>
                </div>

                <button 
                  onClick={handleCloseModal}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white font-mono font-bold text-xs bg-black/60 hover:bg-violet-600 px-3 py-1.5 rounded-xl border border-purple-900/50 transition-all cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>CLOSE</span>
                </button>
              </div>

              {/* Main Image Viewport with Left/Right Click Buttons */}
              <div className="relative w-full flex-1 flex items-center justify-center min-h-[320px] max-h-[72vh] overflow-hidden my-auto rounded-2xl bg-black/40">
                
                {/* Left Slide Button */}
                {modalState.images.length > 1 && (
                  <button 
                    onClick={handlePrevImage}
                    aria-label="Previous Slide"
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-violet-600 text-white flex items-center justify-center border border-purple-900/60 hover:border-violet-400 transition-all z-30 cursor-pointer shadow-xl backdrop-blur-sm hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* The Image */}
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={modalState.index}
                    src={modalState.images[modalState.index]} 
                    alt={`${modalState.title} - Slide ${modalState.index + 1}`} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="w-full max-h-[72vh] object-contain rounded-xl select-none" 
                  />
                </AnimatePresence>

                {/* Right Slide Button */}
                {modalState.images.length > 1 && (
                  <button 
                    onClick={handleNextImage}
                    aria-label="Next Slide"
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-violet-600 text-white flex items-center justify-center border border-purple-900/60 hover:border-violet-400 transition-all z-30 cursor-pointer shadow-xl backdrop-blur-sm hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Bottom Thumbnail Strip / Dots */}
              {modalState.images.length > 1 && (
                <div className="w-full flex items-center justify-center gap-2 pt-3 pb-1 border-t border-purple-900/30 mt-2">
                  {modalState.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalState(prev => ({ ...prev, index: idx }))}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        modalState.index === idx 
                          ? 'w-8 bg-violet-400 shadow-md shadow-violet-500/50' 
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Jump to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
