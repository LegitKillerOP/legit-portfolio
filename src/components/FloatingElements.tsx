import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

const FloatingElements = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/LegitKillerOP', label: 'GitHub' },
    { icon: FaDiscord, href: 'https://discord.gg/dedAEN2r4N', label: 'Discord' },
  ];

  return (
    <>
      {/* Floating Social Icons - Hidden on small screens */}
      <motion.div
        className="floating-social hidden lg:block"
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

      {/* Floating Email - Hidden on small screens */}
      <motion.div
        className="floating-email hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-muted-foreground after:mt-6">
          <motion.a
            href="mailto:contact.legitkiller@gmail.com"
            className="vertical-text text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 font-mono text-sm tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ writingMode: 'vertical-rl' }}
          >
            contact.legitkiller@gmail.com
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingElements;
