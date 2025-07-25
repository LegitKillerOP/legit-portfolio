import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'I craft Minecraft-plugin, web experiences.';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 75);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="text-primary font-mono text-base md:text-lg mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, my name is
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Legit Killer
          </motion.h2>

          <motion.h3
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I’m a full-stack developer blending Minecraft's plugin and
            modern web technologies to craft bold, and beautiful digital
            adventures. Let’s build your dream pixel-by-pixel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-primary text-primary rounded bg-transparent hover:bg-primary/10 transition-all duration-300 font-mono text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Check out my work!
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
