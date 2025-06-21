// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import {
  FaBalanceScale,
  FaDraftingCompass,
  FaTools,
  FaHardHat,
  FaMapMarkedAlt,
  FaMountain,
  FaHome
} from "react-icons/fa";
import { Helmet } from "react-helmet";  // <-- added this import

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

/* ---------- HERO ANIMATION VARIANTS ---------- */
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

/* ---------- CARD ANIMATION VARIANTS ---------- */
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

/* ---------- COMPONENT ---------- */
function Services() {
  const slugify = (str) =>
    encodeURIComponent(str.replace(/\s+/g, "-").toLowerCase());

  return (
    <>
      <Helmet>
        <title>Our Services – KAGE Ltd</title>
        <meta
          name="description"
          content="Explore KAGE Ltd’s professional services including property valuation, architectural designs, engineering, construction supervision, land surveying, and geotechnical investigations."
        />
        <meta name="author" content="KAGE Ltd" />
        <link rel="canonical" href="https://kageltd.rw/services" />

        {/* Open Graph */}
        <meta property="og:title" content="Our Services – KAGE Ltd" />
        <meta
          property="og:description"
          content="Explore KAGE Ltd’s professional services including property valuation, architectural designs, engineering, construction supervision, land surveying, and geotechnical investigations."
        />
        <meta property="og:url" content="https://kageltd.rw/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kageltd.rw/images/services-og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services – KAGE Ltd" />
        <meta
          name="twitter:description"
          content="Explore KAGE Ltd’s professional services including property valuation, architectural designs, engineering, construction supervision, land surveying, and geotechnical investigations."
        />
        <meta
          name="twitter:image"
          content="https://kageltd.rw/images/services-og-image.jpg"
        />
      </Helmet>

      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Background image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/house.jpg')" }} // ⬅ replace with your actual image path
          variants={bgZoom}
          initial="hidden"
          animate="show"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

       {/* Breadcrumb nav (updated with margin for visibility) */}
<nav
  aria-label="Breadcrumb"
  className="relative z-20 mt-24 px-6 md:px-12"
>
  <ol className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-sm  px-4 py-2 rounded-full shadow-md w-fit max-w-full backdrop-blur-sm">
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
    <li
      aria-current="page"
      className="text-blue-900 font-semibold px-2 py-1 shrink-0"
    >
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
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
      Our Services
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
      Explore the range of professional services we offer to meet your real-estate, engineering and design needs.
    </p>
  </div>
</motion.div>

      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
      <motion.section
        id="services"
        className="py-20 px-6 max-w-7xl mx-auto"
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-14">
          What We Do
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }, idx) => (
            <Link
              to={`/services/${slugify(title)}`}
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
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-700">{desc}</p>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default Services;
