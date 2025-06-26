import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import {
  HiChevronRight,
  HiMail,
  HiPhone,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import { FaUsers, FaHome } from "react-icons/fa";

import team from "../data/Team";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function About() {
 const [expandedIndex, setExpandedIndex] = useState(null);

const toggleExpand = (index) => {
  setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
};


  return (
    <>
      <Helmet>
        <title>
          About KAGE Ltd – Trusted Property Valuers & Engineering Experts in
          Rwanda
        </title>
        <meta
          name="description"
          content="Discover KAGE Ltd's mission, experienced team of certified valuers, land surveyors, and engineers providing property valuation and infrastructure consulting services across Rwanda."
        />
        <meta name="author" content="KAGE Ltd" />
        <link rel="canonical" href="https://kage.rw/about" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="About KAGE Ltd – Trusted Property Valuers & Engineering Experts in Rwanda"
        />
        <meta
          property="og:description"
          content="Meet the professionals behind KAGE Ltd – a multidisciplinary team delivering high-quality property valuation, surveying, engineering, and geotechnical services throughout Rwanda."
        />
        <meta property="og:url" content="https://kage.rw/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kage.rw/images/about-og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About KAGE Ltd – Trusted Property Valuers & Engineering Experts in Rwanda"
        />
        <meta
          name="twitter:description"
          content="Explore the team and vision behind KAGE Ltd, a leading Rwandan firm in property valuation, land surveying, engineering, and construction supervision."
        />
        <meta
          name="twitter:image"
          content="https://kage.rw/images/about-og-image.jpg"
        />
      </Helmet>

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-10 sm:py-20 space-y-24 rounded-none sm:rounded-3xl shadow-none sm:shadow-2xl bg-gradient-to-br from-white to-blue-100 relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[350px] mt-50 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/team/Telephone.jpg')" }}
            variants={{
              hidden: { scale: 1 },
              show: { scale: 1.1, transition: { duration: 10, ease: "easeOut" } },
            }}
            initial="hidden"
            animate="show"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          <nav
            aria-label="Breadcrumb"
            className="relative z-20 mt-20 px-6 md:px-8"
          >
            <ol className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-sm px-4 py-2 rounded-full shadow-md w-fit max-w-full backdrop-blur-sm bg-white/10 ring-1 ring-white/20">
              <li className="flex items-center gap-1 shrink-0">
                <Link
                  to="/"
                  className="flex items-center gap-1 text-white hover:text-blue-300 transition font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 px-2 py-1 rounded"
                >
                  <FaHome className="text-blue-400" />
                  Home
                </Link>
              </li>
              <HiChevronRight className="text-blue-400 text-lg shrink-0" />
              <li
                aria-current="page"
                className="text-blue-200 font-semibold px-2 py-1 shrink-0"
              >
                About
              </li>
            </ol>
          </nav>
          <div className="relative z-20 mt-10 md:mt-16 px-6 md:px-12 max-w-5xl">
            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About <span className="text-blue-400">KAGE Ltd</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-lg sm:text-xl text-blue-100 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Delivering trusted property valuation & management with expertise
              and innovation.
            </motion.p>
          </div>
        </section>

       {/* Who We Are Section */}
<motion.section
  className="relative overflow-hidden bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-blue-100 flex flex-col md:flex-row items-center gap-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }}
>
  {/* Subtle Background Accents */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

  {/* Text Content */}
  <motion.div
    className="md:w-1/2 z-10 space-y-6"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-snug">
      <span className="block h-2 w-10 bg-blue-600 rounded mb-4"></span>
      Who We Are
    </h2>
   <p className="text-lg text-gray-700 leading-relaxed">
  <strong className="text-blue-700 font-semibold">KAGE Ltd</strong> is a multidisciplinary firm delivering innovative and dependable real estate and engineering solutions. Backed by a team of highly skilled professionals, we blend technical precision with industry expertise to serve a wide range of client needs.
</p>

<ul className="mt-6 space-y-4 text-gray-700">
  {[
    "Comprehensive valuation of movable and immovable assets",
    "Tailored architectural and engineering design services",
    "End-to-end construction supervision and consulting",
    "Precision land surveying and geotechnical investigations",
  ].map((item, index) => (
    <li key={index} className="flex items-start gap-3">
      <span className="mt-1 text-blue-600">
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span>{item}</span>
    </li>
  ))}
</ul>

<p className="mt-6 text-lg text-gray-700 leading-relaxed">
  At KAGE Ltd, we prioritize <strong className="text-blue-700">accuracy</strong>, <strong className="text-blue-700">integrity</strong>, and <strong className="text-blue-700">client satisfaction</strong>. Our solutions are designed to be sustainable, data-driven, and tailored to each project’s unique requirements.
</p>

  </motion.div>

  {/* Image Section */}
  <motion.div
    className="md:w-1/2 flex justify-center z-10"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    whileHover={{ scale: 1.02 }}
  >
    <img
      src="/team/kage gif.gif"
      alt="KAGE Ltd Overview"
      className="w-full max-w-md rounded-2xl  "
    />
  </motion.div>
</motion.section>


        {/* Vision, Objectives & Mission Section */}
        <motion.section
          className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20"
          style={{ backgroundImage: "url('/house.jpg')" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-10 justify-center">
              <motion.div
                className="relative flex-1 bg-white rounded-3xl shadow-2xl p-8 md:p-10 space-y-6 border-t-8 border-green-700/90"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="absolute -top-4 left-6 bg-green-800 text-white px-4 py-1 rounded-t-lg text-lg font-bold shadow-lg">
                  Vision
                </span>
                <p className="text-lg md:text-xl leading-relaxed text-teal-900">
                  Our vision is to be a leader in the property and engineering
                  sectors, recognized for creativity, innovation, and unwavering
                  commitment to client satisfaction.
                </p>
                <p className="text-right text-5xl md:text-6xl font-[cursive] text-green-500/90 px-2 select-none">
                  Vision
                </p>
              </motion.div>
              <motion.div
                className="relative flex-1 bg-teal-950/95 rounded-3xl shadow-2xl p-8 md:p-10 space-y-6 text-white border-t-8 border-yellow-400/90"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="absolute -top-4 left-6 bg-yellow-500 text-teal-900 px-4 py-1 rounded-t-lg text-lg font-bold shadow-lg">
                  Objectives
                </span>
                <ul className="space-y-3 list-disc list-inside text-lg md:text-xl">
                  <li>Improve service delivery and maintain high standards.</li>
                  <li>Promote creativity and modern approaches.</li>
                  <li>Contribute to job creation and economic development.</li>
                </ul>
                <p className="text-right text-5xl md:text-6xl font-[cursive] text-yellow-400/90 px-2 select-none">
                  Goals
                </p>
              </motion.div>
            </div>
            <motion.div
              className="relative mt-16 mx-auto bg-blue-50 rounded-3xl shadow-2xl p-8 md:p-10 max-w-xl border-t-8 border-blue-700/90"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="absolute -top-4 left-6 bg-blue-700 text-white px-4 py-1 rounded-t-lg text-lg font-bold shadow-lg">
                Mission
              </span>
              <p className="text-lg md:text-xl leading-relaxed text-blue-900">
                Our mission is to deliver accurate, innovative, and reliable
                property and engineering solutions, ensuring client satisfaction
                while fostering sustainable development.
              </p>
              <p className="text-right text-5xl md:text-6xl font-[cursive] text-blue-700/90 px-2 select-none">
                Mission
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Team Section */}
 <motion.section
      id="team-section"
      className="space-y-16 px-4 py-10 sm:py-16 bg-gradient-to-b from-white to-blue-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {/* Section Heading */}
      <div className="text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Expert Team
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Dedicated professionals at <span className="text-blue-600 font-semibold">KAGE Ltd</span>, committed to delivering excellence in real estate, engineering, and valuation services.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {team.map((member, index) => {
          const isLong = member.background.length > 10;
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden border border-blue-100 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Photo with overlay */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-grow space-y-3">
                <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                  {member.role}
                </span>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-center gap-2 hover:text-blue-900 transition">
                    <HiMail className="text-lg transition-transform group-hover:-translate-y-0.5" />
                    <a href={`mailto:${member.email}`} className="hover:underline break-all">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 hover:text-blue-900 transition">
                    <HiPhone className="text-lg transition-transform group-hover:-translate-y-0.5" />
                    <a href={`tel:${member.phone}`} className="hover:underline">
                      {member.phone}
                    </a>
                  </div>
                </div>

                {/* Read More Toggle */}
               {isLong && (
  <Link
  to={`/team-member/${member.id}`}
  className="mt-2 inline-flex items-center gap-1 text-black text-sm font-medium hover:underline focus:outline-none"
  aria-label={`Read more about ${member.name}`}
>
  Read more <HiChevronRight className="w-5 h-5" />
</Link>
)}

                {/* Bio */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="bg-blue-50/50 rounded-lg p-4 mt-2 text-sm text-gray-700 whitespace-pre-line"
                    id={`bio-content-${index}`}
                    aria-live="polite"
                  >
                    {member.background}
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>




      </div>
    </>
  );
}

export default About;
