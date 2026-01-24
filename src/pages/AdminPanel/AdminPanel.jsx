// import React from "react";
// import AddScholarShip from "./AddScholarShip";
// import ManageScholarShip from "./ManageScholarShip";
// import ManageUsers from "./ManageUsers";
// import Analytics from "./Analytics";

// const AdminPanel = () => {
//   return (
//     <div>
//       <p className="font-semibold text-xl py-2">
//         <i className="fa-solid fa-mobile"></i> This is your AdminPanel
//       </p>
//       <div className="tabs tabs-lift w-full">
//         {/* TAB 1 — Add Scholarship */}
//         <input
//           type="radio"
//           name="dashboard_tabs"
//           className="tab"
//           aria-label="Add Scholarship"
//           defaultChecked
//         />
//         <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
//           <h2 className="text-xl font-bold">Add Scholarship</h2>
//           <AddScholarShip></AddScholarShip>
//         </div>

//         {/* TAB 2 — Manage Scholarships */}
//         <input
//           type="radio"
//           name="dashboard_tabs"
//           className="tab"
//           aria-label="Manage Scholarships"
//         />
//         <div className="tab-content bg-base-100 border-base-300 p-6">
//           <ManageScholarShip></ManageScholarShip>
//         </div>

//         {/* TAB 3 — Manage Users */}
//         <input
//           type="radio"
//           name="dashboard_tabs"
//           className="tab"
//           aria-label="Manage Users"
//         />
//         <div className="tab-content bg-base-100 border-base-300 p-6">
//           <ManageUsers></ManageUsers>
//         </div>

//         {/* TAB 4 — Analytics */}
//         <input
//           type="radio"
//           name="dashboard_tabs"
//           className="tab"
//           aria-label="Analytics"
//         />
//         <Analytics></Analytics>
//         <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
//           {/* <h2 className="text-xl font-bold">Analytics</h2> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

import React from "react";
import AddScholarShip from "./AddScholarShip";
import ManageScholarShip from "./ManageScholarShip";
import ManageUsers from "./ManageUsers";
import Analytics from "./Analytics";

const AdminPanel = () => {
  return (
    <div className="p-4 md:p-6 bg-base-100 min-h-screen transition-colors duration-300">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-sm opacity-60 font-medium mt-1">
            <i className="fa-solid fa-screwdriver-wrench mr-2"></i>
            Manage your institution's scholarships and users
          </p>
        </div>
        <div className="badge badge-outline p-4 gap-2 opacity-70">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          System Live
        </div>
      </div>

      {/* Main Tabs Container */}
      <div className="tabs tabs-lifted w-full">
        {/* TAB 1 — Add Scholarship */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab font-bold [--tab-bg:var(--fallback-b1,oklch(var(--b1)))] border-base-300"
          aria-label="Add Scholarship"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 rounded-b-2xl p-4 md:p-10 shadow-sm">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-circle-plus text-primary"></i>
              Add New Scholarship
            </h2>
            <div className="bg-base-200/50 p-6 rounded-3xl border border-base-300">
              <AddScholarShip />
            </div>
          </div>
        </div>

        {/* TAB 2 — Manage Scholarships */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab font-bold [--tab-bg:var(--fallback-b1,oklch(var(--b1)))] border-base-300"
          aria-label="Manage Scholarships"
        />
        <div className="tab-content bg-base-100 border-base-300 rounded-b-2xl p-4 md:p-8">
          <ManageScholarShip />
        </div>

        {/* TAB 3 — Manage Users */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab font-bold [--tab-bg:var(--fallback-b1,oklch(var(--b1)))] border-base-300"
          aria-label="Manage Users"
        />
        <div className="tab-content bg-base-100 border-base-300 rounded-b-2xl p-4 md:p-8">
          <ManageUsers />
        </div>

        {/* TAB 4 — Analytics */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab font-bold [--tab-bg:var(--fallback-b1,oklch(var(--b1)))] border-base-300"
          aria-label="Analytics"
        />
        <div className="tab-content bg-base-100 border-base-300 rounded-b-2xl p-4 md:p-8">
          <Analytics />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
