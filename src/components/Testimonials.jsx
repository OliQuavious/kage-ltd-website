import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";

const testimonials = [
  {
    name: "Ian K.",
    title: "Real Estate Owner",
    quote:
      "KAGE Ltd gave me peace of mind managing my property while I focused on other ventures.",
    avatar: "/ian.jpg",
  },
  {
    name: "Olivier M.",
    title: "Construction Consultant",
    quote: "Their valuation reports are accurate and professional. They saved us a lot of time.",
    avatar: "/olivier.jpg",
  },
  {
    name: "Ryan S.",
    title: "Local Authority Planner",
    quote: "The team was extremely responsive and helped us manage the expropriation process smoothly.",
    avatar: "/ryan.jpg",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((i) => (i + 1) % testimonials.length);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative py-24 px-4 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `
          url('/pattern.jpg'),
        `,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "center, center",
        backgroundSize: "auto, cover",
      }}
    >
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 30 },
            size: { value: 2 },
            move: { speed: 0.5 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
          },
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12">
          What Our Clients Say
        </h2>

        <div
          className="relative min-h-[260px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              aria-live="polite"
              aria-atomic="true"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.15}
                className="mx-auto max-w-3xl"
              >
                <div className="relative p-1 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-xl shadow-2xl">
                  <div className="bg-white rounded-xl p-8">
                    <FaQuoteLeft className="text-3xl text-blue-400 mb-4 mx-auto" />

                    <p className="text-lg italic text-blue-800 mb-4 leading-relaxed">
                      “{testimonials[currentIndex].quote}”
                    </p>

                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/60";
                        }}
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                      />
                      <div className="text-blue-900 font-semibold">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-blue-600">
                        {testimonials[currentIndex].title}
                      </div>
                    </div>

                    <FaQuoteRight className="text-2xl text-blue-300 mt-4 mx-auto" />
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                currentIndex === i ? "bg-blue-600 scale-110" : "bg-blue-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-pressed={currentIndex === i}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
