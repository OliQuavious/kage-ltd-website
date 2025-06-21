import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaUsers, FaBullseye } from "react-icons/fa";

const items = [
  {
    title: "Modern Methodologies",
    desc: "Using up-to-date software and equipment for accurate and efficient valuation.",
    icon: FaTools,
  },
  {
    title: "Experienced Multilingual Staff",
    desc: "Fluent in Kinyarwanda, English, and French – delivering professional services nationally and internationally.",
    icon: FaUsers,
  },
  {
    title: "Client-Centered Solutions",
    desc: "Custom strategies and ongoing improvement to meet evolving client needs.",
    icon: FaBullseye,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } },
};

const iconVariants = {
  rest: { scale: 1, color: "#1E40AF" }, // blue-900
  hover: { scale: 1.3, color: "#FBBF24", transition: { duration: 0.3 } }, // yellow-400
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

function Approach() {
  return (
    <motion.section
      id="approach"
      className="py-20 px-6 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-extrabold text-center text-blue-900 mb-14 relative inline-block"
        variants={titleVariants}
      >
        Our Approach
        <motion.span
          className="block h-1 w-24 bg-yellow-400 rounded-full mt-2 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        />
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3">
        {items.map(({ title, desc, icon: Icon }, i) => (
          <motion.div
            key={i}
            className="relative bg-white p-8 rounded-xl shadow-lg cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 15px 25px rgba(251, 191, 36, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* Decorative background circle behind icon */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-yellow-100/60"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * i, type: "spring", stiffness: 90 }}
            />

            <motion.div
              className="relative flex flex-col items-center text-center"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                variants={iconVariants}
                className="text-blue-900 text-5xl mb-5 drop-shadow-sm"
              >
                <Icon />
              </motion.div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Approach;
