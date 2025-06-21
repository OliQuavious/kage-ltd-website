import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section
      role="banner"
      className="relative h-screen bg-[url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat text-white"
    >
      {/* Stylish glass overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          tabIndex={0}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 drop-shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Trusted Experts in Engineering, Property & Development
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Delivering excellence in property valuation, architectural design,
          engineering solutions, land surveying, and geotechnical investigation.
        </motion.p>

        <motion.a
          href="#services"
          aria-label="Explore Our Services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white/90 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-xl hover:bg-blue-700 hover:text-white transition-all duration-300"
        >
          Explore Our Services
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
  