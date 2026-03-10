"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info } from "lucide-react";

const plans = [
  {
    name: "Enterprise",
    price: "4,499",
    currency: "$",
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
    price: "8,999",
    currency: "$",
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
    currency: "",
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
    <section className="py-60 relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-8 block">
            Pricing & Scaling
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-satoshi tracking-tight">
            Protection that <span className="text-muted/40 italic">Scales with You.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => handleClick(plan.name)}
              className={`relative cursor-pointer group ${plan.highlight ? "md:scale-105" : ""}`}
            >
              <div className={`
                relative h-full p-12 rounded-[3rem] border transition-all duration-700
                ${plan.highlight
                  ? "bg-white/[0.04] border-primary/40 shadow-[0_40px_100px_rgba(59,130,246,0.1)]"
                  : "bg-white/[0.01] border-glass-border/40 hover:border-white/20"}
                overflow-hidden backdrop-blur-3xl flex flex-col
              `}>
                {/* Refraction Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] text-muted">{plan.name}</h3>
                    {plan.highlight && (
                       <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                         Recommended
                       </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-muted/60 text-3xl font-bold font-satoshi">{plan.currency}</span>
                    <span className="text-6xl md:text-7xl font-bold font-satoshi tracking-tighter text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-muted/60 text-sm font-black uppercase tracking-widest mb-10">{plan.period}</p>

                  <p className="text-muted text-lg leading-relaxed mb-12">{plan.description}</p>

                  <div className="space-y-6 mb-16 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 text-base">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-foreground/90 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`
                    w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all duration-700
                    ${plan.highlight
                      ? "bg-primary text-white hover:bg-white hover:text-black hover:scale-[1.02] shadow-[0_20px_40px_rgba(59,130,246,0.2)]"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"}
                  `}>
                    {plan.cta}
                  </button>

                  <div className="mt-8 flex items-center justify-center gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Info className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Usage limits apply</span>
                  </div>
                </div>

                {/* Liquid Glass Ripple */}
                <AnimatePresence>
                  {clickedId === plan.name && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 4, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute inset-0 bg-primary/20 rounded-full blur-3xl pointer-events-none"
                      style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
