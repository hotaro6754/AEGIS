"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Download() {
  return (
    <section className="py-40 relative overflow-hidden">
       {/* Decorative Gradient */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03] -z-10" />

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Download AEGIS
        </h2>
        <p className="text-muted text-lg mb-16 max-w-2xl mx-auto">
          Secure your infrastructure with the power of autonomous AI.
          Available for major enterprise environments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          <div className="glass p-12 rounded-lg text-left group hover:border-primary/50 transition-colors">
            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">◻</div>
            <h3 className="text-xl font-bold mb-2">Windows</h3>
            <p className="text-muted text-sm mb-8">Enterprise Server & Desktop Edition</p>
            <div className="text-primary text-xs font-bold uppercase tracking-widest">Coming Q2 2026</div>
          </div>

          <div className="glass p-12 rounded-lg text-left group hover:border-primary/50 transition-colors">
            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">◼</div>
            <h3 className="text-xl font-bold mb-2">Linux</h3>
            <p className="text-muted text-sm mb-8">Debian, RHEL, and Ubuntu compatible</p>
            <div className="text-primary text-xs font-bold uppercase tracking-widest">Coming Q2 2026</div>
          </div>
        </div>

        <div className="max-w-xl mx-auto border-t border-glass-border pt-20">
           <h4 className="text-xl font-bold mb-6">Join the Early Access List</h4>
           <p className="text-muted text-sm mb-8">Join 2,400+ security professionals securing their future.</p>

           <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-grow bg-tertiary/30 border border-glass-border rounded-sm px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <MagneticButton className="whitespace-nowrap">Join Now</MagneticButton>
           </div>
        </div>
      </div>
    </section>
  );
}
