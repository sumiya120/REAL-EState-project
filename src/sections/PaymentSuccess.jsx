import React from "react";
import { Link } from "react-router-dom";


const PaymentSuccess = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto" />
        <h2 className="text-2xl font-semibold mt-4">Payment Successful!</h2>
        <p className="text-gray-600 mt-2">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <Link
            to="/"
            className="block w-full bg-black text-white p-3 rounded hover:bg-gray-800 transition"
          >
            Go to Home
          </Link>
          <Link
            to="/dashboard"
            className="block w-full bg-gray-200 text-black p-3 rounded hover:bg-gray-300 transition"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
