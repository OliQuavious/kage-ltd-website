// src/components/Partners.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Partner logo list
const partners = [
  { logo: "/logos/Kage ltd logos.png", url: "https://companya.com" },
  { logo: "/logos/Kage logo.jpg", url: "https://companyb.com" },
  { logo: "/logos/Wilo logo.png", url: "https://wilo.com" },
  { logo: "/logos/Kage logo.jpg", url: "https://companyb.com" },
  { logo: "/logos/Wilo logo.png", url: "https://wilo.com" },
  { logo: "/logos/Kage ltd logos.png", url: "https://companya.com" },
];

function Partners() {
  return (
    <section
      className="py-16 px-4 sm:px-6 flex flex-col items-center justify-center bg-fixed bg-center bg-cover"
      style={{
       backgroundImage: "url('/partner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-blue-900 mb-12">
        Our Trusted Partners
        <span className="block h-1 w-24 bg-yellow-400 rounded-full mt-3 mx-auto" />
      </h2>

      <div className="overflow-hidden w-full">
        <Swiper
  modules={[Autoplay, FreeMode]}
  slidesPerView="auto"
  spaceBetween={20}
  freeMode={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  speed={3000}
  loop={true}
  grabCursor={true} 
>

          {partners.map(({ logo, url }, i) => (
            <SwiperSlide
              key={i}
              className="!flex items-center justify-center"
              style={{ width: "170px", marginRight: "10px" }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo}
                  alt={`Partner ${i}`}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partners;
