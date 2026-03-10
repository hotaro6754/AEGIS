import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Problem from "@/components/sections/Problem";
import Capabilities from "@/components/sections/Capabilities";
import Architecture from "@/components/sections/Architecture";
import Pricing from "@/components/sections/Pricing";
import Download from "@/components/sections/Download";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Trust />
      <Problem />
      <Capabilities />
      <Architecture />
      <Pricing />
      <Download />
      <Footer />
    </main>
  );
}
