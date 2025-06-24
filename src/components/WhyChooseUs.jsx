import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaCogs,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie className="text-blue-700 text-4xl" />,
    title: "Qualified Professionals",
    description:
      "Our certified experts bring years of industry experience and technical know-how to deliver precise, regulatory-compliant services.",
  },
  {
    icon: <FaCogs className="text-blue-700 text-4xl" />,
    title: "Comprehensive Solutions",
    description:
      "From property valuation to geotechnical surveys, we offer a full spectrum of services tailored to your project needs.",
  },
  {
    icon: <FaShieldAlt className="text-blue-700 text-4xl" />,
    title: "Reliability & Integrity",
    description:
      "Our commitment to quality, transparency, and ethical standards ensures trusted outcomes and long-term client relationships.",
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-700 text-4xl" />,
    title: "Local Knowledge, Global Standards",
    description:
      "We merge deep understanding of the Rwandan market with internationally recognized engineering and valuation practices.",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="relative py-20 px-6 sm:px-10 bg-white border-t border-blue-100"
      style={{
        backgroundImage: "url('/pattern.jpg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "auto",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Overlay to soften the pattern for readability */}
      <div className="absolute inset-0 bg-white bg-opacity-80 pointer-events-none"></div>

      {/* Content container, relative to be above overlay */}
      <div className="relative max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Why Choose KAGE Ltd
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          Our reputation is built on precision, professionalism, and performance. Here’s why KAGE Ltd is the preferred partner for property and engineering solutions.
        </p>
      </div>

      <div className="relative grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-5 bg-gray-50 hover:bg-white transition p-6 rounded-xl shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="pt-1">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
