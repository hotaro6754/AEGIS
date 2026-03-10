"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const comparison = [
  { label: "Annual Cost", traditional: ".4M annually", aegis: "0-90/month", highlight: true },
  { label: "Operational Hours", traditional: "8-hour shifts", aegis: "24/7/365", highlight: false },
  { label: "Performance", traditional: "67% alerts uninvestigated", aegis: "Zero fatigue", highlight: false },
  { label: "Response Time", traditional: "Days to respond", aegis: "8 seconds", highlight: true },
  { label: "Intelligence", traditional: "Manual correlation", aegis: "AI-powered", highlight: false },
];

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-60 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-32">
          <TextReveal
            text="The average enterprise spends .4M annually on security operations."
            className="text-4xl md:text-7xl font-bold mb-12 leading-[1.1] font-satoshi tracking-tight"
          />
          <TextReveal
            text="67% of alerts go uninvestigated."
            className="text-3xl md:text-5xl font-bold text-muted/40 font-satoshi"
            delay={0.5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto glass rounded-[2.5rem] overflow-hidden relative border border-glass-border/50 shadow-[0_50px_100px_rgba(0,0,0,0.4)]"
        >
           {/* Accent Glow */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10" />

           <div className="grid grid-cols-1 md:grid-cols-3 border-b border-glass-border/50 bg-white/[0.02]">
              <div className="p-10 font-bold text-muted uppercase tracking-[0.3em] text-[10px]">Metric</div>
              <div className="p-10 font-bold uppercase tracking-[0.3em] text-[10px] border-x border-glass-border/50 text-muted">Traditional SOC</div>
              <div className="p-10 font-bold text-primary uppercase tracking-[0.3em] text-[10px]">AEGIS ELITE</div>
           </div>

           {comparison.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 border-b border-glass-border/50 last:border-b-0 group"
             >
                <div className="p-10 text-muted font-medium border-glass-border/50 text-lg">{item.label}</div>
                <div className="p-10 text-foreground/60 border-x border-glass-border/50 group-hover:bg-white/[0.01] transition-colors text-lg italic">{item.traditional}</div>
                <div className={`p-10 text-2xl font-bold ${item.highlight ? "text-primary" : "text-foreground"} group-hover:bg-primary/[0.03] transition-colors`}>
                  {item.aegis}
                </div>
             </motion.div>
           ))}
        </motion.div>

        <div className="mt-16 text-center text-muted/40 text-xs uppercase tracking-[0.2em] font-medium">
           * Based on 2024 Cybersecurity Industry Benchmarks
        </div>
      </div>
    </section>
  );
}

function TextReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 20%"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

function Word({ children, progress, range }: { children: string; progress: any; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const color = useTransform(progress, range, ["#A1A1A6", "#F5F5F7"]);

  return (
    <span className="relative inline-block mr-[0.25em]">
      <motion.span style={{ opacity, color }}>
        {children}
      </motion.span>
    </span>
  );
}
