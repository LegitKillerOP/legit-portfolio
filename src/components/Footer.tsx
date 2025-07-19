import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground font-mono text-sm mb-4">
            Designed & Built by Swofty Developer
          </p>
          
          <div className="flex justify-center items-center space-x-4 mb-6">
            <motion.a
              href="https://github.com/swofty/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <Github size={16} />
            </motion.a>
            <motion.a
              href="https://v4.brittanychiang.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-xs"
              whileHover={{ y: -2 }}
            >
              Inspired by Brittany Chiang
            </motion.a>
          </div>

          <div className="text-xs text-muted-foreground/60 space-y-1">
            <p>Built with React, TypeScript, Tailwind CSS & Framer Motion</p>
            <p>Hosted on Vercel</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;