import React, { useContext } from "react";
import { Link, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "../components/Loader/Loader";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  if (loading) return <Loader></Loader>;
  if (!user) return <Navigate to="/login" />;
  const role = user.role; // fallback

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* PAGE CONTENT */}
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="size-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>

            <div className="px-4 font-semibold">Dashboard - {role} </div>
          </nav>

          {/* Role-based content here */}
          <div className="p-4">
            {role === "Admin" && (
              <div className="p-4 bg-blue-100 rounded">Welcome, Admin !</div>
            )}

            {role === "Student" && (
              <div className="p-4 bg-green-100 rounded">Welcome, Student.</div>
            )}

            {role === "Moderator" && (
              <div className="p-4 bg-yellow-100 rounded">
                Welcome, Moderator.
              </div>
            )}

            {/* Nested routes will show here */}
            <Outlet />
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <div className="flex min-h-full flex-col bg-base-200 w-50 ">
            <ul className="menu p-4 ">
              {/* Home */}
              <li>
                <Link to="/" className="flex items-center gap-2">
                  <i className="fa-solid fa-house-chimney"></i>Go back to Home
                </Link>
              </li>
              {/* Dashboard */}
              <li>
                <Link to="/dashboard" className="flex items-center gap-2">
                  <i className="fa-solid fa-house-chimney"></i>Dashboard
                </Link>
              </li>

              {/* Profile */}
              <li>
                <Link
                  to="/dashboard/profile"
                  className="flex items-center gap-2"
                >
                  <i className="fa-solid fa-id-card"></i> Profile
                </Link>
              </li>

              {/* Admin Panel */}
              {role === "Admin" && (
                <li>
                  <Link
                    to="/dashboard/admin"
                    className="flex items-center gap-2"
                  >
                    <i className="fa-solid fa-user-gear"></i> Admin Panel
                  </Link>
                </li>
              )}

              {/* Moderator Panel */}
              {role === "Moderator" && (
                <li>
                  <Link
                    to="/dashboard/moderator"
                    className="flex items-center gap-2"
                  >
                    <i className="fa-solid fa-user-tie"></i> Moderator Panel
                  </Link>
                </li>
              )}

              {/* Student Panel */}
              {role === "Student" && (
                <li>
                  <Link
                    to="/dashboard/student"
                    className="flex items-center gap-2"
                  >
                    <i className="fa-solid fa-user-graduate"></i> Student
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
