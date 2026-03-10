"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Enterprise",
    price: ",499",
    period: "per month",
    description: "Full autonomous SOC for medium enterprises.",
    features: [
      "All 6 AI Agents",
      "12-Layer Guard Stack",
      "24/7 Monitoring",
      "SOC2 & GDPR Compliance",
      "Slack & Email Alerts",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Elite",
    price: ",999",
    period: "per month",
    description: "Mission-critical security for global scale.",
    features: [
      "Everything in Enterprise",
      "Advanced Red Teaming",
      "Custom Intel Sources",
      "Dedicated Infrastructure",
      "4-Eyes Approval Gate",
      "1:1 CISO Support",
    ],
    cta: "Contact Sales",
    highlight: true,
  },
  {
    name: "Custom",
    price: "Custom",
    period: "bespoke pricing",
    description: "Tailored orchestration for specific needs.",
    features: [
      "Unlimited Nodes",
      "On-prem Deployment",
      "White-label Reports",
      "Direct API Access",
      "SLA Guarantees",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
];

export default function Pricing() {
  const [clickedId, setClickedId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setClickedId(id);
    setTimeout(() => setClickedId(null), 1000);
  };

  return (
    <section className="py-60 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary text-xs font-medium tracking-[0.4em] uppercase mb-6 block">
            Transparent Scaling
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-satoshi tracking-tight">
            Protection that <span className="text-muted/60">scales with you.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => handleClick(plan.name)}
              className={`relative cursor-pointer group ${plan.highlight ? "md:-mt-8 md:mb-8" : ""}`}
            >
              <div className={`
                relative h-full p-12 rounded-[2.5rem] border transition-all duration-700
                ${plan.highlight
                  ? "bg-white/[0.03] border-primary/40 shadow-[0_40px_100px_rgba(201,169,98,0.15)]"
                  : "bg-white/[0.01] border-glass-border/50 hover:border-white/20"}
                overflow-hidden backdrop-blur-3xl
              `}>
                {/* Liquid Glass Effect Layer */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    animate={{
                      x: ["-10%", "10%", "-10%"],
                      y: ["-10%", "10%", "-10%"],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-[-20%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)] blur-2xl"
                  />

                  {/* Click Ripple Effect */}
                  <AnimatePresence>
                    {clickedId === plan.name && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative z-10">
                  <h3 className="text-sm font-black uppercase tracking-[0.4em] text-muted mb-8">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-6xl font-bold font-satoshi tracking-tighter text-foreground">{plan.price}</span>
                    <span className="text-muted/60 text-sm font-medium">{plan.period}</span>
                  </div>
                  <p className="text-muted mb-10 text-lg leading-relaxed">{plan.description}</p>

                  <div className="space-y-4 mb-12">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`
                    w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-500
                    ${plan.highlight
                      ? "bg-primary text-black hover:bg-white hover:scale-[1.02]"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"}
                  `}>
                    {plan.cta}
                  </button>
                </div>

                {/* Refractive Highlight */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
