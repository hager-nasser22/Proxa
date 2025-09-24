import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './i18n';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TestimonialSection from './components/TestimonialSection';
import ValueSection from './components/ValueSection';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Booking from './components/Booking';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    // Remove smooth scroll behavior for the original design
    document.documentElement.style.scrollBehavior = 'auto';
  }, [i18n.language]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main style={{ backgroundColor: 'rgb(244 244 245/var(--tw-bg-opacity))' }}>
        {/* Noise Background */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"

        />
            <Hero />
            <TestimonialSection />
            <ValueSection />
            {/* <About /> */}
            <Services />
            {/* <CaseStudies /> */}
            {/* <Testimonials /> */}
            {/* <CTA /> */}
          {/* <Booking /> */}
          <Booking/>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;