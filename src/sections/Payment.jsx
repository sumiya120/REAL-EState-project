import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Secure Payment</h2>

        {/* Payment Form */}
        <form className="space-y-4">
          {/* Cardholder Name */}
          <div>
            <label className="block font-medium">Cardholder Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block font-medium">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Expiration & CVV */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block font-medium">Expiration Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Billing Address */}
          <div>
            <label className="block font-medium">Billing Address</label>
            <input
              type="text"
              placeholder="123 Main St, City, Country"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Pay Now Button using Link */}
          <Link
            to="/success"
            className="block text-center w-full bg-black text-white p-3 rounded hover:bg-gray-800 transition"
          >
            Pay Now
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Payment;
