"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const capabilities = [
  {
    id: "engine",
    title: "Decision Engine",
    subtitle: "Command flow visualization",
    description: "Natural language control over your entire security operations. Replace complex CLI commands with intuitive intent.",
    example: "run our monthly pentest",
    result: "Full red team engaged",
    icon: "◉",
    color: "#C9A962",
  },
  {
    id: "intel",
    title: "Intel Analyst",
    subtitle: "Autonomous Enrichment",
    description: "Aggregates data from 15+ sources including Shodan, AlienVault, and HaveIBeenPwned in real-time.",
    example: "check api.company.com",
    result: "15 sources scanned in 4.2s",
    icon: "◈",
    color: "#7DD3FC",
  },
  {
    id: "attack",
    title: "Red Team",
    subtitle: "Validated Exploitation",
    description: "No proof, no report. AEGIS only surfaces vulnerabilities it has actively validated against your infrastructure.",
    example: "find exposed secrets",
    result: "3 secrets found and verified",
    icon: "▲",
    color: "#F5F5F7",
  },
  {
    id: "defend",
    title: "Blue Team",
    subtitle: "Real-time Response",
    description: "Autonomous triage of incoming alerts with automated IP blocking and incident escalation.",
    example: "triage suspicious login",
    result: "Confirmed TP - IP blocked",
    icon: "■",
    color: "#C9A962",
  },
  {
    id: "compliance",
    title: "Compliance",
    subtitle: "Continuous Audit",
    description: "Automated auditing for SOC2, ISO 27001, GDPR, and HIPAA. Always ready for your next audit.",
    example: "generate soc2 report",
    result: "Compliance audit complete",
    icon: "⬡",
    color: "#7DD3FC",
  },
  {
    id: "reporting",
    title: "Executive Reports",
    subtitle: "C-Level Clarity",
    description: "Weekly executive summaries delivered automatically to stakeholders, translating technical risk into business impact.",
    example: "weekly summary",
    result: "Report delivered to CISO",
    icon: "◇",
    color: "#F5F5F7",
  },
];

export default function Capabilities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % capabilities.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  const onDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.x < -100) {
      handleNext();
    } else if (info.offset.x > 100) {
      handlePrev();
    }
  };

  const activeTab = capabilities[currentIndex];

  return (
    <section className="py-40 relative bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6 block">
            The AEGIS Platform
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-satoshi tracking-tight">
            Six specialized AI agents. <br />
            <span className="text-muted/40 italic">One unified command.</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto relative group">
          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mb-12">
            {capabilities.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "w-12 bg-primary" : "w-4 bg-glass-border hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="relative overflow-visible min-h-[600px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? 300 : -300,
                    opacity: 0,
                    scale: 0.9,
                    rotateY: direction > 0 ? 45 : -45,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    zIndex: 1,
                  },
                  exit: (direction: number) => ({
                    x: direction < 0 ? 300 : -300,
                    opacity: 0,
                    scale: 0.9,
                    rotateY: direction < 0 ? 45 : -45,
                    zIndex: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.5 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={onDragEnd}
                className="w-full absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="glass rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-glass-border/50 h-full">
                  <div className="w-full md:w-1/2 p-16 flex flex-col justify-center relative">
                    <div className="absolute top-10 left-10 text-[12rem] font-black text-white/[0.02] pointer-events-none font-satoshi">
                      0{currentIndex + 1}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-primary text-5xl mb-8">{activeTab.icon}</div>
                      <h3 className="text-4xl font-bold mb-6 uppercase tracking-tighter font-satoshi">{activeTab.title}</h3>
                      <p className="text-muted text-xl mb-12 leading-relaxed">
                        {activeTab.description}
                      </p>

                      <div className="space-y-6">
                        <div className="bg-background/80 backdrop-blur-md p-6 rounded-xl border border-glass-border font-mono text-base group">
                          <span className="text-primary mr-3">$</span>
                          <span className="text-foreground">aegis --mission "{activeTab.example}"</span>
                        </div>
                        <div className="flex items-center gap-4 text-base text-success/80">
                          <div className="w-6 h-6 rounded-full border border-success/30 flex items-center justify-center text-[10px]">✓</div>
                          <span className="font-mono tracking-tight">{activeTab.result}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/2 bg-gradient-to-br from-tertiary/20 to-secondary/10 p-16 flex items-center justify-center relative overflow-hidden">
                    {/* Abstract Visuals */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ background: `radial-gradient(circle at center, ${activeTab.color} 0%, transparent 70%)` }}
                    />

                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 w-full aspect-square max-w-[380px] glass rounded-3xl flex items-center justify-center border-2 border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.3)]"
                    >
                      <div
                        className="text-8xl font-bold opacity-40 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        style={{ color: activeTab.color }}
                      >
                        {activeTab.icon}
                      </div>

                      {/* Animated Geometric Ornaments */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-40px] border border-white/5 rounded-[3rem]"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-80px] border border-white/5 rounded-full border-dashed"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden xl:block">
            <button
              onClick={handlePrev}
              className="w-16 h-16 rounded-full glass border border-glass-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all text-2xl"
            >
              ←
            </button>
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden xl:block">
            <button
              onClick={handleNext}
              className="w-16 h-16 rounded-full glass border border-glass-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all text-2xl"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
