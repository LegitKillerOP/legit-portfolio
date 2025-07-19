import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-primary font-mono text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            04. What's Next?
          </motion.h2>

          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get In Touch
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm always open to discussing new projects, creative ideas, or just having a chat about Minecraft development. 
            Feel free to reach out via email or connect with me on social media.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="mailto:contact.legitkiller@gmail.com"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 border-2 border-primary text-primary rounded bg-transparent hover:bg-primary/10 transition-all duration-300 font-mono text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;