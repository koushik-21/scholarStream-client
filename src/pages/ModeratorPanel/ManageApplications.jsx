import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageApplications = () => {
  const axiosSecure = useAxiosSecure();

  const [applications, setApplications] = useState([]);
  const [detailsApp, setDetailsApp] = useState(null);
  const [feedbackApp, setFeedbackApp] = useState(null);
  const [feedback, setFeedback] = useState("");

  // FETCH
  const fetchApplications = async () => {
    const res = await axiosSecure.get("/moderator/applications");
    setApplications(res.data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // STATUS UPDATE
  const updateStatus = async (id, status) => {
    await axiosSecure.patch(`/moderator/applications/status/${id}`, { status });
    fetchApplications();

    Swal.fire({
      icon: "success",
      title: "Status Updated",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  // SUBMIT FEEDBACK
  const submitFeedback = async () => {
    await axiosSecure.patch(
      `/moderator/applications/feedback/${feedbackApp._id}`,
      { feedback }
    );

    setFeedbackApp(null);
    setFeedback("");
    fetchApplications();

    Swal.fire({
      icon: "success",
      title: "Feedback Submitted",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Manage Applied Applications
      </h3>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border ">
          <thead className="">
            <tr className="text-center">
              <th className="border px-3 py-2">Applicant</th>
              <th className="border px-3 py-2">Email</th>
              <th className="border px-3 py-2">University</th>
              <th className="border px-3 py-2">Feedback</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Payment</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="text-center">
                <td className="border px-3 py-2">{app.applicantName}</td>
                <td className="border px-3 py-2">{app.applicantEmail}</td>
                <td className="border px-3 py-2">{app.universityName}</td>
                <td className="border px-3 py-2">{app.feedback || "—"}</td>

                <td className="border px-3 py-2">
                  <select
                    className="border rounded px-2 py-1"
                    value={app.applicationStatus}
                    onChange={(e) => updateStatus(app._id, e.target.value)}
                    disabled={app.applicationStatus === "rejected"}
                  >
                    <option value="submitted">Submitted</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>

                <td className="border px-3 py-2">{app.paymentStatus}</td>

                <td className="border px-3 py-2 space-x-1 flex flex-col gap-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => setDetailsApp(app)}
                  >
                    Details
                  </button>

                  <button
                    className="bg-black text-white px-2 py-1 rounded"
                    onClick={() => {
                      setFeedbackApp(app);
                      setFeedback(app.feedback || "");
                    }}
                  >
                    Feedback
                  </button>

                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => updateStatus(app._id, "rejected")}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DETAILS MODAL */}
      {detailsApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[420px]">
            <h4 className="text-lg font-bold mb-3">Application Details</h4>

            <p>
              <b>Name:</b> {detailsApp.applicantName}
            </p>
            <p>
              <b>Email:</b> {detailsApp.applicantEmail}
            </p>
            <p>
              <b>University:</b> {detailsApp.universityName}
            </p>
            <p>
              <b>Status:</b> {detailsApp.applicationStatus}
            </p>
            <p>
              <b>Payment:</b> {detailsApp.paymentStatus}
            </p>
            <p>
              <b>Feedback:</b> {detailsApp.feedback || "N/A"}
            </p>

            <button
              className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
              onClick={() => setDetailsApp(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FEEDBACK MODAL */}
      {feedbackApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[420px]">
            <h4 className="text-lg font-bold mb-3">Write Feedback</h4>

            {/* <textarea
              className="w-full border rounded p-1 min-h-[120px]"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            /> */}
            <textarea
              className="w-full border rounded p-2 overflow-hidden resize-none"
              value={feedback}
              onChange={(e) => {
                setFeedback(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={submitFeedback}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setFeedbackApp(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageApplications;
