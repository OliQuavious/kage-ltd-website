import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-20 px-8 max-w-4xl mx-auto rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-2xl overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      {/* Decorative background shape */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-200 rounded-full opacity-30 filter blur-3xl pointer-events-none"></div>

      <motion.h2
        className="relative z-10 text-4xl font-extrabold text-blue-900 mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h2>

      <div className="relative z-10 grid gap-8 sm:grid-cols-2 text-left text-lg text-gray-700">
        {[{
          icon: FaEnvelope,
          title: "Email",
          content: (
            <a href="mailto:info@kageltd.com" className="hover:underline text-blue-800">
              info@kageltd.com
            </a>
          ),
          iconColor: "text-blue-600",
        }, {
          icon: FaPhoneAlt,
          title: "Phone",
          content: (
            <a href="tel:+250123456789" className="hover:underline text-blue-800">
              +250 123 456 789
            </a>
          ),
          iconColor: "text-green-600",
        }, {
          icon: FaWhatsapp,
          title: "WhatsApp",
          content: (
            <a
              href="https://wa.me/250987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-800"
            >
              +250 987 654 321
            </a>
          ),
          iconColor: "text-green-500",
        }, {
          icon: FaMapMarkerAlt,
          title: "Location",
          content: <p>Kigali, Rwanda</p>,
          iconColor: "text-red-500",
        }].map(({ icon: Icon, title, content, iconColor }, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-5 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-yellow-400 cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(251, 191, 36, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className={`${iconColor} text-3xl flex-shrink-0`} />
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">{title}</h4>
              <div>{content}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;
