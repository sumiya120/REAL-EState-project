import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import area1 from '../assets/images/area1.jpg';
import area2 from '../assets/images/area2.jpg';
import area3 from '../assets/images/area3.jpg';

const cardData = [
  {
    img: area1,
    title: 'Area 1',
    description: 'Explore the vibrant community and local amenities in Area 1.',
    rating: '⭐⭐⭐⭐☆ (4.5/5)',
  },
  {
    img: area2,
    title: 'Area 2',
    description: 'A peaceful and family-friendly area with top-notch facilities.',
    rating: '⭐⭐⭐⭐☆ (4.7/5)',
  },
  {
    img: area3,
    title: 'Area 3',
    description: 'A dynamic and urban area perfect for work and leisure.',
    rating: '⭐⭐⭐⭐☆ (4.6/5)',
  },
  {
    img: area3,
    title: 'Area 3',
    description: 'A dynamic and urban area perfect for work and leisure.',
    rating: '⭐⭐⭐⭐☆ (4.6/5)',
  },
  // Add more cards as needed
];

const PopularAreas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Number of cards to show at once

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cardData.length / cardsToShow));
    }, 3000); // Change slides every 3 seconds

    return () => {
      clearInterval(interval);
      AOS.refresh();
    };
  }, []);

  return (
    <div className="w-full py-12 bg-white">
      <h1 className="text-4xl font-semibold text-center mb-10 text-gray-800">Popular Areas</h1>
      
      <div className="relative w-full flex justify-center items-center">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 px-2" // Adjust width for 3 cards
              >
                <div className="flex flex-col text-center items-center rounded-lg overflow-hidden bg-blue-100 p-3">
                  <div className="w-full">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-[250px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{card.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                    <div className="mt-4 text-gray-700">
                      <p>{card.rating}</p>
                      <p className="text-pink-600 font-semibold">Explore Now</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularAreas;
