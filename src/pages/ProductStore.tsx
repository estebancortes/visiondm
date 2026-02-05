import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShoppingBag, Truck, MapPin, Star, Package } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  featured?: boolean;
  inStock: boolean;
  shippingPrice: number;
  checkoutUrl: string;
  pickupCheckoutUrl: string;
}

const ProductStore = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Creator Gear",
      subtitle: "Professional equipment for content creators",
      description: "Everything you need to level up your content. Quality gear at competitive prices.",
      shippingBadge: "Free shipping on orders over $100",
      pickupBadge: "Local pickup available in Salt Lake City",
      categories: {
        lights: "Lighting",
        tripods: "Tripods & Mounts",
        audio: "Audio",
        accessories: "Accessories"
      },
      buyWithShipping: "Buy + Shipping",
      localPickup: "Local Pickup (SLC)",
      inStock: "In Stock",
      outOfStock: "Out of Stock",
      shipping: "shipping",
      pickupInfo: "Pick up at our Salt Lake City location",
      shippingInfo: "Ships within 2-3 business days"
    },
    es: {
      title: "Equipo para Creadores",
      subtitle: "Equipo profesional para creadores de contenido",
      description: "Todo lo que necesitas para elevar tu contenido. Equipo de calidad a precios competitivos.",
      shippingBadge: "Envío gratis en pedidos mayores a $100",
      pickupBadge: "Recogida local disponible en Salt Lake City",
      categories: {
        lights: "Iluminación",
        tripods: "Trípodes y Soportes",
        audio: "Audio",
        accessories: "Accesorios"
      },
      buyWithShipping: "Comprar + Envío",
      localPickup: "Recoger en SLC",
      inStock: "En Stock",
      outOfStock: "Agotado",
      shipping: "envío",
      pickupInfo: "Recoge en nuestra ubicación en Salt Lake City",
      shippingInfo: "Envío en 2-3 días hábiles"
    }
  };

  const t = content[language];

  // Products data - update with real Square links and images
  const products: Product[] = [
    {
      id: "ring-light-18",
      name: language === "en" ? "18\" Ring Light Pro" : "Ring Light Pro 18\"",
      description: language === "en" 
        ? "Professional 18-inch ring light with adjustable color temperature and brightness. Perfect for streaming and video calls."
        : "Ring light profesional de 18 pulgadas con temperatura de color y brillo ajustables. Perfecto para streaming y videollamadas.",
      price: 89,
      originalPrice: 120,
      image: "/placeholder.svg",
      category: "lights",
      featured: true,
      inStock: true,
      shippingPrice: 15,
      checkoutUrl: "https://square.link/u/neZtVsmL", // Replace with Square link (product + shipping)
      pickupCheckoutUrl: "#" // Replace with Square link (product only)
    },
    {
      id: "ring-light-10",
      name: language === "en" ? "10\" Ring Light Starter" : "Ring Light Starter 10\"",
      description: language === "en"
        ? "Compact 10-inch ring light ideal for selfies and TikTok content. USB powered."
        : "Ring light compacto de 10 pulgadas ideal para selfies y contenido de TikTok. Alimentado por USB.",
      price: 35,
      image: "/placeholder.svg",
      category: "lights",
      inStock: true,
      shippingPrice: 10,
      checkoutUrl: "#",
      pickupCheckoutUrl: "#"
    },
    {
      id: "led-panel",
      name: language === "en" ? "LED Panel Light Kit" : "Kit de Panel LED",
      description: language === "en"
        ? "Two-piece LED panel kit with stands. Bi-color temperature control for professional lighting setups."
        : "Kit de dos paneles LED con soportes. Control de temperatura bicolor para setups de iluminación profesional.",
      price: 159,
      originalPrice: 199,
      image: "/placeholder.svg",
      category: "lights",
      featured: true,
      inStock: true,
      shippingPrice: 20,
      checkoutUrl: "#",
      pickupCheckoutUrl: "#"
    },
    {
      id: "tripod-phone",
      name: language === "en" ? "Phone Tripod Flexible" : "Trípode Flexible para Celular",
      description: language === "en"
        ? "Flexible octopus-style tripod for phones. Wraps around any surface for creative angles."
        : "Trípode estilo pulpo flexible para celulares. Se envuelve en cualquier superficie para ángulos creativos.",
      price: 25,
      image: "/placeholder.svg",
      category: "tripods",
      inStock: true,
      shippingPrice: 8,
      checkoutUrl: "#",
      pickupCheckoutUrl: "#"
    },
    {
      id: "tripod-pro",
      name: language === "en" ? "Professional Tripod 70\"" : "Trípode Profesional 70\"",
      description: language === "en"
        ? "Heavy-duty aluminum tripod extending to 70 inches. Perfect for cameras and ring lights."
        : "Trípode de aluminio resistente que se extiende hasta 70 pulgadas. Perfecto para cámaras y ring lights.",
      price: 75,
      originalPrice: 95,
      image: "/placeholder.svg",
      category: "tripods",
      featured: true,
      inStock: true,
      shippingPrice: 18,
      checkoutUrl: "#",
      pickupCheckoutUrl: "#"
    },
    {
      id: "phone-mount",
      name: language === "en" ? "Universal Phone Mount" : "Soporte Universal para Celular",
      description: language === "en"
        ? "360° rotating phone mount compatible with all tripods. Fits phones up to 6.7 inches."
        : "Soporte de celular con rotación 360° compatible con todos los trípodes. Para celulares hasta 6.7 pulgadas.",
      price: 15,
      image: "/placeholder.svg",
      category: "tripods",
      inStock: true,
      shippingPrice: 5,
      checkoutUrl: "#",
      pickupCheckoutUrl: "#"
    },
    {
      id: "lav-mic",
      name: language === "en" ? "Wireless Lavalier Mic" : "Micrófono Lavalier Inalámbrico",
      description: language === "en"
        ? "Professional wireless lavalier microphone with receiver. Crystal clear audio for videos."
        : "Micrófono lavalier inalámbrico profesional con receptor. Audio cristalino para videos.",
      price: 49,
      image: "/placeholder.svg",
      category: "audio",
      inStock: true,
      shippingPrice: 8,
      checkoutUrl: "#",
      pickupCheckoutUrl: "#"
    },
    {
      id: "green-screen",
      name: language === "en" ? "Collapsible Green Screen" : "Green Screen Plegable",
      description: language === "en"
        ? "Portable collapsible green screen 5x7 ft. Easy setup for streaming and video production."
        : "Green screen plegable portátil de 5x7 pies. Fácil instalación para streaming y producción de video.",
      price: 65,
      image: "/placeholder.svg",
      category: "accessories",
      inStock: true,
      shippingPrice: 15,
      checkoutUrl: "#",
      pickupCheckoutUrl: "#"
    }
  ];

  const categories = ["lights", "tripods", "audio", "accessories"] as const;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <ShoppingBag className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">VISION DM Store</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                  {t.title}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t.description}
              </p>

              {/* Shipping & Pickup Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Truck className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-400">{t.shippingBadge}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-blue-400">{t.pickupBadge}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products by Category */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            {categories.map((category, catIndex) => {
              const categoryProducts = products.filter(p => p.category === category);
              if (categoryProducts.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                    <Package className="w-6 h-6 text-primary" />
                    {t.categories[category]}
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                          {/* Product Image */}
                          <div className="relative aspect-square overflow-hidden bg-secondary/30">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {product.featured && (
                              <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                            {product.originalPrice && (
                              <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                              </Badge>
                            )}
                          </div>

                          <CardContent className="p-5 flex flex-col flex-grow">
                            {/* Product Info */}
                            <div className="flex-grow">
                              <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                {product.description}
                              </p>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-3 mb-4">
                              <span className="font-display text-2xl font-bold text-primary">
                                ${product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-muted-foreground line-through">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>

                            {/* Stock Status */}
                            <div className="flex items-center gap-2 mb-4">
                              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                              <span className={`text-sm ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                                {product.inStock ? t.inStock : t.outOfStock}
                              </span>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-2">
                              {/* Buy with Shipping */}
                              <Button
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                disabled={!product.inStock}
                                asChild
                              >
                                <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer">
                                  <Truck className="w-4 h-4 mr-2" />
                                  {t.buyWithShipping} (+${product.shippingPrice})
                                </a>
                              </Button>

                              {/* Local Pickup */}
                              <Button
                                variant="outline"
                                className="w-full border-primary/50 text-primary hover:bg-primary/10"
                                disabled={!product.inStock}
                                asChild
                              >
                                <a href={product.pickupCheckoutUrl} target="_blank" rel="noopener noreferrer">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {t.localPickup} — ${product.price}
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card/50 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Truck className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{language === "en" ? "Shipping" : "Envío"}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t.shippingInfo}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card/50 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{language === "en" ? "Local Pickup" : "Recogida Local"}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t.pickupInfo}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProductStore;
