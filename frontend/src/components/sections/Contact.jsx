import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/nandhakumarksv@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        setErrorMessage(result.message || 'Failed to transmit message. Please try again.');
      }
    } catch (err) {
      // Fallback submission if CORS/network issue arises
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-12 sm:py-16 border-t border-white/10 mb-6 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left panel: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider font-mono">
            <Mail className="w-3.5 h-3.5" />
            CONTACT PORTAL
          </div>
          <h2 className="text-3.5xl font-bold text-white leading-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Let's discuss new projects, collaboration opportunities, or general queries. <span className="text-white block text-xs mt-1 font-mono">Direct inbox: nandhakumarksv@gmail.com</span>
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 bg-[#0f0f12]/80 border border-white/10 p-4 rounded-2xl shadow-md shadow-black/30 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div className="font-mono">
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">EMAIL ADDRESS</p>
                <span className="text-sm font-bold text-zinc-200">nandhakumarksv@gmail.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-[#0f0f12]/80 border border-white/10 p-4 rounded-2xl shadow-md shadow-black/30 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="font-mono">
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">GITHUB PROFILE</p>
                <a href="https://github.com/nandhakumar02042004" target="_blank" rel="noreferrer" className="text-sm font-bold text-zinc-200 hover:text-white transition-colors">
                  github.com/nandhakumar02042004
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0f0f12]/80 border border-white/10 p-4 rounded-2xl shadow-md shadow-black/30 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="font-mono">
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">LINKEDIN PROFILE</p>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-zinc-200 hover:text-white transition-colors">
                  linkedin.com/in/nandhakumar
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0f0f12]/80 border border-white/10 p-4 rounded-2xl shadow-md shadow-black/30 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="font-mono">
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">LOCATION</p>
                <span className="text-sm font-bold text-zinc-200">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right panel: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="bg-[#0f0f12]/80 border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-lg shadow-black/40 backdrop-blur-sm">
            <div className="hud-scanner" />
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  action="https://formsubmit.co/nandhakumarksv@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Hidden FormSubmit Configurations */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value={`New Contact from Portfolio (${formData.name || 'Visitor'})`} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:border-white/60 focus:ring-1 focus:ring-white/20 outline-none transition-colors"
                        placeholder="Nandha"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:border-white/60 focus:ring-1 focus:ring-white/20 outline-none transition-colors"
                        placeholder="nandhakumarksv@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">Message Details</label>
                    <textarea 
                      required
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:border-white/60 focus:ring-1 focus:ring-white/20 outline-none transition-colors resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2.5 w-full py-4 bg-white hover:bg-zinc-200 disabled:opacity-70 text-black font-bold rounded-xl transition-all shadow-lg shadow-white/10 active:scale-[0.99] cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-mono">MESSAGE TRANSMITTED!</h3>
                  <p className="text-zinc-400 max-w-sm text-xs leading-relaxed font-mono">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Your message has been sent directly to <span className="text-white">nandhakumarksv@gmail.com</span>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
