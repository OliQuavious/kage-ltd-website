import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Partner data with links
const partners = [
  { logo: "/logos/Kage ltd logos.png", url: "https://companya.com",  },
  { logo: "/logos/Kage logo.jpg", url: "https://companyb.com",  },
  { logo: "/logos/Wilo logo.png", url: "https://wilo.com",  },
];

function Partners() {
  return (
    <motion.section
      id="partners"
      className="py-24 px-6 bg-gradient-to-b from-white via-slate-100 to-white flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-16 relative inline-block"
        variants={titleVariants}
      >
        Our Trusted Partners
        <motion.span
          className="block h-1 w-24 bg-yellow-400 rounded-full mt-3 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        />
      </motion.h2>

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 justify-items-center items-center">
          {partners.map(({ logo, url, name }, i) => (
            <motion.div
              key={i}
              className={`bg-white p-6 rounded-2xl shadow-md grayscale hover:grayscale-0 
                hover:shadow-yellow-300/40 transition duration-300 cursor-pointer 
                flex items-center justify-center
                ${i === 2 ? "col-span-2 sm:col-auto" : ""}`}
              variants={cardVariants}
              whileHover={{
                scale: 1.06,
                y: -6,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 140 }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo}
                  alt={`${name} Logo`}
                  className="h-20 w-auto max-w-[160px] object-contain"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Partners;
