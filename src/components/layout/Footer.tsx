"use client";

import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = {
    Platform: ["Capabilities", "Architecture", "Security", "Pricing"],
    Resources: ["Documentation", "API Reference", "Status", "Whitepaper"],
    Company: ["About", "Blog", "Legal", "Contact"]
  };

  return (
    <footer className="py-32 border-t border-glass-border/30 bg-[#070708] relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="md:col-span-1">
            <Logo className="mb-10" />
            <p className="text-muted text-lg leading-relaxed max-w-sm font-medium">
              Autonomous Enterprise & Guardian Intelligence System.
              The future of security operations, delivered today.
            </p>

            <div className="flex gap-6 mt-10">
              {["X", "LinkedIn", "GitHub"].map((social) => (
                <a key={social} href="#" className="text-muted hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h5 className="text-foreground font-black mb-10 text-[10px] uppercase tracking-[0.4em] text-primary/80">{category}</h5>
              <ul className="space-y-6">
                {links.map(item => (
                  <li key={item}>
                    <a href="#" className="text-muted text-sm font-bold hover:text-white transition-all duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary/100 mr-0 group-hover:mr-3 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-glass-border/30">
          <p className="text-muted text-[10px] uppercase tracking-[0.5em] font-black">
            © 2024 AEGIS ELITE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12 mt-8 md:mt-0">
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-success" />
               <span className="text-muted text-[10px] uppercase tracking-[0.4em] font-black">SYSTEM STATUS: OPTIMAL</span>
             </div>
             <div className="flex gap-8">
               <span className="text-muted text-[10px] uppercase tracking-[0.4em] font-black opacity-40">SOC2 TYPE II</span>
               <span className="text-muted text-[10px] uppercase tracking-[0.4em] font-black opacity-40">ISO 27001</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
