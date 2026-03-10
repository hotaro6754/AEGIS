"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/ui/MagneticButton";

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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className={`px-6 py-2 rounded-full transition-all duration-500 ${
          isScrolled ? "glass" : "bg-transparent"
        }`}>
          <Logo />
        </div>

        <div className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-500 ${
          isScrolled ? "glass" : "bg-transparent"
        }`}>
          {["Products", "Solutions", "Pricing", "Docs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <MagneticButton variant="outline" className="px-6 py-2 text-sm hidden sm:block">
          Request Demo
        </MagneticButton>
      </div>
    </motion.nav>
  );
}
