import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import VideoSection from "@/components/VideoSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Founder from "@/components/Founder";
import Plans from "@/components/Plans";
import Booking from "@/components/Booking";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <VideoSection />
        <WhoIsThisFor />
        <Founder />
        <Plans />
        <Booking />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;