// src/pages/Services.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiChevronRight, HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import {
  FaBalanceScale,
  FaDraftingCompass,
  FaTools,
  FaHardHat,
  FaMapMarkedAlt,
  FaMountain,
  FaHome,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

/* ---------- DATA ---------- */
const services = [
  {
    title: "Property Valuation",
    desc: "Reliable valuation of movable and immovable assets for legal, financial, and strategic purposes.",
    icon: FaBalanceScale,
  },
  {
    title: "Architectural Designs",
    desc: "Creative and sustainable architectural solutions tailored to your vision and requirements.",
    icon: FaDraftingCompass,
  },
  {
    title: "Engineering Designs",
    desc: "Structural and civil engineering plans for buildings, roads, and other infrastructure.",
    icon: FaTools,
  },
  {
    title: "Construction Supervision",
    desc: "Professional oversight to ensure your construction projects meet standards and deadlines.",
    icon: FaHardHat,
  },
  {
    title: "Land Surveying",
    desc: "Accurate land measurement, boundary marking, and mapping services using modern tools.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Geotechnical Soil Investigation",
    desc: "Thorough soil testing and analysis for safe and reliable foundation design.",
    icon: FaMountain,
  },
];

/* ---------- ANIMATION VARIANTS ---------- */
const heroText = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const bgZoom = {
  hidden: { scale: 1 },
  show: {
    scale: 1.05,
    transition: {
      duration: 12,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const list = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

const iconFx = {
  rest: { scale: 1, color: "#1E40AF" },
  hover: { scale: 1.3, color: "#FBBF24", transition: { duration: 0.3 } },
};

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ---------- COMPONENT ---------- */
function Services() {
  const slugify = (str) => encodeURIComponent(str.replace(/\s+/g, "-").toLowerCase());

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setSubmitStatus(null);
    return;
  }
  setErrors({});

  try {
    const response = await fetch("https://formspree.io/f/xgvylrny", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setSubmitStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else if (result?.errors?.length) {
      setSubmitStatus("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    setSubmitStatus("An unexpected error occurred. Please try again.");
  }
};


  return (
    <>
      <Helmet>
        <title>Our Services – Property Valuation, Surveying & Engineering | KAGE Ltd Rwanda</title>
        <meta
          name="description"
          content="Discover KAGE Ltd’s range of professional services including property valuation, land surveying, architectural and engineering design, construction supervision, and geotechnical soil investigations in Rwanda."
        />
        <meta name="author" content="KAGE Ltd" />
        <link rel="canonical" href="https://kage.rw/services" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Our Services – Property Valuation, Surveying & Engineering | KAGE Ltd Rwanda"
        />
        <meta
          property="og:description"
          content="KAGE Ltd offers expert services in property valuation, land surveying, architectural and structural engineering, construction project supervision, and geotechnical investigations across Rwanda."
        />
        <meta property="og:url" content="https://kage.rw/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kage.rw/images/services-og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Services – Property Valuation, Surveying & Engineering | KAGE Ltd Rwanda"
        />
        <meta
          name="twitter:description"
          content="Explore professional services offered by KAGE Ltd in Rwanda: property valuation, engineering designs, land surveys, geotechnical testing, and construction supervision."
        />
        <meta name="twitter:image" content="https://kage.rw/images/services-og-image.jpg" />
      </Helmet>

      {/* Existing hero and services code here ... (unchanged) */}

      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Background image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/house.jpg')" }}
          variants={bgZoom}
          initial="hidden"
          animate="show"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="relative z-20 mt-24 px-6 md:px-12">
          <ol className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-sm px-4 py-2 rounded-full shadow-md w-fit max-w-full backdrop-blur-sm">
            <li className="flex items-center gap-1 shrink-0">
              <Link
                to="/"
                className="flex items-center gap-1 text-white hover:text-blue-900 transition font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded"
              >
                <FaHome className="text-blue-500" />
                Home
              </Link>
            </li>
            <HiChevronRight className="text-blue-400 text-lg shrink-0" />
            <li aria-current="page" className="text-blue-900 font-semibold px-2 py-1 shrink-0">
              Services
            </li>
          </ol>
        </nav>

        {/* Text box */}
        <motion.div
          className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 text-center"
          variants={heroText}
          initial="hidden"
          animate="show"
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-10 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">Our Services</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
              Explore the range of professional services we offer to meet your real-estate, engineering and design needs.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
<motion.section
  id="services"
  className="relative py-20 px-6 bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: `
      url('/pattern1.jpg'),
      linear-gradient(to bottom, #ffffff, #f8fafc, #ffffff)
    `,
    backgroundRepeat: "repeat, no-repeat",
    backgroundPosition: "top left, center",
    backgroundSize: "1300px, cover",
  }}
  variants={list}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-14">What We Do</h2>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, desc, icon: Icon }, idx) => (
        <Link
          to={`/services/${title.replace(/\s+/g, '-').toLowerCase()}`}
          key={idx}
          aria-label={`Read more about ${title}`}
          className="no-underline"
        >
          <motion.div
            variants={card}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 15px 25px rgba(251,191,36,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative bg-white p-8 rounded-xl shadow-lg cursor-pointer"
          >
            {/* Decorative circle */}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-yellow-100/60"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.05 * idx, type: "spring", stiffness: 90 }}
            />

            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative flex flex-col items-center text-center"
            >
              <motion.div
                variants={iconFx}
                className="text-blue-900 text-5xl mb-5 drop-shadow-sm"
              >
                <Icon />
              </motion.div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </motion.div>
          </motion.div>
        </Link>
      ))}
    </div>
  </div>
</motion.section>


      {/* ------------------ CONTACT SECTION ------------------ */}
      <motion.section
        id="contact"
        className="bg-gradient-to-tr from-blue-900 to-blue-700 py-20 px-6 md:px-12 mb-14"
        variants={formVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center text-white">
          {/* Contact Info */}
<div>
  <h2 className="text-4xl font-extrabold mb-6 text-white drop-shadow-xl">
    Get in Touch
  </h2>

  <p className="mb-8 text-lg max-w-lg text-gray-100 leading-relaxed drop-shadow">
    Have questions or need a consultation? Reach out to us and our expert team will get back to you promptly.
  </p>

  <ul className="space-y-6 text-lg text-white">
    {/* Location */}
    <li className="flex items-center gap-4 group transition-all duration-300">
      <HiLocationMarker className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      <span className="group-hover:text-yellow-300 transition-colors duration-300">
        KG 596 St, Kigali, Rwanda
      </span>
    </li>

    {/* Phone */}
    <li className="flex items-center gap-4 group transition-all duration-300">
      <HiPhone className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      <a
        href="tel:+250788304297"
        className="group-hover:text-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
      >
        +250 788 304 297
      </a>
    </li>

    {/* Email */}
    <li className="flex items-center gap-4 group transition-all duration-300">
      <HiMail className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
      <a
        href="mailto:info@kageltd.rw"
        className="group-hover:text-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
      >
        info@kageltd.rw
      </a>
    </li>
  </ul>
</div>



          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-8 shadow-xl text-blue-900"
            noValidate
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            <div className="mb-5 relative">
              <input
                type="text"
                name="name"
                id="name"
                className={`peer w-full border-b-2 border-gray-300 py-2 text-blue-900 placeholder-transparent focus:outline-none focus:border-yellow-400 ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-yellow-400 peer-focus:text-sm cursor-text"
              >
                Your Name
              </label>
              {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-5 relative">
              <input
                type="email"
                name="email"
                id="email"
                className={`peer w-full border-b-2 border-gray-300 py-2 text-blue-900 placeholder-transparent focus:outline-none focus:border-yellow-400 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-yellow-400 peer-focus:text-sm cursor-text"
              >
                Your Email
              </label>
              {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-5 relative">
              <input
                type="text"
                name="subject"
                id="subject"
                className={`peer w-full border-b-2 border-gray-300 py-2 text-blue-900 placeholder-transparent focus:outline-none focus:border-yellow-400 ${
                  errors.subject ? "border-red-500" : ""
                }`}
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <label
                htmlFor="subject"
                className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-yellow-400 peer-focus:text-sm cursor-text"
              >
                Subject
              </label>
              {errors.subject && <p className="text-red-600 mt-1 text-sm">{errors.subject}</p>}
            </div>

            <div className="mb-6 relative">
              <textarea
                name="message"
                id="message"
                rows="5"
                className={`peer w-full border-b-2 border-gray-300 py-2 text-blue-900 placeholder-transparent resize-none focus:outline-none focus:border-yellow-400 ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-yellow-400 peer-focus:text-sm cursor-text"
              >
                Your Message
              </label>
              {errors.message && <p className="text-red-600 mt-1 text-sm">{errors.message}</p>}
            </div>

            {submitStatus && (
              <p className="mb-4 text-green-600 font-semibold">{submitStatus}</p>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg shadow-lg transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    </>
  );
}

export default Services;
