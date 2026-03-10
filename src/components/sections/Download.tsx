"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Download() {
  return (
    <section className="py-60 relative overflow-hidden bg-secondary/5">
       {/* Decorative Gradient */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.05] -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-8 block">
            Enterprise Deployment
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 font-satoshi tracking-tighter">
            Deploy AEGIS ELITE.
          </h2>
          <p className="text-muted text-xl md:text-2xl mb-24 max-w-3xl mx-auto leading-relaxed">
            Secure your critical infrastructure with the power of autonomous AI.
            Designed for high-compliance environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-16 rounded-3xl text-left group hover:border-primary/40 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="text-5xl mb-10 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">🪟</div>
            <h3 className="text-2xl font-bold mb-3 font-satoshi">Windows Server</h3>
            <p className="text-muted text-base mb-10 leading-relaxed">Enterprise Server & Desktop Edition with full Active Directory integration.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-[10px] font-black uppercase tracking-widest">Available Q2 2026</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-16 rounded-3xl text-left group hover:border-accent-blue/40 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="text-5xl mb-10 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">🐧</div>
            <h3 className="text-2xl font-bold mb-3 font-satoshi">Linux Distros</h3>
            <p className="text-muted text-base mb-10 leading-relaxed">Native support for Debian, RHEL, Ubuntu, and containerized deployments.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-accent-blue text-[10px] font-black uppercase tracking-widest">Available Q2 2026</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto border-t border-glass-border/30 pt-32"
        >
           <h4 className="text-3xl font-bold mb-8 font-satoshi">Join the Private Alpha</h4>
           <p className="text-muted text-lg mb-12">Join 2,400+ security leaders securing their infrastructure with AEGIS.</p>

           <div className="flex flex-col sm:flex-row gap-6 p-2 glass rounded-3xl border border-glass-border/50 focus-within:border-primary/40 transition-colors">
              <input
                type="email"
                placeholder="Enter your enterprise email"
                className="flex-grow bg-transparent px-8 py-5 focus:outline-none text-lg"
              />
              <MagneticButton className="whitespace-nowrap px-12 rounded-2xl">
                Get Access
              </MagneticButton>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
