import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import axios from 'axios';

const Footer = () => {
  const [stats, setStats] = useState({ public_repos: 0, followers: 0, following: 0 });

  useEffect(() => {
    axios.get('https://api.github.com/users/LegitKillerOP')
      .then(res => {
        setStats({
          public_repos: res.data.public_repos,
          followers: res.data.followers,
          following: res.data.following
        });
      })
      .catch(() => {
        // fallback in case of error
        setStats({ public_repos: 0, followers: 0, following: 0 });
      });
  }, []);

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
            Built by Legit Killer
          </p>

          <div className="flex justify-center items-center space-x-4 mb-6">
            <motion.a
              href="https://github.com/LegitKillerOP/legit-portfolio"
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

          <div className="text-xs text-muted-foreground/60 space-y-1 font-mono">
            <p>GitHub Repos: {stats.public_repos}</p>
            <p>Followers: {stats.followers}</p>
            <p>Following: {stats.following}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
