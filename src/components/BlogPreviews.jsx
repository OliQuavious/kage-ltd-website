import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Recently Valuated Properties",
    excerpt:
      "Explore a selection of properties we've professionally valued across Rwanda for investment, sales, or legal purposes.",
    image: "/properties/property-valuation.jpg",
    slug: "valuated-properties",
    isValuationLink: true,
  },
  {
    id: 2,
    title: "Top 5 Benefits of Land Surveying",
    excerpt:
      "Explore why land surveying is critical before any construction or legal documentation.",
    image: "/blog/land-surveying.jpg",
    slug: "benefits-of-land-surveying",
  },
  {
    id: 3,
    title: "Modern Architectural Trends in 2025",
    excerpt:
      "Discover the latest design trends influencing Rwandan architecture this year.",
    image: "/blog/architecture-trends.jpg",
    slug: "modern-architecture-2025",
  },
];

function BlogPreviews() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section
      id="blogPreview"
      className="py-24 px-6 bg-gradient-to-b from-blue-50 via-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          From Our Blog
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map((post, index) => (
            <motion.div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link
                to={post.isValuationLink ? "/properties" : `/blog/${post.slug}`}
                className="block relative overflow-hidden h-52"
                onClick={handleClick}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </Link>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2 group-hover:underline underline-offset-4 transition-all duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  to={post.isValuationLink ? "/properties" : `/blog/${post.slug}`}
                  className="inline-block bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-800 transition-all"
                  onClick={handleClick}
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPreviews;
