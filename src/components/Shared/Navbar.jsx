import React from "react";
import { Link } from "react-router";
import Logo from "../Logo/Logo";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <Link to="/">
          <i className="fa-solid fa-house-chimney-user"></i> Home
        </Link>
      </li>

      <li>
        <Link to="/allScholarships">
          <i className="fa-solid fa-gift"></i> All Scholarships
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <div className="flex gap-3">
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-neutral">
              Register
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <img
              tabIndex={0}
              src={user.photoURL}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 bg-base-100 shadow rounded-box w-52"
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
