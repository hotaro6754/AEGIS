"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Search, Zap, CheckCircle2, FileText, Lock } from "lucide-react";

const capabilities = [
  {
    id: "engine",
    title: "Decision Engine",
    subtitle: "Command flow visualization",
    description: "Natural language control over your entire security operations. Replace complex CLI commands with intuitive intent.",
    example: "run our monthly pentest",
    result: "Full red team engaged",
    icon: <Zap className="w-8 h-8" />,
    color: "#3B82F6",
  },
  {
    id: "intel",
    title: "Intel Analyst",
    subtitle: "Autonomous Enrichment",
    description: "Aggregates data from 15+ sources including Shodan, AlienVault, and HaveIBeenPwned in real-time.",
    example: "check api.company.com",
    result: "15 sources scanned in 4.2s",
    icon: <Search className="w-8 h-8" />,
    color: "#0070F3",
  },
  {
    id: "attack",
    title: "Red Team",
    subtitle: "Validated Exploitation",
    description: "No proof, no report. AEGIS only surfaces vulnerabilities it has actively validated against your infrastructure.",
    example: "find exposed secrets",
    result: "3 secrets found and verified",
    icon: <TargetIcon />,
    color: "#F5F5F7",
  },
  {
    id: "defend",
    title: "Blue Team",
    subtitle: "Real-time Response",
    description: "Autonomous triage of incoming alerts with automated IP blocking and incident escalation.",
    example: "triage suspicious login",
    result: "Confirmed TP - IP blocked",
    icon: <Shield className="w-8 h-8" />,
    color: "#3B82F6",
  },
  {
    id: "compliance",
    title: "Compliance",
    subtitle: "Continuous Audit",
    description: "Automated auditing for SOC2, ISO 27001, GDPR, and HIPAA. Always ready for your next audit.",
    example: "generate soc2 report",
    result: "Compliance audit complete",
    icon: <Lock className="w-8 h-8" />,
    color: "#0070F3",
  },
  {
    id: "reporting",
    title: "Executive Reports",
    subtitle: "C-Level Clarity",
    description: "Weekly executive summaries delivered automatically to stakeholders, translating technical risk into business impact.",
    example: "weekly summary",
    result: "Report delivered to CISO",
    icon: <FileText className="w-8 h-8" />,
    color: "#F5F5F7",
  },
];

function TargetIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-60 relative bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-8 block">
            Capabilities
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 font-satoshi tracking-tight">
            Six Specialized Agents. <br />
            <span className="text-muted/40 italic">One Unified Command.</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Navigation Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
             {capabilities.map((item, index) => (
               <button
                 key={item.id}
                 onClick={() => setActiveTab(index)}
                 className={`group p-8 rounded-3xl border text-left transition-all duration-500 ${
                   activeTab === index
                   ? "bg-white/[0.03] border-primary/40 shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
                   : "bg-transparent border-glass-border/40 hover:border-white/20"
                 }`}
               >
                 <div className="flex items-center gap-6">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                     activeTab === index ? "bg-primary text-white" : "bg-white/5 text-muted group-hover:bg-white/10"
                   }`}>
                     {item.icon}
                   </div>
                   <div>
                     <h4 className={`font-bold text-lg transition-colors duration-500 font-satoshi ${
                       activeTab === index ? "text-foreground" : "text-muted"
                     }`}>
                       {item.title}
                     </h4>
                     <p className={`text-[10px] uppercase tracking-widest font-black transition-colors duration-500 ${
                       activeTab === index ? "text-primary/80" : "text-muted/40"
                     }`}>
                       {item.subtitle}
                     </p>
                   </div>
                 </div>
               </button>
             ))}
          </div>

          {/* Content Preview */}
          <div className="lg:col-span-8 relative">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, scale: 0.95, x: 20 }}
                 animate={{ opacity: 1, scale: 1, x: 0 }}
                 exit={{ opacity: 0, scale: 0.95, x: -20 }}
                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                 className="h-full glass rounded-[3rem] p-16 flex flex-col justify-center border border-primary/10 relative overflow-hidden group"
               >
                 {/* Background Accent */}
                 <div
                   className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-1000"
                   style={{ background: `radial-gradient(circle at center, ${capabilities[activeTab].color} 0%, transparent 70%)` }}
                 />

                 <div className="relative z-10">
                   <div className="text-primary mb-12 transform group-hover:scale-110 transition-transform duration-700">
                     {capabilities[activeTab].icon}
                   </div>
                   <h3 className="text-5xl font-bold mb-8 font-satoshi tracking-tight">
                     {capabilities[activeTab].title}
                   </h3>
                   <p className="text-muted text-2xl mb-16 leading-relaxed max-w-2xl">
                     {capabilities[activeTab].description}
                   </p>

                   <div className="space-y-8">
                     <div className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-glass-border font-mono text-lg flex items-center shadow-2xl">
                       <span className="text-primary mr-6 font-black">$</span>
                       <span className="text-foreground/90 tracking-tight">aegis --mission &quot;{capabilities[activeTab].example}&quot;</span>
                     </div>
                     <div className="flex items-center gap-6 text-lg text-success font-medium">
                       <div className="w-8 h-8 rounded-full border border-success/30 flex items-center justify-center bg-success/5 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                         <CheckCircle2 className="w-5 h-5" />
                       </div>
                       <span className="font-mono tracking-tight uppercase tracking-widest text-sm font-black">
                         {capabilities[activeTab].result}
                       </span>
                     </div>
                   </div>
                 </div>

                 {/* Corner Decoration */}
                 <div className="absolute bottom-12 right-12 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                    <span className="text-[12rem] font-black text-white font-satoshi leading-none pointer-events-none">
                      0{activeTab + 1}
                    </span>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
