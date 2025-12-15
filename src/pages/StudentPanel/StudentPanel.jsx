import React, { useState } from "react";
import MyApplications from "./MyApplications";

const StudentPanel = () => {
  const [activeTab, setActiveTab] = useState("applications");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Student Panel</h2>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "applications"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("applications")}
        >
          My Applications
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "reviews"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          My Reviews
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "applications" && (
          <div>
            {/* <p className="text-gray-700">Your applications will show here.</p> */}
            <MyApplications></MyApplications>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <p className="text-gray-700">Your reviews will show here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPanel;
