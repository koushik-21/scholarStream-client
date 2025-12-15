import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      setError("Invalid payment session.");
      setLoading(false);
      return;
    }

    const fetchPayment = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/scholarship-payment-success?session_id=${sessionId}`,
          {
            method: "PATCH", // backend যেভাবে বানানো আছে
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();

        if (!res.ok || !data?.success) {
          throw new Error("Payment verification failed");
        }

        setPaymentInfo(data);
      } catch (err) {
        console.error(err);
        setError("We could not verify your payment.");
      } finally {
        setLoading(false);
      }
    };

    fetchPayment();
  }, [sessionId]);

  // ⏳ Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <p className="text-green-600 text-xl font-semibold animate-pulse">
          Verifying payment...
        </p>
      </div>
    );
  }

  // ❌ Error / Failed
  if (error || !paymentInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Payment Failed
          </h1>
          <p className="text-gray-700 mb-6">
            {error || "Something went wrong. Please try again."}
          </p>
          <Link
            to="/payment"
            className="text-blue-600 font-semibold hover:underline"
          >
            Retry Payment
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Success
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Payment Successful!
        </h1>

        <p className="text-gray-700 mb-2">
          Amount Paid:{" "}
          <span className="font-semibold text-green-700">
            ${paymentInfo.amount}
          </span>
        </p>

        <p className="text-gray-700 mb-6">
          Transaction ID:
          <br />
          <span className="font-mono text-sm text-gray-500 break-all">
            {paymentInfo.transactionId}
          </span>
        </p>

        <Link
          to="/dashboard"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
