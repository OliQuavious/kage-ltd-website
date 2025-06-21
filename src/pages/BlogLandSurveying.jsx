import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Ruler, Home, Layers, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";

const benefits = [
  {
    icon: <ShieldCheck size={32} className="text-blue-700 mt-1" />,
    title: "1. Legal Protection",
    text: `Land surveys provide legal clarity by defining boundaries and preventing disputes.
           They’re recognized in court and are critical in buying or selling land.`,
  },
  {
    icon: <Ruler size={32} className="text-blue-700 mt-1" />,
    title: "2. Construction Accuracy",
    text: `Surveying ensures that buildings, fences, and utilities are placed accurately.
           Avoid costly errors by starting with precise measurements.`,
  },
  {
    icon: <Home size={32} className="text-blue-700 mt-1" />,
    title: "3. Property Value Assessment",
    text: `A recent survey can increase property value and boost buyer confidence by showing clear legal boundaries and usable space.`,
  },
  {
    icon: <Layers size={32} className="text-blue-700 mt-1" />,
    title: "4. Land Subdivision",
    text: `Want to sell part of your land or develop? Surveys enable legal subdivision and planning, especially for residential projects.`,
  },
  {
    icon: <Smile size={32} className="text-blue-700 mt-1" />,
    title: "5. Peace of Mind",
    text: `Avoid legal stress and neighbor disputes. Knowing the exact size and shape of your land brings certainty for future plans.`,
  },
];

function BlogLandSurveying() {
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
    <div className="max-w-5xl mx-auto mt-8 px-4 py-16 text-gray-800">
      <Helmet>
        <title>Top 5 Benefits of Land Surveying – KAGE Ltd</title>
        <meta
          name="description"
          content="Discover the top 5 benefits of land surveying including legal protection, construction accuracy, property value assessment, land subdivision, and peace of mind. Learn how KAGE Ltd helps property owners and developers across Rwanda."
        />
        <meta name="author" content="KAGE Ltd" />
        <link rel="canonical" href="https://kageltd.rw/blog/benefits-of-land-surveying" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Top 5 Benefits of Land Surveying – KAGE Ltd" />
        <meta
          property="og:description"
          content="Land surveying ensures legal clarity, construction precision, and adds value to property. Explore its importance with KAGE Ltd experts."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://kageltd.rw/blog/benefits-of-land-surveying" />
        <meta property="og:image" content="https://kageltd.rw/blog/land-surveying.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 5 Benefits of Land Surveying – KAGE Ltd" />
        <meta
          name="twitter:description"
          content="Discover how land surveying can protect your investment, improve accuracy, and support development goals. Provided by KAGE Ltd."
        />
        <meta name="twitter:image" content="https://kageltd.rw/blog/land-surveying.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative rounded-xl overflow-hidden mb-12"
        style={{
          backgroundImage: `url('/blog/land-surveying.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "320px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center py-20 px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            Top 5 Benefits of Land Surveying
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Land surveying is the foundation for successful real estate development,
            legal clarity, and construction accuracy. Let's explore why every property owner,
            builder, and developer should understand its importance.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-12">
        {benefits.map(({ icon, title, text }, idx) => (
          <motion.div
            key={title}
            className={`flex gap-4 items-start ${idx === 4 ? "md:col-span-2" : ""} bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {icon}
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">{title}</h2>
              <p>{text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra Image */}
      <motion.div
        className="flex justify-center my-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src="/blog/surveying-map1.jpg"
          alt="Surveyor with map"
          className="w-full max-w-md max-h-80 rounded-lg shadow-md object-cover transition-transform hover:scale-105"
        />
      </motion.div>

      {/* Quote Box */}
      <motion.blockquote
        className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg shadow text-blue-900 text-lg italic mb-16"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
      >
        “A well-surveyed property is a protected investment — don’t build or buy without it.”
      </motion.blockquote>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Need Land Surveying Services?
        </h3>
        <p className="text-gray-600 mb-6">
          We provide accurate, professional land surveys anywhere in Rwanda. Get in touch with our certified experts.
        </p>
        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-block px-8 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition-transform transform hover:scale-105"
        >
          Contact Our Team →
        </Link>
      </motion.div>

      {/* Back to Blog Button */}
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
    </div>
  );
}

export default BlogLandSurveying;
