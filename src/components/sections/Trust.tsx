"use client";

import { motion } from "framer-motion";

export default function Trust() {
  return (
    <section className="py-24 border-y border-glass-border bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <p className="text-muted text-sm uppercase tracking-[0.3em] font-medium mb-12 text-center">
            Trusted by security teams protecting critical infrastructure
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {/* SILHOUETTES / LOGO PLACEHOLDERS */}
             {["DEFENSE", "FINTECH", "CLOUD", "PHARMA", "GOV"].map((logo) => (
               <div key={logo} className="text-2xl font-bold tracking-tighter text-foreground">
                  {logo}
               </div>
             ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl mx-auto border-t border-glass-border pt-12">
             <div className="text-center">
                <div className="text-foreground font-bold mb-2">SOC 2 Type II</div>
                <p className="text-xs text-muted uppercase tracking-widest">Compliant</p>
             </div>
             <div className="text-center border-x border-glass-border px-4">
                <div className="text-foreground font-bold mb-2">ISO 27001</div>
                <p className="text-xs text-muted uppercase tracking-widest">Aligned</p>
             </div>
             <div className="text-center">
                <div className="text-foreground font-bold mb-2">GDPR Ready</div>
                <p className="text-xs text-muted uppercase tracking-widest">Validated</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
