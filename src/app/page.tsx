import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Architecture from "@/components/sections/Architecture";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Capabilities from "@/components/sections/Capabilities";
import Pricing from "@/components/sections/Pricing";
import Download from "@/components/sections/Download";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <Hero />
      <Trust />
      <Architecture />
      <Problem />
      <Solution />
      <Capabilities />
      <Pricing />
      <Download />
      <Footer />
    </main>
  );
}
