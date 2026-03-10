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
    <section className="py-32 border-y border-glass-border/30 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted text-xs uppercase tracking-[0.4em] font-bold mb-16 text-center"
          >
            Trusted by security teams protecting critical infrastructure
          </motion.p>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000 group">
             {["DEFENSE", "FINTECH", "CLOUD", "PHARMA", "GOV"].map((logo) => (
               <div key={logo} className="text-3xl font-black tracking-tighter text-foreground hover:opacity-100 group-hover:opacity-60 transition-opacity">
                  {logo}
               </div>
             ))}
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
             {complianceDetails.map((item) => (
               <motion.div
                 key={item.id}
                 layout
                 onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                 className={`cursor-pointer glass rounded-2xl p-8 border border-glass-border/50 transition-all duration-500 hover:border-primary/30 relative overflow-hidden group ${
                   expandedId === item.id ? "ring-2 ring-primary/20 shadow-[0_0_50px_rgba(201,169,98,0.1)]" : ""
                 }`}
               >
                  <motion.div layout className="flex flex-col items-center text-center">
                    <motion.div layout className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </motion.div>
                    <motion.div layout className="text-foreground text-xl font-bold mb-1 font-satoshi">{item.title}</motion.div>
                    <motion.p layout className="text-[10px] text-primary uppercase tracking-[0.3em] font-black">{item.status}</motion.p>

                    <AnimatePresence>
                      {expandedId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted leading-relaxed">
                            {item.desc}
                          </p>
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-6 text-xs text-primary font-bold uppercase tracking-widest hover:underline"
                          >
                            View Certification →
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-4 h-4 border-t border-r border-primary/40 rounded-tr" />
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
