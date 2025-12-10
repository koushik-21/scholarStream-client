import React from "react";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const DashboardLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <Navbar></Navbar>
        {/* <Outlet></Outlet> */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
