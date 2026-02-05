import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Events from "@/components/Events";

const EventsPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Header />
      <main className="pt-20">
        <Events />
      </main>
      <Footer />
    </motion.div>
  );
};

export default EventsPage;
