import React from "react";
import AddScholarShip from "./AddScholarShip";
import ManageScholarShip from "./ManageScholarShip";
import ManageUsers from "./ManageUsers";
import Analytics from "./Analytics";

const AdminPanel = () => {
  return (
    <div>
      <p className="font-semibold text-xl py-2">
        <i className="fa-solid fa-mobile"></i> This is your AdminPanel
      </p>
      <div className="tabs tabs-lift w-full">
        {/* TAB 1 — Add Scholarship */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab"
          aria-label="Add Scholarship"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
          <h2 className="text-xl font-bold">Add Scholarship</h2>
          <AddScholarShip></AddScholarShip>
        </div>

        {/* TAB 2 — Manage Scholarships */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab"
          aria-label="Manage Scholarships"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <ManageScholarShip></ManageScholarShip>
        </div>

        {/* TAB 3 — Manage Users */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab"
          aria-label="Manage Users"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <ManageUsers></ManageUsers>
        </div>

        {/* TAB 4 — Analytics */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab"
          aria-label="Analytics"
        />
        <Analytics></Analytics>
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
          {/* <h2 className="text-xl font-bold">Analytics</h2> */}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
