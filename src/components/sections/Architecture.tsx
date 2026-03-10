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
  { id: 12, name: "AI Model", desc: "Claude 3.5 Sonnet Engine", color: "#C9A962" },
  { id: 11, name: "Approval Guard", desc: "4-Eyes Human-in-the-loop", color: "#C9A962" },
  { id: 10, name: "Audit Logger", desc: "Immutable Chain of Custody", color: "#C9A962" },
  { id: 9, name: "DLP Monitor", desc: "Data Loss Prevention", color: "#7DD3FC" },
  { id: 8, name: "Decision Engine", desc: "111-Node Architecture", color: "#7DD3FC" },
  { id: 7, name: "Intel Aggregator", desc: "15+ OSINT Sources", color: "#7DD3FC" },
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

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return (
    <section ref={containerRef} className="py-60 relative overflow-hidden">
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
              <span className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6 block">
                Enterprise Grade Infrastructure
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 font-satoshi leading-[1.1]">
                The 12-Layer <br />
                <span className="text-muted/60">Security Architecture</span>
              </h2>
              <p className="text-muted text-xl mb-12 max-w-xl leading-relaxed">
                AEGIS ELITE isn't just a chatbot. It's a vertically-integrated security stack
                engineered with redundant validation layers, ensuring every action is
                authorized, audited, and safe.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 glass rounded-xl border border-glass-border group hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold mb-4 group-hover:scale-110 transition-transform">111</div>
                    <h4 className="font-bold text-foreground mb-2">Node Architecture</h4>
                    <p className="text-sm text-muted leading-relaxed">A massive n8n-powered orchestration system handling thousands of signals.</p>
                </div>
                <div className="p-6 glass rounded-xl border border-glass-border group hover:border-accent-blue/30 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold mb-4 group-hover:scale-110 transition-transform">AI</div>
                    <h4 className="font-bold text-foreground mb-2">Claude 3.5 Sonnet</h4>
                    <p className="text-sm text-muted leading-relaxed">Advanced reasoning capabilities for complex threat triage and autonomous red teaming.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: 3D Stack */}
          <div className="lg:w-1/2 relative h-[700px] w-full flex items-center justify-center perspective-[1500px]">
             <div className="relative w-full max-w-[500px] h-[500px]">
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
  const yOffset = reverseIndex * -35;
  const expansion = 80;

  // Animation values
  const y = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [yOffset, reverseIndex * -expansion, reverseIndex * -expansion, reverseIndex * -expansion * 1.2]);
  const rotateX = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [45, 30, 25, 15]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.95]);
  const blur = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [4, 0, 0, 4]);

  return (
    <motion.div
      style={{
        y,
        rotateX,
        opacity,
        scale,
        filter: `blur(${blur}px)`,
        zIndex: layer.id,
        borderLeftColor: layer.color,
      }}
      className="absolute inset-0 h-20 glass rounded-2xl flex items-center px-8 border-l-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-glass-border/50"
    >
      <div className="flex items-center justify-between w-full">
         <div className="flex items-center gap-6">
           <span className="text-xs font-mono text-primary/60 font-bold">{layer.id.toString().padStart(2, '0')}</span>
           <div>
              <span className="font-bold text-base tracking-wide block">{layer.name}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted block sm:hidden mt-1">{layer.desc}</span>
           </div>
         </div>
         <span className="text-[10px] uppercase tracking-[0.3em] text-muted hidden sm:block font-medium">{layer.desc}</span>
      </div>

      {/* Decorative scan line effect */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
      />
    </motion.div>
  );
}
