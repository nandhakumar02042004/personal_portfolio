import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, Send, CheckCircle2, X, Loader2 } from 'lucide-react';
import { profileData } from '../../data/profile';

export default function ContactBanner({ darkMode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/arunraj.dev@example.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Inquiry from ${formData.name}`
        })
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setModalOpen(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (err) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setModalOpen(false);
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`rounded-3xl p-8 sm:p-10 md:p-12 border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-left ${
            darkMode
              ? 'bg-gradient-to-r from-[#0D1B2D] via-[#11243C] to-[#0D1B2D] border-[#1D334B] shadow-2xl shadow-black/60'
              : 'bg-gradient-to-r from-slate-100 via-white to-slate-100 border-slate-300 shadow-lg'
          }`}
        >
          {/* Subtle Ambient Light Corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-[#FF9D00]/15 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          {/* Left Side: Headline & Supporting Text following unified pattern */}
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 text-[#FF9D00] text-xs sm:text-sm font-mono font-bold tracking-[0.3em] uppercase mb-1.5">
              <span>≡ EPISODE 05</span>
              <span className="text-slate-600">•</span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-netflix text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-white leading-tight">
              LET'S BUILD SOMETHING{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FF9D00] to-[#E58500]">
                GREAT TOGETHER
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
              Open to full-time engineering roles, high-impact web development projects, and technical collaborations.
            </p>
          </div>

          {/* Right Side: CTA Buttons */}
          <div className="relative z-10 flex flex-wrap items-center gap-3.5 sm:gap-4 shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-black bg-gradient-to-r from-[#FF9D00] to-[#FFC928] hover:shadow-[0_0_25px_rgba(255,157,0,0.5)] active:scale-95 transition-all shadow-md cursor-pointer group"
            >
              <Mail size={16} className="stroke-[2.5]" />
              <span>Hire Me</span>
            </button>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all border active:scale-95 cursor-pointer bg-white/5 border-white/20 text-white hover:border-[#FF9D00]/60 hover:bg-white/10"
            >
              <FileText size={16} className="text-[#FF9D00]" />
              <span>View Resume</span>
            </a>
          </div>
        </motion.div>

      </div>

      {/* Interactive Contact / Hire Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div 
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-md w-full rounded-3xl bg-[#0D1B2D] border border-[#1D334B] p-6 sm:p-8 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close Modal"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>

              <h3 className="text-xl font-bold text-white mb-1">Get in Touch</h3>
              <p className="text-xs text-[#A7B2C5] mb-5">
                Send a direct message or email directly to{' '}
                <a href={`mailto:${profileData.email}`} className="text-[#FF9D00] underline">{profileData.email}</a>.
              </p>

              {submitted ? (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-2">
                  <CheckCircle2 size={44} className="text-emerald-400 animate-bounce" />
                  <p className="text-white font-bold text-base">Message Sent!</p>
                  <p className="text-xs text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#07111F] border border-[#1D334B] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF9D00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-[#07111F] border border-[#1D334B] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF9D00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-[#07111F] border border-[#1D334B] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF9D00] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#FF9D00] to-[#FFC928] hover:shadow-[0_0_20px_rgba(255,157,0,0.4)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
