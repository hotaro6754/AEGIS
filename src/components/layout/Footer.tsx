"use client";

import Logo from "@/components/ui/Logo";

export default function Footer() {
  const footerLinks = {
    Platform: ["Capabilities", "Architecture", "Security", "Pricing"],
    Resources: ["Documentation", "API Reference", "Status", "Whitepaper"],
    Company: ["About", "Blog", "Legal", "Contact"]
  };

  return (
    <footer className="py-40 border-t border-glass-border/40 bg-[#070708] relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-40">
          <div className="md:col-span-1">
            <Logo className="mb-12" />
            <p className="text-muted text-xl leading-relaxed max-w-sm font-medium">
              Autonomous Enterprise & Guardian Intelligence System.
              The future of security operations, delivered today.
            </p>

            <div className="flex gap-10 mt-12">
              {["X", "LinkedIn", "GitHub"].map((social) => (
                <a key={social} href="#" className="text-muted/60 hover:text-primary transition-all duration-300 text-xs font-black uppercase tracking-[0.4em]">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h5 className="text-foreground font-black mb-12 text-[10px] uppercase tracking-[0.5em] text-primary/80">{category}</h5>
              <ul className="space-y-8">
                {links.map(item => (
                  <li key={item}>
                    <a href="#" className="text-muted text-base font-bold hover:text-white transition-all duration-500 flex items-center group">
                      <span className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-4 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-20 border-t border-glass-border/40">
          <p className="text-muted text-[10px] uppercase tracking-[0.6em] font-black opacity-40">
            © 2024 AEGIS ELITE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-16 mt-12 md:mt-0">
             <div className="flex items-center gap-4">
               <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
               <span className="text-muted text-[10px] uppercase tracking-[0.5em] font-black">SYSTEM STATUS: OPTIMAL</span>
             </div>
             <div className="flex gap-12">
               <span className="text-muted text-[10px] uppercase tracking-[0.5em] font-black opacity-30">SOC2 TYPE II</span>
               <span className="text-muted text-[10px] uppercase tracking-[0.5em] font-black opacity-30">ISO 27001</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
