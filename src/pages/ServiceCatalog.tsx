import { motion } from "framer-motion";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Smartphone, 
  Image, 
  Video, 
  Youtube, 
  Sparkles, 
  ArrowLeft,
  Check,
  Star,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const ServiceCatalogContent = () => {
  const { language } = useLanguage();

  // Load Calendly script
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);
  
  
  const content = {
    en: {
      hero: {
        badge: "Service Catalog",
        title: "Creative Services",
        subtitle: "for Brands & Creators",
        description: "Vision DM LLC is a creative agency focused on branding, visual design, and content editing for brands and creators in the US market.",
        philosophy: "We don't compete on price—we compete on quality, visual impact, speed, and strategy.",
        tagline: "All services are designed to position, sell, and scale."
      },
      back: "Back to Home",
      sections: {
        branding: {
          title: "Branding & Identity",
          icon: Palette,
          services: [
            {
              name: "Professional Logo – Brand Core",
              price: "$150",
              description: "Base visual identity for entrepreneurs.",
              features: ["Quick essence analysis", "Visual concept", "Strategic typography", "Social media versions", "PNG/JPG delivery"],
              goal: "Clear, usable identity across all platforms.",
              checkoutUrl: "https://square.link/u/A2fJeOrZ"
            },
            {
              name: "Premium Logo – Brand Pro",
              price: "$300",
              description: "Advanced branding with competitive analysis.",
              features: ["Market benchmark", "2 visual concepts", "Professional color palette", "Basic usage manual", "Social media adaptations"],
              goal: "Stand out from competitors with strategic design.",
              checkoutUrl: "https://square.link/u/QzPWK753"
            },
            {
              name: "Complete Brand Kit",
              price: "$600",
              description: "Complete and scalable visual system.",
              features: ["Final logo + variants", "Color palettes", "Typography", "Usage manual", "Social media templates", "Visual coherence guide"],
              goal: "Solid brand ready for campaigns and growth.",
              featured: true,
              checkoutUrl: "https://square.link/u/Z9UxjSRC"
            }
          ]
        },
        social: {
          title: "Social Media Design",
          icon: Smartphone,
          services: [
            { name: "Commercial Flyer", price: "$40", description: "Eye-catching promotional design", checkoutUrl: "https://square.link/u/O6JnvwPE" },
            { name: "Premium Flyer (Ads/Launches)", price: "$70", description: "High-impact advertising material", checkoutUrl: "https://square.link/u/RsPebm5T" },
            { name: "Stream Flyer", price: "$35", description: "Professional streaming graphics", checkoutUrl: "https://square.link/u/LP09P89I" },
            { name: "5 Flyers Pack", price: "$150", description: "Consistent visual package", featured: true, checkoutUrl: "https://square.link/u/k30IqBZC" },
            { name: "10 Flyers Pack", price: "$280", description: "Complete campaign kit", checkoutUrl: "https://square.link/u/6Xn3RaQO" }
          ],
          goal: "Capture attention in the first 3 seconds with visual coherence."
        },
        covers: {
          title: "Covers & Visuals",
          icon: Image,
          services: [
            { name: "IG / Facebook / X Covers", price: "$35", description: "Profile banners", checkoutUrl: "https://square.link/u/KCJ6517u" },
            { name: "YouTube / Kick / Twitch Covers", price: "$50", description: "Channel artwork", checkoutUrl: "https://square.link/u/uoYY7eXX" },
            { name: "Complete Cover Pack", price: "$120", description: "All platforms covered", featured: true, checkoutUrl: "https://square.link/u/rMcWng6R" }
          ],
          goal: "More professional profiles and better first impression."
        },
        thumbnails: {
          title: "Thumbnails & Stickers",
          icon: Sparkles,
          services: [
            { name: "IG / TikTok / Shorts Thumbnail", price: "$25", description: "Scroll-stopping visuals", checkoutUrl: "https://square.link/u/dTq9BdUr" },
            { name: "Professional YouTube Thumbnail", price: "$40", description: "CTR-optimized design", checkoutUrl: "https://square.link/u/Ss2Jc2Ki" },
            { name: "5 Thumbnails Pack", price: "$125", description: "Consistent channel look", featured: true, checkoutUrl: "https://square.link/u/8GMjnWUy" },
            { name: "Sticker Pack x5", price: "$60", description: "Custom brand stickers", checkoutUrl: "https://square.link/u/2c215oFe" },
            { name: "Premium Animated Stickers", price: "$120", description: "Motion graphics stickers", checkoutUrl: "https://square.link/u/ZsGoJ17L" }
          ],
          goal: "Increase CTR (Click Through Rate)."
        },
        shortVideo: {
          title: "Short-Form Video Editing (≤30s)",
          icon: Video,
          services: [
            { name: "Level 1 – Basic", price: "$10", description: "Clean, simple edits", checkoutUrl: "https://square.link/u/b8hocC2j" },
            { name: "Level 2 – Dynamic", price: "$30", description: "Engaging transitions & effects", checkoutUrl: "https://square.link/u/o14M5tMq" },
            { name: "Level 3 – Professional", price: "$50", description: "Premium quality production", checkoutUrl: "https://square.link/u/Y13lyYgf" },
            { name: "10 Videos L1 Pack", price: "$90", description: "Bulk basic content", checkoutUrl: "https://square.link/u/6yo9E4A4" },
            { name: "10 Videos L2 Pack", price: "$270", description: "Bulk dynamic content", featured: true, checkoutUrl: "https://square.link/u/CWMkjBW5" },
            { name: "10 Videos L3 Pack", price: "$450", description: "Bulk premium content", checkoutUrl: "https://square.link/u/zIbHFqKu" }
          ],
          goal: "For Reels, Shorts, and TikTok."
        },
        longVideo: {
          title: "Long-Form Video Editing (YouTube)",
          icon: Youtube,
          services: [
            { name: "Level 1", price: "$40", description: "Basic long-form editing", checkoutUrl: "https://square.link/u/zIbHFqKu" },
            { name: "Level 2", price: "$70", description: "Enhanced production value", checkoutUrl: "https://square.link/u/61qnn9Sd" },
            { name: "Level 3", price: "$100", description: "Premium storytelling", featured: true, checkoutUrl: "https://square.link/u/bMgcz8LZ" },
            { name: "Animated Intro", price: "$60", description: "Custom branded intro", checkoutUrl: "https://square.link/u/iBJGRAxw" },
            { name: "Outro + CTA", price: "$40", description: "Professional ending", checkoutUrl: "https://square.link/u/vTlOgNQd" },
            { name: "Subtitles", price: "$30", description: "Accessibility & engagement", checkoutUrl: "https://square.link/u/F6wOtwXz" }
          ],
          goal: "Higher retention, professionalism, and storytelling."
        },
        extras: {
          title: "Extra High-Value Services",
          icon: Star,
          services: [
            { name: "Visual Profile Optimization", price: "$80", description: "Complete profile makeover", checkoutUrl: "https://square.link/u/SBAEIKDC" },
            { name: "Brand Visual Audit", price: "$120", description: "Comprehensive brand review", featured: true, checkoutUrl: "https://square.link/u/TrpefamS" },
            { name: "Professional Media Kit", price: "$150", description: "Press-ready materials", checkoutUrl: "https://square.link/u/lmEPrNBJ" },
            { name: "Ad Creatives (Meta/Google)", price: "$90", description: "Conversion-focused ads", checkoutUrl: "https://square.link/u/QHcLiPwQ" },
            { name: "Course/Membership Covers", price: "$70", description: "Digital product packaging", checkoutUrl: "https://square.link/u/1XjSn1RM" }
          ],
          goal: "Strategic services for serious growth."
        },
        webdev: {
          title: "Web Development",
          icon: Globe,
          services: [
            {
              name: "Professional Landing Page",
              price: "$1,000",
              description: "High-converting landing page designed to capture leads and drive sales.",
              features: ["Custom responsive design", "Mobile-first approach", "SEO optimized", "Fast loading speed", "Contact/Lead forms", "Analytics integration", "1 round of revisions"],
              goal: "Convert visitors into customers with a professional web presence.",
              featured: true,
              checkoutUrl: "https://square.link/u/3xItDjKi"
            }
          ],
          goal: "Professional web presence that converts."
        }
      },
      philosophy: {
        title: "VISION DM Philosophy",
        points: [
          "Prices aligned to the US market",
          "Focus on effectiveness, not being cheap",
          "Services connected to memberships, DM System, and brand scaling"
        ],
        tagline: "Vision DM transforms ideas into impact.",
        closing: "Design and content that sells, positions, and scales."
      },
      cta: {
        title: "Ready to Elevate Your Brand?",
        button: "Book a Strategy Call"
      }
    },
    es: {
      hero: {
        badge: "Catálogo de Servicios",
        title: "Servicios Creativos",
        subtitle: "para Marcas y Creadores",
        description: "Vision DM LLC es una agencia creativa enfocada en branding, diseño visual y edición de contenido para marcas y creadores en el mercado de EE. UU.",
        philosophy: "No competimos por precio—competimos por calidad, impacto visual, velocidad y estrategia.",
        tagline: "Todos los servicios están pensados para posicionar, vender y escalar."
      },
      back: "Volver al Inicio",
      sections: {
        branding: {
          title: "Branding & Marca",
          icon: Palette,
          services: [
            {
              name: "Logo Profesional – Brand Core",
              price: "$150",
              description: "Identidad visual base para emprendedores.",
              features: ["Análisis rápido de esencia", "Concepto visual", "Tipografía estratégica", "Versiones para redes", "Entrega PNG/JPG"],
              goal: "Identidad clara y usable en todas las plataformas.",
              checkoutUrl: "https://square.link/u/A2fJeOrZ"
            },
            {
              name: "Logo Premium – Brand Pro",
              price: "$300",
              description: "Branding avanzado con análisis competitivo.",
              features: ["Benchmark de mercado", "2 conceptos visuales", "Paleta de color profesional", "Manual básico de uso", "Adaptaciones para redes"],
              goal: "Destaca de la competencia con diseño estratégico.",
              checkoutUrl: "https://square.link/u/QzPWK753"
            },
            {
              name: "Brand Kit Completo",
              price: "$600",
              description: "Sistema visual completo y escalable.",
              features: ["Logo final + variantes", "Paletas de color", "Tipografías", "Manual de uso", "Plantillas para redes", "Guía de coherencia visual"],
              goal: "Marca sólida lista para campañas y crecimiento.",
              featured: true,
              checkoutUrl: "https://square.link/u/Z9UxjSRC"
            }
          ]
        },
        social: {
          title: "Diseño para Redes Sociales",
          icon: Smartphone,
          services: [
            { name: "Flyer Comercial", price: "$40", description: "Diseño promocional llamativo", checkoutUrl: "https://square.link/u/O6JnvwPE" },
            { name: "Flyer Premium (Ads/Lanzamientos)", price: "$70", description: "Material publicitario de alto impacto", checkoutUrl: "https://square.link/u/RsPebm5T" },
            { name: "Flyer para Stream", price: "$35", description: "Gráficos profesionales de streaming", checkoutUrl: "https://square.link/u/LP09P89I" },
            { name: "Pack 5 Flyers", price: "$150", description: "Paquete visual consistente", featured: true, checkoutUrl: "https://square.link/u/k30IqBZC" },
            { name: "Pack 10 Flyers", price: "$280", description: "Kit completo de campaña", checkoutUrl: "https://square.link/u/6Xn3RaQO" }
          ],
          goal: "Captar atención en los primeros 3 segundos con coherencia visual."
        },
        covers: {
          title: "Portadas y Visuales",
          icon: Image,
          services: [
            { name: "Portadas IG / Facebook / X", price: "$35", description: "Banners de perfil", checkoutUrl: "https://square.link/u/KCJ6517u" },
            { name: "Portadas YouTube / Kick / Twitch", price: "$50", description: "Arte de canal", checkoutUrl: "https://square.link/u/uoYY7eXX" },
            { name: "Pack Completo de Portadas", price: "$120", description: "Todas las plataformas cubiertas", featured: true, checkoutUrl: "https://square.link/u/rMcWng6R" }
          ],
          goal: "Perfiles más profesionales y mejor primera impresión."
        },
        thumbnails: {
          title: "Miniaturas & Stickers",
          icon: Sparkles,
          services: [
            { name: "Miniatura IG / TikTok / Shorts", price: "$25", description: "Visuales que detienen el scroll", checkoutUrl: "https://square.link/u/dTq9BdUr" },
            { name: "Miniatura Profesional YouTube", price: "$40", description: "Diseño optimizado para CTR", checkoutUrl: "https://square.link/u/Ss2Jc2Ki" },
            { name: "Pack 5 Miniaturas", price: "$125", description: "Look consistente del canal", featured: true, checkoutUrl: "https://square.link/u/8GMjnWUy" },
            { name: "Pack Stickers x5", price: "$60", description: "Stickers personalizados de marca", checkoutUrl: "https://square.link/u/2c215oFe" },
            { name: "Stickers Animados Premium", price: "$120", description: "Stickers con motion graphics", checkoutUrl: "https://square.link/u/ZsGoJ17L" }
          ],
          goal: "Aumentar CTR (Click Through Rate)."
        },
        shortVideo: {
          title: "Edición de Video Corto (≤30s)",
          icon: Video,
          services: [
            { name: "Nivel 1 – Básico", price: "$10", description: "Ediciones limpias y simples", checkoutUrl: "https://square.link/u/b8hocC2j" },
            { name: "Nivel 2 – Dinámico", price: "$30", description: "Transiciones y efectos atractivos", checkoutUrl: "https://square.link/u/o14M5tMq" },
            { name: "Nivel 3 – Profesional", price: "$50", description: "Producción de calidad premium", checkoutUrl: "https://square.link/u/Y13lyYgf" },
            { name: "Pack 10 Videos N1", price: "$90", description: "Contenido básico en volumen", checkoutUrl: "https://square.link/u/6yo9E4A4" },
            { name: "Pack 10 Videos N2", price: "$270", description: "Contenido dinámico en volumen", featured: true, checkoutUrl: "https://square.link/u/CWMkjBW5" },
            { name: "Pack 10 Videos N3", price: "$450", description: "Contenido premium en volumen", checkoutUrl: "https://square.link/u/zIbHFqKu" }
          ],
          goal: "Para Reels, Shorts y TikTok."
        },
        longVideo: {
          title: "Edición de Video Largo (YouTube)",
          icon: Youtube,
          services: [
            { name: "Nivel 1", price: "$40", description: "Edición básica de formato largo", checkoutUrl: "https://square.link/u/zIbHFqKu" },
            { name: "Nivel 2", price: "$70", description: "Mayor valor de producción", checkoutUrl: "https://square.link/u/61qnn9Sd" },
            { name: "Nivel 3", price: "$100", description: "Storytelling premium", featured: true, checkoutUrl: "https://square.link/u/bMgcz8LZ" },
            { name: "Intro Animada", price: "$60", description: "Intro personalizada de marca", checkoutUrl: "https://square.link/u/iBJGRAxw" },
            { name: "Outro + CTA", price: "$40", description: "Final profesional", checkoutUrl: "https://square.link/u/vTlOgNQd" },
            { name: "Subtítulos", price: "$30", description: "Accesibilidad y engagement", checkoutUrl: "https://square.link/u/F6wOtwXz" }
          ],
          goal: "Mayor retención, profesionalismo y storytelling."
        },
        extras: {
          title: "Servicios Extra de Alto Valor",
          icon: Star,
          services: [
            { name: "Optimización Visual de Perfiles", price: "$80", description: "Transformación completa de perfil", checkoutUrl: "https://square.link/u/SBAEIKDC" },
            { name: "Auditoría Visual de Marca", price: "$120", description: "Revisión integral de marca", featured: true, checkoutUrl: "https://square.link/u/TrpefamS" },
            { name: "Media Kit Profesional", price: "$150", description: "Materiales listos para prensa", checkoutUrl: "https://square.link/u/lmEPrNBJ" },
            { name: "Creatividades Ads (Meta/Google)", price: "$90", description: "Anuncios enfocados en conversión", checkoutUrl: "https://square.link/u/QHcLiPwQ" },
            { name: "Carátulas para Cursos/Membresías", price: "$70", description: "Empaque de productos digitales", checkoutUrl: "https://square.link/u/1XjSn1RM" }
          ],
          goal: "Servicios estratégicos para crecimiento serio."
        },
        webdev: {
          title: "Desarrollo Web",
          icon: Globe,
          services: [
            {
              name: "Landing Page Profesional",
              price: "$1,000",
              description: "Página de aterrizaje de alta conversión diseñada para capturar leads e impulsar ventas.",
              features: ["Diseño personalizado responsive", "Enfoque mobile-first", "Optimizado para SEO", "Velocidad de carga rápida", "Formularios de contacto/leads", "Integración de analytics", "1 ronda de revisiones"],
              goal: "Convierte visitantes en clientes con una presencia web profesional.",
              featured: true,
              checkoutUrl: "https://square.link/u/3xItDjKi"
            }
          ],
          goal: "Presencia web profesional que convierte."
        }
      },
      philosophy: {
        title: "Filosofía VISION DM",
        points: [
          "Precios alineados al mercado USA",
          "Enfoque en efectividad, no en ser baratos",
          "Servicios conectados a membresías, Sistema DM y escalado de marcas"
        ],
        tagline: "Vision DM convierte ideas en impacto.",
        closing: "Diseño y contenido que vende, posiciona y escala."
      },
      cta: {
        title: "¿Listo para Elevar Tu Marca?",
        button: "Agendar Llamada de Estrategia"
      }
    }
  };

  const t = content[language];
  const sections = Object.values(t.sections);

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              {t.back}
            </Link>
            
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full border border-border/50 bg-secondary/30 text-xs font-medium tracking-wider text-muted-foreground mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t.hero.badge}
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              <span className="gradient-text">{t.hero.title}</span>
              <br />
              <span className="text-foreground">{t.hero.subtitle}</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            
            <div className="mt-8 p-6 glass-card rounded-2xl max-w-2xl mx-auto">
              <p className="text-foreground font-medium">{t.hero.philosophy}</p>
              <p className="text-primary mt-2 font-semibold">{t.hero.tagline}</p>
            </div>
          </motion.div>
        </section>

        {/* Services Sections */}
        <section className="container mx-auto px-6">
          <div className="space-y-20">
            {sections.map((section: any, sectionIndex: number) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="space-y-8"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.services.map((service: any, index: number) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card 
                          className={`h-full hover-lift transition-all duration-300 ${
                            service.featured 
                              ? 'border-primary/50 bg-primary/5' 
                              : 'border-border/50 bg-card'
                          }`}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                                {service.name}
                              </CardTitle>
                              {service.featured && (
                                <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full shrink-0 ml-2">
                                  ★
                                </span>
                              )}
                            </div>
                            <p className="text-2xl font-bold text-primary mt-2">
                              {service.price}
                            </p>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                              {service.description}
                            </p>
                            
                            {service.features && (
                              <ul className="space-y-2">
                                {service.features.map((feature: string, i: number) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            )}
                            
                            {service.goal && (
                              <div className="pt-3 border-t border-border/50">
                                <p className="text-xs text-primary font-medium">
                                  🎯 {service.goal}
                                </p>
                              </div>
                            )}
                            
                            {service.checkoutUrl && (
                              <Button 
                                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                asChild
                              >
                                <a href={service.checkoutUrl} target="_blank" rel="noopener noreferrer">
                                  {language === 'en' ? 'Get Started' : 'Comenzar'}
                                </a>
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Section Goal */}
                  {section.goal && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">🎯</span>
                      <span className="text-sm font-medium">{section.goal}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card p-10 rounded-3xl">
              <h2 className="text-3xl font-display font-bold gradient-text mb-8">
                {t.philosophy.title}
              </h2>
              
              <ul className="space-y-4 mb-8">
                {t.philosophy.points.map((point: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-center gap-3 text-foreground"
                  >
                    <Check className="w-5 h-5 text-primary" />
                    {point}
                  </motion.li>
                ))}
              </ul>
              
              <p className="text-xl font-semibold text-foreground mb-2">
                {t.philosophy.tagline}
              </p>
              <p className="text-muted-foreground">
                {t.philosophy.closing}
              </p>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              {t.cta.title}
            </h2>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-10 py-6 text-lg glow"
              onClick={() => {
                // @ts-ignore
                if (window.Calendly) {
                  // @ts-ignore
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/thedm420-corporationdm/30min'
                  });
                }
              }}
            >
              {t.cta.button}
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

const ServiceCatalog = () => {
  return (
    <LanguageProvider>
      <ServiceCatalogContent />
    </LanguageProvider>
  );
};

export default ServiceCatalog;
