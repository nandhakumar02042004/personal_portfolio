import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { featuredProjects } from '../../data/projects';

function ProjectImageCarousel({ images, title, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="w-full aspect-[16/10] overflow-hidden bg-[#07111F] relative group/carousel cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onImageClick(currentIndex)}
    >
      {/* Sliding Strip */}
      <div 
        className="w-full h-full flex transition-transform duration-600 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full h-full shrink-0 relative overflow-hidden bg-[#07111F]">
            <img
              src={src}
              alt={`${title} Screenshot ${idx + 1}`}
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Subtle bottom gradient for card transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2D]/90 via-transparent to-black/20 pointer-events-none" />

      {/* Manual Slide Arrows (Visible on card hover) */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous Screenshot"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/75 hover:bg-[#FF9D00] hover:text-black text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 z-20 border border-white/20 shadow-lg active:scale-90"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Screenshot"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/75 hover:bg-[#FF9D00] hover:text-black text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 z-20 border border-white/20 shadow-lg active:scale-90"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Carousel Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIdx);
              }}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? 'bg-[#FF9D00] w-4 h-1.5 shadow-[0_0_8px_rgba(255,157,0,0.8)]'
                  : 'bg-white/40 hover:bg-white/70 w-1.5 h-1.5'
              }`}
            />
          ))}
        </div>
      )}

      {/* Click to Zoom Pill Indicator */}
      <div className="absolute top-3 right-3 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 z-20 pointer-events-none">
        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white bg-black/70 backdrop-blur-md border border-white/20 shadow-md">
          <Eye size={12} className="text-[#FF9D00]" />
          <span>Zoom</span>
        </span>
      </div>
    </div>
  );
}

export default function Projects({ darkMode = true }) {
  const [modalState, setModalState] = useState(null); // { images: [], index: 0, title: '' }

  const handleOpenGallery = (project, idx = 0) => {
    const images = project.images && project.images.length > 0 ? project.images : [project.image];
    setModalState({ images, index: idx, title: project.title, liveUrl: project.liveUrl, tags: project.tags });
  };

  const handlePrevImage = (e) => {
    e?.stopPropagation();
    if (!modalState) return;
    setModalState((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    if (!modalState) return;
    setModalState((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  return (
    <section id="projects" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header following unified pattern */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div>
            <div className="flex items-center gap-2 text-[#FF9D00] text-xs sm:text-sm font-mono font-bold tracking-[0.3em] uppercase mb-1.5">
              <span>≡ EPISODE 03</span>
              <span className="text-slate-600">•</span>
              <span>PRODUCTION BUILDS</span>
            </div>
            <h2 className="font-netflix text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-white">
              FEATURED{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FF9D00] to-[#E58500]">
                PROJECTS
              </span>
            </h2>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#FF9D00] hover:text-[#FFC928] group transition-colors cursor-pointer w-fit pb-1"
          >
            <span>View All Projects</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </a>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuredProjects.map((project, idx) => {
            const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 group ${
                  darkMode
                    ? 'bg-[#0D1B2D] border-[#1D334B] hover:border-[#FF9D00]/60 shadow-xl shadow-black/50 hover:shadow-[0_12px_35px_rgba(255,157,0,0.18)]'
                    : 'bg-white border-slate-200 hover:border-[#FF9D00]/60 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Auto-sliding Project Screenshot Carousel */}
                <ProjectImageCarousel
                  images={projectImages}
                  title={project.title}
                  onImageClick={(slideIdx) => handleOpenGallery(project, slideIdx)}
                />

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Live External Link */}
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <h3 
                        onClick={() => handleOpenGallery(project, 0)}
                        className={`text-lg sm:text-xl font-bold tracking-tight group-hover:text-[#FF9D00] transition-colors cursor-pointer leading-snug ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {project.title}
                      </h3>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="text-slate-400 hover:text-[#FF9D00] hover:bg-white/5 p-1.5 rounded-lg transition-all shrink-0"
                        >
                          <ExternalLink size={18} className="stroke-[2.2]" />
                        </a>
                      )}
                    </div>

                    {/* Project Description */}
                    <p className={`text-xs sm:text-[13px] leading-relaxed mb-5 ${
                      darkMode ? 'text-[#A7B2C5]' : 'text-slate-600'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#1D334B]/60">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-medium px-3 py-1 rounded-full border ${
                          darkMode
                            ? 'bg-[#07111F] border-[#1D334B] text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Full Gallery Preview Modal */}
      <AnimatePresence>
        {modalState && (
          <div 
            onClick={() => setModalState(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full rounded-3xl bg-[#0D1B2D] border border-[#1D334B] p-5 sm:p-7 shadow-2xl relative text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalState(null)}
                aria-label="Close Preview"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="mb-4 pr-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{modalState.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {modalState.tags?.map((t) => (
                    <span key={t} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#07111F] text-slate-300 border border-[#1D334B]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Image Slider Viewport */}
              <div className="relative rounded-2xl overflow-hidden border border-[#1D334B] bg-[#07111F] aspect-[16/10] max-h-[65vh] flex items-center justify-center mb-4">
                <img
                  src={modalState.images[modalState.index]}
                  alt={`${modalState.title} Screenshot ${modalState.index + 1}`}
                  className="w-full h-full object-contain select-none"
                />

                {/* Left Arrow */}
                {modalState.images.length > 1 && (
                  <button
                    onClick={handlePrevImage}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/80 hover:bg-[#FF9D00] hover:text-black text-white flex items-center justify-center transition-all z-20 cursor-pointer border border-white/20 shadow-lg"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                {/* Right Arrow */}
                {modalState.images.length > 1 && (
                  <button
                    onClick={handleNextImage}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/80 hover:bg-[#FF9D00] hover:text-black text-white flex items-center justify-center transition-all z-20 cursor-pointer border border-white/20 shadow-lg"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}

                {/* Image Counter Badge */}
                {modalState.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm text-xs font-mono text-white border border-white/20">
                    {modalState.index + 1} / {modalState.images.length}
                  </div>
                )}
              </div>

              {/* Modal Footer: Thumbnails Row & Visit Live Site Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {modalState.images.length > 1 ? (
                  <div className="flex gap-2 overflow-x-auto max-w-full pb-1">
                    {modalState.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setModalState((prev) => ({ ...prev, index: i }))}
                        className={`w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                          modalState.index === i ? 'border-[#FF9D00] scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                ) : <div />}

                {modalState.liveUrl && (
                  <a
                    href={modalState.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#FF9D00] to-[#FFC928] hover:shadow-[0_0_20px_rgba(255,157,0,0.4)] active:scale-95 transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
