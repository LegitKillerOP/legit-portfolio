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
    'MongoDB',
    'MySQL',
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 font-mono">
            <span className="text-primary mr-2">01.</span>
            About Me
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-6 text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p>
                  Hey there! I’m <strong>LEGIT KILLER</strong>, a passionate developer with a love for bringing ideas to life—especially inside the blocky world of Minecraft. 
                  My journey started with curiosity around game mechanics and plugin systems, and that quickly turned into full-fledged projects that blend creativity with technical precision.
                </p>

                <p>
                  Over the years, I've worked on complex Minecraft plugins, game systems, and full-stack applications—from Hypixel-style lobbies to survival-enhancing experiences. 
                  Whether it's crafting immersive UIs, designing data-driven backends, or tuning gameplay loops, I aim to make every interaction feel polished and purposeful.
                </p>

                <p>
                  My current focus is building polished, scalable systems that are not only functional but fun. I'm always exploring new ways to merge gameplay and development into something players love.
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

            <div className="relative group order-first lg:order-last">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded border-2 border-primary/30 overflow-hidden group-hover:border-primary/60 transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl text-primary/60"><img src="/Logo.png" alt="" /></div>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
                </div>
                <div className="absolute -top-6 -right-6 w-64 h-64 sm:w-72 sm:h-72 border-2 border-primary rounded -z-10 group-hover:top-[-20px] group-hover:right-[-20px] transition-all duration-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;