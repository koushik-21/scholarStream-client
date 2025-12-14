import React from "react";
import AddScholarShip from "./AddScholarShip";
import ManageScholarShip from "./ManageScholarShip";
import ManageUsers from "./ManageUsers";

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
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
          <h2 className="text-xl font-bold">Analytics</h2>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat bg-base-200">
              <div className="stat-title">Total Users</div>
              <div className="stat-value">123</div>
            </div>

            <div className="stat bg-base-200">
              <div className="stat-title">Total Scholarships</div>
              <div className="stat-value">45</div>
            </div>

            <div className="stat bg-base-200">
              <div className="stat-title">Total Fees Collected</div>
              <div className="stat-value">$12,480</div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="border rounded-lg p-6 text-center">
            <p className="text-gray-500">📊 Chart will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
