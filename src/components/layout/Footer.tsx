import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-glass-border bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <Logo className="mb-6" />
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Autonomous Enterprise & Guardian Intelligence System.
              The future of security operations, delivered today.
            </p>
          </div>

          <div>
            <h5 className="text-foreground font-bold mb-6 text-sm uppercase tracking-widest">Platform</h5>
            <ul className="space-y-4">
              {["Capabilities", "Architecture", "Security", "Pricing"].map(item => (
                <li key={item}>
                  <a href="#" className="text-muted text-sm hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-foreground font-bold mb-6 text-sm uppercase tracking-widest">Resources</h5>
            <ul className="space-y-4">
              {["Documentation", "API Reference", "Status", "Whitepaper"].map(item => (
                <li key={item}>
                  <a href="#" className="text-muted text-sm hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-foreground font-bold mb-6 text-sm uppercase tracking-widest">Company</h5>
            <ul className="space-y-4">
              {["About", "Blog", "Legal", "Contact"].map(item => (
                <li key={item}>
                  <a href="#" className="text-muted text-sm hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-glass-border">
          <p className="text-muted text-[10px] uppercase tracking-widest">
            © 2024 AEGIS ELITE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 mt-6 md:mt-0">
             <span className="text-muted text-[10px] uppercase tracking-widest">SOC2 COMPLIANT</span>
             <span className="text-muted text-[10px] uppercase tracking-widest">ISO 27001 ALIGNED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
