import React, { useState } from "react";
import about from '../assets/images/about.jpg';

const PropertyDetails = () => {
  // State to manage all messages
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current message to the list of messages
    setMessages([...messages, message]);
    // Clear the message input after submission
    setMessage("");
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen p-8 mt-9">
      {/* Left Side - Image & Contact Info */}
      <div className="w-full md:w-1/2 p-6">
        <img src={about} alt="Jennifer Ferland" className="w-full rounded-lg" />
        <h2 className="text-2xl font-serif mt-4">Jennifer Ferland</h2>
        <p className="text-lg italic">Realtor®</p>
        <p className="mt-2">📞 530.990.5366</p>
        <p className="text-blue-500 underline cursor-pointer">jferland@compass.com</p>
        <p className="mt-2">DRE 01995816</p>
        <p className="mt-4">3512 16th Street<br />San Francisco, CA 94114</p>
        <p className="mt-2">300 Drakes Landing Rd Suite 120<br />Greenbrae, CA 94904</p>
        <div className="flex space-x-4 mt-4 text-xl">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Display all submitted messages */}
          {messages.length > 0 && (
            <div className="space-y-4 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-200">
                  <strong>Your Message:</strong>
                  <p>{msg}</p>
                </div>
              ))}
            </div>
          )}

          <div className="relative w-full">
            <textarea
              placeholder="How can I help?"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-4 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            
            {/* Optional Chat Icon */}
            <div className="absolute right-3 top-2 text-gray-400">
              <i className="fas fa-comment-alt"></i> 
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
