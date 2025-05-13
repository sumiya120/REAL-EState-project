import React, { useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Find Your Dream Home",
      description: "Discover amazing properties that fit your lifestyle and budget.",
      image: s1,
    },
    {
      id: 2,
      title: "Luxury Apartments in the City",
      description: "Live in style with state-of-the-art amenities in prime locations.",
      image: s2,
    },
    {
      id: 3,
      title: "Commercial Spaces for Growth",
      description: "Boost your business with the perfect commercial properties.",
      image: s3,
    },
  ];

  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[100vh] bg-white overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex flex-shrink-0 justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="text-center bg-opacity-50 bg-black text-white p-10 rounded-xl">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition"
        onClick={nextSlide}
      >
        ❯
      </button>

       
    </div>
  );
};

export default Slider;
