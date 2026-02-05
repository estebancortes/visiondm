import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";
import heroGlobalClean from "@/assets/hero-global-clean-hd.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const earthScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Golden particles configuration
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 5,
  }));

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Earth Background - Golden Continents, No Water */}
      <motion.div 
        style={{ scale: earthScale }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url(${heroGlobalClean})` }}
        />
      </motion.div>

      {/* Animated Golden Auras - Behind everything except Earth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Outer pulse ring 1 - slowest, largest */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.05, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Outer pulse ring 2 */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-primary/25"
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.08, 0.2],
          }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Inner pulse ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-primary/30"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.1, 0.25],
          }}
          transition={{ duration: 8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbital energy flow - top arc */}
        <motion.div
          className="absolute left-1/2 top-[15%] -translate-x-1/2 w-[70%] h-[35%]"
          style={{ 
            borderRadius: "50% 50% 0 0",
            borderTop: "1px solid hsl(43 74% 58% / 0.3)",
            borderLeft: "1px solid hsl(43 74% 58% / 0.15)",
            borderRight: "1px solid hsl(43 74% 58% / 0.15)",
          }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbital energy flow - bottom arc */}
        <motion.div
          className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[60%] h-[30%]"
          style={{ 
            borderRadius: "0 0 50% 50%",
            borderBottom: "1px solid hsl(43 74% 58% / 0.25)",
            borderLeft: "1px solid hsl(43 74% 58% / 0.1)",
            borderRight: "1px solid hsl(43 74% 58% / 0.1)",
          }}
          animate={{ 
            opacity: [0.15, 0.4, 0.15],
            scale: [1.02, 0.98, 1.02],
          }}
          transition={{ duration: 10, delay: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating golden particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              filter: "blur(0.5px)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 15 : -15, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Corner glows - ambient energy */}
        <motion.div
          className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
          animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-primary/8 rounded-full blur-[100px]"
          animate={{ opacity: [0.06, 0.14, 0.06], scale: [1.05, 0.95, 1.05] }}
          transition={{ duration: 12, delay: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 -left-20 w-[200px] h-[200px] bg-primary/6 rounded-full blur-[80px]"
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[180px] h-[180px] bg-primary/6 rounded-full blur-[70px]"
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 9, delay: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Intelligent overlay - calm zone for text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,hsl(220,50%,3%,0.55)_0%,hsl(220,50%,3%,0.3)_50%,transparent_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - more refined */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-primary/40 px-5 py-2 rounded-full mb-10 bg-background/50 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-primary/90 tracking-[0.2em] uppercase">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Main Headline - Corporate, Integrated */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] mb-5 tracking-tight"
          >
            <span className="text-[#F5F0E8] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              {t("hero.headline")}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent drop-shadow-[0_4px_30px_hsl(43,74%,58%,0.4)]">
              {t("hero.headline2")}
            </span>
          </motion.h1>

          {/* Subheadline - Softer, More Elegant */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#C9C5BC] max-w-xl mx-auto mb-10 text-balance leading-relaxed font-normal tracking-wide"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* CTA Buttons - Gold Protagonist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-[0_0_50px_hsl(43,74%,58%,0.35)] hover:shadow-[0_0_70px_hsl(43,74%,58%,0.5)] transition-all duration-300 group tracking-wide"
              asChild
            >
              <a href="#problem">
                {t("hero.cta1")}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#C9C5BC]/40 hover:bg-white/5 hover:border-[#C9C5BC]/60 text-[#F5F0E8] px-8 py-6 text-base rounded-full backdrop-blur-md bg-background/20 font-medium tracking-wide"
              asChild
            >
              <a href="#booking">
                <Phone className="mr-2 w-5 h-5" />
                {t("hero.cta2")}
              </a>
            </Button>
          </motion.div>

          {/* Stats - Anchored to System */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-6 sm:gap-10 max-w-lg mx-auto pt-8 border-t border-primary/20"
          >
            {[
              { value: "90+", label: t("hero.stat1") },
              { value: "5-20", label: t("hero.stat2") },
              { value: "3", label: t("hero.stat3") },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="font-display text-3xl sm:text-4xl font-semibold text-primary mb-1.5 drop-shadow-[0_0_25px_hsl(43,74%,58%,0.35)]">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-[#A8A49B] uppercase tracking-[0.2em] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Line - Gold accent */}
      <div className="absolute bottom-0 left-0 right-0 accent-line" />
    </section>
  );
};

export default Hero;