"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/ui/MagneticButton";

const menuItems = [
  { name: "Platform", href: "#capabilities" },
  { name: "Architecture", href: "#architecture" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#docs" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "py-4" : "py-10"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className={`px-8 py-3 rounded-full transition-all duration-700 ${
          isScrolled ? "glass border border-white/5" : "bg-transparent"
        }`}>
          <Logo />
        </div>

        {/* Center: Menu */}
        <div className={`hidden md:flex items-center gap-10 px-12 py-4 rounded-full transition-all duration-700 ${
          isScrolled ? "glass border border-white/5 shadow-2xl" : "bg-transparent"
        }`}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[11px] font-black uppercase tracking-[0.3em] text-muted hover:text-primary transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="hidden sm:block">
          <MagneticButton variant="outline" className="px-10 py-3 text-[10px] font-black uppercase tracking-[0.3em]">
            Request Access
          </MagneticButton>
        </div>

        {/* Backdrop for mobile (Blurry overlay when scrolled) */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 -top-10 -bottom-10 -z-10 backdrop-blur-md bg-black/40 pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
