import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const partners = [
  { logo: "/logos/Kage ltd logos.png", url: "https://companya.com" },
  { logo: "/logos/Kage logo.jpg", url: "https://companyb.com" },
  { logo: "/logos/Wilo logo.png", url: "https://wilo.com" },
  { logo: "/logos/Kage logo.jpg", url: "https://companyb.com" },
  { logo: "/logos/Wilo logo.png", url: "https://wilo.com" },
  { logo: "/logos/Kage ltd logos.png", url: "https://companya.com" },
];

function Partners() {
  // Double the logos so the scroll loop looks seamless
  const logos = [...partners, ...partners];

  return (
    <motion.section
      id="partners"
      className="py-16 px-4 sm:px-6 flex flex-col items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `
          url('/partner.jpg'),
          linear-gradient(to bottom, #ffffff, #f1f5f9, #ffffff)
        `,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "center, center",
        backgroundSize: "1000px, cover",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl sm:text-5xl font-extrabold text-center text-blue-900 mb-12"
        variants={titleVariants}
      >
        Our Trusted Partners
        <motion.span
          className="block h-1 w-20 sm:w-24 bg-yellow-400 rounded-full mt-3 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        />
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        <div className="w-max flex gap-6 sm:gap-12 animate-scroll">
          {logos.map(({ logo, url }, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl shadow-md grayscale hover:grayscale-0 hover:shadow-yellow-300/40 transition duration-300 flex items-center justify-center min-w-[140px] sm:min-w-[180px]"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}
      </style>
    </motion.section>
  );
}

export default Partners;
