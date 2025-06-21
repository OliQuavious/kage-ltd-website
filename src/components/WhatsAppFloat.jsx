// File: src/components/WhatsAppFloat.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/250788304297" // Replace with your WhatsApp number
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={25} />
    </a>
  );
};

export default WhatsAppFloat;
