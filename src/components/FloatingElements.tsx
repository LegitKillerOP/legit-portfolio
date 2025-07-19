import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const FloatingElements = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/swofty', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/swofty', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/swofty', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/swofty', label: 'LinkedIn' },
  ];

  return (
    <>
      {/* Floating Social Icons */}
      <motion.div
        className="floating-social"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-muted-foreground after:mt-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Floating Email */}
      <motion.div
        className="floating-email"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-muted-foreground after:mt-6">
          <motion.a
            href="mailto:swofty@example.com"
            className="vertical-text text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 font-mono text-sm tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ writingMode: 'vertical-rl' }}
          >
            swofty@example.com
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingElements;