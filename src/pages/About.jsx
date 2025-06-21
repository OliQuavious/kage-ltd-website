import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { HiChevronRight, HiMail, HiPhone } from "react-icons/hi";

import {
  FaUsers,
  FaHome,
} from "react-icons/fa";

const team = [
  {
    name: "Eng. Gentil KANGAHO",
    role: "Certified Valuer",
    photo: "/team/Gentil.png",
    background:
      "Eng. Gentil is a seasoned Civil Engineer with over 20 years of experience in construction, including roads and buildings. He has held top management roles, notably as General Manager of Real Contractors Ltd, where he significantly boosted the company’s turnover. He also led the startup of East African Granite Industries Ltd and worked as a Senior Engineer at Rwanda Development Bank. Gentil is a Certified Property Valuer, an accredited Arbitrator (CIArb, London), and a certified Adjudicator (KLRCA, Malaysia). He holds a Bachelor's Degree in Civil Engineering from Bharathiar University, India.",
    email: "gkangaho@gmail.com",
    phone: "+250 788 304 297"
  },
  {
    name: "Alice U.",
    role: "Land Surveyor",
    photo: "/team/alice.jpg",
    background:
      "Alice specializes in land measurement, boundary mapping, and geospatial analysis, ensuring precision and compliance with local land regulations.",
    email: "alice.u@example.com",
    phone: "+250 788 111 002"
  },
  {
    name: "Ian K.",
    role: "Quantity Surveyor",
    photo: "/team/ian.jpg",
    background:
      "Ian brings financial expertise to construction, handling cost estimation, tendering, and project budgeting with accuracy and foresight.",
    email: "ian.k@example.com",
    phone: "+250 781 111 111"
  },
  {
    name: "Teta A.",
    role: "Field Technician",
    photo: "/team/teta.jpg",
    background:
      "Teta supports field operations with technical expertise in site assessments, measurements, and real-time data collection on construction sites.",
    email: "teta.a@example.com",
    phone: "+250 780 000 000"
  },
  {
    name: "Ryan S.",
    role: "Assistant Valuer (Civil Engineer)",
    photo: "/team/sangwa.jpg",
    background:
      "Ryan combines his civil engineering background with valuation practices to deliver precise assessments of buildings and infrastructure.",
    email: "ryan.s@gmail.com",
    phone: "+250 793 904 633"
  },
  {
    name: "Olivier M.",
    role: "Software Engineer",
    photo: "/team/olivier.jpg",
    background:
      "Olivier designs and maintains software solutions for property management, integrating modern tech into real estate and engineering services.",
    email: "olmusabe@gmail.com",
    phone: "+250 791 302 741"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <Helmet>
        <title>About Us – KAGE Ltd</title>
        <meta
          name="description"
          content="Learn more about KAGE Ltd's experienced team of valuers, engineers, and surveyors delivering top-tier property and engineering services across Rwanda."
        />
        <meta name="author" content="KAGE Ltd" />
        <link rel="canonical" href="https://kageltd.rw/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Us – KAGE Ltd" />
        <meta
          property="og:description"
          content="Learn more about KAGE Ltd's experienced team of valuers, engineers, and surveyors delivering top-tier property and engineering services across Rwanda."
        />
        <meta property="og:url" content="https://kageltd.rw/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kageltd.rw/images/about-og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us – KAGE Ltd" />
        <meta
          name="twitter:description"
          content="Learn more about KAGE Ltd's experienced team of valuers, engineers, and surveyors delivering top-tier property and engineering services across Rwanda."
        />
        <meta
          name="twitter:image"
          content="https://kageltd.rw/images/about-og-image.jpg"
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
          <nav aria-label="Breadcrumb" className="relative z-20 mt-20 px-6 md:px-8">
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
              <li aria-current="page" className="text-blue-200 font-semibold px-2 py-1 shrink-0">
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
              Delivering trusted property valuation & management with expertise and innovation.
            </motion.p>
          </div>
        </section>

        {/* Who We Are Section */}
        <motion.section
          className="flex flex-col md:flex-row gap-12 items-center
             bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/60
             backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-blue-100/60
             relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
          <motion.div
            className="md:w-1/2 space-y-6 z-10"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-blue-900 leading-tight flex items-center gap-3">
              <span className="inline-block h-10 w-1 rounded bg-blue-600" />
              Who&nbsp;We&nbsp;Are
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              <strong className="text-blue-700">KAGE Ltd</strong> is a multidisciplinary firm specializing in real estate and engineering services. We provide professional solutions including property valuation of movable and immovable assets, architectural and engineering designs, construction supervision, land surveying, and geotechnical soil investigations. Our goal is to deliver accurate, sustainable, and client-focused services across all sectors we serve.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center z-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/team/kage gif.gif"
              alt="KAGE Ltd Services"
              className="w-full max-w-md rounded-2xl shadow-xl
                   ring-4 ring-blue-200/40 hover:ring-blue-400/60
                   transition duration-300"
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
                  Our vision is to be a leader in the property and engineering sectors, recognized
                  for creativity, innovation, and unwavering commitment to client satisfaction.
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
                Our mission is to deliver accurate, innovative, and reliable property and engineering
                solutions, ensuring client satisfaction while fostering sustainable development.
              </p>
              <p className="text-right text-5xl md:text-6xl font-[cursive] text-blue-700/90 px-2 select-none">
                Mission
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Team Section */}
        <motion.section
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-3 border-l-8 border-blue-600 pl-5 hover:text-blue-600 transition duration-300">
            <FaUsers className="text-blue-600" role="img" aria-label="Team Icon" /> Our Team
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Our multilingual team of <strong className="text-blue-700">experienced professionals</strong> combines
            expertise in valuation, real estate management, and technology-driven assessment tools to deliver
            outstanding results tailored to your needs.
          </p>
          <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                tabIndex={0}
                onClick={() => setSelectedMember(member)}
                className="relative p-6 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md
                         border border-white/50 hover:shadow-blue-200 cursor-pointer group
                         focus:outline-none focus:ring-4 focus:ring-blue-300"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                style={{
                  top: index % 2 === 0 ? 0 : 20,
                  boxShadow: "0 15px 35px rgba(0, 100, 255, 0.15)",
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          {selectedMember && (
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-200 via-pink-100 to-rose-300 rounded-3xl w-full max-w-lg relative shadow-2xl border border-white/100 backdrop-blur-md max-h-[90vh] overflow-y-auto p-8"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="sticky top-4 right-4 text-blue-900 hover:text-red-500 text-2xl font-bold"
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <div className="flex flex-col items-center text-center gap-4 mt-4">
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="w-28 h-28 rounded-full border-4 border-blue-100 shadow-lg object-cover"
                  />
                  <h3 className="text-2xl font-semibold text-blue-900">{selectedMember.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{selectedMember.role}</p>
                  <p className="text-gray-700 leading-relaxed text-base">{selectedMember.background}</p>
                </div>
                <div className="mt-4 flex flex-col lg:flex-row items-center justify-center gap-y-2 lg:gap-x-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <HiMail className="text-blue-700" />
                    <a href={`mailto:${selectedMember.email}`} className="hover:underline">
                      {selectedMember.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiPhone className="text-blue-700" />
                    <a href={`tel:${selectedMember.phone}`} className="hover:underline">
                      {selectedMember.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.section>
      </div>
    </>
  );
}

export default About;
