import React from "react";
import { Navigate, useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        {/* Title */}
        <h1 className="text-5xl font-bold text-red-500 mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-4">Page Not Found</h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
