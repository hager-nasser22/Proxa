import { motion } from 'framer-motion';

const TestimonialSection = () => {
  return (
    <section className="mx-auto my-20 flex flex-col items-center justify-center">
      <div className="max-w-2xl text-center text-2xl md:text-3xl xl:text-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8" 
                      style={{ fontFamily: 'var(--font-body), ui-sans-serif, system-ui, sans-serif' }}>
            “If we could give Brocsa a score, it <br></br>would be <span className="text-blue-600">12/10</span>. 
            They have exceeded<br></br> our expectations in every way.”
          </blockquote>
          
          <div className="text-lg text-gray-700 font-medium" 
               style={{ fontFamily: 'var(--font-body), ui-sans-serif, system-ui, sans-serif' }}>
            Myles Davis, Co-Founder Dentrec
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;

