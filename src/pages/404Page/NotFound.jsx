import React from "react";
import errorImage from "./error-404.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-base-200">
      <img
        src={errorImage}
        alt="404 Error"
        className="w-64 md:w-80 lg:w-96 mb-6 select-none"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-error">
        Page Not Found
      </h1>

      <p className="text-base md:text-lg text-gray-600 max-w-md mb-6">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>

      <a
        href="/"
        className="btn  text-white
              font-[Poppins] bg-gradient-to-r from-blue-600 to-cyan-400 mt-2 px-6"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
