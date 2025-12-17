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
      const appRes = await fetch(
        "https://scholar-stream-server-mu.vercel.app/applications",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            scholarshipId: scholarship._id,
            scholarshipName: scholarship.scholarshipName,
            applicantEmail: user.email,
            applicantName: user.displayName || "Unknown",
            amount: Number(scholarship.applicationFees),
          }),
        }
      );

      const appData = await appRes.json();

      // 2️⃣ Create Stripe session
      const payRes = await fetch(
        "https://scholar-stream-server-mu.vercel.app/scholarship-payment-session",
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
