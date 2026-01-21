import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  const heroImages = useMemo(() => [heroBg1, heroBg2, heroBg3], []);
  const [currentImage, setCurrentImage] = useState(() => 
    heroImages[Math.floor(Math.random() * heroImages.length)]
  );
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = currentImage;
    img.onload = () => setIsImageLoaded(true);
  }, [currentImage]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: isImageLoaded ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentImage})` }}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container-premium text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Wyb</span>
            <span className="text-gradient">Zite</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
  >
We Build Websites That Speak Your Brand, Visit It. Love It 🧭
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button
            onClick={onExploreClick}
            className="btn-hero text-lg"
          >
            Explore
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
