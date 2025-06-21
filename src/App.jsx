import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";  // import the new page
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import BlogLandSurveying from "./pages/BlogLandSurveying";
import ModernArchitecture2025 from "./pages/ModernArchitecture2025";

function App() {
  return (
    <Router>
      <div className="font-poppins bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />  {/* New route */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/blog/benefits-of-land-surveying" element={<BlogLandSurveying />} />
            <Route path="/blog/modern-architecture-2025" element={<ModernArchitecture2025 />} />

            


          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
