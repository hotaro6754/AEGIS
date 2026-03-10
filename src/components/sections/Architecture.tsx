"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface Layer {
  id: number;
  name: string;
  desc: string;
  color: string;
}

const layers: Layer[] = [
  { id: 12, name: "AI Model", desc: "Claude 3.5 Sonnet Engine", color: "var(--primary)" },
  { id: 11, name: "Approval Guard", desc: "4-Eyes Human-in-the-loop", color: "var(--primary)" },
  { id: 10, name: "Audit Logger", desc: "Immutable Chain of Custody", color: "var(--primary)" },
  { id: 9, name: "DLP Monitor", desc: "Data Loss Prevention", color: "var(--accent-blue)" },
  { id: 8, name: "Decision Engine", desc: "111-Node Architecture", color: "var(--accent-blue)" },
  { id: 7, name: "Intel Aggregator", desc: "15+ OSINT Sources", color: "var(--accent-blue)" },
  { id: 6, name: "Threat Triage", desc: "AI-Powered Classification", color: "#F5F5F7" },
  { id: 5, name: "Scope Enforcer", desc: "Hardcoded Domain Gates", color: "#F5F5F7" },
  { id: 4, name: "Asset Discovery", desc: "Continuous Attack Surface", color: "#F5F5F7" },
  { id: 3, name: "Vuln Scanner", desc: "Validated Exploit Verification", color: "#F5F5F7" },
  { id: 2, name: "API Gateway", desc: "Secure Webhook Interface", color: "#F5F5F7" },
  { id: 1, name: "Session Validator", desc: "mTLS & JWT Authentication", color: "#F5F5F7" },
];

export default function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 60, damping: 20, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return (
    <section ref={containerRef} className="py-80 relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Left Side: Copy */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-8 block">
                Infrastructure
              </span>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 font-satoshi leading-[1.05]">
                The 12-Layer <br />
                <span className="text-muted/40 italic">Security Stack.</span>
              </h2>
              <p className="text-muted text-xl mb-16 max-w-xl leading-relaxed">
                A vertically-integrated architecture designed for zero fatigue and
                absolute security validation. Each layer is engineered for mission-critical scale.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 glass rounded-[2rem] border border-glass-border group hover:border-primary/40 transition-all duration-700">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl mb-6 group-hover:scale-110 transition-transform duration-700 border border-primary/20">111</div>
                    <h4 className="font-bold text-foreground text-xl mb-3 font-satoshi">Node Architecture</h4>
                    <p className="text-muted text-base leading-relaxed">High-availability orchestration handling thousands of signals.</p>
                </div>
                <div className="p-8 glass rounded-[2rem] border border-glass-border group hover:border-accent-blue/40 transition-all duration-700">
                    <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue font-black text-xl mb-6 group-hover:scale-110 transition-transform duration-700 border border-accent-blue/20">AI</div>
                    <h4 className="font-bold text-foreground text-xl mb-3 font-satoshi">Claude 3.5 Sonnet</h4>
                    <p className="text-muted text-base leading-relaxed">State-of-the-art reasoning for complex threat investigations.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: 3D Stack */}
          <div className="lg:w-1/2 relative h-[800px] w-full flex items-center justify-center perspective-[2000px]">
             <div className="relative w-full max-w-[600px] h-[600px]">
                {layers.map((layer, index) => (
                  <ArchitectureLayer
                    key={layer.id}
                    layer={layer}
                    index={index}
                    total={layers.length}
                    smoothProgress={smoothProgress}
                  />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureLayer({
  layer,
  index,
  total,
  smoothProgress
}: {
  layer: Layer;
  index: number;
  total: number;
  smoothProgress: MotionValue<number>
}) {
  const reverseIndex = total - 1 - index;
  const yOffset = reverseIndex * -30;

  // Expand layers significantly as we scroll
  const expansion = 120;

  // Animation values: Start collapsed, then expand to show all layers clearly
  const y = useTransform(smoothProgress, [0, 0.5, 1], [yOffset, reverseIndex * -expansion, reverseIndex * -expansion * 1.5]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [40, 25, 15]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [0, 5, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.1, 1]);
  const blur = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [8, 0, 0, 8]);

  return (
    <motion.div
      style={{
        y,
        rotateX,
        rotateY,
        opacity,
        scale,
        filter: `blur(${blur}px)`,
        zIndex: layer.id,
        borderLeftColor: layer.color,
      }}
      className="absolute inset-0 h-24 glass rounded-3xl flex items-center px-10 border-l-8 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-glass-border/40 backdrop-blur-3xl"
    >
      <div className="flex items-center justify-between w-full relative z-10">
         <div className="flex items-center gap-8">
           <span className="text-sm font-mono text-primary/80 font-black">{layer.id.toString().padStart(2, '0')}</span>
           <div>
              <span className="font-bold text-xl tracking-tight block font-satoshi">{layer.name}</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted block sm:hidden mt-2 font-black">{layer.desc}</span>
           </div>
         </div>
         <span className="text-[11px] uppercase tracking-[0.4em] text-muted hidden sm:block font-black opacity-60 group-hover:opacity-100 transition-opacity">{layer.desc}</span>
      </div>

      {/* Decorative scan line effect */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 pointer-events-none"
      />
    </motion.div>
  );
}
