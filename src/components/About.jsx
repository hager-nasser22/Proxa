import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: t('about.stats.projects'), label: t('about.stats.projectsLabel') },
    { value: t('about.stats.clients'), label: t('about.stats.clientsLabel') },
    { value: t('about.stats.years'), label: t('about.stats.yearsLabel') },
    { value: t('about.stats.team'), label: t('about.stats.teamLabel') },
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
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-primary-600 font-semibold mb-8"
          >
            {t('about.subtitle')}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {t('about.description')}
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t('about.subtitle')}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-primary-600 rounded-full flex items-center justify-center"
              >
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">B</span>
                </div>
              </motion.div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-secondary-500 rounded-full opacity-80"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-500 rounded-full opacity-80"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
