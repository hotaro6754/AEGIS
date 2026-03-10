import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Architecture from "@/components/sections/Architecture";
import Problem from "@/components/sections/Problem";
import Capabilities from "@/components/sections/Capabilities";
import Pricing from "@/components/sections/Pricing";
import Download from "@/components/sections/Download";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />
      <Hero />
      <Trust />
      <Architecture />
      <Problem />
      <Capabilities />
      <Pricing />
      <Download />
      <Footer />
    </main>
  );
}
