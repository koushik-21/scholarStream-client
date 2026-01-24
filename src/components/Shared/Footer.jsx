// import React from "react";
// import Logo from "../Logo/Logo";
// const Footer = () => {
//   return (
//     <footer
//       className="footer footer-horizontal footer-center bg-gray-500
//      text-primary-content bottom-0 pb-1"
//     >
//       <aside className=" ">
//         <Logo></Logo>
//         <p className="font-semibold">
//           ScholarStream Institution Ltd.
//           <br />
//           Providing funds & education since 2010
//         </p>
//         <p className="text-xs p-0 m-0 font-semibold">
//           Copyright © {new Date().getFullYear()} - All right reserved
//         </p>
//         <nav className=" m-0 p-0">
//           <div className="grid grid-flow-col gap-4">
//             <a
//               href="https://x.com/yourProfile"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Open X (Twitter) profile"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 role="img"
//               >
//                 <title>X logo</title>

//                 <path
//                   d="M4 5.5L12 12.5"
//                   stroke="currentColor"
//                   strokeWidth="2.2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M20 18.5L12 11.5"
//                   stroke="currentColor"
//                   strokeWidth="2.2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M20 5.5L12 12.5"
//                   stroke="currentColor"
//                   strokeWidth="2.2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M4 18.5L12 11.5"
//                   stroke="currentColor"
//                   strokeWidth="2.2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </a>
//             <a href="https://www.youtube.com/" target="_blank">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//               </svg>
//             </a>
//             <a href="https://facebook.com/" target="_blank">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg>
//             </a>
//           </div>
//         </nav>
//       </aside>
//     </footer>
//   );
// };

// export default Footer;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// import React from "react";
// import Logo from "../Logo/Logo";
// import { Link } from "react-router";

// const Footer = () => {
//   return (
//     <footer className="bg-base-300 text-base-content transition-colors duration-300 border-t border-base-100">
//       <div className="footer footer-center p-10 max-w-7xl mx-auto">
//         <aside>
//           <div className="mb-4 transform scale-125">
//             <Logo />
//           </div>
//           <p className="font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//             ScholarStream Institution Ltd.
//           </p>
//           <p className="opacity-70 max-w-xs">
//             Empowering students worldwide by providing transparent access to
//             educational funds and premium university insights since 2010.
//           </p>
//         </aside>

//         <nav>
//           <div className="grid grid-flow-col gap-6">
//             {/* X / Twitter */}
//             <a
//               href="https://x.com"
//               target="_blank"
//               className="hover:text-primary transition-colors"
//               aria-label="X"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
//               </svg>
//             </a>

//             {/* YouTube */}
//             <a
//               href="https://youtube.com"
//               target="_blank"
//               className="hover:text-error transition-colors"
//               aria-label="YouTube"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//               </svg>
//             </a>

//             {/* Facebook */}
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               className="hover:text-blue-600 transition-colors"
//               aria-label="Facebook"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg>
//             </a>
//           </div>
//         </nav>

//         <nav className="grid grid-flow-col gap-4 text-sm font-medium opacity-80 mt-4">
//           <Link to="/all-scholarships" className="link link-hover">
//             Scholarships
//           </Link>
//           <Link to="/about" className="link link-hover">
//             About Us
//           </Link>
//           <Link to="/contact" className="link link-hover">
//             Contact
//           </Link>
//           <Link to="/privacy" className="link link-hover">
//             Privacy Policy
//           </Link>
//         </nav>

//         <div className="w-full border-t border-base-100 mt-6 pt-6">
//           <p className="text-xs opacity-60">
//             Copyright © {new Date().getFullYear()} - All rights reserved by
//             ScholarStream Ltd.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content transition-colors duration-300 border-t border-base-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4 transform origin-left scale-110">
              <Logo />
            </div>
            <p className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              ScholarStream
            </p>
            <p className="mt-3 opacity-70 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of scholars by simplifying the path
              to global education and funding.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="footer-title opacity-100 text-primary mb-4">
              Navigation
            </h3>
            <div className="flex flex-col space-y-2 text-sm font-medium">
              <Link to="/allScholarships" className="link link-hover">
                Browse Scholarships
              </Link>
              {/* <Link to="/universities" className="link link-hover">
                Top Universities
              </Link>
              <Link to="/about" className="link link-hover">
                Our Mission
              </Link>
              <Link to="/blog" className="link link-hover">
                Success Stories
              </Link> */}
            </div>
          </div>

          {/* Column 3: Support */}
          {/* <div className="flex flex-col items-center md:items-start">
            <h3 className="footer-title opacity-100 text-primary mb-4">
              Support
            </h3>
            <div className="flex flex-col space-y-2 text-sm font-medium">
              <Link to="/contact" className="link link-hover">
                Contact Us
              </Link>
              <Link to="/faq" className="link link-hover">
                Help Center (FAQ)
              </Link>
              <Link to="/privacy" className="link link-hover">
                Privacy Policy
              </Link>
              <Link to="/terms" className="link link-hover">
                Terms of Service
              </Link>
            </div>
          </div> */}

          {/* Column 4: Newsletter/Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="footer-title opacity-100 text-primary mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-5 mb-6">
              <a
                href="https://x.com/"
                className="hover:text-blue-400 transition-all transform hover:-translate-y-1"
                target="_blank"
              >
                <i className="fa-brands fa-x-twitter text-xl"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                className="hover:text-error transition-all transform hover:-translate-y-1"
                target="_blank"
              >
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/"
                className="hover:text-blue-600 transition-all transform hover:-translate-y-1"
                target="_blank"
              >
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                className="hover:text-pink-500 transition-all transform hover:-translate-y-1"
                target="_blank"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
            <div className="w-full">
              <p className="text-xs opacity-60 mb-2 text-center md:text-left">
                Subscribe for updates
              </p>
              <div className="join w-full">
                <input
                  className="input input-sm input-bordered join-item w-full bg-base-100"
                  placeholder="Email"
                />
                <button className="btn btn-sm btn-primary join-item">Go</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-base-content/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs opacity-60">
            Copyright © {new Date().getFullYear()} - ScholarStream Institution
            Ltd.
          </p>
          <div className="flex gap-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">
            <span>Security</span>
            <span>Cookies</span>
            <span>Anti-Fraud</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
