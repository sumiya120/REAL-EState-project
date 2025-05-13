import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Property', path: '/properties' },
  ];

  return (
    <nav className="w-full bg-white text-black shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <FaHome className="text-blue-500 mr-2" size={32} />
          <Link to="/">Real Estate</Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="hover:text-blue-500 transition duration-300">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full flex flex-col">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="py-2 px-6 hover:bg-gray-200 transition duration-300">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
