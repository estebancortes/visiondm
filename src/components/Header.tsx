import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import visionDmLogo from "@/assets/vision-dm-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isOnCatalog = location.pathname === "/catalogo" || location.pathname === "/catalogo/galeria";

  const navLinks = [
    { name: t("nav.system"), href: "#system" },
    { name: t("nav.about"), href: "#founder" },
    { name: t("nav.plans"), href: "#plans" },
    { name: language === "es" ? "Catálogo" : "Catalog", href: "/catalogo/galeria", isRoute: true },
    { name: t("nav.catalog"), href: "/catalogo", isRoute: true },
    { name: language === "es" ? "Eventos" : "Events", href: "/eventos", isRoute: true },
    { name: language === "es" ? "Tienda" : "Store", href: "/tienda", isRoute: true },
    { name: t("nav.contact"), href: "#booking" },
  ];

  // Handle navigation with smooth transitions
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; isRoute?: boolean }) => {
    if (link.isRoute) return; // Let Link component handle route navigation
    
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isOnCatalog) {
      // Navigate to home first, then scroll to section
      navigate("/");
      setTimeout(() => {
        const sectionId = link.href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 400); // Wait for page transition to complete
    } else {
      // Just scroll to section on same page
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle button navigation (Book Call, Join)
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isOnCatalog) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={visionDmLogo} alt="VISION DM" className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-bold text-xl tracking-[0.15em] bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(43,74%,58%,0.3)]">
                VISION
              </span>
              <span className="font-display font-bold text-[0.65rem] tracking-[0.35em] text-foreground/80 mt-0.5">
                — DM —
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-0 border border-border/50 rounded-full overflow-hidden bg-secondary/30">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                  language === "es"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ES
              </button>
            </div>
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              asChild
            >
              <a href="#booking" onClick={(e) => handleButtonClick(e, "booking")}>{t("nav.bookCall")}</a>
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6"
              asChild
            >
              <a href="#problem" onClick={(e) => handleButtonClick(e, "problem")}>{t("nav.join")}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-0 border border-border/50 rounded-full overflow-hidden bg-secondary/30">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 text-xs font-medium transition-all duration-300 ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 text-xs font-medium transition-all duration-300 ${
                  language === "es"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                ES
              </button>
            </div>
            <button
              className="text-foreground p-2 hover:bg-secondary/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden pt-4 pb-2"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                link.isRoute ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-3 px-4 hover:bg-secondary/50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-3 px-4 hover:bg-secondary/50 rounded-lg cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50 mt-2">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                  <a href="#booking" onClick={(e) => handleButtonClick(e, "booking")}>{t("nav.bookCall")}</a>
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full" asChild>
                  <a href="#problem" onClick={(e) => handleButtonClick(e, "problem")}>{t("nav.join")}</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
