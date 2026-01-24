// import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";

// const MyApplications = () => {
//   const { user } = useAuth();
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedApp, setSelectedApp] = useState(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   // REVIEW MODAL STATE
//   const [reviewApp, setReviewApp] = useState(null);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   useEffect(() => {
//     if (!user?.email) return;
//     const fetchApplications = async () => {
//       try {
//         const res = await fetch(
//           `https://scholar-stream-server-mu.vercel.app/applications?email=${user.email}`
//         );
//         const data = await res.json();
//         setApplications(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchApplications();
//   }, [user?.email]);

//   const openDetails = (app) => {
//     setSelectedApp(app);
//     setShowDetailsModal(true);
//   };
//   //  SUBMIT REVIEW
//   const submitReview = async () => {
//     try {
//       await fetch("https://scholar-stream-server-mu.vercel.app/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           scholarshipId: reviewApp.scholarshipId,
//           applicationId: reviewApp._id,
//           userEmail: user.email,
//           userName: user.displayName || "Anonymous",
//           rating,
//           comment,
//         }),
//       });
//       console.log(
//         reviewApp.scholarshipId,
//         reviewApp._id,
//         user.email,
//         user.displayName,
//         rating,
//         comment
//       );
//       setReviewApp(null);
//       setRating(5);
//       setComment("");
//       alert("Review submitted successfully");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to submit review");
//     }
//   };

//   const handlePay = async (app) => {
//     try {
//       const res = await fetch(
//         "https://scholar-stream-server-mu.vercel.app/scholarship-payment-session",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             applicationId: app._id,
//             scholarshipName: app.scholarshipName,
//             amount: app.amount,
//             userEmail: user.email,
//           }),
//         }
//       );
//       const data = await res.json();
//       if (data.url) window.location.href = data.url;
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Try again.");
//     }
//   };

//   const handleDelete = async (appId) => {
//     if (!window.confirm("Are you sure you want to delete this application?"))
//       return;
//     try {
//       await fetch(
//         `https://scholar-stream-server-mu.vercel.app/applications/${appId}`,
//         {
//           method: "DELETE",
//         }
//       );
//       setApplications(applications.filter((app) => app._id !== appId));
//     } catch (err) {
//       console.error(err);
//       alert("Delete failed");
//     }
//   };

//   if (loading) return <p>Loading applications...</p>;

//   return (
//     <div>
//       <h3 className="text-xl font-bold mb-4">My Applications</h3>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr className="text-center">
//               <th className="px-4 py-2 border">University Name</th>
//               <th className="px-4 py-2 border">University Address</th>
//               <th className="px-4 py-2 border">Feedback</th>
//               <th className="px-4 py-2 border">Subject Category</th>
//               <th className="px-4 py-2 border">Degree</th>
//               <th className="px-4 py-2 border">Amount</th>
//               <th className="px-4 py-2 border">Application Status</th>
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applications.map((app) => (
//               <tr key={app._id} className="text-center">
//                 <td className="px-4 py-2 border">{app.universityName}</td>
//                 <td className="px-4 py-2 border">{app.universityAddress}</td>
//                 <td className="px-4 py-2 border">
//                   {app.feedback || "Pending"}
//                 </td>
//                 <td className="px-4 py-2 border">{app.subjectCategory}</td>
//                 <td className="px-4 py-2 border">{app.degree}</td>
//                 <td className="px-4 py-2 border">${app.amount}</td>
//                 <td className="px-4 py-2 border">{app.applicationStatus}</td>
//                 <td className="px-4 py-2 border space-x-1">
//                   <button
//                     className="bg-blue-500 text-white px-2 py-1 rounded"
//                     onClick={() => openDetails(app)}
//                   >
//                     Details
//                   </button>
//                   {app.applicationStatus === "pending" && (
//                     <>
//                       <button
//                         className="bg-red-500 text-white px-2 py-1 rounded"
//                         onClick={() => handleDelete(app._id)}
//                       >
//                         Delete
//                       </button>
//                       {app.paymentStatus === "unpaid" && (
//                         <button
//                           className="bg-green-500 text-white px-2 py-1 rounded"
//                           onClick={() => handlePay(app)}
//                         >
//                           Pay
//                         </button>
//                       )}
//                     </>
//                   )}
//                   {/* ✅ ADD REVIEW */}
//                   {app.applicationStatus === "completed" && (
//                     <button
//                       className="bg-green-600 text-white  p-1 my-1 rounded"
//                       onClick={() => setReviewApp(app)}
//                     >
//                       Add Review
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showDetailsModal && selectedApp && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-96">
//             <h4 className="text-lg font-bold mb-2">Application Details</h4>
//             <p>
//               <strong>University Name:</strong> {selectedApp.universityName}
//             </p>
//             <p>
//               <strong>University Address:</strong>{" "}
//               {selectedApp.universityAddress}
//             </p>
//             <p>
//               <strong>Subject Category:</strong> {selectedApp.subjectCategory}
//             </p>
//             <p>
//               <strong>Degree:</strong> {selectedApp.degree}
//             </p>
//             <p>
//               <strong>Amount:</strong> ${selectedApp.amount}
//             </p>
//             <p>
//               <strong>Status:</strong> {selectedApp.applicationStatus}
//             </p>
//             <p>
//               <strong>Feedback:</strong> {selectedApp.feedback || "-"}
//             </p>
//             <button
//               className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
//               onClick={() => setShowDetailsModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       {/* ⭐ REVIEW MODAL */}
//       {reviewApp && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-[420px]">
//             <h4 className="text-lg font-bold mb-3">Add Review</h4>

//             {/* RATING */}
//             <label className="block mb-1 font-medium">Rating</label>
//             <select
//               className="w-full border rounded p-2 mb-3"
//               value={rating}
//               onChange={(e) => setRating(Number(e.target.value))}
//             >
//               {[5, 4, 3, 2, 1].map((r) => (
//                 <option key={r} value={r}>
//                   {r} Star
//                 </option>
//               ))}
//             </select>

//             {/* COMMENT */}
//             <label className="block mb-1 font-medium">Comment</label>
//             <textarea
//               className="w-full border rounded p-2 min-h-[120px]"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />

//             <div className="mt-4 flex justify-end gap-2">
//               <button
//                 className="bg-green-600 text-white  p-2 rounded"
//                 onClick={submitReview}
//               >
//                 Submit
//               </button>
//               <button
//                 className="bg-gray-500 text-white  p-2 rounded"
//                 onClick={() => setReviewApp(null)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyApplications;

import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyApplications = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);

  // Review State
  const [reviewApp, setReviewApp] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const fetchApplications = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(
        `https://scholar-stream-server-mu.vercel.app/applications?email=${user.email}`,
      );
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [user?.email]);

  const submitReview = async () => {
    try {
      const res = await fetch(
        "https://scholar-stream-server-mu.vercel.app/reviews",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            scholarshipId: reviewApp.scholarshipId,
            applicationId: reviewApp._id,
            userEmail: user.email,
            userName: user.displayName || "Anonymous",
            rating,
            comment,
          }),
        },
      );
      if (res.ok) {
        Swal.fire("Success", "Review submitted successfully", "success");
        setReviewApp(null);
        setRating(5);
        setComment("");
      }
    } catch (err) {
      Swal.fire("Error", "Failed to submit review", "error");
    }
  };

  const handlePay = async (app) => {
    try {
      const res = await fetch(
        "https://scholar-stream-server-mu.vercel.app/scholarship-payment-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            applicationId: app._id,
            scholarshipName: app.scholarshipName,
            amount: app.amount,
            userEmail: user.email,
          }),
        },
      );
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      Swal.fire("Payment Error", "Redirect failed", "error");
    }
  };

  const handleDelete = async (appId) => {
    const result = await Swal.fire({
      title: "Cancel Application?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it",
    });

    if (result.isConfirmed) {
      try {
        await fetch(
          `https://scholar-stream-server-mu.vercel.app/applications/${appId}`,
          {
            method: "DELETE",
          },
        );
        setApplications(applications.filter((app) => app._id !== appId));
        Swal.fire("Deleted!", "Your application was removed.", "success");
      } catch (err) {
        Swal.fire("Error", "Delete failed", "error");
      }
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return "badge-success";
      case "pending":
        return "badge-warning";
      case "rejected":
        return "badge-error";
      default:
        return "badge-ghost";
    }
  };

  if (loading)
    return (
      <div className="flex justify-center p-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100 shadow-sm">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>University</th>
              <th>Category/Degree</th>
              <th>Feedback</th>
              <th>Fee</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="hover">
                <td>
                  <div className="font-bold">{app.universityName}</div>
                  <div className="text-xs opacity-50">
                    {app.universityAddress}
                  </div>
                </td>
                <td>
                  <div className="text-sm font-semibold">
                    {app.subjectCategory}
                  </div>
                  <div className="badge badge-sm badge-outline">
                    {app.degree}
                  </div>
                </td>
                <td>
                  <span className="italic text-sm">
                    {app.feedback || "No feedback yet"}
                  </span>
                </td>
                <td className="font-mono font-bold">${app.amount}</td>
                <td>
                  <span
                    className={`badge ${getStatusBadge(app.applicationStatus)} font-bold`}
                  >
                    {app.applicationStatus}
                  </span>
                </td>
                <td>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button
                      className="btn btn-xs btn-info"
                      onClick={() => setSelectedApp(app)}
                    >
                      Details
                    </button>

                    {app.applicationStatus === "pending" && (
                      <>
                        <button
                          className="btn btn-xs btn-error"
                          onClick={() => handleDelete(app._id)}
                        >
                          Cancel
                        </button>
                        {app.paymentStatus === "unpaid" && (
                          <button
                            className="btn btn-xs btn-success"
                            onClick={() => handlePay(app)}
                          >
                            Pay Now
                          </button>
                        )}
                      </>
                    )}

                    {app.applicationStatus === "completed" && (
                      <button
                        className="btn btn-xs btn-secondary"
                        onClick={() => setReviewApp(app)}
                      >
                        Add Review
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DETAILS MODAL */}
      {selectedApp && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Application Deep-Dive</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>University:</strong> {selectedApp.universityName}
              </p>
              <p>
                <strong>Address:</strong> {selectedApp.universityAddress}
              </p>
              <p>
                <strong>Subject:</strong> {selectedApp.subjectCategory}
              </p>
              <p>
                <strong>Degree:</strong> {selectedApp.degree}
              </p>
              <p>
                <strong>Processing Fee:</strong> ${selectedApp.amount}
              </p>
              <div className="divider"></div>
              <p className="bg-base-200 p-3 rounded-lg italic">
                <strong>Feedback from Admin:</strong> <br />
                {selectedApp.feedback ||
                  "The admission committee is currently reviewing your documents."}
              </p>
            </div>
            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedApp(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REVIEW MODAL */}
      {reviewApp && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Share Your Experience</h3>
            <div className="form-control mb-4">
              <label className="label font-bold">Rating</label>
              <div className="rating rating-md">
                {[1, 2, 3, 4, 5].map((star) => (
                  <input
                    key={star}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked={rating === star}
                    onChange={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            <div className="form-control">
              <label className="label font-bold">Your Review</label>
              <textarea
                className="textarea textarea-bordered h-24 bg-base-200"
                placeholder="How was the application process?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-action">
              <button
                className="btn btn-ghost"
                onClick={() => setReviewApp(null)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={submitReview}>
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApplications;
