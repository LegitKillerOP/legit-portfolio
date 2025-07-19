import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Spotify Profile',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
      github: 'https://github.com/bchiang7/spotify-profile',
      external: 'https://spotify-profile.herokuapp.com/',
      image: '🎵',
    },
    {
      title: 'Halcyon Theme',
      description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      github: 'https://github.com/bchiang7/halcyon-theme',
      external: 'https://halcyon-theme.netlify.com/',
      image: '🎨',
    },
    {
      title: 'v4',
      description: 'Fourth iteration of my personal website. Built with Gatsby and hosted on Netlify.',
      tech: ['Gatsby', 'React', 'Styled Components', 'GraphQL'],
      github: 'https://github.com/bchiang7/v4',
      external: 'https://brittanychiang.com',
      image: '🌐',
    },
  ];

  const otherProjects = [
    {
      title: 'Integrating Algolia Search',
      description: 'Building a custom search component with Algolia InstantSearch.js',
      tech: ['Algolia', 'JavaScript', 'CSS'],
      github: 'https://github.com/bchiang7/course-source',
      external: 'https://www.upstatement.com/blog/2017/integrating-algolia-search/',
    },
    {
      title: 'Google Keep Clone',
      description: 'A simple Google Keep clone built with React and Firebase',
      tech: ['React', 'Firebase', 'CSS'],
      github: 'https://github.com/bchiang7/google-keep-clone',
      external: 'https://google-keep-clone-c7.netlify.app/',
    },
    {
      title: 'Apple Music Clone',
      description: 'A simple Apple Music web player clone',
      tech: ['React', 'CSS', 'Apple Music API'],
      github: 'https://github.com/bchiang7/apple-music-clone',
      external: 'https://apple-music-clone-c7.netlify.app/',
    },
  ];

  return (
    <section id="work" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-mono">
            <span className="text-primary mr-2">03.</span>
            Some Things I've Built
          </h2>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="grid md:grid-cols-12 gap-4 items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Project Image */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''} relative group`}>
                  <div className="relative overflow-hidden rounded bg-gradient-to-br from-primary/20 to-blue-500/20 aspect-video flex items-center justify-center border border-primary/30 hover:border-primary/60 transition-all duration-300">
                    <div className="text-6xl opacity-60">{project.image}</div>
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
                  </div>
                </div>

                {/* Project Content */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''} relative z-10`}>
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-card p-6 rounded shadow-lg mb-4 border border-border">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-4 text-sm font-mono text-muted-foreground mb-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <motion.a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ y: -2 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.external}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ y: -2 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-12 text-center">Other Noteworthy Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-card p-6 rounded border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-primary text-3xl">📁</div>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ y: -2 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        href={project.external}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ y: -2 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
