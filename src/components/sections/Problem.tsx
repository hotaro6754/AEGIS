"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const comparison = [
  { label: "Annual Cost", traditional: "$2.4M annually", aegis: "$8,999/month", highlight: true },
  { label: "Operational Hours", traditional: "8-hour shifts", aegis: "24/7/365", highlight: false },
  { label: "Performance", traditional: "67% alerts uninvestigated", aegis: "Zero fatigue", highlight: false },
  { label: "Response Time", traditional: "Days to respond", aegis: "8 seconds", highlight: true },
  { label: "Intelligence", traditional: "Manual correlation", aegis: "AI-powered", highlight: false },
];

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-60 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-40">
          <TextReveal
            text="The average enterprise spends $2.4M annually on security operations."
            className="text-5xl md:text-8xl font-bold mb-16 leading-[1.05] font-satoshi tracking-tight"
          />
          <TextReveal
            text="67% of alerts go uninvestigated."
            className="text-4xl md:text-6xl font-bold text-muted/40 font-satoshi"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto glass rounded-[3rem] overflow-hidden relative border border-glass-border/40 shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
        >
           {/* Accent Glow */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] -z-10" />

           <div className="grid grid-cols-1 md:grid-cols-3 border-b border-glass-border/40 bg-white/[0.02]">
              <div className="p-12 font-black text-muted uppercase tracking-[0.4em] text-[10px]">Metric</div>
              <div className="p-12 font-black uppercase tracking-[0.4em] text-[10px] border-x border-glass-border/40 text-muted">Traditional SOC</div>
              <div className="p-12 font-black text-primary uppercase tracking-[0.4em] text-[10px]">AEGIS ELITE</div>
           </div>

           {comparison.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 border-b border-glass-border/40 last:border-b-0 group"
             >
                <div className="p-12 text-muted font-bold border-glass-border/40 text-xl font-satoshi">{item.label}</div>
                <div className="p-12 text-foreground/40 border-x border-glass-border/40 group-hover:bg-white/[0.01] transition-colors text-xl italic">{item.traditional}</div>
                <div className={`p-12 text-3xl font-bold font-satoshi ${item.highlight ? "text-primary" : "text-foreground"} group-hover:bg-primary/[0.03] transition-colors`}>
                  {item.aegis}
                </div>
             </motion.div>
           ))}
        </motion.div>

        <div className="mt-20 text-center text-muted/40 text-[10px] uppercase tracking-[0.4em] font-black">
           * Based on 2024 Cybersecurity Industry Benchmarks
        </div>
      </div>
    </section>
  );
}

function TextReveal({ text, className }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 15%"],
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

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
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
