import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { quests } from '../../constants/projects';

function ProjectImageCarousel({ images, title, onImageClick, direction = 'ltr', zoom = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isRtl = direction === 'rtl';

  // For RTL: reverse the display order so sliding feels right-to-left
  const displayImages = isRtl ? [...images].reverse() : images;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [displayImages.length]);

  return (
    <div className="w-full aspect-[2.22] rounded-xl overflow-hidden border border-slate-800/85 mb-4 relative group/img">
      <div 
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ 
          transform: isRtl 
            ? `translateX(${currentIndex * 100}%)` 
            : `translateX(-${currentIndex * 100}%)`,
          flexDirection: isRtl ? 'row-reverse' : 'row'
        }}
      >
        {displayImages.map((src, idx) => (
          <div key={idx} className="w-full h-full shrink-0 overflow-hidden relative">
            <img 
              src={src} 
              alt={`${title} Screenshot ${idx + 1}`} 
              className={`w-full h-full object-cover cursor-zoom-in transition-transform duration-500 ${
                zoom 
                  ? 'scale-[1.22] origin-bottom hover:scale-[1.25]' 
                  : 'hover:scale-105'
              }`} 
              onClick={() => onImageClick(src)}
            />
          </div>
        ))}
      </div>
      
      {/* Dot Indicators */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {displayImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(idx);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-cyan-400 w-3' : 'bg-white/45 hover:bg-white/70'}`}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#091122]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
    </div>
  );
}

export default function Projects() {
  const [activePopupImage, setActivePopupImage] = useState(null);

  return (
    <section id="quests" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/40">
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono mb-4">
          <Compass className="w-3.5 h-3.5" />
          PROJECTS GRID
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Featured Projects</h2>
        <p className="text-slate-400">Browse completed web architectures and tech stacks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch justify-center">
        {quests.map((quest, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#091122]/70 border border-slate-800/60 hover:border-cyan-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-lg backdrop-blur-sm"
            key={index}
          >
            <div>
              {/* Project Image Thumbnail or Slider */}
              {quest.images && quest.images.length > 0 ? (
                <ProjectImageCarousel 
                  images={quest.images} 
                  title={quest.title} 
                  onImageClick={setActivePopupImage}
                  direction={index % 2 === 0 ? 'ltr' : 'rtl'}
                  zoom={quest.zoom}
                />
              ) : (
                <div className="w-full aspect-[2.22] rounded-xl overflow-hidden border border-slate-800/85 mb-4 relative group/img cursor-zoom-in" onClick={() => setActivePopupImage(quest.image)}>
                  <img 
                    src={quest.image} 
                    alt={quest.title} 
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      quest.zoom ? 'scale-[1.22] origin-bottom group-hover/img:scale-[1.25]' : 'group-hover/img:scale-105'
                    }`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091122]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              )}

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors font-mono uppercase tracking-tight">
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
                    className="text-[9px] font-semibold text-slate-350 px-2 py-0.5 rounded-lg bg-[#050e1e] border border-slate-800/60 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Buttons directly visible inside the card */}
              <div className="flex gap-3 pt-3 border-t border-slate-850">
                <a 
                  href={quest.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold rounded-xl text-xs active:scale-[0.98] transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit</span>
                </a>
                {quest.githubLink && (
                  <a 
                    href={quest.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-slate-700 hover:border-white text-white font-bold rounded-xl text-xs active:scale-[0.98] transition-all"
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

      {/* Full-screen Image Popup Modal */}
      <AnimatePresence>
        {activePopupImage && (
          <div 
            className="fixed inset-0 bg-[#020813]/95 z-50 flex items-center justify-center p-4 backdrop-blur-md cursor-pointer"
            onClick={() => setActivePopupImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] overflow-hidden rounded-3xl border border-slate-800 bg-[#091122]/90 p-2 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActivePopupImage(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white font-mono font-bold text-sm bg-black/60 px-3 py-1.5 rounded-xl border border-slate-850 z-50 transition-colors"
              >
                [X] CLOSE
              </button>
              <img 
                src={activePopupImage} 
                alt="Project Screenshot Fullscreen" 
                className="w-full max-h-[80vh] object-contain rounded-2xl" 
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
