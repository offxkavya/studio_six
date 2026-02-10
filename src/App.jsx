import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import Navbar from './components/layout/Navbar';
import Hero3D from './components/sections/Hero3D';
import ServicesAnimated from './components/sections/ServicesAnimated';
import Clients from './components/sections/Clients';
import WorkScroll from './components/sections/WorkScroll';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="bg-background min-h-screen text-foreground antialiased selection:bg-primary selection:text-black overflow-x-hidden">
          <CustomCursor />
          <Navbar />
          <main className="relative z-10 w-full">
            <Hero3D />
            <ServicesAnimated />
            <WorkScroll />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
