"use client";

import { motion } from "framer-motion";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
          <path
            d="M50 5L10 25V55C10 75 50 95 50 95C50 95 90 75 90 55V25L50 5Z"
            fill="#0A0A0B"
            stroke="#C9A962"
            strokeWidth="3"
          />
          <motion.circle
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            cx="50" cy="40" r="12" fill="#C9A962" fillOpacity="0.2"
          />
          <circle cx="50" cy="40" r="4" fill="#C9A962" />
        </svg>
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-[0.3em] text-foreground leading-none">AEGIS</span>
        <span className="text-[8px] font-black tracking-[0.5em] text-primary leading-none mt-1">ELITE</span>
      </div>
    </div>
  );
}
