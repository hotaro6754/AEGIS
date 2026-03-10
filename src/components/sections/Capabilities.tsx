"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const capabilities = [
  {
    id: "engine",
    title: "Decision Engine",
    subtitle: "Command flow visualization",
    description: "Natural language control over your entire security operations. Replace complex CLI commands with intuitive intent.",
    example: "run our monthly pentest",
    result: "Full red team engaged",
    icon: "◉",
  },
  {
    id: "intel",
    title: "Intel Analyst",
    subtitle: "Autonomous Enrichment",
    description: "Aggregates data from 15+ sources including Shodan, AlienVault, and HaveIBeenPwned in real-time.",
    example: "check api.company.com",
    result: "15 sources scanned in 4.2s",
    icon: "◈",
  },
  {
    id: "attack",
    title: "Red Team",
    subtitle: "Validated Exploitation",
    description: "No proof, no report. AEGIS only surfaces vulnerabilities it has actively validated against your infrastructure.",
    example: "find exposed secrets",
    result: "3 secrets found and verified",
    icon: "▲",
  },
  {
    id: "defend",
    title: "Blue Team",
    subtitle: "Real-time Response",
    description: "Autonomous triage of incoming alerts with automated IP blocking and incident escalation.",
    example: "triage suspicious login",
    result: "Confirmed TP - IP blocked",
    icon: "■",
  },
  {
    id: "compliance",
    title: "Compliance",
    subtitle: "Continuous Audit",
    description: "Automated auditing for SOC2, ISO 27001, GDPR, and HIPAA. Always ready for your next audit.",
    example: "generate soc2 report",
    result: "Compliance audit complete",
    icon: "⬡",
  },
  {
    id: "reporting",
    title: "Executive Reports",
    subtitle: "C-Level Clarity",
    description: "Weekly executive summaries delivered automatically to stakeholders, translating technical risk into business impact.",
    example: "weekly summary",
    result: "Report delivered to CISO",
    icon: "◇",
  },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(capabilities[0]);

  return (
    <section className="py-40 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6 block">
            The AEGIS Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-satoshi">
            Six specialized AI agents. <br />
            <span className="text-muted/60">One unified command.</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap)}
                className={`px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 ${
                  activeTab.id === cap.id
                    ? "premium-glass text-primary"
                    : "hover:bg-glass-bg text-muted hover:text-foreground"
                }`}
              >
                {cap.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="glass rounded-lg overflow-hidden min-h-[500px] flex flex-col md:flex-row shadow-2xl"
          >
            <div className="w-full md:w-1/2 p-12 border-b md:border-b-0 md:border-r border-glass-border flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="text-primary text-4xl mb-6">{activeTab.icon}</div>
                  <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight font-satoshi">{activeTab.title}</h3>
                  <p className="text-muted text-lg mb-8 leading-relaxed">
                    {activeTab.description}
                  </p>

                  <div className="space-y-4">
                    <div className="bg-background/50 p-4 rounded-sm border border-glass-border font-mono text-sm group">
                      <span className="text-primary mr-2">$</span>
                      <span className="text-foreground">aegis --mission "{activeTab.example}"</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-success">
                      <span>✓</span>
                      <span className="font-mono">{activeTab.result}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full md:w-1/2 bg-tertiary/20 p-12 flex items-center justify-center relative overflow-hidden">
               {/* Abstract Visual Placeholder */}
               <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] blur-3xl" />
               </div>

               <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full aspect-square max-w-[320px] glass rounded-2xl flex items-center justify-center border-2 border-primary/20 shadow-[0_0_80px_rgba(201,169,98,0.15)]"
                >
                   <div className="text-primary text-8xl font-bold opacity-30">
                      {activeTab.icon}
                   </div>
                   {/* Animated Rings */}
                   <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-[-30px] border border-primary/10 rounded-full"
                   />
                   <motion.div
                     animate={{ rotate: -360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-[-60px] border border-accent-blue/10 rounded-full"
                   />
                </motion.div>
               </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
