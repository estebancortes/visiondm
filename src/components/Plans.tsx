import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Plans = () => {
  const { t } = useLanguage();

  const SQUARE_PAYMENT_LINKS = {
    level1: "https://checkout.square.site/merchant/ML1RX2SGPBA70/checkout/EY33CU4SAVR24BLXWLCE4ZBR",
    level2: "https://checkout.square.site/merchant/ML1RX2SGPBA70/checkout/JGEY5I2EPUKOKBGKEWHWHTUU",
    level3: "https://checkout.square.site/merchant/ML1RX2SGPBA70/checkout/JEIF5VTSQNIKFIT4TGMKJDFQ",
  };

  const plans = [
    {
      nameKey: "plans.level1",
      subtitleKey: "plans.level1.subtitle",
      descKey: "plans.level1.desc",
      price: "997",
      paymentLink: SQUARE_PAYMENT_LINKS.level1,
      tasks: "90",
      videos: "90",
      publications: "180",
      tier: "bronze",
      features: [
        "plans.feature.profile.analysis",
        "plans.feature.networks",
        "plans.feature.logo.professional",
        "plans.feature.cover",
        "plans.feature.folder",
        "plans.feature.support.weekday",
      ],
      popular: false,
    },
    {
      nameKey: "plans.level2",
      subtitleKey: "plans.level2.subtitle",
      descKey: "plans.level2.desc",
      price: "1,997",
      paymentLink: SQUARE_PAYMENT_LINKS.level2,
      tasks: "120",
      videos: "120",
      publications: "240",
      tier: "silver",
      features: [
        "plans.feature.profile.analysis",
        "plans.feature.networks",
        "plans.feature.logo.premium",
        "plans.feature.cover",
        "plans.feature.folder",
        "plans.feature.design.resources.15",
        "plans.feature.niche.analysis",
        "plans.feature.support.weekday",
      ],
      extras: [
        { key: "plans.feature.controls", value: "2" },
        { key: "plans.feature.strategy.monthly", value: "" },
      ],
      popular: true,
    },
    {
      nameKey: "plans.level3",
      subtitleKey: "plans.level3.subtitle",
      descKey: "plans.level3.desc",
      price: "3,997",
      paymentLink: SQUARE_PAYMENT_LINKS.level3,
      tasks: "100",
      videos: "100",
      publications: "400",
      tier: "gold",
      features: [
        "plans.level3.feature.profile",
        "plans.level3.feature.positioning",
        "plans.level3.feature.dataDriven",
        "plans.level3.feature.dmSystem",
        "plans.level3.feature.ideas",
        "plans.level3.feature.indirectSales",
        "plans.level3.feature.organization",
        "plans.level3.feature.designResources",
        "plans.level3.feature.nicheAnalysis",
        "plans.level3.feature.prioritySupport",
        "plans.level3.feature.weeklySessions",
        "plans.level3.feature.optimization",
      ],
      platforms: "plans.level3.platforms",
      popular: false,
    },
  ];

  const getTierStyles = (tier: string, isPopular: boolean) => {
    const styles = {
      bronze: {
        card: "bg-gradient-to-br from-[#8B7355]/20 via-[#6B5344]/15 to-[#5C4636]/20 border-[#8B7355]/40",
        cardHover: "hover:border-[#A08060]/60 hover:shadow-[0_0_40px_-15px_rgba(139,115,85,0.4)]",
        accent: "text-[#C4A882]",
        statsBg: "bg-[#8B7355]/10 border-[#8B7355]/20",
        statsText: "text-[#C4A882]",
        checkBg: "bg-[#8B7355]/10 border-[#8B7355]/30",
        checkIcon: "text-[#C4A882]",
        button: "bg-[#8B7355]/80 hover:bg-[#8B7355] text-white",
      },
      silver: {
        card: "bg-gradient-to-br from-[#8A8A8A]/25 via-[#707070]/20 to-[#5A5A5A]/25 border-[#A0A0A0]/50",
        cardHover: "hover:border-[#B8B8B8]/70 hover:shadow-[0_0_50px_-15px_rgba(180,180,180,0.5)]",
        accent: "text-[#D4D4D4]",
        statsBg: "bg-[#A0A0A0]/10 border-[#A0A0A0]/20",
        statsText: "text-[#D4D4D4]",
        checkBg: "bg-[#A0A0A0]/10 border-[#A0A0A0]/30",
        checkIcon: "text-[#D4D4D4]",
        button: "bg-[#A0A0A0] hover:bg-[#B8B8B8] text-black glow",
      },
      gold: {
        card: "bg-gradient-to-br from-[#9A7B4F]/20 via-[#7A6240]/15 to-[#5A4830]/20 border-[#B8924C]/40",
        cardHover: "hover:border-[#D4A84C]/60 hover:shadow-[0_0_40px_-15px_rgba(180,146,76,0.4)]",
        accent: "text-[#D4B87C]",
        statsBg: "bg-[#B8924C]/10 border-[#B8924C]/20",
        statsText: "text-[#D4B87C]",
        checkBg: "bg-[#B8924C]/10 border-[#B8924C]/30",
        checkIcon: "text-[#D4B87C]",
        button: "bg-[#B8924C]/80 hover:bg-[#B8924C] text-black",
      },
    };
    return styles[tier as keyof typeof styles] || styles.bronze;
  };

  return (
    <section id="plans" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            {t("plans.label")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-6 tracking-tight">
            {t("plans.headline")}
            <br />
            <span className="gradient-text">{t("plans.headline2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("plans.intro")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const tierStyles = getTierStyles(plan.tier, plan.popular);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-3xl p-8 backdrop-blur-sm border-2 ${tierStyles.card} ${tierStyles.cardHover} transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A0A0A0] px-5 py-1.5 rounded-full flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 text-black fill-current" />
                    <span className="text-xs font-bold text-black uppercase tracking-wider">
                      {t("plans.popular")}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`font-display text-2xl font-semibold tracking-tight ${tierStyles.accent}`}>
                    {t(plan.nameKey)}
                  </h3>
                  <span className={`text-sm font-medium ${tierStyles.accent} opacity-80`}>
                    {t(plan.subtitleKey)}
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">{t(plan.descKey)}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-sm">$</span>
                    <span className={`font-display text-5xl font-semibold tracking-tight ${tierStyles.accent}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className={`grid grid-cols-3 gap-2 mb-6 p-4 rounded-2xl border ${tierStyles.statsBg}`}>
                <div className="text-center">
                    <span className={`text-2xl font-semibold ${tierStyles.statsText}`}>{plan.tasks}</span>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{plan.tier === 'gold' ? t("plans.level3.metric.ideas") : t("plans.feature.tasks")}</p>
                  </div>
                  <div className={`text-center border-x ${tierStyles.statsBg.replace('bg-', 'border-')}`}>
                    <span className={`text-2xl font-semibold ${tierStyles.statsText}`}>{plan.videos}</span>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{t("plans.feature.videos")}</p>
                  </div>
                  <div className="text-center">
                    <span className={`text-2xl font-semibold ${tierStyles.statsText}`}>{plan.publications}</span>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{t("plans.feature.publications")}</p>
                  </div>
                </div>

                {/* Platforms for Level 3 */}
                {(plan as any).platforms && (
                  <div className={`mb-6 p-3 rounded-xl border ${tierStyles.statsBg}`}>
                    <p className="text-[10px] text-muted-foreground mb-1">{t("plans.platforms.label")}</p>
                    <p className={`text-sm font-medium ${tierStyles.statsText}`}>{t((plan as any).platforms)}</p>
                  </div>
                )}

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${tierStyles.checkBg}`}>
                        <Check className={`w-3 h-3 ${tierStyles.checkIcon}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{t(feature)}</span>
                    </li>
                  ))}
                  {plan.extras?.map((extra, extraIndex) => (
                    <li key={`extra-${extraIndex}`} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${tierStyles.checkBg}`}>
                        <Check className={`w-3 h-3 ${tierStyles.checkIcon}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {extra.value && <span className="text-foreground font-medium">{extra.value} </span>}
                        {t(extra.key)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full py-6 font-semibold rounded-full text-base ${tierStyles.button}`}
                >
                  <a href={plan.paymentLink} target="_blank" rel="noopener noreferrer">
                    {t("plans.cta")}
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plans;
