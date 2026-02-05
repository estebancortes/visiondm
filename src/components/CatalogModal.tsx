import { useEffect, useCallback, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";

// 14 catalog images - using the uploaded assets (1-8 JPG, 9-14 PNG)
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

const AUTOPLAY_INTERVAL = 2800; // 2.8 seconds - premium feel

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatalogModal = ({ isOpen, onClose }: CatalogModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [imageError, setImageError] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const totalImages = catalogImages.length;

  // Navigate to previous image
  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    setImageError(null);
    setIsLoading(true);
  }, [totalImages]);

  // Navigate to next image
  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    setImageError(null);
    setIsLoading(true);
  }, [totalImages]);

  // Autoplay logic
  useEffect(() => {
    if (!isOpen || isPaused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isOpen, isPaused, goToNext]);

  // Pause on interaction, resume after 5s
  const pauseAutoplay = useCallback(() => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
      setIsPaused(false);
      setImageError(null);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      pauseAutoplay();
      
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext, pauseAutoplay]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    pauseAutoplay();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  // Image error handler
  const handleImageError = () => {
    console.error(`Catalog image failed to load at index: ${currentIndex}, URL: ${catalogImages[currentIndex]}`);
    setImageError(currentIndex);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageError(null);
  };

  const retryImage = () => {
    setImageError(null);
    setIsLoading(true);
  };

  // Preload adjacent images
  useEffect(() => {
    if (!isOpen) return;

    const prevIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;

    [prevIndex, nextIndex].forEach((index) => {
      const img = new Image();
      img.src = catalogImages[index];
    });
  }, [currentIndex, isOpen, totalImages]);

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            backgroundColor: "rgba(5, 10, 20, 0.95)",
            backdropFilter: "blur(8px)",
          }}
          onClick={onClose}
        >
          {/* Modal Content */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 group"
              aria-label="Close catalog"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 group-hover:text-white transition-colors" />
            </button>

            {/* Page Indicator - Top */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:top-6 z-10">
              <span className="text-white/60 text-sm sm:text-base font-medium tracking-wider">
                {currentIndex + 1} / {totalImages}
              </span>
            </div>

            {/* Navigation Arrows - Desktop */}
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 p-3 lg:p-4 rounded-full bg-white/5 hover:bg-white/15 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white/70 group-hover:text-primary transition-colors" />
            </button>

            <button
              onClick={goToNext}
              className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 p-3 lg:p-4 rounded-full bg-white/5 hover:bg-white/15 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white/70 group-hover:text-primary transition-colors" />
            </button>

            {/* Image Container */}
            <div 
              className="relative w-full max-w-5xl min-h-[70vh] h-[70vh] sm:h-[75vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.35 },
                    scale: { duration: 0.35 },
                  }}
                  className="absolute inset-0 flex items-center justify-center p-2 sm:p-4"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Loading State */}
                    {isLoading && !imageError && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      </div>
                    )}
                    
                    {/* Error State */}
                    {imageError === currentIndex ? (
                      <div className="flex flex-col items-center justify-center gap-4 text-white/60">
                        <p className="text-lg">Loading...</p>
                        <button
                          onClick={retryImage}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Retry
                        </button>
                      </div>
                    ) : (
                      <div className="relative max-w-full max-h-full rounded-lg overflow-hidden shadow-2xl border border-primary/10">
                        <img
                          src={catalogImages[currentIndex]}
                          alt={`Catalog page ${currentIndex + 1}`}
                          className="w-full h-full max-h-[65vh] sm:max-h-[70vh] md:max-h-[75vh] object-contain block"
                          onLoad={handleImageLoad}
                          onError={handleImageError}
                          style={{
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                          }}
                        />
                        {/* Subtle golden border glow */}
                        <div 
                          className="absolute inset-0 pointer-events-none rounded-lg"
                          style={{
                            boxShadow: "inset 0 0 0 1px rgba(212, 175, 55, 0.15)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="flex md:hidden gap-6 mt-6">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white/70" />
              </button>
              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white/70" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CatalogModal;
