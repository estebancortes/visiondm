import { motion } from "framer-motion";
import { Building, User, CheckCircle, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ceoPhoto from "@/assets/ceo-daniel-mora.jpg";

const Founder = () => {
  const { t } = useLanguage();

  const handleBookCall = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/thedm420-corporationdm/30min'
      });
    }
  };

  const trustPoints = [
    { key: "founder.trust1", icon: Building },
    { key: "founder.trust2", icon: User },
    { key: "founder.trust3", icon: CheckCircle },
  ];

  return (
    <section id="founder" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            {t("founder.label")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 tracking-tight">
            {t("founder.headline")}
            <br />
            <span className="gradient-text">{t("founder.headline2")}</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Mission Card */}
            <div className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-3xl p-8 md:p-10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
              <div className="relative z-10">
                <h3 className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                  {t("founder.mission.label")}
                </h3>
                <h4 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  {t("founder.mission.title")}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {t("founder.mission.text")}
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-3xl p-8 md:p-10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-50" />
              <div className="relative z-10">
                <h3 className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                  {t("founder.vision.label")}
                </h3>
                <h4 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  {t("founder.vision.title")}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {t("founder.vision.text")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Founder Profile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative bg-card/80 backdrop-blur-md border border-primary/20 rounded-3xl p-8 md:p-10 h-fit"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-60" />
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-primary/30 via-transparent to-transparent opacity-50 -z-10" />
            
            <div className="relative z-10">
              {/* Small title */}
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-6">
                {t("founder.role")}
              </p>

              {/* Photo */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative mb-8"
              >
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                  <img 
                    src={ceoPhoto} 
                    alt={t("founder.name")} 
                    className="w-full h-full object-cover object-[center_25%]"
                  />
                </div>
                {/* Decorative glow */}
                <div className="absolute -inset-2 rounded-[1.5rem] border border-primary/10 -z-10" />
              </motion.div>

              {/* Name & Title */}
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-1">
                {t("founder.name")}
              </h3>
              <p className="text-primary text-base font-medium mb-5">
                {t("founder.title")}
              </p>

              {/* Bio */}
              <div className="space-y-3 mb-8">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {t("founder.bio")}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {t("founder.bio2")}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleBookCall}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-medium"
                >
                  {t("founder.cta.book")}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 text-foreground rounded-full px-6"
                  asChild
                >
                  <a
                    href="https://instagram.com/the_dm420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    {t("founder.instagram")}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {trustPoints.map((point, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl border border-primary/30 flex items-center justify-center bg-primary/5 flex-shrink-0">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">{t(point.key)}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
