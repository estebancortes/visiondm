import { motion } from "framer-motion";
import { Briefcase, Building, Palette, Store, Users, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import lifestyleControl from "@/assets/lifestyle-control.jpg";

const audiences = [
  { icon: Briefcase, key: "who.entrepreneur" },
  { icon: Building, key: "who.business" },
  { icon: Users, key: "who.creator" },
  { icon: Palette, key: "who.artist" },
  { icon: Store, key: "who.local" },
  { icon: Users, key: "who.anyone" },
];

const WhoIsThisFor = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Aspirational Background - Quiet Luxury */}
      <div className="absolute inset-0">
        {/* Main lifestyle image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${lifestyleControl})` }}
        />
        
        {/* Elegant overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,50%,3%,0.7)] via-[hsl(220,50%,3%,0.75)] to-[hsl(220,50%,3%,0.9)]" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(220,50%,3%,0.4)_100%)]" />
        
        {/* Gold accent glow - subtle */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            {t("who.label")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-6 tracking-tight">
            {t("who.headline")}
            <br />
            <span className="text-muted-foreground">{t("who.headline2")}</span>
          </h2>
        </motion.div>

        {/* Audience Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center gap-3 border border-primary/20 rounded-xl p-4 bg-card/40 backdrop-blur-md hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 cursor-default"
            >
              <audience.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">{t(audience.key)}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="border border-primary/30 rounded-2xl p-6 bg-card/40 backdrop-blur-md">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("who.warning")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line - gold */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default WhoIsThisFor;