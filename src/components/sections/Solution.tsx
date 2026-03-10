"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target, Cpu } from "lucide-react";

const solutions = [
  {
    title: "Autonomous Triage",
    description: "AEGIS investigates every single alert in seconds, not days. No alert is left behind.",
    icon: <Zap className="w-8 h-8 text-primary" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Active Response",
    description: "Go beyond detection. AEGIS takes verified actions to neutralize threats before they escalate.",
    icon: <Shield className="w-8 h-8 text-primary" />,
    color: "from-indigo-500/20 to-transparent"
  },
  {
    title: "Precision Defense",
    description: "Validated exploitation ensures zero false positives. Only actionable insights reach your desk.",
    icon: <Target className="w-8 h-8 text-primary" />,
    color: "from-cyan-500/20 to-transparent"
  },
  {
    title: "Machine Intel",
    description: "Continuous enrichment from 15+ global sources provides unparalleled context for every decision.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    color: "from-blue-600/20 to-transparent"
  }
];

export default function Solution() {
  return (
    <section className="py-60 relative overflow-hidden bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-8 block">
            The Solution
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-satoshi tracking-tight mb-12">
            A New Era of <br />
            <span className="text-muted/60">Digital Resilience.</span>
          </h2>
          <p className="text-muted text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            AEGIS ELITE replaces outdated manual workflows with a vertically-integrated
            AI security stack built for enterprise-scale operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-12 rounded-[2.5rem] border border-glass-border/50 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2.5rem]`} />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700 border border-primary/20">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 font-satoshi">{item.title}</h3>
                <p className="text-muted text-lg leading-relaxed">{item.description}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[130px] -z-10" />
    </section>
  );
}
