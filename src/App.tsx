import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Evolution from './components/Evolution';
import Interior from './components/Interior';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative selection:bg-matiz-accent/10 grain">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-matiz-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navigation />
      
      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Concept />
        <Interior />
        <Evolution />
        <Menu />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
