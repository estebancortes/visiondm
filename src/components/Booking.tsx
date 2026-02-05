import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const Booking = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/thedm420-corporationdm/30min",
      });
    }
  };

  return (
    <section id="booking" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              {t("booking.label")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-6 tracking-tight">
              {t("booking.headline")}
              <br />
              <span className="gradient-text">{t("booking.headline2")}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              {t("booking.description")}
            </p>
          </motion.div>

          {/* Booking Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="border border-border/50 rounded-3xl p-10 bg-card/50 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl border border-primary/30 flex items-center justify-center bg-primary/10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <span className="text-muted-foreground">30 min</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border/50" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl border border-primary/30 flex items-center justify-center bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <span className="text-muted-foreground">Video Call</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={openCalendly}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-7 text-lg glow rounded-full"
              >
                {t("booking.cta")}
              </Button>
            </motion.div>

            <p className="text-xs text-muted-foreground mt-8">
              {t("booking.note")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
