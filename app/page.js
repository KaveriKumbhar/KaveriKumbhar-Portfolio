import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <Services />
      <TechStack />
      <Portfolio />
      <Footer />
    </main>
  );
}
