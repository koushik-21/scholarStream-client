import React, { useState } from "react";
import ManageApplications from "./ManageApplications";
// import AllReviews from "./AllReviews";
import ModeratorReviewPanel from "./ModeratorReviewPanel";

const ModeratorPanel = () => {
  const [activeTab, setActiveTab] = useState("applications");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Moderator Panel</h2>

      {/* Tabs */}
      <div className="tabs tabs-boxed mb-6">
        <button
          className={`tab ${activeTab === "applications" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("applications")}
        >
          Manage Applied Applications
        </button>

        <button
          className={`tab ${activeTab === "reviews" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          All Student Reviews
        </button>
      </div>

      {/* Tab Content */}
      <div className=" rounded-xl p-4">
        {activeTab === "applications" && <ManageApplications />}
        {activeTab === "reviews" && (
          <ModeratorReviewPanel></ModeratorReviewPanel>
        )}
      </div>
    </div>
  );
};

export default ModeratorPanel;
