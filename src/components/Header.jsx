import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const headerBgClass = isHome && !scrolled
    ? "bg-transparent"
    : "bg-blue-900/90 shadow-md";

  return (
    <motion.header
      className={`fixed top-0 w-full z-50  transition-all duration-300 text-white ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Newkagelogo.jpg"
              alt="KAGE Ltd Logo"
              className="h-16 w-16 sm:h-16 sm:w-16 rounded-full bg-white p-1 shadow-xl transition-transform duration-300 hover:scale-110"
            />
            <span className="text-xl sm:text-lg font-semibold text-white">KAGE Ltd</span>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block absolute h-0.5 w-6 bg-white rounded transform transition duration-500 ease-in-out
            ${isMobileMenuOpen ? "rotate-45 top-3" : " -translate-y-2.5"}`} />
          <span className={`block absolute h-0.5 w-6 bg-white rounded transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block absolute h-0.5 w-6 bg-white rounded transform transition duration-500 ease-in-out
            ${isMobileMenuOpen ? "-rotate-45 top-3" : " translate-y-2.5"}`} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center flex-wrap gap-4 mt-2 sm:mt-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm sm:text-base font-medium transition duration-200 hover:text-yellow-300 ${
                location.pathname === item.path ? "text-yellow-300" : ""
              }`}
            >
              <span className="hover-underline-animation">{item.name}</span>
            </Link>
          ))}
          {/* Dummy space to reserve area where <select> was */}
          <div className="w-[130px] h-[36px]" />
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              key="mobileMenu"
              initial={{ opacity: 0, y: "-20%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-20%" }}
              className="fixed top-[64px] right-4 left-4 bg-blue-900/95 backdrop-blur rounded-lg shadow-lg p-6 z-50"
            >
              <ul className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg font-semibold transition transform hover:text-yellow-300 hover:scale-105 ${
                        location.pathname === item.path ? "text-yellow-300" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                {/* Dummy spacer in mobile */}
                <li>
                  <div className="h-[10px]" />
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
