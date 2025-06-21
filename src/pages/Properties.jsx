import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import { MapPin, Calendar, BadgeDollarSign, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

const properties = [
  {
  id: 1,
  title: "MA CAMPAGNE RESORT LTD",
  excerpt:
    "A serene hospitality property in Gishari, Rwamagana, professionally valued for tourism development, leasing, and long-term investment opportunities.",
  images: [
    "/properties/MA CAMPAGNE RESORT LTD.webp",
    "/properties/MA CAMPAGNE RESORT LTD2.webp",
    "/properties/MA CAMPAGNE RESORT LTD 3.webp"
  ],
  location: "Gishari, Rwamagana",
  valuationDate: "2021-04-10",
  value: "RWF",
  UPI: "5/01/03/04/3894",
  slug: "ma-campagne-resort-ltd"
},

 {
  id: 2,
  title: "National Bank of Rwanda",
  excerpt:
    "A prominent commercial building in the heart of Kigali's financial district, valued for its prime location and institutional use.",
  images: [
    "/properties/National Bank of Rwanda.jpg",
    "/properties/National Bank of Rwanda3.jpg",
    "/properties/National Bank of Rwanda2.jpg"
  ],
  location: "Nyarugenge, Kigali",
  valuationDate: "2019-03-18",
  value: "RWF",
  UPI: "1/01/09/03/1245 ",
  slug: "national-bank-of-rwanda",
},

 {
  id: 3,
  title: "KIGALI GOLF CLUB ",
 excerpt:
  "A premier golf destination nestled in the hills of Gasabo, Kigali, professionally valued for recreational and investment purposes.",

  images: [
    "/properties/KIGALI GOLF CLUB.jpg",
    "/properties/KIGALI GOLF CLUB2.jpeg",
    "/properties/KIGALI GOLF CLUB3.jpg"
  ],
  location: "Gasabo, Kigali",
  valuationDate: "2019-03-18",
  value: "RWF",
  UPI: "1/02/13/02/765  ",
  slug: "kigali-golf-club",
},

{
  id: 4,
  title: " BULERA PROPERTIES LTD  ",
 excerpt:
  "Strategically located in Gikondo, Kicukiro, this property is ideal for commercial development and long-term real estate investment.",


  images: [
    "/properties/BULERA-PROPERTIES-LTD.jpg",
    "/properties/BULERA-PROPERTIES-LTD1.jpg",
    "/properties/BULERA PROPERTIES LTD3.jpg"
  ],
  location: "Gikondo, Kicukiro",
  valuationDate: "2018-03-18",
  value: "RWF",
  UPI: "",
  slug: "Bulera-properties ltd",
},

{
  id: 5,
  title: " PINK MANGO ASANTII RWANDA LTD  ",
 excerpt: "Located in the Special Economic Zone on Street RDA/2, Gasabo District, this property is professionally valued for industrial operations, export-oriented manufacturing, and strategic commercial investment.",

  images: [
    "/properties/PINK-MANGO-ASANTII-RWANDA-LTD3.jpg",
    "/properties/PINK-MANGO-ASANTII-RWANDA-LTD2.jpg",
    "/properties/PINK-MANGO-ASANTII-RWANDA-LTD4.jpg",
    "/properties/PINK-MANGO-ASANTII-RWANDA-LTD.jpg"
  ],
  location: "Gasabo, Kigali",
  valuationDate: "2021-03-18",
  value: "RWF",
  UPI: "",
  slug: "pink-mango-asantii-rwanda-ltd",
},

{
  id: 6,
  title: "SORAS TOWER ",
 excerpt:
  "Located in Nyarugenge, Kigali’s financial hub, SORAS Tower is a landmark commercial property professionally valued for institutional and high-profile business use.",

  images: [
    "/properties/SORAS-TOWER5.jpg",
    "/properties/SORAS-TOWER6.jpg",
    "/properties/SORAS-TOWER7.jpg"
  ],
  location: "Nyarugenge, Kigali",
  valuationDate: "2019-03-18",
  value: "RWF",
  UPI: "4/08/07/03/545",
  slug: "soras-tower",
},

];

const ValuatedProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (property) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProperty) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProperty.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProperty) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProperty.images.length - 1 : prev - 1
    );
  };

  const [showBackButton, setShowBackButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🔹 Hero Section */}
      <section
  className="relative h-[80vh] sm:h-[70vh] flex items-center justify-center bg-no-repeat bg-center bg-[length:100%_100%]"
  style={{ backgroundImage: "url('/properties/property-valuation.jpg')" }}
>
  <div className="absolute inset-0 bg-black/30" />

  <motion.div
    className="relative z-10 text-center px-4"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
      Recently Valuated Properties
    </h1>
    <p className="text-white mt-4 max-w-xl mx-auto">
      Explore a curated list of assets recently valued across Rwanda.
    </p>
  </motion.div>
        {showBackButton && (
  <div className="hidden sm:block fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
    <HashLink
      smooth
      to="/#blogPreview"
      className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-800 transition"
    >
      ← Back to Blog
    </HashLink>
  </div>
)}
      </section>

      {/* 🏡 Property Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* 🖼 Image with Eye Icon */}
              <div className="relative overflow-hidden group">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="h-56 w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 text-xs rounded-full font-semibold shadow-md">
                  Valuated
                </span>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <button
                    onClick={() => openModal(property)}
                    className="bg-white/80 hover:bg-white text-blue-800 p-3 rounded-full shadow-lg"
                  >
                    <Eye size={24} />
                  </button>
                </div>
              </div> 

              {/* 📄 Property Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">{property.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{property.excerpt}</p>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600" />
                    {property.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600" />
                    Valuated on: {property.valuationDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeDollarSign size={16} className="text-blue-600" />
                    <span className="font-bold text-blue-800">{property.value}</span>
                  </div>
                  {property.UPI && (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-blue-600">UPI:</span>
                      <span className="text-gray-700">{property.UPI}</span>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🔍 Modal with Image Navigation */}
{selectedProperty && (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 transition-all duration-300">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative bg-white rounded-2xl shadow-2xl p-5 max-w-2xl w-full overflow-hidden"

    >
   <button
  onClick={closeModal}
  className="absolute top-4 right-4 z-50 bg-white text-yellow-800 hover:bg-red-600 hover:text-white p-2 rounded-full shadow-lg transition-all duration-200"
>
  <X size={22} />
</button>



      {/* Navigation Buttons */}
      {selectedProperty.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-white transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-white transition"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image */}
      <motion.img
        key={selectedProperty.images[currentImageIndex]}
        src={selectedProperty.images[currentImageIndex]}
        alt={`${selectedProperty.title} image ${currentImageIndex + 1}`}
        initial={{ opacity: 0.7, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full h-[300px] object-cover rounded-xl mb-5 shadow-lg"

      />

      {/* Property Info */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2 tracking-wide">
          {selectedProperty.title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          {selectedProperty.excerpt}
        </p>
      </div>
    </motion.div>
  </div>
)}

    </div>
  );
};

export default ValuatedProperties;
