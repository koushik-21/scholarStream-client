// import React from "react";
// import errorImage from "./error-404.png";

// const NotFound = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-base-200">
//       <img
//         src={errorImage}
//         alt="404 Error"
//         className="w-64 md:w-80 lg:w-96 mb-6 select-none"
//       />

//       <h1 className="text-3xl md:text-4xl font-bold mb-3 text-error">
//         Page Not Found
//       </h1>

//       <p className="text-base md:text-lg text-gray-600 max-w-md mb-6">
//         The page you are looking for might have been removed or is temporarily
//         unavailable.
//       </p>

//       <a
//         href="/"
//         className="btn  text-white
//               font-[Poppins] bg-gradient-to-r from-blue-600 to-cyan-400 mt-2 px-6"
//       >
//         Go Back Home
//       </a>
//     </div>
//   );
// };

// export default NotFound;
import React from "react";
import { Link } from "react-router"; // Better for SPA performance
import errorImage from "./error-404.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-base-100 transition-colors duration-300">
      {/* Responsive Image sizing */}
      <div className="relative">
        <img
          src={errorImage}
          alt="404 Error"
          className="w-64 md:w-80 lg:w-96 mb-8 select-none drop-shadow-xl animate-pulse-slow"
        />
      </div>

      {/* Heading with theme-friendly text color */}
      <h1 className="text-3xl md:text-5xl font-black mb-4 text-error">
        Oops! Page Not Found
      </h1>

      {/* Paragraph with opacity instead of hardcoded gray for dark mode support */}
      <p className="text-base md:text-lg opacity-70 max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Action Button */}
      <Link
        to="/"
        className="btn btn-lg border-none text-white font-bold tracking-wide
                  bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 
                  hover:to-cyan-500 shadow-lg hover:shadow-cyan-500/50 
                  transition-all duration-300 transform hover:-translate-y-1"
      >
        <i className="fa-solid fa-house-chimney mr-2"></i>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
