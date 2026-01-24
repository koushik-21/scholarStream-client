// import React from "react";
// import { Link } from "react-router";
// import Logo from "../Logo/Logo";
// import useAuth from "../../hooks/useAuth";

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const links = (
//     <>
//       <li>
//         <Link to="/">
//           <i className="fa-solid fa-house-chimney-user"></i> Home
//         </Link>
//       </li>

//       <li>
//         <Link to="/allScholarships">
//           <i className="fa-solid fa-gift"></i> All Scholarships
//         </Link>
//       </li>
//     </>
//   );
//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <Link to="/">
//           <Logo></Logo>
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end">
//         {!user ? (
//           <div className="flex gap-3">
//             <Link to="/login" className="btn btn-sm">
//               Login
//             </Link>
//             <Link to="/register" className="btn btn-sm btn-neutral">
//               Register
//             </Link>
//           </div>
//         ) : (
//           <div className="dropdown dropdown-end">
//             <img
//               tabIndex={0}
//               src={user.photoURL}
//               className="w-10 h-10 rounded-full cursor-pointer"
//             />
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu p-2 bg-base-100 shadow rounded-box w-52"
//             >
//               <li>
//                 <Link to="/dashboard">Dashboard</Link>
//               </li>
//               <li>
//                 <button onClick={logOut}>Logout</button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import Logo from "../Logo/Logo";
// import useAuth from "../../hooks/useAuth";

// const Navbar = () => {
//   const { user, logOut } = useAuth();

//   // 1. Theme State Logic
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     // Apply theme to the root HTML element
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const links = (
//     <>
//       <li>
//         <Link to="/">
//           <i className="fa-solid fa-house-chimney-user"></i> Home
//         </Link>
//       </li>
//       <li>
//         <Link to="/allScholarships">
//           <i className="fa-solid fa-gift"></i> All Scholarships
//         </Link>
//       </li>
//       <li>
//         <Link to="/privacy&policy">
//           <i className="fa-solid fa-gift"></i> Privacy & Policy
//         </Link>
//       </li>
//       <li>
//         <Link to="/contact">
//           <i className="fa-solid fa-gift"></i> Contact
//         </Link>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <Link to="/">
//           <Logo></Logo>
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end gap-2">
//         {" "}
//         {/* Added gap for spacing */}
//         {/* 2. Theme Toggle Icon Button */}
//         <button
//           onClick={toggleTheme}
//           className="btn btn-ghost btn-circle text-xl"
//         >
//           {theme === "light" ? (
//             <i className="fa-solid fa-moon"></i>
//           ) : (
//             <i className="fa-solid fa-sun text-yellow-400"></i>
//           )}
//         </button>
//         {!user ? (
//           <div className="flex gap-3">
//             <Link to="/login" className="btn btn-sm">
//               Login
//             </Link>
//             <Link to="/register" className="btn btn-sm btn-neutral">
//               Register
//             </Link>
//           </div>
//         ) : (
//           <div className="dropdown dropdown-end">
//             <img
//               tabIndex={0}
//               src={user.photoURL}
//               alt="User"
//               className="w-10 h-10 rounded-full cursor-pointer"
//             />
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu p-2 bg-base-100 shadow rounded-box w-52"
//             >
//               <li>
//                 <Link to="/dashboard">Dashboard</Link>
//               </li>
//               <li>
//                 <button onClick={logOut}>Logout</button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router"; // Switched to NavLink for active styling
import Logo from "../Logo/Logo";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // NavLink allows us to highlight the page the user is currently on
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          <i className="fa-solid fa-house-chimney-user"></i> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allScholarships"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          <i className="fa-solid fa-graduation-cap"></i> Scholarships
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              <i className="fa-solid fa-graduation-cap"></i> Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/privacy&policy"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          <i className="fa-solid fa-shield-halved"></i> Privacy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          <i className="fa-solid fa-envelope"></i> Contact
        </NavLink>
      </li>
    </>
  );

  return (
    /* STICKY CLASSES: 
       'sticky top-0' keeps it at the top. 
       'z-50' ensures it stays above all other content.
       'backdrop-blur' adds a modern frosted glass look.
    */
    <div className="sticky top-0 z-50 w-full border-b border-base-200 bg-base-100/80 backdrop-blur-md transition-all duration-300">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-3 w-52 p-4 shadow-xl border border-base-200"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle swap swap-rotate text-xl"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun text-yellow-400"></i>
            )}
          </button>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login" className="btn btn-ghost btn-sm hidden sm:flex">
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary btn-sm px-5 shadow-lg shadow-primary/20"
              >
                Join
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar hover:ring-primary hover:ring-2 ring-offset-base-100 ring-offset-2 rounded-full transition-all"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt="User"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-3 bg-base-100 shadow-2xl rounded-2xl w-56 mt-4 border border-base-200"
              >
                <div className="px-4 py-2 border-b border-base-200 mb-2">
                  <p className="text-xs opacity-50 font-bold uppercase tracking-widest">
                    Signed in as
                  </p>
                  <p className="font-bold truncate text-primary">
                    {user?.displayName || "Scholar"}
                  </p>
                </div>
                <li>
                  <Link to="/dashboard" className="flex justify-between">
                    Dashboard{" "}
                    <i className="fa-solid fa-chart-line opacity-50"></i>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="text-error hover:bg-error/10"
                  >
                    Logout{" "}
                    <i className="fa-solid fa-right-from-bracket opacity-50"></i>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
