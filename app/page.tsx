import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] overflow-x-hidden max-w-full">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Reviews />
      <Location />
      <CTABanner />
      <Footer />
      <ChatBot />
    </main>
  );
}
