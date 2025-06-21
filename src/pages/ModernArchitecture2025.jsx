import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Leaf, Building2, Sparkles, Users } from "lucide-react";

export default function ModernArchitecture2025() {
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
    <div className="max-w-6xl mx-auto mt-10 px-4 py-16 text-gray-800">
      <Helmet>
        <title>Modern Architectural Trends in 2025</title>
        <meta
          name="description"
          content="Explore the cutting-edge design movements shaping Rwandan architecture in 2025 — from sustainability to smart buildings."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          Modern Architectural Trends in 2025
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore how Rwandan architects are blending technology, culture, and sustainability to
          redefine our urban landscapes.
        </p>
      </motion.div>

      {/* Main Image */}
      <motion.img
        src="/blog/Architectural-Design1.jpg"
        alt="Modern Architecture 2025"
        className="w-full h-[400px] object-cover rounded-xl shadow-xl mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      {/* Trend Highlights */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <TrendCard
          icon={<Leaf className="w-8 h-8 text-green-600" />}
          title="Organic & Eco-Friendly Design"
          image="/blog/eco-design.jpg"
          content="In 2025, nature-inspired design dominates — with green rooftops, natural lighting, and passive cooling systems integrated into urban development."
        />
        <TrendCard
          icon={<Sparkles className="w-8 h-8 text-yellow-500" />}
          title="Smart Materials & Adaptive Façades"
          image="/blog/smart-materials.jpg"
          content="Architects are embracing smart glass, modular cladding, and responsive structures that adjust with the weather, reducing energy waste."
        />
        <TrendCard
          icon={<Building2 className="w-8 h-8 text-blue-600" />}
          title="Tech-Driven Architecture"
          image="/blog/tech-architecture.jpg"
          content="AI, parametric modeling, and 3D printing allow for complex yet efficient forms that were previously unimaginable."
        />
        <TrendCard
          icon={<Users className="w-8 h-8 text-purple-600" />}
          title="Community-Centered Urban Design"
          image="/blog/community-design.jpg"
          content="There's a strong shift toward inclusive spaces — parks, mixed-use zones, and pedestrian-first layouts to foster community well-being."
        />
      </div>

      {/* Back Button */}
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

      {/* Architect Profession Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">The Evolving Role of Architects in Rwanda</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Rwandan architects today are far more than just designers. They act as visionaries, project
          managers, and cultural curators. With Rwanda's rapid urbanization and smart city plans,
          architects are key in shaping a resilient and sustainable national identity.
        </p>
        <ul className="list-disc list-inside text-gray-600 pl-4 space-y-2">
          <li>Collaboration with government on national infrastructure</li>
          <li>Promotion of energy-efficient and locally-sourced materials</li>
          <li>Blending traditional Rwandan aesthetics with futuristic designs</li>
        </ul>
      </section>

      {/* Additional Visuals */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">More Visual Inspirations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="/blog/architecture1.jpg"
            alt="Architecture Design 1"
            className="rounded-lg shadow-md object-cover h-56 w-full"
          />
          <img
            src="/blog/architecture2.jpg"
            alt="Architecture Design 2"
            className="rounded-lg shadow-md object-cover h-56 w-full"
          />
          <img
            src="/blog/architecture3.jpeg"
            alt="Architecture Design 3"
            className="rounded-lg shadow-md object-cover h-56 w-full"
          />
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-blue-50 rounded-xl py-10 px-6 text-center shadow-inner">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Ready to Build the Future?
        </h3>
        <p className="text-gray-700 mb-6">
          Get in touch with our experienced architectural professionals and start transforming your
          ideas into reality.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Contact an Architect →
        </a>
      </div>
    </div>
  );
}

function TrendCard({ icon, title, image, content }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <h3 className="text-xl font-bold text-blue-700">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </motion.div>
  );
}
