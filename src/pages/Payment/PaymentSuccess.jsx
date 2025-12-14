import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/scholarship-payment-success?session_id=${sessionId}`,
          {
            method: "PATCH",
          }
        );
        const data = await res.json();
        setPaymentInfo(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) fetchPayment();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <p className="text-green-600 text-xl font-semibold">
          Verifying payment...
        </p>
      </div>
    );
  }

  if (!paymentInfo?.success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Payment Failed
          </h1>
          <p className="text-gray-700 mb-6">
            We could not verify your payment. Please try again.
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-2">
          Amount Paid:{" "}
          <span className="font-semibold">
            ${paymentInfo.paymentInfo.amount}
          </span>
        </p>
        <p className="text-gray-700 mb-6">
          Transaction ID:{" "}
          <span className="font-mono">{paymentInfo.transactionId}</span>
        </p>
        <Link
          to="/dashboard"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
