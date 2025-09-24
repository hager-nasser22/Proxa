import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      key: 'ai',
      icon: '🤖',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      key: 'web',
      icon: '💻',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      key: 'cloud',
      icon: '☁️',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
    },
    {
      key: 'ux',
      icon: '🎨',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
    },
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
    <section id="services" ref={ref} className="pt-20 pb-20 bg-white">
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
                      className="mb-8 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 font-black"
                      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontWeight: '500' }}
                    >
            {t('services.title')}
                    </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-900 text-center mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body), ui-sans-serif, system-ui, sans-serif' }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
              <div className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-6 text-center"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
          
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
          >

            <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="mb-8 text-center text-2xl md:text-4xl lg:text-4xl xl:text-5xl "
                      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontWeight: '500' }}
                    >
            Don't see what you want?
                    </motion.h3>
            <p className="text-lg mb-6 opacity-90">
              Not sure what you need? Book a quick 15-min call now to discuss a custom solution, it's FREE.
            </p>
            <motion.a
  href="https://cal.com/hager-nasser-woynen/secret?overlayCalendar=true" // Replace this with your actual Cal.com link
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
>
  Book a discovery call
</motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
