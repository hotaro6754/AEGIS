"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Download() {
  return (
    <section className="py-60 relative overflow-hidden bg-secondary/5">
       {/* Decorative Gradient */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.04] -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-12 block">
            Enterprise Deployment
          </span>
          <h2 className="text-6xl md:text-8xl font-bold mb-12 font-satoshi tracking-tighter">
            Deploy AEGIS ELITE.
          </h2>
          <p className="text-muted text-2xl md:text-3xl mb-32 max-w-3xl mx-auto leading-relaxed">
            Secure your critical infrastructure with the power of autonomous AI.
            Designed for high-compliance environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto mb-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-16 rounded-[3rem] text-left group hover:border-primary/40 transition-all duration-1000 hover:shadow-[0_40px_80px_rgba(59,130,246,0.1)]"
          >
            <div className="text-6xl mb-12 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">🪟</div>
            <h3 className="text-3xl font-bold mb-4 font-satoshi tracking-tight">Windows Server</h3>
            <p className="text-muted text-xl mb-12 leading-relaxed">Enterprise Server & Desktop Edition with full Active Directory integration.</p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-[11px] font-black uppercase tracking-widest">Available Q2 2026</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-16 rounded-[3rem] text-left group hover:border-accent-blue/40 transition-all duration-1000 hover:shadow-[0_40px_80px_rgba(59,130,246,0.1)]"
          >
            <div className="text-6xl mb-12 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">🐧</div>
            <h3 className="text-3xl font-bold mb-4 font-satoshi tracking-tight">Linux Distros</h3>
            <p className="text-muted text-xl mb-12 leading-relaxed">Native support for Debian, RHEL, Ubuntu, and containerized deployments.</p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent-blue/10 border border-accent-blue/20">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-accent-blue text-[11px] font-black uppercase tracking-widest">Available Q2 2026</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto border-t border-glass-border/30 pt-40"
        >
           <h4 className="text-4xl font-bold mb-10 font-satoshi tracking-tight">Join the Private Alpha</h4>
           <p className="text-muted text-xl mb-16 font-medium">Join 2,400+ security leaders securing their infrastructure with AEGIS.</p>

           <div className="flex flex-col sm:flex-row gap-8 p-3 glass rounded-[2.5rem] border border-glass-border/40 focus-within:border-primary/40 transition-all duration-700 shadow-2xl">
              <input
                type="email"
                placeholder="Enter your enterprise email"
                className="flex-grow bg-transparent px-10 py-6 focus:outline-none text-xl font-medium"
              />
              <MagneticButton className="whitespace-nowrap px-16 py-6 rounded-[2rem] text-sm font-black uppercase tracking-[0.3em] bg-primary text-white hover:bg-white hover:text-black">
                Get Access
              </MagneticButton>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
