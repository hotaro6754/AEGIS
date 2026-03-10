"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Ideal for small startups and growing dev teams.",
    features: ["Intel Module", "Basic alerts", "5 scans / day", "Email support"],
    cta: "Get Started",
    recommended: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/mo",
    description: "Comprehensive protection for active enterprises.",
    features: [
      "All modules included",
      "24/7 continuous scans",
      "Red team validation",
      "Compliance engine",
      "Priority support",
    ],
    cta: "Start Trial",
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for billion-dollar organizations.",
    features: [
      "Everything in Pro",
      "SSO / SAML integration",
      "Custom SLAs",
      "Dedicated success manager",
      "On-prem deployment options",
    ],
    cta: "Contact Sales",
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-40 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-satoshi">
            Transparent pricing. <br />
            <span className="text-muted/60">No hidden costs.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-10 rounded-lg transition-shadow duration-500 ${
                plan.recommended
                  ? "premium-glass border-primary/30 ring-1 ring-primary/20 shadow-[0_20px_50px_rgba(201,169,98,0.1)]"
                  : "glass border-glass-border shadow-2xl"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 font-satoshi">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>
                <p className="text-muted text-sm mt-4 leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <MagneticButton
                variant={plan.recommended ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
