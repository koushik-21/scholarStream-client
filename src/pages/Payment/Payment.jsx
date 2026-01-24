// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// // import { useAuth } from "../../contexts/AuthContext";

// const Payment = () => {
//   const { user } = useAuth();
//   const { state } = useLocation();
//   const scholarship = state?.scholarship;
//   const [loading, setLoading] = useState(false);

//   const handlePayment = async () => {
//     if (!user?.email) return alert("Please login first");

//     setLoading(true);

//     try {
//       // 1️⃣ Create application (unpaid)
//       const appRes = await fetch(
//         "https://scholar-stream-server-mu.vercel.app/applications",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             scholarshipId: scholarship._id,
//             scholarshipName: scholarship.scholarshipName,
//             applicantEmail: user.email,
//             applicantName: user.displayName || "Unknown",
//             amount: Number(scholarship.applicationFees),
//           }),
//         }
//       );

//       const appData = await appRes.json();

//       // 2️⃣ Create Stripe session
//       const payRes = await fetch(
//         "https://scholar-stream-server-mu.vercel.app/scholarship-payment-session",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             applicationId: appData.applicationId,
//             scholarshipName: scholarship.scholarshipName,
//             // amount: scholarship.applicationFees,
//             userEmail: user.email,
//           }),
//         }
//       );

//       const payData = await payRes.json();
//       window.location.href = payData.url;
//     } catch (err) {
//       alert("Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">
//           {scholarship.scholarshipName}
//         </h2>
//         <p className="mb-4">Application Fee: ${scholarship.applicationFees}</p>

//         <button
//           onClick={handlePayment}
//           disabled={loading}
//           className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
//         >
//           {loading ? "Processing..." : "Pay & Apply"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;

//>>>>>>>>>>>>>>>>>>>>>...>>>>>>>>>>>>>>>>>>>>s
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Payment = () => {
  const { user } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const scholarship = state?.scholarship;
  const [loading, setLoading] = useState(false);

  // Redirect if someone tries to access /payment without scholarship data
  if (!scholarship) {
    navigate("/all-scholarship");
    return null;
  }

  const handlePayment = async () => {
    if (!user?.email) {
      return Swal.fire(
        "Login Required",
        "Please login to proceed with the application.",
        "warning",
      );
    }

    setLoading(true);

    try {
      // 1️⃣ Create application (unpaid)
      const appRes = await fetch(
        "https://scholar-stream-server-mu.vercel.app/applications",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            scholarshipId: scholarship._id,
            scholarshipName: scholarship.scholarshipName,
            universityName: scholarship.universityName,
            applicantEmail: user.email,
            applicantName: user.displayName || "Unknown",
            amount: Number(scholarship.applicationFees),
          }),
        },
      );

      const appData = await appRes.json();

      if (!appData.applicationId) throw new Error("App Creation Failed");

      // 2️⃣ Create Stripe session
      const payRes = await fetch(
        "https://scholar-stream-server-mu.vercel.app/scholarship-payment-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            applicationId: appData.applicationId,
            scholarshipName: scholarship.scholarshipName,
            userEmail: user.email,
          }),
        },
      );

      const payData = await payRes.json();

      // Redirect to Stripe Checkout
      window.location.href = payData.url;
    } catch (err) {
      console.error(err);
      Swal.fire(
        "Error",
        "Something went wrong during the payment process.",
        "error",
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300">
        <div className="card-body">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i className="fa-solid fa-credit-card text-3xl text-primary"></i>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Checkout
            </h2>
            <p className="text-sm opacity-60">
              Complete your application fee payment
            </p>
          </div>

          {/* Order Summary Box */}
          <div className="bg-base-200 rounded-2xl p-5 space-y-3 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold opacity-50 uppercase tracking-widest">
                  Scholarship
                </p>
                <p className="font-bold leading-tight">
                  {scholarship.scholarshipName}
                </p>
              </div>
              <span className="badge badge-primary">
                ID: {scholarship._id.slice(-5)}
              </span>
            </div>

            <div className="divider my-1 opacity-20"></div>

            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">Application Processing Fee</p>
              <p className="text-lg font-black">
                ${scholarship.applicationFees}
              </p>
            </div>
          </div>

          {/* Secure Note */}
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg text-green-700 text-xs mb-6 border border-green-200">
            <i className="fa-solid fa-shield-halved text-lg"></i>
            <p>
              Your payment is secured by Stripe. No card data is stored on our
              servers.
            </p>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className={`btn btn-primary btn-lg w-full rounded-xl transition-all ${
              loading ? "loading" : ""
            }`}
          >
            {loading
              ? "Redirecting..."
              : `Pay $${scholarship.applicationFees} Now`}
          </button>

          <button
            className="btn btn-ghost btn-sm mt-4 opacity-50 hover:opacity-100"
            onClick={() => navigate(-1)}
            disabled={loading}
          >
            Cancel and Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
