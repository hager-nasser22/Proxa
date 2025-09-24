import { motion } from 'framer-motion';

const ValueSection = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-cyan-400">
          <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"></path>
          <path d="M10 12l-2 -2.2l.6 -1"></path>
        </svg>
      ),
      title: "Quality",
      description: "Each project is handled with care and attention to detail, resulting in a high-quality product."
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
      title: "Security",
      description: "We take security seriously. We ensure that your and your customers' data is safe."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-amber-400">
          <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
        </svg>
      ),
      title: "Speed",
      description: "Our solutions are optimized for speed, ensuring a smooth experience for your users."
    }
  ];

  return (
    <section style={{ backgroundColor: 'rgb(244 244 245/var(--tw-bg-opacity))' }}>
      {/* Noise Background */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-3xl p-12 pb-20 md:p-16 lg:p-20"
          style={{
            backgroundImage: 'url(https://www.lineax.io/noise.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
          }}
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 font-black"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontWeight: '500' }}
          >
            Best value for your money
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-900 text-center mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body), ui-sans-serif, system-ui, sans-serif' }}
          >
            We strive to deliver the best experience for you. Achieve <br></br>exceptional results without straining your budget.
          </motion.p>

          {/* Features Grid */}
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
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-3 font-black" 
                    style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontWeight: '500', fontSize: '30px' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-900 leading-relaxed" 
                   style={{ fontFamily: 'var(--font-body), ui-sans-serif, system-ui, sans-serif' }}>
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

export default ValueSection;

