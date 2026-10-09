import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/40 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left panel: Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Mail className="w-3.5 h-3.5" />
            CONTACT PORTAL
          </div>
          <h2 className="text-3.5xl font-bold text-white leading-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Let's discuss new projects, collaboration opportunities, or general queries. <span className="text-cyan-400 block text-xs mt-1 font-mono">Usually replies within 24 hours.</span>
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 bg-[#091122]/70 border border-slate-800/60 p-4 rounded-2xl shadow-md backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/5 border border-slate-800/60 flex items-center justify-center text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="font-mono">
                <p className="text-[9px] text-slate-450 font-bold uppercase tracking-wider">EMAIL ADDRESS</p>
                <span className="text-sm font-bold text-slate-200">nandhakumarksv@gmail.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-[#091122]/70 border border-slate-800/60 p-4 rounded-2xl shadow-md backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/5 border border-slate-800/60 flex items-center justify-center text-cyan-400">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="font-mono">
                <p className="text-[9px] text-slate-450 font-bold uppercase tracking-wider">GITHUB PROFILE</p>
                <a href="https://github.com/nandhakumar02042004" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-200 hover:text-cyan-400 transition-colors">
                  github.com/nandhakumar02042004
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#091122]/70 border border-slate-800/60 p-4 rounded-2xl shadow-md backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/5 border border-slate-800/60 flex items-center justify-center text-cyan-400">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="font-mono">
                <p className="text-[9px] text-slate-450 font-bold uppercase tracking-wider">LINKEDIN PROFILE</p>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-200 hover:text-cyan-400 transition-colors">
                  linkedin.com/in/nandhakumar
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#091122]/70 border border-slate-800/60 p-4 rounded-2xl shadow-md backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/5 border border-slate-800/60 flex items-center justify-center text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="font-mono">
                <p className="text-[9px] text-slate-450 font-bold uppercase tracking-wider">LOCATION</p>
                <span className="text-sm font-bold text-slate-200">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#091122]/70 border border-slate-800/60 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-lg backdrop-blur-sm">
            <div className="hud-scanner" />
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#050e1e] border border-slate-800/60 rounded-xl px-4 py-3.5 text-slate-200 text-sm focus:border-cyan-500/50 outline-none transition-colors"
                        placeholder="Nandha"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#050e1e] border border-slate-800/60 rounded-xl px-4 py-3.5 text-slate-200 text-sm focus:border-cyan-500/50 outline-none transition-colors"
                        placeholder="nandhakumarksv@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Message Details</label>
                    <textarea 
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#050e1e] border border-slate-800/60 rounded-xl px-4 py-3.5 text-slate-200 text-sm focus:border-cyan-500/50 outline-none transition-colors resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="flex items-center justify-center gap-2.5 w-full py-4 bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/10 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-mono">MESSAGE SENT SUCCESSFULLY!</h3>
                  <p className="text-slate-400 max-w-sm text-xs leading-relaxed font-mono">
                    Thank you, <span className="text-cyan-400 font-bold">{formData.name}</span>. Your message has been transmitted successfully.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
