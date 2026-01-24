// import React, { useState } from "react";
// import MyApplications from "./MyApplications";
// import MyReviews from "./MyReviews";

// const StudentPanel = () => {
//   const [activeTab, setActiveTab] = useState("applications");

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Student Panel</h2>

//       {/* Tabs */}
//       <div className="flex border-b border-gray-300 mb-4">
//         <button
//           className={`px-4 py-2 font-semibold ${
//             activeTab === "applications"
//               ? "border-b-2 border-blue-600 text-blue-600"
//               : "text-gray-600 hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("applications")}
//         >
//           My Applications
//         </button>
//         <button
//           className={`px-4 py-2 font-semibold ${
//             activeTab === "reviews"
//               ? "border-b-2 border-blue-600 text-blue-600"
//               : "text-gray-600 hover:text-blue-600"
//           }`}
//           onClick={() => setActiveTab("reviews")}
//         >
//           My Reviews
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div>
//         {activeTab === "applications" && (
//           <div>
//             {/* <p className="text-gray-700">Your applications will show here.</p> */}
//             <MyApplications></MyApplications>
//           </div>
//         )}

//         {activeTab === "reviews" && (
//           <div>
//             {/* <p className="text-gray-700">Your reviews will show here.</p> */}
//             <MyReviews></MyReviews>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentPanel;

import React, { useState } from "react";
import MyApplications from "./MyApplications";
import MyReviews from "./MyReviews";

const StudentPanel = () => {
  const [activeTab, setActiveTab] = useState("applications");

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black tracking-tight">
          Student Workspace
        </h2>
        <p className="text-sm opacity-60 font-medium">
          Manage your scholarship journey, track applications, and view your
          feedback.
        </p>
      </div>

      {/* Modern Lifted Tabs */}
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        {/* Applications Tab */}
        <button
          role="tab"
          className={`tab transition-all h-auto py-3 gap-2 ${
            activeTab === "applications"
              ? "tab-active font-bold [--tab-bg:oklch(var(--b1))] text-primary"
              : "opacity-60"
          }`}
          onClick={() => setActiveTab("applications")}
        >
          <i className="fa-solid fa-file-lines"></i>
          My Applications
        </button>

        {/* Reviews Tab */}
        <button
          role="tab"
          className={`tab transition-all h-auto py-3 gap-2 ${
            activeTab === "reviews"
              ? "tab-active font-bold [--tab-bg:oklch(var(--b1))] text-primary"
              : "opacity-60"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          <i className="fa-solid fa-star-half-stroke"></i>
          My Reviews
        </button>

        {/* Spacer for DaisyUI styling alignment */}
        <div className="tab border-none cursor-default"></div>
      </div>

      {/* Tab Content Area */}
      <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm min-h-[400px] animate-in fade-in slide-in-from-bottom-2 duration-500">
        {activeTab === "applications" ? (
          <div className="space-y-4">
            <MyApplications />
          </div>
        ) : (
          <div className="space-y-4">
            <MyReviews />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPanel;
