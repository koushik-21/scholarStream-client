import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/scholarship-payment-success?session_id=${sessionId}`,
          { method: "PATCH" }
        );
        const data = await res.json();
        setSuccess(data.success);
      } catch {
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) verify();
  }, [sessionId]);

  if (loading) return <p className="text-center mt-20">Verifying payment...</p>;

  if (!success)
    return (
      <div className="text-center m-30 border border-gray-300 p-10">
        <h2 className="text-red-600 text-2xl font-bold mb-3">Payment Failed</h2>
        <Link to="/dashboard" className="text-blue-600 underline">
          Return to Dashboard
        </Link>
      </div>
    );

  return (
    <div className="text-center m-30 border border-gray-300 p-10">
      <h2 className="text-green-600 text-3xl font-bold mb-3">
        Payment Successful 🎉
      </h2>
      <Link to="/dashboard" className="text-blue-600 underline">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default PaymentSuccess;
