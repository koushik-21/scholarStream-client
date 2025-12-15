// import React, { useState, useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthContext"; // make sure path is correct

// const Payment = () => {
//   const location = useLocation();
//   // const navigate = useNavigate();
//   const { user } = useContext(AuthContext); // get logged-in user from context
//   const scholarship = location.state?.scholarship;

//   const [loading, setLoading] = useState(false);

//   if (!scholarship) {
//     return <p className="p-6 text-center">No scholarship selected.</p>;
//   }

//   // Helper function to validate email
//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handlePayment = async () => {
//     if (!user?.email || !isValidEmail(user.email)) {
//       return alert(
//         "Your email is missing or invalid. Please check your account."
//       );
//     }

//     setLoading(true);

//     try {
//       const paymentData = {
//         scholarshipId: scholarship._id,
//         scholarshipName: scholarship.scholarshipName,
//         userId: user.uid,
//         userEmail: user.email, //  send valid email
//         userName: user.displayName || user.name || "Unknown",
//         applicationFees: Number(scholarship.applicationFees),
//       };

//       const res = await fetch(
//         "http://localhost:5000/scholarship-payment-session",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(paymentData),
//         }
//       );

//       const data = await res.json();

//       if (res.ok) {
//         // Redirect user to Stripe Checkout
//         window.location.href = data.url;
//       } else {
//         alert(data.error || "Payment session creation failed.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-10 max-w-2xl mx-auto border rounded-2xl border-gray-400 my-20">
//       <h1 className="text-2xl font-bold mb-4">{scholarship.scholarshipName}</h1>
//       <p>
//         <strong>University:</strong> {scholarship.universityName}
//       </p>
//       <p>
//         <strong>Degree:</strong> {scholarship.degree}
//       </p>
//       <p>
//         <strong>Application Fees:</strong> ${scholarship.applicationFees}
//       </p>

//       <button
//         onClick={handlePayment}
//         className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
//         disabled={loading}
//       >
//         {loading ? "Processing..." : "Pay & Apply"}
//       </button>
//     </div>
//   );
// };

// export default Payment;
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import { useAuth } from "../../contexts/AuthContext";

const Payment = () => {
  const { user } = useAuth();
  const { state } = useLocation();
  const scholarship = state?.scholarship;
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!user?.email) return alert("Please login first");

    setLoading(true);

    try {
      // 1️⃣ Create application (unpaid)
      const appRes = await fetch("http://localhost:5000/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scholarshipId: scholarship._id,
          scholarshipName: scholarship.scholarshipName,
          applicantEmail: user.email,
          applicantName: user.displayName || "Unknown",
          amount: Number(scholarship.applicationFees),
        }),
      });

      const appData = await appRes.json();

      // 2️⃣ Create Stripe session
      const payRes = await fetch(
        "http://localhost:5000/scholarship-payment-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            applicationId: appData.applicationId,
            scholarshipName: scholarship.scholarshipName,
            // amount: scholarship.applicationFees,
            userEmail: user.email,
          }),
        }
      );

      const payData = await payRes.json();
      window.location.href = payData.url;
    } catch (err) {
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {scholarship.scholarshipName}
        </h2>
        <p className="mb-4">Application Fee: ${scholarship.applicationFees}</p>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
        >
          {loading ? "Processing..." : "Pay & Apply"}
        </button>
      </div>
    </div>
  );
};

export default Payment;
