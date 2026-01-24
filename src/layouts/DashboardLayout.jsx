// import React, { useContext } from "react";
// import { Link, Outlet } from "react-router";
// import { AuthContext } from "../contexts/AuthContext";
// import Loader from "../components/Loader/Loader";

// const DashboardLayout = () => {
//   const { user, loading } = useContext(AuthContext);
//   // console.log(user);
//   if (loading) return <Loader></Loader>;
//   if (!user) return <Navigate to="/login" />;
//   const role = user.role; // fallback

//   return (
//     <div className="max-w-7xl mx-auto ">
//       <div className="drawer lg:drawer-open">
//         <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

//         {/* PAGE CONTENT */}
//         <div className="drawer-content">
//           {/* Navbar */}
//           <nav className="navbar w-full bg-base-300">
//             <label
//               htmlFor="my-drawer-4"
//               aria-label="open sidebar"
//               className="btn btn-square btn-ghost"
//             >
//               {/* Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 fill="none"
//                 stroke="currentColor"
//                 className="size-5"
//               >
//                 <path d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             </label>

//             <div className="px-4 font-semibold">Dashboard - {role} </div>
//           </nav>

//           {/* Role-based content here */}
//           <div className="p-4">
//             {role === "Admin" && (
//               <div className="p-4 bg-blue-100 rounded">Welcome, Admin !</div>
//             )}

//             {role === "Student" && (
//               <div className="p-4 bg-green-100 rounded">Welcome, Student.</div>
//             )}

//             {role === "Moderator" && (
//               <div className="p-4 bg-yellow-100 rounded">
//                 Welcome, Moderator.
//               </div>
//             )}

//             {/* Nested routes will show here */}
//             <Outlet />
//           </div>
//         </div>

//         {/* SIDEBAR */}
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

//           <div className="flex min-h-full flex-col bg-base-200 w-50 ">
//             <ul className="menu p-4 ">
//               {/* Home */}
//               <li>
//                 <Link to="/" className="flex items-center gap-2">
//                   <i className="fa-solid fa-house-chimney"></i>Go back to Home
//                 </Link>
//               </li>
//               {/* Dashboard */}
//               <li>
//                 <Link to="/dashboard" className="flex items-center gap-2">
//                   <i className="fa-solid fa-house-chimney"></i>Dashboard
//                 </Link>
//               </li>

//               {/* Profile */}
//               <li>
//                 <Link
//                   to="/dashboard/profile"
//                   className="flex items-center gap-2"
//                 >
//                   <i className="fa-solid fa-id-card"></i> Profile
//                 </Link>
//               </li>

//               {/* Admin Panel */}
//               {role === "Admin" && (
//                 <li>
//                   <Link
//                     to="/dashboard/admin"
//                     className="flex items-center gap-2"
//                   >
//                     <i className="fa-solid fa-user-gear"></i> Admin Panel
//                   </Link>
//                 </li>
//               )}

//               {/* Moderator Panel */}
//               {role === "Moderator" && (
//                 <li>
//                   <Link
//                     to="/dashboard/moderator"
//                     className="flex items-center gap-2"
//                   >
//                     <i className="fa-solid fa-user-tie"></i> Moderator Panel
//                   </Link>
//                 </li>
//               )}

//               {/* Student Panel */}
//               {role === "Student" && (
//                 <li>
//                   <Link
//                     to="/dashboard/student"
//                     className="flex items-center gap-2"
//                   >
//                     <i className="fa-solid fa-user-graduate"></i> Student
//                     Dashboard
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useContext } from "react";
import { Link, Outlet, Navigate } from "react-router-dom"; // Fixed Navigate import
import { AuthContext } from "../contexts/AuthContext";
import Loader from "../components/Loader/Loader";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loader />;
  if (!user) return <Navigate to="/login" />;

  const role = user.role || "User";

  const navLinkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-primary hover:text-primary-content font-medium";

  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-300">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* PAGE CONTENT */}
        <div className="drawer-content flex flex-col bg-base-100">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-200 border-b border-base-300 px-4 sticky top-0 z-10">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold text-lg tracking-tight">
              Dashboard <span className="text-primary mx-1">/</span>
              <span className="opacity-70 text-base font-normal">
                {role} View
              </span>
            </div>
          </nav>

          {/* Main Viewport */}
          <main className="p-6 md:p-8 lg:p-10">
            {/* Semantic Welcome Banners using DaisyUI Alerts */}
            <div className="mb-8">
              {role === "Admin" && (
                <div className="alert alert-info shadow-sm rounded-2xl bg-info/10 border-info/20 text-info">
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>
                    Welcome back,{" "}
                    <strong className="font-bold">System Administrator</strong>.
                    All systems functional.
                  </span>
                </div>
              )}

              {role === "Student" && (
                <div className="alert alert-success shadow-sm rounded-2xl bg-success/10 border-success/20 text-success">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <span>
                    Welcome back, <strong className="font-bold">Student</strong>
                    . Ready to explore scholarships?
                  </span>
                </div>
              )}

              {role === "Moderator" && (
                <div className="alert alert-warning shadow-sm rounded-2xl bg-warning/10 border-warning/20 text-warning">
                  <i className="fa-solid fa-user-check"></i>
                  <span>
                    Welcome back,{" "}
                    <strong className="font-bold">Moderator</strong>. You have
                    pending reviews.
                  </span>
                </div>
              )}
            </div>

            {/* Nested routes will show here */}
            <div className="animate-in fade-in duration-500">
              <Outlet />
            </div>
          </main>
        </div>

        {/* SIDEBAR */}
        <div className="drawer-side z-20">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <div className="flex flex-col w-64 min-h-full bg-base-200 border-r border-base-300 text-base-content">
            {/* Sidebar Logo Area */}
            <div className="p-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-content">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <span className="text-xl font-black tracking-tighter">
                ScholarStream
              </span>
            </div>

            <ul className="menu p-4 gap-2">
              <li className="menu-title opacity-40 uppercase text-xs font-bold tracking-widest mt-4">
                General
              </li>
              <li>
                <Link to="/" className={navLinkClass}>
                  <i className="fa-solid fa-house-chimney text-lg"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className={navLinkClass}>
                  <i className="fa-solid fa-gauge-high text-lg"></i> Overview
                </Link>
              </li>
              <li>
                <Link to="/dashboard/profile" className={navLinkClass}>
                  <i className="fa-solid fa-circle-user text-lg"></i> My Profile
                </Link>
              </li>

              <li className="menu-title opacity-40 uppercase text-xs font-bold tracking-widest mt-6">
                Management
              </li>

              {/* Admin Links */}
              {role === "Admin" && (
                <li>
                  <Link to="/dashboard/admin" className={navLinkClass}>
                    <i className="fa-solid fa-user-gear text-lg"></i> Admin
                    Panel
                  </Link>
                </li>
              )}

              {/* Moderator Links */}
              {role === "Moderator" && (
                <li>
                  <Link to="/dashboard/moderator" className={navLinkClass}>
                    <i className="fa-solid fa-user-tie text-lg"></i> Moderator
                    Panel
                  </Link>
                </li>
              )}

              {/* Student Links */}
              {role === "Student" && (
                <li>
                  <Link to="/dashboard/student" className={navLinkClass}>
                    <i className="fa-solid fa-file-invoice text-lg"></i>{" "}
                    Applications
                  </Link>
                </li>
              )}
            </ul>

            {/* Bottom Section (User Mini Profile) */}
            <div className="mt-auto p-4 border-t border-base-300">
              <div className="flex items-center gap-3 px-2">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={user?.photoURL || "https://via.placeholder.com/40"}
                      alt="user"
                    />
                  </div>
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-bold truncate">
                    {user?.displayName}
                  </p>
                  <p className="text-xs opacity-50 truncate">{role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
