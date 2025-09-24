import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'caseStudies', href: '#case-studies' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className=" top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center space-x-2 text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-body), ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
              {/* 2x2 Grid of squares */}
              <svg className="h-6 w-6" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="26.0465" width="8.95349" height="8.95349" fill="#18181b"></rect><rect x="26.0465" y="13.0233" width="8.95349" height="8.95349" fill="#18181b"></rect><rect x="26.0465" y="26.0465" width="8.95349" height="8.95349" fill="#18181b"></rect><rect x="13.0233" y="26.0465" width="8.95349" height="8.95349" fill="#18181b"></rect><rect x="13.0233" y="13.0233" width="8.95349" height="8.95349" fill="#18181b"></rect><rect y="26.0465" width="8.95349" height="8.95349" fill="#18181b"></rect></svg>
              <span>BROCSA</span>
            </a>
          </motion.div>

          {/* Desktop Navigation - Hidden like in the original design */}
          <div className="hidden">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {t(`nav.${item.key}`)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Language Toggle */}
          <div className=" md:flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
                style={{ fontFamily: 'var(--font-body), ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span>{i18n.language === 'en' ? 'English' : 'العربية'}</span>
                <span className="text-xs">({i18n.language === 'en' ? 'EN' : 'AR'})</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Mobile menu button - Hidden like in the original design */}
          <div className="hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {i18n.language === 'en' ? 'العربية' : 'English'} ({i18n.language === 'en' ? 'AR' : 'EN'})
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
