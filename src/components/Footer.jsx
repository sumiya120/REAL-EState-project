import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaMailBulk } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Footer = () => {
  // useEffect hook to initialize AOS
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-[rgb(11,11,11)] py-10"> {/* Navy Blue background */}
      <section className="flex flex-col lg:flex-row justify-between items-center lg:px-36 px-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-white">About Us</h1>
          <p className="text-md text-white">
            We are a company dedicated to providing the best services in the industry. <br></br>
            With a team of highly skilled professionals, we focus on delivering exceptional <br></br>customer experiences. 
            Join us in making the world a better place!
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-12"> {/* Increased gap between sections */}
          <h1 className="text-3xl font-semibold text-white">Contact Information</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaMobile className="text-white text-2xl" /> {/* Increased icon size */}
              <span className="text-white">+123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMailBulk className="text-white text-2xl" /> {/* Increased icon size */}
              <span className="text-white">info@company.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBuilding className="text-white text-2xl" /> {/* Increased icon size */}
              <span className="text-white">123 Company St, City, Country</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-15"> {/* Increased gap between sections */}
          <h1 className="text-3xl font-semibold text-white">Follow Us</h1>
          <div className="flex gap-8"> {/* Increased gap between icons */}
            <FaFacebook className="text-white text-3xl cursor-pointer" /> {/* Increased icon size */}
            <FaInstagram className="text-white text-3xl cursor-pointer" /> {/* Increased icon size */}
            <FaTwitter className="text-white text-3xl cursor-pointer" /> {/* Increased icon size */}
            <FaYoutube className="text-white text-3xl cursor-pointer" /> {/* Increased icon size */}
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-white">
        <p>&copy; 2025 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
