import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Approach from "../components/Approach";
import Contact from "../components/Contact";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Partners from "../components/Partners"; // ✅ Import Partners
import BlogPreviews from "../components/BlogPreviews";
import { Helmet } from "react-helmet"; // Added Helmet import

function Home() {
  return (
    <div>
      <Helmet>
  <title>
    KAGE Ltd – Property Valuation, Architectural & Engineering Designs, Construction Supervision, Land Surveying & Geotechnical Soil Investigation
  </title>
  <meta
    name="description"
    content="KAGE Ltd offers expert property valuation, architectural designs, engineering designs of buildings, roads, and other infrastructure, supervision of construction projects, land surveying, and geotechnical soil investigation services."
  />
  <meta name="author" content="KAGE Ltd" />
  <link rel="canonical" href="https://kageltd.rw/" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="KAGE Ltd – Property Valuation, Architectural & Engineering Designs, Construction Supervision, Land Surveying & Geotechnical Soil Investigation"
  />
  <meta
    property="og:description"
    content="KAGE Ltd offers expert property valuation, architectural designs, engineering designs of buildings, roads, and other infrastructure, supervision of construction projects, land surveying, and geotechnical soil investigation services."
  />
  <meta property="og:url" content="https://kageltd.rw/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://kageltd.rw/images/home-og-image.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="KAGE Ltd – Property Valuation, Architectural & Engineering Designs, Construction Supervision, Land Surveying & Geotechnical Soil Investigation"
  />
  <meta
    name="twitter:description"
    content="KAGE Ltd offers expert property valuation, architectural designs, engineering designs of buildings, roads, and other infrastructure, supervision of construction projects, land surveying, and geotechnical soil investigation services."
  />
  <meta
    name="twitter:image"
    content="https://kageltd.rw/images/home-og-image.jpg"
  />
</Helmet>


      <Hero />
      <Services />
      <Approach />
      <BlogPreviews />
      <Partners /> {/* ✅ Add Partners section here */}
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default Home;
