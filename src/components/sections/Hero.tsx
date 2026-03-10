"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const stats = [
  { label: "Response", value: "<8s", suffix: "" },
  { label: "Nodes", value: "111", suffix: "" },
  { label: "Uptime", value: "24/7", suffix: "" },
  { label: "Layers", value: "12", suffix: "" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6">
            Autonomous Security Operations
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1] max-w-5xl mx-auto font-satoshi">
            Your Security Operations Center. <br />
            <span className="text-muted/50">Fully Autonomous.</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Replace your 00k SOC team with AI that never sleeps,
            never misses, and never stops protecting your enterprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <MagneticButton className="w-full sm:w-auto px-10 py-5">
              Request Demo
            </MagneticButton>
            <MagneticButton variant="outline" className="w-full sm:w-auto px-10 py-5">
              View Documentation
            </MagneticButton>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="glass p-8 rounded-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-primary text-3xl md:text-4xl font-bold mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-muted text-xs uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
