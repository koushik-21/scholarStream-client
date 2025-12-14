import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"; // make sure path is correct

const Payment = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const { user } = useContext(AuthContext); // get logged-in user from context
  const scholarship = location.state?.scholarship;

  const [loading, setLoading] = useState(false);

  if (!scholarship) {
    return <p className="p-6 text-center">No scholarship selected.</p>;
  }

  // Helper function to validate email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handlePayment = async () => {
    if (!user?.email || !isValidEmail(user.email)) {
      return alert(
        "Your email is missing or invalid. Please check your account."
      );
    }

    setLoading(true);

    try {
      const paymentData = {
        scholarshipId: scholarship._id,
        scholarshipName: scholarship.scholarshipName,
        userId: user.uid,
        userEmail: user.email, // ✅ send valid email
        applicationFees: Number(scholarship.applicationFees),
      };

      const res = await fetch(
        "http://localhost:5000/scholarship-payment-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(paymentData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        // Redirect user to Stripe Checkout
        window.location.href = data.url;
      } else {
        alert(data.error || "Payment session creation failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{scholarship.scholarshipName}</h1>
      <p>
        <strong>University:</strong> {scholarship.universityName}
      </p>
      <p>
        <strong>Degree:</strong> {scholarship.degree}
      </p>
      <p>
        <strong>Application Fees:</strong> ${scholarship.applicationFees}
      </p>

      <button
        onClick={handlePayment}
        className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay & Apply"}
      </button>
    </div>
  );
};

export default Payment;
