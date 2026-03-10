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
    <section ref={containerRef} className="py-40 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Side: Copy */}
          <div className="lg:w-1/2">
            <span className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6 block">
              Enterprise Grade Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-satoshi">
              The 12-Layer <br />
              <span className="text-muted">Security Architecture</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl leading-relaxed">
              AEGIS isn't just a chatbot. It's a vertically-integrated security stack
              engineered with redundant validation layers, ensuring every action is
              authorized, audited, and safe.
            </p>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm glass flex items-center justify-center text-primary font-bold shrink-0">111</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Node Architecture</h4>
                    <p className="text-sm text-muted">A massive n8n-powered orchestration system handling thousands of concurrent security signals.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm glass flex items-center justify-center text-accent-blue font-bold shrink-0">AI</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Claude 3.5 Sonnet</h4>
                    <p className="text-sm text-muted">Advanced reasoning capabilities for complex threat triage and autonomous red teaming.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: 3D Stack */}
          <div className="lg:w-1/2 relative h-[600px] w-full flex items-center justify-center perspective-[1000px]">
             <div className="relative w-full max-w-[440px] h-[400px]">
                {layers.map((layer, index) => (
                  <ArchitectureLayer
                    key={layer.id}
                    layer={layer}
                    index={index}
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
  smoothProgress
}: {
  layer: Layer;
  index: number;
  smoothProgress: MotionValue<number>
}) {
  const yOffset = index * -40;
  const expansion = 120;

  const y = useTransform(smoothProgress, [0, 0.5, 1], [yOffset, index * -expansion, index * -expansion * 1.5]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [45, 25, 15]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <motion.div
      style={{
        y,
        rotateX,
        opacity,
        scale,
        zIndex: layer.id,
        borderLeftColor: layer.color,
      }}
      className="absolute inset-0 h-16 glass rounded-lg flex items-center px-6 border-l-4 shadow-2xl"
    >
      <div className="flex items-center justify-between w-full">
         <div className="flex items-center gap-4">
           <span className="text-xs font-mono text-muted">{layer.id.toString().padStart(2, '0')}</span>
           <span className="font-bold text-sm tracking-wide">{layer.name}</span>
         </div>
         <span className="text-[10px] uppercase tracking-widest text-muted hidden sm:block">{layer.desc}</span>
      </div>
    </motion.div>
  );
}
