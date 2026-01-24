// import React, { useState } from "react";
// import ManageApplications from "./ManageApplications";
// // import AllReviews from "./AllReviews";
// import ModeratorReviewPanel from "./ModeratorReviewPanel";

// const ModeratorPanel = () => {
//   const [activeTab, setActiveTab] = useState("applications");

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Moderator Panel</h2>

//       {/* Tabs */}
//       <div className="tabs tabs-boxed mb-6">
//         <button
//           className={`tab ${activeTab === "applications" ? "tab-active" : ""}`}
//           onClick={() => setActiveTab("applications")}
//         >
//           Manage Applied Applications
//         </button>

//         <button
//           className={`tab ${activeTab === "reviews" ? "tab-active" : ""}`}
//           onClick={() => setActiveTab("reviews")}
//         >
//           All Student Reviews
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className=" rounded-xl p-4">
//         {activeTab === "applications" && <ManageApplications />}
//         {activeTab === "reviews" && (
//           <ModeratorReviewPanel></ModeratorReviewPanel>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ModeratorPanel;

// >>>>>>>>>>>>>......................>>>>>>>>>>>>>>>>>>>>>.................... 24th of 2026
import React, { useState } from "react";
import ManageApplications from "./ManageApplications";
import ModeratorReviewPanel from "./ModeratorReviewPanel";

const ModeratorPanel = () => {
  const [activeTab, setActiveTab] = useState("applications");

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Moderation Hub</h2>
          <p className="text-sm opacity-60 font-medium">
            Review scholarship applications and manage student feedback.
          </p>
        </div>
        <div className="badge badge-warning badge-outline gap-2 py-3 px-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-warning"></span>
          </span>
          Moderator Access
        </div>
      </div>

      {/* Modern Tabs Design */}
      <div className="flex justify-center md:justify-start">
        <div className="tabs tabs-boxed bg-base-200 p-1 rounded-2xl border border-base-300">
          <button
            className={`tab tab-lg gap-2 rounded-xl transition-all duration-300 ${
              activeTab === "applications"
                ? "tab-active bg-primary text-primary-content shadow-lg"
                : "hover:bg-base-300"
            }`}
            onClick={() => setActiveTab("applications")}
          >
            <i className="fa-solid fa-list-check text-sm"></i>
            Applications
          </button>

          <button
            className={`tab tab-lg gap-2 rounded-xl transition-all duration-300 ${
              activeTab === "reviews"
                ? "tab-active bg-primary text-primary-content shadow-lg"
                : "hover:bg-base-300"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            <i className="fa-solid fa-star text-sm"></i>
            Student Reviews
          </button>
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="min-h-[500px] bg-base-100 border border-base-300 rounded-3xl p-2 md:p-6 shadow-sm">
        {activeTab === "applications" ? (
          <div className="animate-in slide-in-from-left-4 duration-500">
            <ManageApplications />
          </div>
        ) : (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <ModeratorReviewPanel />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModeratorPanel;
