"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const complianceDetails = [
  {
    id: "soc2",
    title: "SOC 2 Type II",
    status: "Compliant",
    desc: "Rigorous independent audit confirming the highest standards for security, availability, and confidentiality.",
    icon: "🔒",
  },
  {
    id: "iso",
    title: "ISO 27001",
    status: "Aligned",
    desc: "International standard for information security management systems (ISMS) implementation.",
    icon: "🌐",
  },
  {
    id: "gdpr",
    title: "GDPR Ready",
    status: "Validated",
    desc: "Strict adherence to data privacy regulations for all entities operating within the European Union.",
    icon: "🛡️",
  }
];

export default function Trust() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-40 border-y border-glass-border/40 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted text-[10px] uppercase tracking-[0.5em] font-black mb-20 text-center"
          >
            Securing infrastructure for world-class enterprises
          </motion.p>

          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-40 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000 group">
             {["DEFENSE", "FINTECH", "CLOUD", "PHARMA", "GOV"].map((logo) => (
               <div key={logo} className="text-4xl font-black tracking-tighter text-foreground hover:opacity-100 group-hover:opacity-60 transition-opacity font-satoshi">
                  {logo}
               </div>
             ))}
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">
             {complianceDetails.map((item) => (
               <motion.div
                 key={item.id}
                 layout
                 onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                 className={`cursor-pointer glass rounded-3xl p-10 border border-glass-border/40 transition-all duration-700 hover:border-primary/40 relative overflow-hidden group ${
                   expandedId === item.id ? "ring-2 ring-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.15)]" : ""
                 }`}
               >
                  <motion.div layout className="flex flex-col items-center text-center">
                    <motion.div layout className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-700">
                      {item.icon}
                    </motion.div>
                    <motion.div layout className="text-foreground text-2xl font-bold mb-2 font-satoshi tracking-tight">{item.title}</motion.div>
                    <motion.p layout className="text-[10px] text-primary uppercase tracking-[0.4em] font-black">{item.status}</motion.p>

                    <AnimatePresence>
                      {expandedId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-base text-muted leading-relaxed mb-8">
                            {item.desc}
                          </p>
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-primary font-black uppercase tracking-widest hover:underline flex items-center gap-2 mx-auto"
                          >
                            View Certification <span>→</span>
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
