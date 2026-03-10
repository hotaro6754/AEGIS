"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { useRef } from "react";

const stats = [
  { label: "Response", value: "<8s", suffix: "" },
  { label: "Nodes", value: "111", suffix: "" },
  { label: "Uptime", value: "24/7", suffix: "" },
  { label: "Layers", value: "12", suffix: "" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-40 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] bg-accent-blue/20 rounded-full blur-[130px] pointer-events-none"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
              Autonomous Security Operations
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-[7.5rem] font-bold tracking-tighter mb-10 leading-[0.9] max-w-6xl mx-auto font-satoshi">
            Your SOC. <br />
            <span className="text-muted/20 italic">Fully Autonomous.</span>
          </h1>

          <p className="text-muted text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Replace your $2.4M enterprise SOC with AI agents that never sleep,
            never miss, and never stop protecting your critical infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-32">
            <MagneticButton className="w-full sm:w-auto px-12 py-6 text-base shadow-[0_20px_40px_rgba(201,169,98,0.2)]">
              Initialize AEGIS
            </MagneticButton>
            <MagneticButton variant="outline" className="w-full sm:w-auto px-12 py-6 text-base">
              System Architecture
            </MagneticButton>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="glass p-10 rounded-3xl relative group overflow-hidden border border-glass-border/30 hover:border-primary/20 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="text-primary text-4xl md:text-5xl font-bold mb-3 font-mono tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-muted text-[10px] uppercase tracking-[0.3em] font-black">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
    </section>
  );
}
