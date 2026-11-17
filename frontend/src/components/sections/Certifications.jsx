import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, FileCheck } from 'lucide-react';

export default function Certifications() {
  const verifiedCertificates = [
    {
      name: 'Python Full Stack Development',
      issuer: 'Indra Institute of Education',
      duration: '6 Months Professional Training',
      status: 'Completed',
      fileUrl: '/python_certificate.pdf',
      desc: 'Comprehensive training in Python programming, web development with Django & React, REST APIs, database management with SQL, and modern software engineering workflows.'
    }
  ];

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-12 sm:py-16 border-t border-white/10 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications</h2>
      </motion.div>

      <div className="flex justify-center max-w-3xl mx-auto">
        {verifiedCertificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.4)' }}
            className="w-full bg-[#0f0f12]/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60 relative group transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-200 transition-colors font-mono">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      {cert.issuer} <span className="text-zinc-600">|</span> <span className="text-zinc-300">{cert.duration}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 uppercase font-mono tracking-wider flex items-center gap-1.5 shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified
                </span>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pt-2">
                {cert.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={cert.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-all active:scale-[0.98] shadow-lg shadow-white/10 hover:scale-[1.02]"
              >
                <span>View Certificate PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
