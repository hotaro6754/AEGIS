"use client";

import { motion } from "framer-motion";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield Silhouette */}
        <path d="M50 5L10 25V55C10 75 50 95 50 95C50 95 90 75 90 55V25L50 5Z" fill="black" stroke="#C9A962" strokeWidth="2"/>

        {/* Interconnected Nodes */}
        <circle cx="50" cy="30" r="4" fill="#C9A962" className="animate-pulse">
           <title>The AI Brain</title>
        </circle>

        <circle cx="35" cy="45" r="3" fill="#A1A1A6" />
        <circle cx="65" cy="45" r="3" fill="#A1A1A6" />
        <circle cx="25" cy="60" r="3" fill="#A1A1A6" />
        <circle cx="75" cy="60" r="3" fill="#A1A1A6" />
        <circle cx="50" cy="60" r="3" fill="#A1A1A6" />
        <circle cx="40" cy="75" r="3" fill="#A1A1A6" />
        <circle cx="60" cy="75" r="3" fill="#A1A1A6" />

        {/* Connections */}
        <line x1="50" y1="30" x2="35" y2="45" stroke="#A1A1A6" strokeWidth="0.5" opacity="0.3"/>
        <line x1="50" y1="30" x2="65" y2="45" stroke="#A1A1A6" strokeWidth="0.5" opacity="0.3"/>
        <line x1="35" y1="45" x2="25" y2="60" stroke="#A1A1A6" strokeWidth="0.5" opacity="0.3"/>
        <line x1="65" y1="45" x2="75" y2="60" stroke="#A1A1A6" strokeWidth="0.5" opacity="0.3"/>
        <line x1="35" y1="45" x2="50" y2="60" stroke="#A1A1A6" strokeWidth="0.5" opacity="0.3"/>
        <line x1="65" y1="45" x2="50" y2="60" stroke="#A1A1A6" strokeWidth="0.5" opacity="0.3"/>
      </svg>
      <span className="text-xl font-bold tracking-[0.2em] text-foreground uppercase">A E G I S</span>
    </div>
  );
}
