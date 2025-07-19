import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'LegitPixel',
      role: 'Admin & Lead Developer',
      duration: '2025 — Present',
      description: [
        'Lead the development of a Hypixel-inspired Minecraft network, focusing on performance, scalability, and an immersive lobby experience.',
        'Designed and implemented custom plugins for minigames, survival, and skyblock modes, enhancing gameplay with unique features.',
        'Managed a team of developers and testers while maintaining code quality, server uptime, and user satisfaction for thousands of players.',
      ],
    },
    {
      company: 'GodSpunky',
      role: 'Owner',
      duration: '2021 — 2022',
      description: [
        'Owner and operated India’s #1 Minecraft server, peaking at over 600 concurrent players daily.',
        'Oversaw server infrastructure, plugin development, and community management for survival, skyblock, and minigame modes.',
        'Built and maintained a loyal player base through frequent updates, seasonal content, and engaging events.',
      ],
    },
    {
      company: 'Krystal Networks',
      role: 'Developer',
      duration: '2021 — 2021',
      description: [
        'Contributed to core development of a Hypixel remake project focused on lobby systems and minigame prototypes.',
        'Developed custom NPC interactions, GUI menus, and cosmetic systems to replicate Hypixel-style user experiences.',
        'Collaborated with a small dev team to deploy updates, fix bugs, and gather feedback from a growing community.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-mono">
            <span className="text-primary mr-2">02.</span>
            Where I've Worked
          </h2>

          <div className="flex flex-col md:flex-row">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible mb-8 md:mb-0 md:mr-8">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.company}
                  className={`px-6 py-3 text-left whitespace-nowrap md:whitespace-normal border-l-2 md:border-l-2 md:border-b-0 border-b-2 transition-all duration-300 font-mono text-sm ${
                    activeTab === index
                      ? 'text-primary border-primary bg-primary/5'
                      : 'text-muted-foreground border-border hover:bg-muted/10 hover:text-primary'
                  }`}
                  onClick={() => setActiveTab(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {exp.company}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {experiences[activeTab].role}{' '}
                  <span className="text-primary">@ {experiences[activeTab].company}</span>
                </h3>
                <p className="text-sm font-mono text-muted-foreground mb-6">
                  {experiences[activeTab].duration}
                </p>
                <ul className="space-y-4">
                  {experiences[activeTab].description.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="text-primary mr-3 mt-1 flex-shrink-0">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;