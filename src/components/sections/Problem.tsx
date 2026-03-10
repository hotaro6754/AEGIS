"use client";

import { motion } from "framer-motion";

const comparison = [
  { label: "Annual Cost", traditional: "$200k+ per analyst", aegis: "$60-90/month", highlight: true },
  { label: "Operational Hours", traditional: "8-hour shifts", aegis: "24/7/365", highlight: false },
  { label: "Performance", traditional: "Alert fatigue", aegis: "Zero fatigue", highlight: false },
  { label: "Response Time", traditional: "Days to respond", aegis: "8 seconds", highlight: true },
  { label: "Intelligence", traditional: "Manual correlation", aegis: "AI-powered", highlight: false },
];

export default function Problem() {
  return (
    <section className="py-40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight font-satoshi">
            The average enterprise spends $2.4M annually on security operations. <br />
            <span className="text-muted/60">67% of alerts go uninvestigated.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto glass rounded-lg overflow-hidden relative"
        >
           {/* Accent Glow */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl -z-10" />

           <div className="grid grid-cols-1 md:grid-cols-3 border-b border-glass-border bg-tertiary/20">
              <div className="p-6 md:p-10 font-bold text-muted uppercase tracking-widest text-xs">Metric</div>
              <div className="p-6 md:p-10 font-bold uppercase tracking-widest text-xs border-x border-glass-border">Traditional SOC</div>
              <div className="p-6 md:p-10 font-bold text-primary uppercase tracking-widest text-xs">AEGIS ELITE</div>
           </div>

           {comparison.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 border-b border-glass-border last:border-b-0 group"
             >
                <div className="p-6 md:p-10 text-muted font-medium border-glass-border">{item.label}</div>
                <div className="p-6 md:p-10 text-foreground border-x border-glass-border group-hover:bg-white/[0.02] transition-colors">{item.traditional}</div>
                <div className={`p-6 md:p-10 font-bold ${item.highlight ? "text-primary" : "text-foreground"} group-hover:bg-primary/[0.05] transition-colors`}>
                  {item.aegis}
                </div>
             </motion.div>
           ))}
        </motion.div>

        <div className="mt-12 text-center text-muted text-sm">
           * Based on average industry salaries and AEGIS operation costs.
        </div>
      </div>
    </section>
  );
}
