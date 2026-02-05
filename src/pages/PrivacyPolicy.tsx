import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                {t("privacy.title")} <span className="gradient-text">{t("privacy.title2")}</span>
              </h1>
              
              <p className="text-muted-foreground mb-12">
                {t("privacy.updated")}
              </p>

              <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <p className="text-foreground/90 leading-relaxed">
                  {t("privacy.intro")}
                </p>

                {/* Section 1 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s1.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s1.intro")}</p>
                  
                  <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t("privacy.s1.a.title")}</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>{t("privacy.s1.a.item1")}</li>
                        <li>{t("privacy.s1.a.item2")}</li>
                        <li>{t("privacy.s1.a.item3")}</li>
                        <li>{t("privacy.s1.a.item4")}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t("privacy.s1.b.title")}</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>{t("privacy.s1.b.item1")}</li>
                        <li>{t("privacy.s1.b.item2")}</li>
                        <li>{t("privacy.s1.b.item3")}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t("privacy.s1.c.title")}</h3>
                      <p className="text-muted-foreground">{t("privacy.s1.c.text")}</p>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s2.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s2.intro")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("privacy.s2.item1")}</li>
                    <li>{t("privacy.s2.item2")}</li>
                    <li>{t("privacy.s2.item3")}</li>
                    <li>{t("privacy.s2.item4")}</li>
                    <li>{t("privacy.s2.item5")}</li>
                    <li>{t("privacy.s2.item6")}</li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s3.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s3.intro")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("privacy.s3.item1")}</li>
                    <li>{t("privacy.s3.item2")}</li>
                    <li>{t("privacy.s3.item3")}</li>
                    <li>{t("privacy.s3.item4")}</li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s4.title")}
                  </h2>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{t("privacy.s4.noSell")}</strong> {t("privacy.s4.intro")}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("privacy.s4.item1")}</li>
                    <li>{t("privacy.s4.item2")}</li>
                    <li>{t("privacy.s4.item3")}</li>
                  </ul>
                  <p className="text-muted-foreground">{t("privacy.s4.note")}</p>
                </section>

                {/* Section 5 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s5.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s5.intro")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("privacy.s5.item1")}</li>
                    <li>{t("privacy.s5.item2")}</li>
                    <li>{t("privacy.s5.item3")}</li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s6.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s6.intro")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("privacy.s6.item1")}</li>
                    <li>{t("privacy.s6.item2")}</li>
                    <li>{t("privacy.s6.item3")}</li>
                  </ul>
                  <p className="text-muted-foreground">{t("privacy.s6.note")}</p>
                </section>

                {/* Section 7 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s7.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s7.text")}</p>
                </section>

                {/* Section 8 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s8.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s8.intro")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("privacy.s8.item1")}</li>
                    <li>{t("privacy.s8.item2")}</li>
                    <li>{t("privacy.s8.item3")}</li>
                  </ul>
                  <p className="text-muted-foreground">
                    {t("privacy.s8.contact")} <a href="mailto:thedm420@corporationdm.com" className="text-primary hover:underline">thedm420@corporationdm.com</a>
                  </p>
                </section>

                {/* Section 9 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s9.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s9.text")}</p>
                </section>

                {/* Section 10 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s10.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s10.text")}</p>
                </section>

                {/* Section 11 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s11.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("privacy.s11.text")}</p>
                </section>

                {/* Section 12 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("privacy.s12.title")}
                  </h2>
                  <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Vision DM LLC</p>
                    <p className="text-muted-foreground">
                      {t("privacy.s12.email")} <a href="mailto:thedm420@corporationdm.com" className="text-primary hover:underline">thedm420@corporationdm.com</a>
                    </p>
                    <p className="text-muted-foreground">Salt Lake City, UT, USA</p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;
