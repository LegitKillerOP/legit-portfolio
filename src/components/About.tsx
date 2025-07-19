import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'MongoDB',
    'AWS',
  ];

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-mono">
            <span className="text-primary mr-2">01.</span>
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <motion.div
                className="space-y-6 text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p>
                  Hello! My name is Swofty and I enjoy creating things that live on the internet. 
                  My interest in web development started back in 2012 when I decided to try editing 
                  custom Tumblr themes — turns out hacking together a custom reblog button taught me 
                  a lot about HTML & CSS!
                </p>

                <p>
                  Fast-forward to today, and I've had the privilege of working at an advertising agency, 
                  a start-up, a huge corporation, and a student-led design studio. My main focus these 
                  days is building accessible, inclusive products and digital experiences at Upstatement 
                  for a variety of clients.
                </p>

                <p>
                  Here are a few technologies I've been working with recently:
                </p>
              </motion.div>

              <motion.ul
                className="grid grid-cols-2 gap-2 mt-6 text-sm font-mono text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-primary mr-3">▹</span>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="relative group">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative z-10 w-72 h-72 rounded border-2 border-primary/30 overflow-hidden group-hover:border-primary/60 transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl text-primary/60">👨‍💻</div>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
                </div>
                <div className="absolute -top-6 -right-6 w-72 h-72 border-2 border-primary rounded -z-10 group-hover:top-[-20px] group-hover:right-[-20px] transition-all duration-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;