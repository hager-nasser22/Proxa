import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Logos
const DattaBaumLogo = 'https://www.lineax.io/_next/static/media/dbs.4e4201d0.svg';
const MarketXLogo = 'https://www.lineax.io/_next/static/media/marketx.6554d241.svg';
const PlanlogicLogo = 'https://www.lineax.io/_next/static/media/planlogic.f1680d5f.svg';
const SarimaLogo = 'https://www.lineax.io/_next/static/media/sarima.68b8148d.svg';
const DentrecLogo = 'https://www.lineax.io/_next/static/media/dentrec.b3a62da6.svg';
const PrivacyBrainLogo = 'https://www.lineax.io/_next/static/media/privacybrain.2eabb277.svg';

const Hero = () => {
  const { t } = useTranslation();
  const [mouseX, setMouseX] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const projects = [
    'https://www.lineax.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.579e94ec.png&w=2048&q=75',
    'https://www.lineax.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.a80dab92.png&w=2048&q=75',
    'https://www.lineax.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.b73fea82.png&w=2048&q=75',
    'https://www.lineax.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.447a8ad1.png&w=2048&q=75',
    'https://www.lineax.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.94c1d70a.png&w=2048&q=75',
    'https://www.lineax.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5a4ea7af.png&w=2048&q=75',
  ];

  const doubledProjects = [...projects, ...projects];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const middle = window.innerWidth / 2;
      const offset = (e.clientX - middle) / middle;
      setMouseX(offset * 60);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
          {/* Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-100 rounded-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden shadow-xl"
            style={{
              backgroundImage: 'url(https://www.lineax.io/noise.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mb-4 text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We build 🛠️ software solutions to enhance businesses 💼
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mx-auto text-center mb-8 leading-relaxed max-w-2xl md:max-w-3xl"
              style={{ fontFamily: 'var(--font-body)', fontWeight: '370', color: '#09090B' }}
            >
              We are a well-equipped team of software engineers, designers, and product managers, passionate about solving real-world problems.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg"
              >
                Discuss your project
              </motion.button>
            </motion.div>

            {/* Logos */}
            <motion.div variants={itemVariants} className="mt-12 pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-10 items-center justify-items-center">
                {[DattaBaumLogo, MarketXLogo, PlanlogicLogo, SarimaLogo, DentrecLogo, PrivacyBrainLogo].map(
                  (logo, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <img
                        src={logo}
                        alt={`Logo ${i}`}
                        className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Projects Slider */}
            <motion.div
              className="flex space-x-4 sm:space-x-6 md:space-x-8 mt-8 sm:mt-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              style={{
                willChange: "transform",
                transform: `translateX(${mouseX}px)`,
              }}
            >
              {doubledProjects.map((image, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="w-52 h-36 sm:w-64 sm:h-44 md:w-72 md:h-52 lg:w-80 lg:h-60 rounded-2xl overflow-hidden shadow-lg">
                    <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
