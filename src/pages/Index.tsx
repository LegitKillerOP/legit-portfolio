import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FloatingElements />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
