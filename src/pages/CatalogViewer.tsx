import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageTransition from "@/components/PageTransition";

// 14 catalog images in correct order (1-8 are JPG, 9-14 are PNG)
const catalogImages = [
  "/catalogo-01.jpg",
  "/catalogo-02.jpg",
  "/catalogo-03.jpg",
  "/catalogo-04.jpg",
  "/catalogo-05.jpg",
  "/catalogo-06.jpg",
  "/catalogo-07.jpg",
  "/catalogo-08.jpg",
  "/catalogo-09.png",
  "/catalogo-10.png",
  "/catalogo-11.png",
  "/catalogo-12.png",
  "/catalogo-13.png",
  "/catalogo-14.png",
];

interface ImageLoadState {
  loaded: boolean;
  error: boolean;
}

const CatalogViewer = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageStates, setImageStates] = useState<ImageLoadState[]>(
    catalogImages.map(() => ({ loaded: false, error: false }))
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const t = {
    loading: language === "es" ? "Cargando escena" : "Loading scene",
    back: language === "es" ? "Atrás" : "Back",
    next: language === "es" ? "Siguiente" : "Next",
    backToServices: language === "es" ? "Volver a Servicios" : "Back to Services",
    retry: language === "es" ? "Reintentar" : "Retry",
    errorLoading: language === "es" ? "Error al cargar imagen" : "Error loading image",
  };

  // Preload image with full load confirmation
  const preloadImage = useCallback((index: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (index < 0 || index >= catalogImages.length) {
        resolve();
        return;
      }

      const img = new Image();
      img.src = catalogImages[index];

      img.onload = async () => {
        try {
          // Use decode() if available for extra smoothness
          if (img.decode) {
            await img.decode();
          }
          setImageStates(prev => {
            const newStates = [...prev];
            newStates[index] = { loaded: true, error: false };
            return newStates;
          });
          resolve();
        } catch {
          setImageStates(prev => {
            const newStates = [...prev];
            newStates[index] = { loaded: true, error: false };
            return newStates;
          });
          resolve();
        }
      };

      img.onerror = () => {
        console.error(`Failed to load image at index ${index}: ${catalogImages[index]}`);
        setImageStates(prev => {
          const newStates = [...prev];
          newStates[index] = { loaded: false, error: true };
          return newStates;
        });
        reject(new Error(`Failed to load ${catalogImages[index]}`));
      };
    });
  }, []);

  // Load current image and preload adjacent
  useEffect(() => {
    const loadImages = async () => {
      setLoadProgress(0);
      
      // Load current image first
      try {
        setLoadProgress(30);
        await preloadImage(currentIndex);
        setLoadProgress(100);
      } catch {
        setLoadProgress(100);
      }

      // Preload adjacent images in background
      preloadImage(currentIndex + 1).catch(() => {});
      preloadImage(currentIndex - 1).catch(() => {});
    };

    loadImages();
  }, [currentIndex, preloadImage]);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % catalogImages.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + catalogImages.length) % catalogImages.length);
  }, []);

  const retryLoad = useCallback(() => {
    setImageStates(prev => {
      const newStates = [...prev];
      newStates[currentIndex] = { loaded: false, error: false };
      return newStates;
    });
    preloadImage(currentIndex);
  }, [currentIndex, preloadImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, isFullscreen]);

  // Touch/swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const currentState = imageStates[currentIndex];
  const isLoading = !currentState.loaded && !currentState.error;

  return (
    <PageTransition>
      <div
        ref={containerRef}
        className="min-h-screen bg-[#070B12] flex flex-col"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <Link to="/catalogo">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/30"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              {t.backToServices}
            </Button>
          </Link>

          <div className="flex items-center gap-4">
            {/* Counter */}
            <span className="text-muted-foreground text-sm font-medium">
              {currentIndex + 1} / {catalogImages.length}
            </span>

            {/* Fullscreen toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/30"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Main Image Area */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-8 relative min-h-[70vh]">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            className="absolute left-2 md:left-6 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-foreground"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 md:right-6 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-foreground"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </Button>

          {/* Image Container */}
          <div className="w-full max-w-[92vw] h-[80vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <div className="text-foreground text-lg font-medium">
                    {t.loading} {currentIndex + 1}/{catalogImages.length}...
                  </div>
                  <div className="w-48">
                    <Progress value={loadProgress} className="h-2" />
                  </div>
                </motion.div>
              ) : currentState.error ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <div className="text-destructive text-lg font-medium">
                    {t.errorLoading}
                  </div>
                  <Button onClick={retryLoad} variant="outline">
                    {t.retry}
                  </Button>
                </motion.div>
              ) : (
                <motion.img
                  key={currentIndex}
                  src={catalogImages[currentIndex]}
                  alt={`Catalog scene ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  style={{
                    boxShadow: "0 0 60px rgba(0, 0, 0, 0.5)",
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-center gap-4 p-4 md:p-6">
          <Button
            onClick={goToPrev}
            variant="outline"
            className="px-6 md:px-8 py-3 text-base border-border/50 hover:bg-secondary/30"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            {t.back}
          </Button>
          <Button
            onClick={goToNext}
            className="px-6 md:px-8 py-3 text-base bg-primary hover:bg-primary/90"
          >
            {t.next}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default CatalogViewer;
