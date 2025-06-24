import React from "react"; 
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const bannerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 15 },
  },
};

export default function ContactBanner() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: (
        <a
          href="mailto:info@kageltd.rw"
          className="text-white transition-colors duration-300 hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="Email info@kageltd.rw"
        >
          info@kageltd.rw
        </a>
      ),
      color: "text-white",
    },
    {
      icon: FaPhoneAlt,
      label: "Call",
      value: (
        <a
          href="tel:+250788304297"
          className="text-white transition-colors duration-300 hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="Call +250 788 304 297"
        >
          +250 788 304 297
        </a>
      ),
      color: "text-white",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: (
        <a
          href="https://wa.me/+250788304297"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors duration-300 hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="WhatsApp +250 788 304 297"
        >
          +250 788 304 297
        </a>
      ),
      color: "text-white",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: <span> KG 596 St 22, Kacyiru, Rwanda</span>,
      color: "text-white",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="w-full bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 py-12 px-6 sm:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={bannerVariants}
      aria-label="Contact Banner"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        <motion.h2
          className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight text-center sm:text-left flex-1"
          variants={itemVariants}
        >
          Get In Touch With Us
        </motion.h2>

        <div className="flex flex-wrap justify-center sm:justify-start gap-x-12 gap-y-4 flex-1 max-w-2xl">
          {contactInfo.map(({ icon: Icon, label, value, color }) => (
            <motion.div
              key={label}
              className="flex items-center gap-3 min-w-[200px]"
              variants={itemVariants}
            >
              <Icon className={`${color} text-2xl`} aria-hidden="true" />
              <div className="text-white">
                <p className="text-xs uppercase tracking-wide opacity-70">
                  {label}
                </p>
                <p className="font-semibold text-lg transform transition-transform duration-300 hover:scale-105">
                  {value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="/contact"
          className="inline-block bg-white text-blue-900 font-semibold rounded-full px-6 py-2.5 shadow-md hover:bg-blue-100 transition text-sm whitespace-nowrap"
          variants={itemVariants}
          aria-label="Contact us now"
        >
          Contact Us
        </motion.a>
      </div>
    </motion.section>
  );
}
