import React, { useState, useEffect } from 'react';
import { client } from '../components/export';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Number of client cards to show at once

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(client.length / cardsToShow));
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-transparent">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-start gap-4 pl-16 mb-8">
        <h1 data-aos="zoom-in" className="text-red-500">
          OUR CLIENTS
        </h1>
        <h1
          data-aos="zoom-in"
          className="text-black text-[40px] font-semibold leading-15"
        >
          What our Clients<br />saying about us
        </h1>
      </div>

      {/* Clients Slider */}
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {client.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white hover:bg-red-100 cursor-pointer p-3 flex flex-col justify-center items-center gap-6 rounded-xl w-1/3 mx-4" // Added mx-4 for spacing
            >
              {/* Client Image */}
              <div className="flex justify-center items-center w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[70px] transform hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Client Name */}
              <h1 className="text-lg text-black font-semibold">
                {item.name}
              </h1>

              {/* Client Text */}
              <h1 className="text-sm text-slate-600">
                {item.text}
              </h1>

              {/* Client Feedback */}
              <p className="text-sm text-justify text-slate-600">
                {item.feedback}
              </p>

              {/* Client Rating */}
              <div className="flex justify-center items-center gap-2 w-full">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
