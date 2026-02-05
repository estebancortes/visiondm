import { motion } from "framer-motion";
import { ClipboardList, FileText, Video, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    titleKey: "solution.step0.title",
    descKey: "solution.step0.desc",
  },
  {
    icon: FileText,
    step: "02",
    titleKey: "solution.step1.title",
    descKey: "solution.step1.desc",
  },
  {
    icon: Video,
    step: "03",
    titleKey: "solution.step2.title",
    descKey: "solution.step2.desc",
  },
  {
    icon: Rocket,
    step: "04",
    titleKey: "solution.step3.title",
    descKey: "solution.step3.desc",
  },
];

const Solution = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="system" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            {t("solution.label")}
          </span>
          
          {/* Formula */}
          <div className="mt-6 mb-8">
            <span className="inline-block text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-foreground/90">
              {t("solution.formula")}
            </span>
          </div>
          
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("solution.intro")}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative max-w-6xl mx-auto"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="border border-border/50 rounded-2xl p-8 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group h-full hover:shadow-[0_0_50px_-20px_hsl(0_0%_100%_/_0.3)]">
                {/* Step Number */}
                <div className="absolute -top-3 left-8">
                  <span className="text-xs font-bold text-primary tracking-widest bg-background px-3 py-1 border border-primary/30 rounded-full">
                    {t("solution.step")} {step.step}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 tracking-tight">{t(step.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(step.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Result Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 border border-primary/30 rounded-2xl px-8 py-6 bg-primary/5 backdrop-blur-sm max-w-2xl">
            <span className="text-5xl">📊</span>
            <span className="text-muted-foreground text-left text-sm leading-relaxed">
              {t("solution.result")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
