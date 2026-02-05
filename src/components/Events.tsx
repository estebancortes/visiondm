import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Users, Trophy, Wifi, Calendar, ExternalLink, Flame, Zap, Globe } from "lucide-react";
import tournamentBanner from "@/assets/freefire-tournament-banner.png";

interface Event {
  id: string;
  title: {
    en: string;
    es: string;
  };
  type: "online" | "presential";
  description: {
    en: string;
    es: string;
  };
  ctaText: {
    en: string;
    es: string;
  };
  ctaUrl: string;
  featured?: boolean;
  image?: string;
  supportText?: {
    en: string;
    es: string;
  };
}

const events: Event[] = [
  {
    id: "freefire-tournament-2024",
    title: {
      en: "DM Free Fire International Tournament – The Return",
      es: "Torneo Internacional de Free Fire DM – El Regreso"
    },
    type: "online",
    description: {
      en: `We're back to what made us grow.

This is an international Free Fire tournament, open to players from any country.

A real competition created for squads that want to prove their level, play seriously, and be part of the new generation of DM digital events.

Organized matches, prizes, live streaming, and an active community.

Each registered team will be validated and organized before the official draw.

This is not just another tournament.
It's the beginning of a new era of digital and in-person events.`,
      es: `Volvimos a lo que nos hizo crecer.

Este es un torneo internacional de Free Fire, abierto para jugadores de cualquier país.

Una competencia real creada para escuadras que quieren demostrar nivel, jugar en serio y ser parte de la nueva generación de eventos digitales DM.

Partidas organizadas, premios, transmisión en vivo y una comunidad activa.

Cada equipo inscrito será validado y organizado antes del sorteo oficial.

Esto no es un torneo más.
Es el inicio de una nueva etapa de eventos digitales y presenciales.`
    },
    ctaText: {
      en: "REGISTER MY SQUAD",
      es: "INSCRIBIR MI ESCUADRA"
    },
    ctaUrl: "https://docs.google.com/forms/d/e/1FAIpQLSermpFlrJKXGhLmRzHbD6_waSoQCcKI1jABR1pSiWKsDqVYxQ/viewform",
    featured: true,
    image: tournamentBanner,
    supportText: {
      en: "Registered teams will be organized and contacted via WhatsApp before the draw.",
      es: "Los equipos inscritos serán organizados y contactados vía WhatsApp antes del sorteo."
    }
  }
];

const Events = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "DM EVENTS",
      subtitle: "Digital and in-person experiences for the new generation",
      description: "DM doesn't do normal events.\n\nWe create real experiences: tournaments, competitions, parties, and meetups where community comes first.\n\nOnline and in-person events, open to everyone.",
      online: "Online Event",
      presential: "In-Person Event",
      comingSoon: "Coming Soon",
      nextGen: "NEXT-GEN EVENTS"
    },
    es: {
      title: "EVENTOS DM",
      subtitle: "Experiencias digitales y presenciales para la nueva generación",
      description: "DM no hace eventos normales.\n\nCreamos experiencias reales: torneos, competencias, fiestas y encuentros donde la comunidad es lo primero.\n\nEventos online y presenciales, abiertos para todos.",
      online: "Evento Digital",
      presential: "Evento Presencial",
      comingSoon: "Próximamente",
      nextGen: "EVENTOS NEXT-GEN"
    }
  };

  const t = content[language];

  return (
    <section id="events" className="relative py-16 md:py-24 overflow-hidden bg-background">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        {/* Animated energy orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Dynamic grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Glowing badge */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Zap className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-green-400 font-bold tracking-wider text-xs uppercase">
              {t.nextGen}
            </span>
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <motion.span 
              className="bg-gradient-to-r from-green-400 via-primary to-orange-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {t.title}
            </motion.span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          
          <div className="max-w-2xl mx-auto text-foreground/70 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {t.description}
          </div>
        </motion.div>

        {/* Featured Event with Banner */}
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="max-w-5xl mx-auto"
          >
            {/* Event Card with Banner */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-green-500/30 bg-card/50 backdrop-blur-sm shadow-[0_0_60px_rgba(34,197,94,0.15)]">
              
              {/* Banner Image */}
              {event.image && (
                <div className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title[language]}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Badges on banner */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <Badge className="bg-green-500/90 text-white border-0 px-3 py-1.5 text-xs font-bold shadow-lg">
                      <Wifi className="w-3 h-3 mr-1" /> {t.online}
                    </Badge>
                    <Badge className="bg-primary/90 text-primary-foreground border-0 px-3 py-1.5 text-xs font-bold shadow-lg">
                      <Trophy className="w-3 h-3 mr-1" /> Featured
                    </Badge>
                    <Badge className="bg-orange-500/90 text-white border-0 px-3 py-1.5 text-xs font-bold shadow-lg">
                      <Globe className="w-3 h-3 mr-1" /> International
                    </Badge>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div className="relative p-6 md:p-10 lg:p-12">
                {/* Title */}
                <motion.h3 
                  className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-green-400 to-primary bg-clip-text text-transparent">
                    {event.title[language]}
                  </span>
                </motion.h3>
                
                {/* Description */}
                <motion.div 
                  className="text-muted-foreground text-base md:text-lg leading-relaxed whitespace-pre-line mb-8 max-w-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {event.description[language]}
                </motion.div>
                
                {/* Event details */}
                <motion.div 
                  className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-green-400" />
                    <span>{language === "es" ? "Escuadras de 4 jugadores" : "Squads of 4 players"}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>{language === "es" ? "Abierto a todos los países" : "Open to all countries"}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                    <Trophy className="w-4 h-4 text-orange-400" />
                    <span>{language === "es" ? "Premios reales" : "Real prizes"}</span>
                  </div>
                </motion.div>
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <Button 
                    size="lg"
                    className="
                      w-full sm:w-auto font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-xl
                      bg-gradient-to-r from-green-500 via-green-600 to-green-500 
                      hover:from-green-400 hover:via-green-500 hover:to-green-400
                      text-white 
                      shadow-[0_0_40px_rgba(34,197,94,0.4)] 
                      hover:shadow-[0_0_60px_rgba(34,197,94,0.6)]
                      transition-all duration-300 
                      transform hover:scale-[1.02] active:scale-[0.98]
                      border-2 border-green-400/50
                    "
                    asChild
                  >
                    <a href={event.ctaUrl} target="_blank" rel="noopener noreferrer">
                      <Gamepad2 className="w-6 h-6 mr-2" />
                      {event.ctaText[language]}
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  
                  {/* Support text */}
                  {event.supportText && (
                    <p className="text-sm text-muted-foreground/80 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.supportText[language]}
                    </p>
                  )}
                </motion.div>
              </div>

              {/* Decorative corner glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        ))}

        {/* Coming soon teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border/50">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              🎮
            </motion.span>
            <p className="text-muted-foreground text-lg font-medium">
              {language === "es" 
                ? "Próximamente: Fiestas, conciertos y más eventos presenciales..." 
                : "Coming soon: Parties, concerts and more in-person events..."
              }
            </p>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              🔥
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
