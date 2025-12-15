import React from "react";
import { useSearchParams, Link } from "react-router-dom";

const PaymentFailed = () => {
  const [params] = useSearchParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-3">
          ❌ Payment Failed
        </h1>

        <p className="text-gray-700 mb-2">
          {/* <strong>Scholarship:</strong> {params.get("scholarship") || "Unknown"} */}
          <strong>Scholarship:</strong> Unknown
        </p>

        <p className="text-red-500 mb-6">
          Payment could not be completed. You can retry from your dashboard.
        </p>

        <Link
          to="/dashboard"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;
