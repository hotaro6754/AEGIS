"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-12 block">
          Error 404
        </span>

        <h1 className="text-8xl md:text-[12rem] font-bold font-satoshi tracking-tighter mb-12 leading-none text-white/10">
          LOST.
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold font-satoshi mb-12 tracking-tight">
          System Breach: <span className="text-muted/40 italic">Page Not Found.</span>
        </h2>

        <p className="text-muted text-xl max-w-xl mx-auto mb-20 leading-relaxed font-medium">
          The node you are looking for has been decommissioned or moved to a new encrypted layer.
        </p>

        <Link href="/" passHref>
          <MagneticButton className="px-16 py-8 text-sm font-black uppercase tracking-[0.4em] shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
            Back to Base
          </MagneticButton>
        </Link>
      </motion.div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
    </main>
  );
}
