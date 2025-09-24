import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Booking = () => {
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
    <section className="relative overflow-hidden min-h-screen px-4 text-gray-900 flex items-center justify-center">
      <div
        className="relative max-w-7xl mx-auto w-full z-30 rounded-3xl"
        style={{
          backgroundImage: "url(https://www.lineax.io/noise.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          backgroundColor: "#eeeff2",
        }}
      >
        {/* ===== Header ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12 pt-12 px-4"
        >
          {/*  */}
          <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="mb-8 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 font-black"
                                style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontWeight: '500' }}
                              >
                       What are you waiting for?
                              </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-900 text-center mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body), ui-sans-serif, system-ui, sans-serif' }}
          >
            Book a meeting with us today to discuss your project.
          </motion.p>
          
        </motion.div>

        {/* ===== Cal.com Embed ===== */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <iframe
            src="https://cal.com/hager-nasser-woynen/secret?layout=month_view&embedType=inline&branding=false"
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-[350px] sm:h-[500px] md:h-[550px] lg:h-[650px] rounded-2xl shadow-lg"
            frameBorder="0"
            style={{
              border: "0",
              background: "transparent",
            }}
          ></iframe>
        </motion.div>

        {/* ===== Logo ===== */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center mt-12 pb-12"
        >
          <a
            href="#home"
            className="flex items-center space-x-2 text-xl sm:text-2xl font-bold text-black"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="26.0465" width="8.95349" height="8.95349" fill="#18181b"></rect>
              <rect x="26.0465" y="13.0233" width="8.95349" height="8.95349" fill="#18181b"></rect>
              <rect x="26.0465" y="26.0465" width="8.95349" height="8.95349" fill="#18181b"></rect>
              <rect x="13.0233" y="26.0465" width="8.95349" height="8.95349" fill="#18181b"></rect>
              <rect x="13.0233" y="13.0233" width="8.95349" height="8.95349" fill="#18181b"></rect>
              <rect y="26.0465" width="8.95349" height="8.95349" fill="#18181b"></rect>
            </svg>
            <span>BROCSA</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
