import React from "react";
import AddScholarShip from "./AddScholarShip";
import ManageScholarShip from "./ManageScholarShip";

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
          {/* <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input input-bordered"
              type="text"
              placeholder="Scholarship Name"
            />
            <input
              className="input input-bordered"
              type="text"
              placeholder="University Name"
            />
            <input
              className="input input-bordered"
              type="text"
              placeholder="Image URL"
            />
            <input
              className="input input-bordered"
              type="text"
              placeholder="Country"
            />
            <input
              className="input input-bordered"
              type="text"
              placeholder="City"
            />
            <input
              className="input input-bordered"
              type="number"
              placeholder="World Rank"
            />
            <input
              className="input input-bordered"
              type="text"
              placeholder="Subject Category"
            />
            <input
              className="input input-bordered"
              type="text"
              placeholder="Scholarship Category"
            />
            <input
              className="input input-bordered"
              type="text"
              placeholder="Degree"
            />
            <input
              className="input input-bordered"
              type="number"
              placeholder="Tuition Fees (optional)"
            />
            <input
              className="input input-bordered"
              type="number"
              placeholder="Application Fees"
            />
            <input
              className="input input-bordered"
              type="number"
              placeholder="Service Charge"
            />
            <input
              className="input input-bordered"
              type="date"
              placeholder="Deadline"
            />
            <input
              className="input input-bordered"
              type="email"
              placeholder="User Email"
            />

            <button className="btn btn-primary col-span-full">
              Add Scholarship
            </button>
          </form> */}
        </div>

        {/* TAB 2 — Manage Scholarships */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab"
          aria-label="Manage Scholarships"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {/* <h2 className="text-xl font-bold mb-4">Manage Scholarships</h2> */}
          <ManageScholarShip></ManageScholarShip>
          {/* <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>University</th>
                  <th>Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row */}
          {/* <tr>
                  <td>Example Scholarship</td>
                  <td>MIT</td>
                  <td>USA</td>
                  <td className="space-x-2">
                    <button className="btn btn-sm btn-info">Update</button>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}{" "}
        </div>

        {/* TAB 3 — Manage Users */}
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab"
          aria-label="Manage Users"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h2 className="text-xl font-bold mb-4">Manage Users</h2>

          {/* Filter Dropdown */}
          {/* <select className="select select-bordered mb-4">
            <option value="">All Roles</option>
            <option value="Student">Student</option>
            <option value="Moderator">Moderator</option>
            <option value="Admin">Admin</option>
          </select>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Change Role</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {/* Example Row */}
          {/* <tr>
                  <td>user@gmail.com</td>
                  <td>Student</td>
                  <td>
                    <button className="btn btn-sm btn-accent">Promote</button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table> */}
          {/* </div> */}
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
