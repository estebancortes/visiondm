import { Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import visionDmLogo from "@/assets/vision-dm-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src={visionDmLogo} alt="VISION DM" className="h-16 w-auto object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-2xl tracking-[0.15em] bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                  VISION
                </span>
                <span className="font-display font-bold text-[0.7rem] tracking-[0.35em] text-foreground/80 mt-1">
                  — DM —
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-xs leading-relaxed">
              {t("footer.tagline")}
            </p>
            <p className="text-muted-foreground text-xs">
              {t("footer.company")}
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-foreground">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacidad" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-foreground">{t("footer.contact")}</h4>
            
            {/* Emails */}
            <div className="space-y-2 mb-4">
              <a
                href="mailto:thedm420@corporationdm.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>thedm420@corporationdm.com</span>
              </a>
              <a
                href="mailto:casamatrixdm@corporationdm.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>casamatrixdm@corporationdm.com</span>
              </a>
            </div>
            
            {/* Instagram */}
            <a
              href="https://instagram.com/visiondm_mundial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span>@visiondm_mundial</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} {t("footer.company")}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>🇺🇸</span>
            <span>USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
