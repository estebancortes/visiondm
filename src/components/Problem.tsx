import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Calendar, TrendingDown, Battery } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";

const problems = [
  {
    icon: Brain,
    titleKey: "problem.point1.title",
    descKey: "problem.point1.desc",
  },
  {
    icon: Calendar,
    titleKey: "problem.point2.title",
    descKey: "problem.point2.desc",
  },
  {
    icon: TrendingDown,
    titleKey: "problem.point3.title",
    descKey: "problem.point3.desc",
  },
  {
    icon: Battery,
    titleKey: "problem.point4.title",
    descKey: "problem.point4.desc",
  },
];

const Problem = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="problem" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-card/80 to-transparent"
      />
      
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
            {t("problem.label")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-6 tracking-tight">
            {t("problem.headline")}
            <br />
            <span className="text-muted-foreground">{t("problem.headline2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            {t("problem.intro")}
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="border border-border/50 rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_-15px_hsl(210_100%_60%_/_0.2)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl border border-border/50 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <problem.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2 tracking-tight">{t(problem.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(problem.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
