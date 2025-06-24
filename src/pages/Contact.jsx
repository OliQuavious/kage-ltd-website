import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
  FiSend,
  FiUser,
  FiBook,
} from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { Helmet } from "react-helmet";

function Contact() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvylrny"; // <-- Replace here

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
    setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setErrors({});
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          const data = await response.json();
          setSubmitError(
            data.error || "Oops! Something went wrong. Please try again."
          );
        }
      } catch (error) {
        setSubmitError(
          "Network error. Please check your internet connection and try again."
        );
      }
    }
  };

  return (
    <>
      <Helmet>
  <title>Contact KAGE Ltd – Property Valuation & Surveying Experts in Rwanda</title>
  <meta
    name="description"
    content="Contact KAGE Ltd for property valuation, land surveying, engineering design, or project consultations. Our team is ready to assist clients across Rwanda and beyond."
  />
  <meta name="author" content="KAGE Ltd" />
  <link rel="canonical" href="https://kage.rw/contact" />

  {/* Open Graph */}
  <meta property="og:title" content="Contact KAGE Ltd – Property Valuation & Surveying Experts in Rwanda" />
  <meta
    property="og:description"
    content="Reach out to KAGE Ltd for expert assistance with property valuation, engineering design, land surveying, and geotechnical services in Rwanda."
  />
  <meta property="og:url" content="https://kage.rw/contact" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://kage.rw/images/contact-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact KAGE Ltd – Property Valuation & Surveying Experts in Rwanda" />
  <meta
    name="twitter:description"
    content="Get in touch with KAGE Ltd for expert consultation in property valuation, surveying, and engineering services across Rwanda."
  />
  <meta name="twitter:image" content="https://kage.rw/images/contact-og-image.jpg" />
</Helmet>


      <section className="rounded-lg shadow-lg overflow-hidden">
        {/* Hero Image with Styled Breadcrumb on Top */}
        <div className="relative w-full h-40 sm:h-44 md:h-60 lg:h-64 overflow-hidden rounded-lg mt-20">
          <img
            src="/Telephone.jpg"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-40 z-10" />

          {/* Stylish Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="absolute top-2 left-3 sm:top-4 sm:left-6 z-30"
          >
            <ol className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-sm w-max  backdrop-blur-sm">
              <li className="flex items-center gap-1">
                <Link
                  to="/"
                  className="flex items-center gap-1 text-white hover:text-blue-900 transition font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 px-1.5 py-1 rounded"
                >
                  <FaHome className="text-blue-500" />
                  <span>Home</span>
                </Link>
              </li>
              <HiChevronRight className="text-blue-400 text-sm sm:text-lg" />
              <li
                aria-current="page"
                className="text-blue-900 font-semibold px-1.5 py-1"
              >
                Contact
              </li>
            </ol>
          </nav>

          <motion.h2
            className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg select-none z-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get in Touch
          </motion.h2>
        </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto bg-gradient-to-tr from-white via-blue-50 to-blue-100 p-6 md:p-16 grid md:grid-cols-3 gap-16 rounded-b-lg">
         {/* Contact Info */}
{/* Contact Info */}
<motion.div
  className="space-y-10 text-center md:text-left text-blue-900"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, delay: 0.3 }}
>
  <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-blue-950">
    Have questions or want to start a project?{" "}
    <span className="text-blue-700">We’re here to help you every step of the way.</span>
  </p>

  <div className="space-y-6">
    {/* Email */}
    <div className="flex items-center gap-4 justify-center md:justify-start group transition-all duration-300">
      <FiMail size={28} className="text-blue-700 group-hover:scale-110 transition-transform duration-300" />
      <a
        href="mailto:info@kageltd.com"
        className="text-lg font-medium text-blue-900 group-hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
      >
        info@kageltd.com
      </a>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4 justify-center md:justify-start group transition-all duration-300">
      <FiPhone size={28} className="text-green-700 group-hover:scale-110 transition-transform duration-300" />
      <a
        href="tel:+250788304297"
        className="text-lg font-medium text-blue-900 group-hover:text-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
      >
        +250 788 304 297
      </a>
    </div>

    {/* WhatsApp */}
    <div className="flex items-center gap-4 justify-center md:justify-start group transition-all duration-300">
      <FiMessageSquare size={28} className="text-green-600 group-hover:scale-110 transition-transform duration-300" />
      <a
        href="https://wa.me/+250788304297"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-medium text-blue-900 group-hover:text-green-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
      >
        WhatsApp +250 788 304 297
      </a>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4 justify-center md:justify-start group transition-all duration-300">
      <FiMapPin size={28} className="text-red-600 group-hover:scale-110 transition-transform duration-300" />
      <p className="text-lg font-semibold text-blue-900 group-hover:text-red-600 transition-colors duration-300">
        Kigali, Rwanda
      </p>
    </div>
  </div>
</motion.div>


          {/* Contact Form */}
          <motion.form
            className="md:col-span-2 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-2xl p-10 space-y-8 transition-all duration-300"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            noValidate
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-emerald-100 border border-emerald-400 text-emerald-700 px-5 py-3 rounded-xl text-center font-semibold shadow-md"
              >
                Thank you for your message! We’ll be in touch shortly.
              </motion.div>
            )}

            {submitError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-100 border border-red-400 text-red-700 px-5 py-3 rounded-xl text-center font-semibold shadow-md"
              >
                {submitError}
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Name"
                icon={<FiUser />}
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Your full name"
              />
              <InputField
                label="Email"
                icon={<FiMail />}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="you@example.com"
              />
              <InputField
                label="Subject"
                icon={<FiBook />}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="Subject of your message"
                full
              />

              <div className="md:col-span-2">
                <label className="mb-2 font-semibold text-gray-800 flex items-center gap-2 text-sm">
                  <FiMessageSquare className="text-blue-800" /> Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full border px-5 py-4 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-600 mt-1 text-sm">{errors.message}</p>
                )}
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Send your message"
              className="mt-10 w-full md:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-bold px-10 py-4 rounded-full shadow-xl transition-all duration-300"
            >
              Send Message <FiSend size={20} />
            </motion.button>
          </motion.form>
        </div>
        {/* Map */}
        <div className="mt-16 w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3281.413034209571!2d30.086715474967043!3d-1.9364203980460053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTYnMTEuMSJTIDMwwrAwNScyMS41IkU!5e1!3m2!1sen!2srw!4v1749807805982!5m2!1sen!2srw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KAGE Ltd Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}

function ContactDetail({ icon, text, link }) {
  return (
    <div className="flex items-center gap-4 text-blue-800 hover:text-blue-600 transition cursor-pointer justify-center md:justify-start">
      {icon}
      <a
        href={link}
        className="text-lg font-semibold underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
}

function InputField({
  label,
  icon,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  full = false,
}) {
  return (
    <div className={`relative ${full ? "md:col-span-2" : ""}`}>
      <label
        htmlFor={name}
        className="mb-2 font-semibold text-blue-900 flex items-center gap-2"
      >
        {icon} {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-600 mt-1 text-sm">{error}</p>}
    </div>
  );
}

export default Contact;
