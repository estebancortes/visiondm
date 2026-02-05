import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
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
                {t("terms.title")} <span className="gradient-text">{t("terms.title2")}</span>
              </h1>
              
              <p className="text-muted-foreground mb-12">
                {t("terms.updated")}
              </p>

              <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <p className="text-foreground/90 leading-relaxed">
                  {t("terms.intro")}
                </p>

                {/* Section 1 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s1.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("terms.s1.text")}</p>
                </section>

                {/* Section 2 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s2.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("terms.s2.text1")}</p>
                  <p className="text-muted-foreground">{t("terms.s2.text2")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("terms.s2.item1")}</li>
                    <li>{t("terms.s2.item2")}</li>
                    <li>{t("terms.s2.item3")}</li>
                  </ul>
                  <p className="text-muted-foreground">{t("terms.s2.note")}</p>
                </section>

                {/* Section 3 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s3.title")}
                  </h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li>{t("terms.s3.item1")}</li>
                    <li>{t("terms.s3.item2")}</li>
                    <li>{t("terms.s3.item3")}</li>
                    <li><strong className="text-foreground">{t("terms.s3.item4.label")}</strong> {t("terms.s3.item4.text")}</li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s4.title")}
                  </h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li>{t("terms.s4.item1")}</li>
                    <li>{t("terms.s4.item2")}</li>
                    <li>{t("terms.s4.item3")}</li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s5.title")}
                  </h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li>{t("terms.s5.item1")}</li>
                    <li>{t("terms.s5.item2")}</li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s6.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("terms.s6.intro")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("terms.s6.item1")}</li>
                    <li>{t("terms.s6.item2")}</li>
                    <li>{t("terms.s6.item3")}</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">{t("terms.s6.note")}</p>
                </section>

                {/* Section 7 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s7.title")}
                  </h2>
                  
                  <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t("terms.s7.a.title")}</h3>
                      <p className="text-muted-foreground">{t("terms.s7.a.text")}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t("terms.s7.b.title")}</h3>
                      <p className="text-muted-foreground">{t("terms.s7.b.text")}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t("terms.s7.c.title")}</h3>
                      <p className="text-muted-foreground">{t("terms.s7.c.text")}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t("terms.s7.d.title")}</h3>
                      <p className="text-muted-foreground">{t("terms.s7.d.text")}</p>
                    </div>
                  </div>
                </section>

                {/* Section 8 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s8.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("terms.s8.intro")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("terms.s8.item1")}</li>
                    <li>{t("terms.s8.item2")}</li>
                    <li>{t("terms.s8.item3")}</li>
                  </ul>
                </section>

                {/* Section 9 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s9.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("terms.s9.text")}</p>
                </section>

                {/* Section 10 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s10.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("terms.s10.intro")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("terms.s10.item1")}</li>
                    <li>{t("terms.s10.item2")}</li>
                    <li>{t("terms.s10.item3")}</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">{t("terms.s10.note")}</p>
                </section>

                {/* Section 11 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s11.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("terms.s11.intro")}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                    <li>{t("terms.s11.item1")}</li>
                    <li>{t("terms.s11.item2")}</li>
                    <li>{t("terms.s11.item3")}</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">{t("terms.s11.note")}</p>
                </section>

                {/* Section 12 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s12.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("terms.s12.text1")}</p>
                  <p className="text-muted-foreground">{t("terms.s12.text2")}</p>
                </section>

                {/* Section 13 */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.s13.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("terms.s13.text")}</p>
                </section>

                {/* Contact Section */}
                <section className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {t("terms.contact.title")}
                  </h2>
                  <div className="bg-card/50 border border-border/50 rounded-2xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Vision DM LLC</p>
                    <p className="text-muted-foreground">
                      {t("terms.contact.email")} <a href="mailto:thedm420@corporationdm.com" className="text-primary hover:underline">thedm420@corporationdm.com</a>
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

export default TermsOfService;
