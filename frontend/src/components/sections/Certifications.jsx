import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, FileCheck } from 'lucide-react';

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
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/40">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-white">Certifications</h2>
      </div>

      <div className="flex justify-center max-w-3xl mx-auto">
        {verifiedCertificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.4)' }}
            className="w-full bg-[#091122]/80 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative group transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {cert.issuer} <span className="text-slate-600">|</span> <span className="text-cyan-400/90">{cert.duration}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 uppercase font-mono tracking-wider flex items-center gap-1.5 shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified
                </span>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pt-2">
                {cert.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-end gap-3">
              <a
                href={cert.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold text-xs transition-all active:scale-[0.98] shadow-lg shadow-cyan-500/10"
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
