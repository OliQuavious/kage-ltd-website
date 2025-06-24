import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Approach from "../components/Approach";
import Contact from "../components/Contact";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Partners from "../components/Partners";
import BlogPreviews from "../components/BlogPreviews";
import { Helmet } from "react-helmet";
import WhyChooseUs from "../components/WhyChooseUs";


function Home() {
  return (
    <div>
      <Helmet>
        <title>
          KAGE Ltd – Property Valuation, Engineering Designs & Surveying Services in Rwanda
        </title>
        <meta
          name="description"
          content="KAGE Ltd offers expert services in property valuation, architectural and engineering designs, construction supervision, land surveying, and geotechnical soil investigation across Rwanda."
        />
        <meta name="author" content="KAGE Ltd" />
        <link rel="canonical" href="https://kage.rw/" />

        {/* Open Graph */}
        <meta property="og:title" content="KAGE Ltd – Property Valuation, Engineering Designs & Surveying Services in Rwanda" />
        <meta property="og:description" content="Professional property and infrastructure consultancy offering valuation, land surveying, engineering design, and soil investigation across Rwanda." />
        <meta property="og:url" content="https://kage.rw/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kage.rw/images/home-og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KAGE Ltd – Property Valuation, Engineering Designs & Surveying Services in Rwanda" />
        <meta name="twitter:description" content="Professional services in property valuation, architecture, engineering, construction supervision, and land survey across Rwanda." />
        <meta name="twitter:image" content="https://kage.rw/images/home-og-image.jpg" />
      </Helmet>

      <Hero />
      <WhyChooseUs /> 
      <Services />
      <Approach />
      <BlogPreviews />
      <Partners />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default Home;
