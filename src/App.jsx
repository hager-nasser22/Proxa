import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './App.css';
// Logos
const DattaBaumLogo = 'dbs.4e4201d0.svg';
const MarketXLogo = 'marketx.6554d241.svg';
const PlanlogicLogo = 'planlogic.f1680d5f.svg';
const SarimaLogo = 'sarima.68b8148d.svg';
const DentrecLogo = 'dentrec.b3a62da6.svg';
const PrivacyBrainLogo = 'privacybrain.2eabb277.svg';

// Simple language and theme context (without i18n library)
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      caseStudies: "Case Studies",
      testimonials: "Testimonials",
      testimonialsHeader: "What our clients say?",
      contact: "Contact"
    },
    hero: {
      title: "We build 🛠️ software solutions to enhance businesses 💼",
      subtitle: "We are a well-equipped team of software engineers, designers, and product managers, passionate about solving real-world problems.",
      cta: "Discuss your project"
    },
    client: {content:"Trusted by great companies"},
    latestProjects: {content: "Our Latest Projects"},
    value: {
      title: "Best value for your money",
      subtitle: "We strive to deliver the best experience for you. Achieve exceptional results without straining your budget.",
      quality: {
        title: "Quality",
        description: "Each project is handled with care and attention to detail, resulting in a high-quality product."
      },
      security: {
        title: "Security",
        description: "We take security seriously. We ensure that your and your customers' data is safe."
      },
      speed: {
        title: "Speed",
        description: "Our solutions are optimized for speed, ensuring a smooth experience for your users."
      }
    },
    services: {
      title: "Our Services",
      subtitle: "We provide the best solutions for your business.",
      service1: { title: "AI Solutions", description: "We build powerful and intelligent AI applications to automate your business processes." },
      service2: { title: "Web Development", description: "We create modern, responsive, and high-performance websites and web applications." },
      service3: { title: "Cloud Services", description: "We offer scalable cloud solutions to help you manage your infrastructure and data." },
      service4: { title: "UX/UI Design", description: "Our designers craft intuitive and beautiful user interfaces that delight your customers." },
      service5: { title: "Mobile Apps", description: "We develop native and cross-platform mobile applications for iOS and Android." },
      service6: { title: "Cybersecurity", description: "Protect your business with our comprehensive cybersecurity services and threat analysis." },
      service7: { title: "Data Analytics", description: "Unlock valuable insights from your data with our advanced analytics and visualization services." },
      service8: { title: "IT Consulting", description: "We provide expert IT consultation to optimize your business processes and technology infrastructure." },
      ctaTitle: "Don't see what you want?",
      ctaSubtitle: "Not sure what you need? Book a quick 15-min call now to discuss a custom solution, it's FREE.",
      ctaButton: "Book a discovery call"
    },
    testimonials: {
      quote1: "“If we could give Brocsa a score, it would be 12/10. They have exceeded our expectations in every way.”",
      author1: "Myles Davis, Co-Founder Dentrec",
      quote2: "“Working with BROCSA was a game-changer for our business. Their technical expertise is unmatched.”",
      author2: "Jane Doe, CEO Tech Solutions",
      quote3: "“The team at BROCSA delivered a stunning website that exceeded our expectations. Highly recommended!”",
      author3: "John Smith, Founder Innovate Inc.",
    },
    booking: {
      title: "What are you waiting for?",
      subtitle: "Book a meeting with us today to discuss your project."
    },
    footer: {
      description: "We are a team of passionate engineers, designers, and product managers.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      contactEmail: "Procsa123@gmail.com",
      contactPhone: "⁦+967 775 616 333⁩",
      contactAddress: "El Yaman",
      copyright: "© 2024 Brocsa. All rights reserved.",
      madeWith: "Made with"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      caseStudies: "دراسات حالة",
      testimonials: "شهادات العملاء",
      testimonialsHeader: "ماذا يقول عملاؤنا؟",
      contact: "تواصل معنا"
    },
    hero: {
      title: "نصمم 🛠️ حلول برمجية لتعزيز الشركات 💼",
      subtitle: "نحن فريق مجهز بالكامل من مهندسي البرمجيات والمصممين ومديري المنتجات، شغوفون بحل المشكلات الواقعية.",
      cta: "ناقش مشروعك"
    },
    client: {content: "شركات رائدة تثق بنا"},
    latestProjects: {content: "أحدث مشاريعنا"},
    value: {
      title: "أفضل قيمة مقابل أموالك",
      subtitle: "نسعى لتقديم أفضل تجربة لك. حقق نتائج استثنائية دون إرهاق ميزانيتك.",
      quality: {
        title: "الجودة",
        description: "يتم التعامل مع كل مشروع بعناية واهتمام بالتفاصيل، مما يؤدي إلى منتج عالي الجودة."
      },
      security: {
        title: "الأمان",
        description: "نأخذ الأمان على محمل الجد. نضمن أن بياناتك وبيانات عملائك آمنة."
      },
      speed: {
        title: "السرعة",
        description: "حلولنا محسّنة للسرعة، مما يضمن تجربة سلسة لمستخدميك."
      }
    },
    services: {
      title: "خدماتنا",
      subtitle: "نقدم أفضل الحلول لشركتك.",
      service1: { title: "حلول الذكاء الاصطناعي", description: "نحن نبني تطبيقات ذكاء اصطناعي قوية وذكية لأتمتة عمليات عملك." },
      service2: { title: "تطوير الويب", description: "نصمم مواقع وتطبيقات ويب حديثة، متجاوبة وعالية الأداء." },
      service3: { title: "خدمات السحابة", description: "نقدم حلول سحابة قابلة للتوسع لمساعدتك في إدارة بنيتك التحتية وبياناتك." },
      service4: { title: "تصميم UX/UI", description: "يصمم مصممونا واجهات مستخدم بديهية وجميلة تسعد عملائك." },
      service5: { title: "تطبيقات الهاتف", description: "نقوم بتطوير تطبيقات جوال أصلية وعابرة للمنصات لنظامي iOS و Android." },
      service6: { title: "الأمن السيبراني", description: "احمِ عملك من خلال خدماتنا الشاملة للأمن السيبراني وتحليل التهديدات." },
      service7: { title: "تحليلات البيانات", description: "اكتشف رؤى قيمة من بياناتك باستخدام خدماتنا المتقدمة للتحليل وتصوير البيانات." },
      service8: { title: "استشارات تكنولوجيا المعلومات", description: "نقدم استشارات متخصصة في تكنولوجيا المعلومات لتحسين عمليات عملك وبنيتك التحتية التقنية." },
      ctaTitle: "لم تجد ما تريد؟",
      ctaSubtitle: "لست متأكداً مما تحتاجه؟ احجز مكالمة سريعة لمدة 15 دقيقة الآن لمناقشة حل مخصص، إنها مجانية.",
      ctaButton: "احجز مكالمة استكشافية"
    },
    testimonials: {
      quote1: "“إذا كان بإمكاننا إعطاء Brocsa تقييماً، فسيكون 12/10. لقد تجاوزوا توقعاتنا بكل الطرق.”",
      author1: "مايلز ديفيس، المؤسس المشارك لـ Dentrec",
      quote2: "“العمل مع BROCSA كان نقطة تحول في عملنا. خبرتهم التقنية لا مثيل لها.”",
      author2: "جين دو، الرئيس التنفيذي لـ Tech Solutions",
      quote3: "“فريق BROCSA قدم لنا موقعًا مذهلاً فاق توقعاتنا. نوصي بهم بشدة!”",
      author3: "جون سميث، مؤسس Innovate Inc.",
    },
    booking: {
      title: "ماذا تنتظر؟",
      subtitle: "احجز اجتماعاً معنا اليوم لمناقشة مشروعك."
    },
    footer: {
      description: "نحن فريق من المهندسين، المصممين، ومديري المنتجات الشغوفين.",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات الاتصال",
      contactEmail: "Procsa123@gmail.com",
      contactPhone: "+20 100 123 4567",
      contactAddress: "123 Main St, New York, NY 10030",
      copyright: "© 2024 Brocsa. جميع الحقوق محفوظة.",
      madeWith: "صنع بـ"
    }
  }
};

const getTranslatedContent = (key, lang) => {
  const keys = key.split('.');
  let content = translations[lang];
  for (const k of keys) {
    if (content && content[k]) {
      content = content[k];
    } else {
      return key; // Fallback to key if not found
    }
  }
  return content;
};

// --- Navbar Component ---
const Navbar = ({ lang, setLang, theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    document.documentElement.lang = newLang;
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center space-x-2 rtl:space-x-reverse text-2xl font-bold text-black dark:text-white" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              <svg className="h-6 w-6 text-black dark:text-white" viewBox="0 0 35 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="26.0465" width="8.95349" height="8.95349" fill="currentColor"></rect><rect x="26.0465" y="13.0233" width="8.95349" height="8.95349" fill="currentColor"></rect><rect x="26.0465" y="26.0465" width="8.95349" height="8.95349" fill="currentColor"></rect><rect x="13.0233" y="26.0465" width="8.95349" height="8.95349" fill="currentColor"></rect><rect x="13.0233" y="13.0233" width="8.95349" height="8.95349" fill="currentColor"></rect><rect y="26.0465" width="8.95349" height="8.95349" fill="currentColor"></rect></svg>
              <span>BROCSA</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {getTranslatedContent(`nav.${item.key}`, lang)}
              </motion.a>
            ))}
          </div>

          {/* Toggles and Mobile Button */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
              >
                <span>{lang === 'en' ? 'English' : 'العربية'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                {theme === 'light' ? (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.183a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.06l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM18.894 17.817a.75.75 0 001.06-1.06l-1.591-1.59a.75.75 0 10-1.06 1.06l1.591 1.59zM12 21.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V21a.75.75 0 01-.75.75zM4.293 17.817a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 00-1.06-1.06l-1.591 1.59zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM4.293 6.183a.75.75 0 00-1.06 1.06l1.591 1.59a.75.75 0 001.06-1.06L4.293 6.183z" /></svg>
                ) : (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.127.514 12.75 12.75 0 01-8.683 14.85c.951.196 1.834.463 2.652.802l.145.06a12.693 12.693 0 00.957.398l.583.155a13.328 13.328 0 006.185 0l.583-.155a12.693 12.693 0 00.957-.398l.145-.06a15.75 15.75 0 003.55-1.996l.587-.393c.531-.355.992-.78 1.396-1.268l.418-.516a13.336 13.336 0 001.693-2.071c.421-.564.779-1.18.995-1.835l.07-.229a.75.75 0 01.597-.573l.235.03c.52.066 1.034.183 1.536.35l.215.071a.75.75 0 01.371.942l-.248.652a.75.75 0 01-.429.453l-.689.284c-.452.186-.925.323-1.405.412l-.203.036a.75.75 0 01-.678-.501L22.25 10.74a.75.75 0 01.748.198l.261.26c.219.22.427.45.62.693a.75.75 0 01.071.748l-.485 1.026a1.5 1.5 0 01-1.353.948L19.498 16a.75.75 0 01-.678-.501L19.25 14.75a.75.75 0 01.58-.925l.407-.075c.429-.079.845-.213 1.251-.403l.36-.172a.75.75 0 01.407-.233l.485-.114a.75.75 0 01.764.128l1.396 1.396a.75.75 0 01.127 1.042l-2.053 2.567a.75.75 0 01-1.25.155l-.475-.385c-.443-.359-.92-.68-1.423-.956l-.372-.187a.75.75 0 01-.39-.624V17.25c0-.414-.336-.75-.75-.75h-.75a.75.75 0 01-.75-.75V15.5a.75.75 0 01-.75-.75V14a.75.75 0 01-.75-.75V12.5a.75.75 0 01-.75-.75V11a.75.75 0 01-.75-.75V9.5a.75.75 0 01-.75-.75V8a.75.75 0 01-.75-.75V6.5a.75.75 0 01-.75-.75V5a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
                )}
              </button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white p-2 md:hidden"
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
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {getTranslatedContent(`nav.${item.key}`, lang)}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleLanguage}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {lang === 'en' ? 'العربية' : 'English'}
                </button>
                <button
                  onClick={toggleTheme}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

// --- Hero Component ---
const Hero = ({ lang }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="relative z-10 max-w-7xl w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12 text-center">
          <motion.h1
            className="mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 dark:text-gray-50"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            {getTranslatedContent('hero.title', lang)}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 mx-auto mb-8 leading-relaxed max-w-2xl md:max-w-3xl"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontWeight: '370' }}
          >
            {getTranslatedContent('hero.subtitle', lang)}
          </motion.p>

          <motion.a
  href="#contact"
  whileHover={{ scale: 1.07, y: -3 }}
  whileTap={{ scale: 0.95 }}
  className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
             text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-2xl 
             text-sm sm:text-base lg:text-lg font-semibold 
             shadow-lg shadow-indigo-500/30 
             hover:shadow-xl hover:shadow-purple-500/40 
             transition-all duration-300 ease-out inline-block"
>
  <span className="relative z-10">
    {getTranslatedContent('hero.cta', lang)}
  </span>

  {/* طبقة إضاءة عند الـ hover */}
  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
</motion.a>

        </motion.div>
      </div>
    </section>
  );
};

// --- Logos Component ---
const ClientLogos = ({lang}) => {
  const logos = [DattaBaumLogo, MarketXLogo, PlanlogicLogo, SarimaLogo, DentrecLogo, PrivacyBrainLogo, DattaBaumLogo, MarketXLogo, PlanlogicLogo, SarimaLogo, DentrecLogo, PrivacyBrainLogo];

  return (
    <section className="py-12 bg-zinc-100 dark:bg-zinc-900 overflow-hidden" dir='ltr'>
      <h2 className="text-center text-xl font-semibold mb-8 text-gray-700 dark:text-gray-300">{getTranslatedContent('client.content', lang)}</h2>
      <motion.div
        className="flex space-x-12 whitespace-nowrap"
        animate={{ x: ['-100%', '0%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt={`Client logo ${i + 1}`} className="h-16 w-auto opacity-70 dark:invert hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
        ))}
      </motion.div>
    </section>
  );
};

// --- Project Showcase Component ---
const ProjectShowcase = ({lang}) => {
  const projects = [
    'project-1.webp',
    'project-2.webp',
    'project-3.webp',
    'project-4.webp',
    'project-5.webp',
    'project-6.webp',
  ];

  const doubledProjects = [...projects, ...projects];

  return (
    <section className="py-12 bg-zinc-50 dark:bg-zinc-950 overflow-hidden" dir='ltr'>
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-900 dark:text-gray-50">{getTranslatedContent('latestProjects.content', lang)}</h2>
      <motion.div
        className="flex space-x-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {doubledProjects.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="w-80 h-56 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src={image} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// --- Value Section ---
const ValueSection = ({ lang }) => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-cyan-400">
          <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"></path>
          <path d="M10 12l-2 -2.2l.6 -1"></path>
        </svg>
      ),
      title: getTranslatedContent('value.quality.title', lang),
      description: getTranslatedContent('value.quality.description', lang)
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-lime-400">
          <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"></path>
          <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"></path>
          <path d="M12 11v2a14 14 0 0 0 2.5 8"></path>
          <path d="M8 15a18 18 0 0 0 1.8 6"></path>
          <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"></path>
        </svg>
      ),
      title: getTranslatedContent('value.security.title', lang),
      description: getTranslatedContent('value.security.description', lang)
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-amber-400">
          <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
        </svg>
      ),
      title: getTranslatedContent('value.speed.title', lang),
      description: getTranslatedContent('value.speed.description', lang)
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-12 pb-20 md:p-16 lg:p-20 shadow-xl"
          style={{
            backgroundImage: 'url(noise.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 dark:text-gray-50 font-bold"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            {getTranslatedContent('value.title', lang)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-800 dark:text-gray-200 text-center mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            {getTranslatedContent('value.subtitle', lang)}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-white dark:text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-gray-900 dark:text-gray-50 mb-3 font-bold" 
                  style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: '30px' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed" 
                  style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Services Component (OLD, Preferred) ---
const Services = ({ lang }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      key: 'service1',
      icon: '🤖',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      key: 'service2',
      icon: '💻',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      key: 'service3',
      icon: '☁️',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
    },
    {
      key: 'service4',
      icon: '🎨',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
    },
    {
      key: 'service5',
      icon: '📱',
      gradient: 'from-red-500 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50',
    },
    {
      key: 'service6',
      icon: '🔒',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50',
    },
    {
      key: 'service7',
      icon: '📈',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
    },
    {
      key: 'service8',
      icon: '⚙️',
      gradient: 'from-gray-500 to-slate-500',
      bgGradient: 'from-gray-50 to-slate-50',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 dark:text-gray-50 font-bold"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            {getTranslatedContent('services.title', lang)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-800 dark:text-gray-200 text-center mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            {getTranslatedContent('services.subtitle', lang)}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full dark:from-zinc-800 dark:to-zinc-800`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-6 text-center"
                >
                  {service.icon}
                </motion.div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                    {getTranslatedContent(`services.${service.key}.title`, lang)}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    {getTranslatedContent(`services.${service.key}.description`, lang)}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative z-10 mt-6 w-full text-center block bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300`}
                >
                  {getTranslatedContent('services.ctaButton', lang)}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white dark:from-indigo-600 dark:to-violet-600"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8 text-center text-2xl md:text-4xl lg:text-4xl xl:text-5xl"
              style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
            >
              {getTranslatedContent('services.ctaTitle', lang)}
            </motion.h3>
            <p className="text-lg mb-6 opacity-90">
              {getTranslatedContent('services.ctaSubtitle', lang)}
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              {getTranslatedContent('services.ctaButton', lang)}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Testimonial Section (NEW) ---
const TestimonialSection = ({ lang }) => {
  const testimonials = [
    {
      id: 1,
      quote: getTranslatedContent('testimonials.quote1', lang),
      author: getTranslatedContent('testimonials.author1', lang),
    },
    {
      id: 2,
      quote: getTranslatedContent('testimonials.quote2', lang),
      author: getTranslatedContent('testimonials.author2', lang),
    },
    {
      id: 3,
      quote: getTranslatedContent('testimonials.quote3', lang),
      author: getTranslatedContent('testimonials.author3', lang),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-3xl md:text-4xl lg:text-5xl text-gray-900  font-bold"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            {getTranslatedContent('nav.testimonialsHeader', lang)}
          </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotate: testimonial.id === 1 ? -1 : testimonial.id === 3 ? 1 : 0,
                transition: { duration: 0.2 }
              }}
              className="relative p-8 rounded-3xl bg-white dark:bg-zinc-800 shadow-lg"
            >
              <div className="absolute inset-0 z-0 opacity-10 blur-xl scale-125 transition-all duration-300 group-hover:scale-150" style={{
                background: testimonial.id === 1 ? 'linear-gradient(135deg, #1d4ed8, #4f46e5, #c026d3)' :
                           testimonial.id === 2 ? 'linear-gradient(135deg, #15803d, #4ade80, #c026d3)' :
                           'linear-gradient(135deg, #f97316, #f59e0b, #eab308)',
                borderRadius: 'inherit'
              }} />

              <div className="relative z-10">
                <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-6">
                  {testimonial.quote}
                </p>
                <div className="text-right font-semibold">
                  <span className="text-gray-900 dark:text-white">- {testimonial.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Booking Component (NEW) ---
const Booking = ({ lang }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 text-gray-900 dark:text-gray-50 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div
        className="relative max-w-7xl mx-auto w-full z-30 rounded-3xl p-8 md:p-12 lg:p-20"
        style={{
          backgroundImage: "url(noise.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          backgroundColor: "#eeeff2",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-3xl md:text-4xl lg:text-5xl text-gray-900  font-bold"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            {getTranslatedContent('booking.title', lang)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-800  text-center max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
          >
            {getTranslatedContent('booking.subtitle', lang)}
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <iframe
            src="https://cal.com/mohammed-alhazi/30min"
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[90%] h-[350px] sm:h-[500px] md:h-[550px] lg:h-[750px] rounded-2xl shadow-lg"
            frameBorder="0"
            style={{
              border: "0",
              background: "transparent",
            }}
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer Component (NEW) ---
const Footer = ({ lang }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { 
  name: 'GitHub',
  icon: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      className="w-5 h-5"
    >
      <path 
        fillRule="evenodd" 
        d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.76c-1.1-.76.08-.74.08-.74a2.52 2.52 0 0 1 1.84 1.24 2.55 2.55 0 0 0 3.49 1 2.53 2.53 0 0 1 .76-1.6c-2.67-.3-5.48-1.34-5.48-5.95a4.66 4.66 0 0 1 1.24-3.24 4.3 4.3 0 0 1 .12-3.2s1-.32 3.3 1.23a11.38 11.38 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.2 4.66 4.66 0 0 1 1.24 3.24c0 4.62-2.82 5.65-5.5 5.95a2.85 2.85 0 0 1 .82 2.22v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z" 
        clipRule="evenodd"
      />
    </svg>
  ),
  href: '#'
},

    { name: 'Instagram', 
  icon: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      className="w-5 h-5"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
    </svg>
  ), 
  href: '#' 
}

  ];

  const quickLinks = [
    { key: 'about', href: '#about', text: getTranslatedContent('nav.about', lang) },
    { key: 'services', href: '#services', text: getTranslatedContent('nav.services', lang) },
    { key: 'testimonials', href: '#testimonials', text: getTranslatedContent('nav.testimonials', lang) },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-zinc-950 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left"
    >
      {/* Logo + Description */}
      <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col items-center md:items-start">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold gradient-text mb-4"
        >
          BROCSA
        </motion.div>
        <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
          {getTranslatedContent('footer.description', lang)}
        </p>

        {/* Socials */}
        <div className="flex justify-center md:justify-start space-x-4 rtl:space-x-reverse">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gray-800 dark:bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
            >
              <span className="text-sm font-semibold">{social.icon}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-semibold mb-6">{getTranslatedContent('footer.quickLinks', lang)}</h3>
        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.key}>
              <motion.a
                href={link.href}
                whileHover={{ x: 5 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.text}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Contact Info */}
      <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-semibold mb-6">{getTranslatedContent('footer.contactInfo', lang)}</h3>
        <div className="space-y-3 text-gray-400">
          <div className="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse">
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{getTranslatedContent('footer.contactEmail', lang)}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse">
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{getTranslatedContent('footer.contactPhone', lang)}</span>
          </div>
          <div className="flex items-start justify-center md:justify-start space-x-3 rtl:space-x-reverse">
            <svg className="w-5 h-5 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{getTranslatedContent('footer.contactAddress', lang)}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>

    {/* Bottom Bar */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-center"
    >
      <motion.p variants={itemVariants} className="text-gray-400 text-sm mb-4 md:mb-0">
        {getTranslatedContent('footer.copyright', lang)}
      </motion.p>
      <motion.div variants={itemVariants} className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400 text-sm">
        <span>{getTranslatedContent('footer.madeWith', lang)}</span>
        <motion.span
          whileHover={{ scale: 1.2, rotate: 360 }}
          className="text-primary-500 font-semibold"
        >
          ❤️
        </motion.span>
      </motion.div>
    </motion.div>
  </div>
</footer>

  );
};

// --- Floating WhatsApp Button ---
// زرار WhatsApp
// زرار WhatsApp
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href="https://wa.me/+967775616333"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 right-4 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6
        z-50 p-2 sm:p-2.5 lg:p-3
        rounded-full bg-green-500 text-white shadow-lg transform
        animate-[pulseGlow_2s_infinite]
      "
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
        className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 fill-current">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.76.72 5.46 2.1 7.86L1.5 31l7.36-2.1A15.4 15.4 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28c-2.58 0-5.08-.68-7.26-1.97l-.52-.31-4.38 1.25 1.25-4.27-.34-.55A12.43 12.43 0 0 1 3.5 16c0-6.89 5.61-12.5 12.5-12.5S28.5 9.11 28.5 16 22.89 28.5 16 28.5z"/>
        <path d="M24.08 19.9c-.41-.21-2.44-1.2-2.82-1.34-.38-.14-.66-.21-.94.21-.28.41-1.08 1.34-1.32 1.61-.24.28-.49.31-.9.1-.41-.21-1.74-.64-3.32-2.05a12.3 12.3 0 0 1-2.27-2.8c-.24-.41-.02-.64.18-.84.18-.18.41-.48.62-.72.21-.24.28-.41.41-.69.14-.28.07-.52-.03-.72-.1-.21-.94-2.27-1.29-3.1-.34-.82-.69-.71-.94-.72h-.81c-.28 0-.72.1-1.1.52-.38.41-1.44 1.41-1.44 3.45s1.48 4 1.68 4.27c.21.28 2.91 4.45 7.05 6.22 4.15 1.77 4.15 1.18 4.89 1.11.74-.07 2.44-.99 2.78-1.94.34-.94.34-1.75.24-1.94-.1-.21-.38-.34-.79-.55z"/>
      </svg>
    </motion.a>
  );
};

// زرار Telegram
const TelegramButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href="https://t.me/yourTelegramUsername"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-14 right-4 sm:bottom-16 sm:right-5 lg:bottom-20 lg:right-6
        z-50 p-2 sm:p-2.5 lg:p-3
        rounded-full bg-sky-500 text-white shadow-lg transform
        animate-[pulseGlow_2s_infinite]
      "
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
        className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 fill-current">
        <path d="M248,8C111,8,0,119,0,256s111,248,248,248S496,393,496,256,385,8,248,8ZM372.2,164.6,320.4,364.8c-3.7,14.6-13.4,18.2-27.2,11.4l-75.2-55.6-36.3,34.9c-4,4-7.3,7.3-15,7.3l5.4-76.5,138.9-125.2c6-5.4-1.3-8.4-9.3-3l-171.8,108-74-23.1c-16.1-5.1-16.4-16.1,3.3-23.9L361,141.3C373.7,136.5,383.5,144.3,372.2,164.6Z"/>
      </svg>
    </motion.a>
  );
};




const App = () => {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.lang = lang;
 document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [lang, theme]);

  return (
    <div className="font-sans antialiased bg-zinc-50 dark:bg-zinc-950 text-gray-900 dark:text-white min-h-screen">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main>
        <Hero lang={lang} />
        <ClientLogos lang={lang}/>
        <ProjectShowcase lang={lang}/>
        <ValueSection lang={lang} />
        <Services lang={lang} />
        <TestimonialSection lang={lang} />
        <Booking lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton />
      <TelegramButton />
    </div>
  );
};

export default App;