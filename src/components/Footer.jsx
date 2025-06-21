import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  // Scroll smoothly to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 tracking-wide">KAGE Ltd</h3>
         <p className="leading-relaxed text-gray-300 max-w-sm mx-auto md:mx-0">
  We provide expert services in property valuation, architectural and engineering designs, construction supervision, land surveying, and geotechnical soil investigation—serving clients across Rwanda and beyond.
</p>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map(({ name, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-block text-gray-300 hover:text-yellow-400 transition transform hover:scale-110"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4 tracking-wide">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-5 mb-6">
            {[{
              icon: FaFacebookF,
              href: "#",
              label: "Facebook",
            }, {
              icon: FaTwitter,
              href: "#",
              label: "Twitter",
            }, {
              icon: FaLinkedinIn,
              href: "#",
              label: "LinkedIn",
            }, {
              icon: FaEnvelope,
              href: "mailto:info@kageltd.com",
              label: "Email",
            }].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 rounded-full p-3 text-lg shadow-lg transition transform hover:scale-125"
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="text-gray-300 mb-1 font-medium">Email: <a href="mailto:info@kageltd.com" className="hover:text-yellow-400 transition">info@kageltd.com</a></p>
          <p className="text-gray-300 font-medium">Phone: <a href="tel:+250788304297" className="hover:text-yellow-400 transition">+250 788 304 297</a></p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-blue-700 my-8 mx-auto max-w-7xl" />

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-gray-400 text-sm px-4">
        <div>
          &copy; {year} KAGE Ltd. All rights reserved.
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold transition transform hover:scale-110"
          aria-label="Back to top"
        >
          <FaArrowUp /> Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
