import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { property } from "../components/export";
import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(property);
  const [iconColors, setIconColors] = useState({});
  const [bedColors, setBedColors] = useState({});
  const [bathColors, setBathColors] = useState({});

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  // Debounce function
  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debounceSearch(query);
  };

  // Debounced search handler
  const debounceSearch = debounce((query) => {
    const filtered = property.filter(
      (item) =>
        item.name?.toLowerCase().includes(query.toLowerCase()) ||
        item.location?.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  }, 500);

  // Toggle icon colors for Add to Favorites, Like, and View Pricing

  // Toggle Bed color
  const toggleBedColor = (id) => {
    setBedColors((prev) => ({
      ...prev,
      [id]: prev[id] === "red" ? "black" : "red",
    }));
  };

  // Toggle Bath color
  const toggleBathColor = (id) => {
    setBathColors((prev) => ({
      ...prev,
      [id]: prev[id] === "red" ? "black" : "red",
    }));
  };

  return (
    <div className="light bg-transparent">
      <section className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10">
        {/* Section Heading */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500">
            PROPERTIES
          </h1>
          <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold">
            Explore the latest
          </h1>
        </div>

        {/* Search Bar */}
        <div className="w-full flex justify-center items-center mt-6 mb-8">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange} // Trigger the debounced search
              placeholder="Search by name, location or description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Property Grid */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay={`${200 + index * 100}`}
                key={item.id || index}
                className="bg-white rounded-xl overflow-hidden w-full shadow-lg relative"
              >
                {/* Image Box */}
                <div
                  className="bg-cover bg-center h-[250px] relative"
                  style={{ backgroundImage: `url(${item.images})` }}
                >
                  {/* Overlay Icons */}
                  <div className="absolute top-4 left-4 flex gap-2 items-center">
                    <FaMapMarkerAlt className="text-white text-xl" />
                    <span className="text-white bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
                      {item.location}
                    </span>
                    <FaCamera className="text-white text-xl" />
                    <FaVideo className="text-white text-xl" />
                  </div>

                  {/* Buttons: Featured, Sell, Active */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="bg-black text-white px-2 py-1 text-xs rounded">
                      Featured
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                      Sell
                    </button>
                  </div>
                </div>

                {/* Property Name and Short Description */}
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </div>

                {/* Property Info */}
                <div className="p-4 border-t">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <FaBed
                        className="cursor-pointer"
                        style={{ color: bedColors[item.id] || "black" }}
                        onClick={() => toggleBedColor(item.id)}
                      />
                      <span>{item.bedrooms || 3} Beds</span>
                      <FaBath
                        className="cursor-pointer"
                        style={{ color: bathColors[item.id] || "black" }}
                        onClick={() => toggleBathColor(item.id)}
                      />
                      <span>{item.bathrooms || 2} Baths</span>
                    </div>
                    <span className="text-red-500 font-bold">
                      {item.price || "340,000"}
                    </span>
                  </div>
                </div>

                {/* User Profile Icon and Name */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-xl cursor-pointer" />
                    <span className="text-gray-500 text-sm">
                      {["Alisha", "John", "David", "Sophia", "Emma"][index % 5]}
                    </span>
                  </div>
                </div>

                {/* View Button */}
                <div className="p-4 text-center">
                  <Link to={'/login'} className="bg-blue-500 text-white p-4 block rounded">
                    Book Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center text-gray-500">
              No properties found matching your search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;
