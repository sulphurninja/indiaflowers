// ImageSlider.js
import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlider = () => {
  const images = [
    { url: "/pic1.png", header: "Luminaria Radiosa" },
    { url: "/pic1.png", header: "India Flowers" },
    { url: "/pic1.png", header: "Logo" },
    { url: "/pic1.png", header: "Logo" },
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-32">
     <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{ clickable: true }}
     
       
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="text-4xl text-white mb-4">
              {index === currentIndex ? image.header : ""}
            </div>
            <img
              src={image.url}
              alt={image.header}
              className="w- h-96  object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
