// import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";

// const ManageApplications = () => {
//   const axiosSecure = useAxiosSecure();

//   const [applications, setApplications] = useState([]);
//   const [detailsApp, setDetailsApp] = useState(null);
//   const [feedbackApp, setFeedbackApp] = useState(null);
//   const [feedback, setFeedback] = useState("");

//   // FETCH
//   const fetchApplications = async () => {
//     const res = await axiosSecure.get("/moderator/applications");
//     setApplications(res.data);
//   };

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   // STATUS UPDATE
//   const updateStatus = async (id, status) => {
//     await axiosSecure.patch(`/moderator/applications/status/${id}`, { status });
//     fetchApplications();

//     Swal.fire({
//       icon: "success",
//       title: "Status Updated",
//       timer: 1200,
//       showConfirmButton: false,
//     });
//   };

//   // SUBMIT FEEDBACK
//   const submitFeedback = async () => {
//     await axiosSecure.patch(
//       `/moderator/applications/feedback/${feedbackApp._id}`,
//       { feedback }
//     );

//     setFeedbackApp(null);
//     setFeedback("");
//     fetchApplications();

//     Swal.fire({
//       icon: "success",
//       title: "Feedback Submitted",
//       timer: 1200,
//       showConfirmButton: false,
//     });
//   };

//   return (
//     <div>
//       <h3 className="text-xl font-semibold mb-4">
//         Manage Applied Applications
//       </h3>

//       {/* TABLE */}
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border ">
//           <thead className="">
//             <tr className="text-center">
//               <th className="border px-3 py-2">Applicant</th>
//               <th className="border px-3 py-2">Email</th>
//               <th className="border px-3 py-2">University</th>
//               <th className="border px-3 py-2">Feedback</th>
//               <th className="border px-3 py-2">Status</th>
//               <th className="border px-3 py-2">Payment</th>
//               <th className="border px-3 py-2">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {applications.map((app) => (
//               <tr key={app._id} className="text-center">
//                 <td className="border px-3 py-2">{app.applicantName}</td>
//                 <td className="border px-3 py-2">{app.applicantEmail}</td>
//                 <td className="border px-3 py-2">{app.universityName}</td>
//                 <td className="border px-3 py-2">{app.feedback || "—"}</td>

//                 <td className="border px-3 py-2">
//                   <select
//                     className="border rounded px-2 py-1"
//                     value={app.applicationStatus}
//                     onChange={(e) => updateStatus(app._id, e.target.value)}
//                     disabled={app.applicationStatus === "rejected"}
//                   >
//                     <option value="submitted">Submitted</option>
//                     <option value="processing">Processing</option>
//                     <option value="completed">Completed</option>
//                   </select>
//                 </td>

//                 <td className="border px-3 py-2">{app.paymentStatus}</td>

//                 <td className="border px-3 py-2 space-x-1 flex flex-col gap-2">
//                   <button
//                     className="bg-blue-500 text-white px-2 py-1 rounded"
//                     onClick={() => setDetailsApp(app)}
//                   >
//                     Details
//                   </button>

//                   <button
//                     className="bg-black text-white px-2 py-1 rounded"
//                     onClick={() => {
//                       setFeedbackApp(app);
//                       setFeedback(app.feedback || "");
//                     }}
//                   >
//                     Feedback
//                   </button>

//                   <button
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => updateStatus(app._id, "rejected")}
//                   >
//                     Cancel
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* DETAILS MODAL */}
//       {detailsApp && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-[420px]">
//             <h4 className="text-lg font-bold mb-3">Application Details</h4>

//             <p>
//               <b>Name:</b> {detailsApp.applicantName}
//             </p>
//             <p>
//               <b>Email:</b> {detailsApp.applicantEmail}
//             </p>
//             <p>
//               <b>University:</b> {detailsApp.universityName}
//             </p>
//             <p>
//               <b>Status:</b> {detailsApp.applicationStatus}
//             </p>
//             <p>
//               <b>Payment:</b> {detailsApp.paymentStatus}
//             </p>
//             <p>
//               <b>Feedback:</b> {detailsApp.feedback || "N/A"}
//             </p>

//             <button
//               className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
//               onClick={() => setDetailsApp(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* FEEDBACK MODAL */}
//       {feedbackApp && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-[420px]">
//             <h4 className="text-lg font-bold mb-3">Write Feedback</h4>

//             {/* <textarea
//               className="w-full border rounded p-1 min-h-[120px]"
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//             /> */}
//             <textarea
//               className="w-full border rounded p-2 overflow-hidden resize-none"
//               value={feedback}
//               onChange={(e) => {
//                 setFeedback(e.target.value);
//                 e.target.style.height = "auto";
//                 e.target.style.height = e.target.scrollHeight + "px";
//               }}
//             />
//             <div className="mt-4 flex justify-end gap-2">
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//                 onClick={submitFeedback}
//               >
//                 Submit
//               </button>
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//                 onClick={() => setFeedbackApp(null)}
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

// export default ManageApplications;

// >>..........................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageApplications = () => {
  const axiosSecure = useAxiosSecure();
  const [applications, setApplications] = useState([]);
  const [detailsApp, setDetailsApp] = useState(null);
  const [feedbackApp, setFeedbackApp] = useState(null);
  const [feedback, setFeedback] = useState("");

  const fetchApplications = async () => {
    try {
      const res = await axiosSecure.get("/moderator/applications");
      setApplications(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axiosSecure.patch(`/moderator/applications/status/${id}`, {
        status,
      });
      fetchApplications();
      Swal.fire({
        icon: "success",
        title: `Set to ${status}`,
        toast: true,
        position: "top-end",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire("Error", "Could not update status", "error");
    }
  };

  const submitFeedback = async () => {
    try {
      await axiosSecure.patch(
        `/moderator/applications/feedback/${feedbackApp._id}`,
        { feedback },
      );
      setFeedbackApp(null);
      setFeedback("");
      fetchApplications();
      Swal.fire("Success", "Feedback sent to student", "success");
    } catch (err) {
      Swal.fire("Error", "Could not send feedback", "error");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xl font-black uppercase tracking-wider text-base-content/70">
          Application Queue
        </h3>
        <span className="badge badge-lg font-bold">
          {applications.length} Total
        </span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-base-300 shadow-sm bg-base-100">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200/50">
            <tr>
              <th>Applicant Info</th>
              <th>University</th>
              <th>Status Control</th>
              <th>Payment</th>
              <th className="text-center">Review Tools</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="hover">
                <td>
                  <div className="font-bold">{app.applicantName}</div>
                  <div className="text-xs opacity-50">{app.applicantEmail}</div>
                </td>
                <td className="max-w-[150px] truncate font-medium">
                  {app.universityName}
                </td>
                <td>
                  <select
                    className={`select select-bordered select-sm w-full max-w-[130px] font-bold ${
                      app.applicationStatus === "completed"
                        ? "text-success"
                        : app.applicationStatus === "rejected"
                          ? "text-error"
                          : "text-warning"
                    }`}
                    value={app.applicationStatus}
                    onChange={(e) => updateStatus(app._id, e.target.value)}
                    disabled={app.applicationStatus === "rejected"}
                  >
                    <option value="submitted">Submitted</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td>
                  <div
                    className={`badge badge-sm font-bold ${app.paymentStatus === "paid" ? "badge-success" : "badge-ghost"}`}
                  >
                    {app.paymentStatus}
                  </div>
                </td>
                <td>
                  <div className="flex gap-1 justify-center">
                    <button
                      className="btn btn-square btn-sm btn-info btn-outline"
                      title="View Details"
                      onClick={() => setDetailsApp(app)}
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                      className="btn btn-square btn-sm btn-neutral btn-outline"
                      title="Add Feedback"
                      onClick={() => {
                        setFeedbackApp(app);
                        setFeedback(app.feedback || "");
                      }}
                    >
                      <i className="fa-solid fa-comment-dots"></i>
                    </button>
                    <button
                      className="btn btn-square btn-sm btn-error btn-outline"
                      title="Reject Application"
                      onClick={() => updateStatus(app._id, "rejected")}
                    >
                      <i className="fa-solid fa-ban"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DETAILS MODAL */}
      {detailsApp && (
        <div className="modal modal-open">
          <div className="modal-box max-w-md">
            <h4 className="text-2xl font-black mb-4">Applicant File</h4>
            <div className="grid grid-cols-2 gap-4 text-sm bg-base-200 p-4 rounded-xl">
              <div>
                <p className="opacity-50 font-bold uppercase text-[10px]">
                  Full Name
                </p>
                <p className="font-semibold">{detailsApp.applicantName}</p>
              </div>
              <div>
                <p className="opacity-50 font-bold uppercase text-[10px]">
                  Email Address
                </p>
                <p className="font-semibold">{detailsApp.applicantEmail}</p>
              </div>
              <div className="col-span-2">
                <p className="opacity-50 font-bold uppercase text-[10px]">
                  University Target
                </p>
                <p className="font-semibold">{detailsApp.universityName}</p>
              </div>
              <div>
                <p className="opacity-50 font-bold uppercase text-[10px]">
                  Current Status
                </p>
                <span className="badge badge-primary">
                  {detailsApp.applicationStatus}
                </span>
              </div>
              <div>
                <p className="opacity-50 font-bold uppercase text-[10px]">
                  Payment
                </p>
                <span
                  className={`badge ${detailsApp.paymentStatus === "paid" ? "badge-success" : "badge-ghost"}`}
                >
                  {detailsApp.paymentStatus}
                </span>
              </div>
            </div>
            <div className="modal-action">
              <button
                className="btn btn-block"
                onClick={() => setDetailsApp(null)}
              >
                Close File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FEEDBACK MODAL */}
      {feedbackApp && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h4 className="text-xl font-bold mb-4">Official Feedback</h4>
            <textarea
              className="textarea textarea-bordered w-full h-32 focus:textarea-primary"
              placeholder="e.g., Documents verified. Moving to processing stage..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <div className="modal-action">
              <button
                className="btn btn-ghost"
                onClick={() => setFeedbackApp(null)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={submitFeedback}>
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageApplications;
