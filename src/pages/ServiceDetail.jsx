import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiChevronLeft,
  FiInfo,
  FiStar,
  FiClock,
  FiUsers,
  FiPhone,
} from "react-icons/fi";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

/* ---------- SERVICES DATA ---------- */
const services = [
  {
    id: "property-valuation",
    title: "Property Valuation",
    tagline: "Reliable valuation of movable and immovable assets.",
    image: "/blog/property-valuation.jpg",
    overview:
      "Our Property Valuation service offers comprehensive and accurate assessment of both movable and immovable assets, helping you make informed decisions for sales, taxation, insurance, and investment.",
    benefits: [
      "Accurate valuation for legal and financial compliance.",
      "Supports buying, selling, leasing, and insurance claims.",
      "Informs strategic asset management and portfolio planning.",
      "Provides documented reports for regulatory and tax purposes.",
    ],
    process: [
      "Consultation to understand asset types and valuation goals.",
      "On-site inspections and data collection by qualified valuers.",
      "Market analysis and application of standardized valuation methods.",
      "Preparation and delivery of detailed valuation report.",
      "Post-report support for clarifications and follow-ups.",
    ],
    whyChooseUs:
      "Our certified valuers combine local market knowledge with global standards, using advanced technology to deliver precise and trustworthy valuations tailored to your needs.",
    useCases:
      "Ideal for property owners, investors, insurers, financial institutions, and legal professionals requiring dependable asset valuations.",
    cta: "Contact us to schedule your property valuation and secure your asset's true worth.",
  },
  {
    id: "architectural-designs",
    title: "Architectural Designs",
    tagline: "Creative and sustainable architectural solutions.",
    image: "/blog/Architectural-Design1.jpg",
    overview:
      "We provide innovative architectural design services that blend creativity with sustainability, ensuring your projects meet aesthetic, functional, and regulatory standards.",
    benefits: [
      "Customized designs reflecting your unique vision.",
      "Incorporation of sustainable and energy-efficient features.",
      "Compliance with local building codes and regulations.",
      "Improved project feasibility and stakeholder engagement.",
    ],
    process: [
      "Initial consultation to understand your needs and vision.",
      "Site analysis and feasibility studies.",
      "Development of conceptual and detailed architectural plans.",
      "Client review and iterative design refinement.",
      "Finalization of plans ready for construction and permits.",
    ],
    whyChooseUs:
      "Our team of experienced architects combines creativity with technical expertise to deliver designs that are both beautiful and practical.",
    useCases:
      "Perfect for residential, commercial, and public sector projects requiring innovative and compliant architectural design.",
    cta: "Get in touch to bring your architectural vision to life.",
  },
  {
    id: "engineering-designs",
    title: "Engineering Designs",
    tagline: "Civil, structural, and MEP engineering plans for buildings, roads, and infrastructure projects.",
    image: "/blog/Engineering.jpg",
    overview:
      "Our Engineering Design service delivers detailed and reliable civil, structural, and MEP engineering plans to ensure the safety, durability, and efficiency of your construction projects.",
    benefits: [
      "Comprehensive planning for structural integrity and safety.",
      "Optimized designs for cost-effective and sustainable construction.",
      "Compliance with local and international engineering standards.",
      "Seamless integration with architectural and construction plans.",
    ],
    process: [
      "Assessment of project requirements and site conditions.",
      "Structural analysis and design calculations.",
      "Preparation of detailed engineering drawings and technical specifications.",
      "Collaboration with architects, MEP consultants, and contractors.",
      "Final delivery of approved, construction-ready engineering documents.",
    ],
    whyChooseUs:
      "Our skilled engineers leverage industry best practices, advanced tools, and innovative thinking to deliver engineering designs that meet the highest technical standards and client expectations.",
    useCases:
      "Ideal for construction companies, property developers, government infrastructure projects, and engineering consultancies working on buildings, roads, or civil infrastructure.",
    cta: "Partner with us to bring strength, precision, and sustainability to your engineering projects.",
  },
  {
    id: "construction-supervision",
    title: "Construction Supervision",
    tagline: "Professional oversight to ensure your construction projects meet standards and deadlines.",
    image: "/blog/construction-supervision1.jpg",
    overview:
      "We provide dedicated construction supervision services to monitor quality, safety, and progress, ensuring your projects are completed on time and within budget.",
    benefits: [
      "Regular site inspections and quality control.",
      "Monitoring compliance with design and safety standards.",
      "Timely identification and resolution of issues.",
      "Effective coordination between contractors and stakeholders.",
    ],
    process: [
      "Initial review of project plans and timelines.",
      "On-site supervision and progress monitoring.",
      "Quality assurance inspections and reporting.",
      "Coordination meetings with contractors and clients.",
      "Final project review and handover documentation.",
    ],
    whyChooseUs:
      "Our experienced supervisors ensure adherence to project specifications and timelines, reducing risks and enhancing project outcomes through proactive management.",
    useCases:
      "Ideal for developers, contractors, and property owners seeking expert oversight during construction phases.",
    cta: "Contact us to ensure your construction project is supervised by professionals committed to excellence.",
  },
  {
    id: "land-surveying",
    title: "Land Surveying",
    tagline: "Accurate land measurement, boundary marking, and mapping services using modern tools.",
    image: "/blog/land-surveying1.jpg",
    overview:
      "Our Land Surveying service offers precise measurement, boundary determination, and topographic mapping using state-of-the-art technology to support your land development and legal needs.",
    benefits: [
      "Accurate and reliable land measurements.",
      "Clear boundary identification and dispute prevention.",
      "Detailed topographic and cadastral mapping.",
      "Support for land development, construction, and legal documentation.",
    ],
    process: [
      "Initial consultation and review of existing land records.",
      "Field measurements using modern surveying equipment.",
      "Data processing and map creation.",
      "Boundary marking and verification with stakeholders.",
      "Delivery of comprehensive survey reports and maps.",
    ],
    whyChooseUs:
      "We combine advanced technology with experienced surveyors to provide dependable and timely land surveying services tailored to your requirements.",
    useCases:
      "Perfect for landowners, developers, legal firms, and government bodies involved in land management and development.",
    cta: "Reach out to schedule your land survey and ensure accurate land data for your project.",
  },
  {
    id: "geotechnical-soil-investigation",
    title: "Geotechnical Soil Investigation",
    tagline: "Thorough soil testing and analysis for safe and reliable foundation design.",
    image: "/blog/Geotechnical Soil Investigation2.jpg",
    overview:
      "Our Geotechnical Soil Investigation service conducts in-depth soil analysis to inform safe, effective foundation design and mitigate construction risks.",
    benefits: [
      "Detailed assessment of soil properties and stability.",
      "Identification of potential geotechnical hazards.",
      "Data to support foundation design and construction methods.",
      "Compliance with engineering and environmental standards.",
    ],
    process: [
      "Site reconnaissance and planning of investigation scope.",
      "Collection of soil samples through drilling and testing.",
      "Laboratory analysis of soil characteristics.",
      "Preparation of geotechnical report with recommendations.",
      "Consultation to interpret findings and support project planning.",
    ],
    whyChooseUs:
      "Our qualified geotechnical engineers use advanced testing techniques to provide accurate soil data that enhances construction safety and efficiency.",
    useCases:
      "Ideal for developers, engineers, and contractors planning new construction or expansions requiring thorough soil analysis.",
    cta: "Contact us for reliable geotechnical investigations that lay the foundation for successful projects.",
  },
];

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const service = services.find((s) => s.id === serviceId);

  useEffect(() => {
    const ids = ["overview", "benefits", "process", "whyChooseUs", "useCases", "cta"];
    const onScroll = () => {
      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto p-6 pt-24 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Service not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-400 rounded text-blue-900 font-semibold hover:bg-yellow-500 transition"
        >
          <FiChevronLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>KAGE Ltd - {service.title}</title>
        <meta name="description" content={service.tagline} />
      </Helmet>

      {/* HERO IMAGE */}
      {service.image && (
        <motion.section
          className="relative h-[250px] md:h-[320px] w-full overflow-hidden mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={service.image}
            alt={`${service.title} banner`}
            className="object-cover w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <h1 className="absolute bottom-4 left-6 text-white text-3xl md:text-4xl font-extrabold drop-shadow">
            {service.title}
          </h1>
        </motion.section>
      )}

      <div className="max-w-6xl mx-auto px-6 pb-20 flex flex-col lg:flex-row gap-12">
        {/* SIDEBAR */}
        <nav className="hidden lg:block sticky top-32 w-64 bg-white border rounded shadow p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Quick Navigation</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              ["overview", "Overview", FiInfo],
              ["benefits", "Key Benefits", FiCheckCircle],
              ["process", "Our Process", FiClock],
              ["whyChooseUs", "Why Choose Us?", FiStar],
              ["useCases", "Who Needs It?", FiUsers],
              ["cta", "Contact Us", FiPhone],
            ].map(([id, label, Icon]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex items-center gap-2 hover:text-yellow-500 transition ${
                    activeSection === id ? "text-yellow-600 font-semibold" : ""
                  }`}
                >
                  <Icon /> {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <article className="flex-1 space-y-10">
          {/* Tagline */}
          <p className="text-xl text-yellow-600 italic mb-4">{service.tagline}</p>

          {/* Gallery */}
          {service.gallery && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {service.gallery.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`${service.title} illustration ${i + 1}`}
                  className="object-cover h-40 w-full rounded"
                  whileHover={{ scale: 1.05 }}
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {/* Sections */}
          {[
            ["overview", "Overview", service.overview],
            ["benefits", "Key Benefits", service.benefits],
            ["process", "Our Process", service.process],
            ["whyChooseUs", "Why Choose Us?", service.whyChooseUs],
            ["useCases", "Who Needs This Service?", service.useCases],
          ].map(([id, heading, content]) => (
            <section
              id={id}
              key={id}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-[1.02] transition duration-500"
            >
              <h2 className="text-3xl font-semibold text-blue-800 mb-4 border-b-2 border-yellow-400 inline-block pb-1">
                {heading}
              </h2>

              {Array.isArray(content) ? (
                id === "benefits" ? (
                  <ul className="space-y-3">
                    {content.map((text, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg">
                        <FiCheckCircle className="text-yellow-500 mt-[2px]" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                ) : id === "process" ? (
                  <ol className="list-decimal list-inside space-y-2 text-lg">
                    {content.map((t, i) => <li key={i}>{t}</li>)}
                  </ol>
                ) : (
                  <ul className="list-disc list-inside space-y-1 text-lg">
                    {content.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                )
              ) : (
                <p className="text-lg leading-relaxed">{content}</p>
              )}
            </section>
          ))}

          {/* CTA */}
          <section
            id="cta"
            className="bg-yellow-100 border-l-8 border-yellow-400 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between"
          >
            <p className="text-yellow-700 font-semibold text-xl md:text-2xl mb-4 md:mb-0">
              {service.cta}
            </p>
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center gap-3 px-8 py-3 bg-yellow-500 text-blue-900 font-bold rounded shadow hover:bg-yellow-600 transition"
            >
              <FiPhone size={28} />
              Contact Us
            </button>
          </section>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 rounded font-semibold text-blue-900 hover:bg-yellow-500 transition shadow"
          >
            <FiChevronLeft /> Back to Services
          </button>
        </article>
      </div>
    </>
  );
}

export default ServiceDetail;
