// import React from "react";
// import { useSearchParams, Link } from "react-router-dom";

// const PaymentFailed = () => {
//   const [params] = useSearchParams();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
//       <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
//         <h1 className="text-3xl font-bold text-red-600 mb-3">
//           ❌ Payment Failed
//         </h1>

//         <p className="text-gray-700 mb-2">
//           {/* <strong>Scholarship:</strong> {params.get("scholarship") || "Unknown"} */}
//           <strong>Scholarship:</strong> Unknown
//         </p>

//         <p className="text-red-500 mb-6">
//           Payment could not be completed. You can retry from your dashboard.
//         </p>

//         <Link
//           to="/dashboard"
//           className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
//         >
//           Return to Dashboard
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PaymentFailed;
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>........................

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-base-100">
      <div className="max-w-md w-full bg-base-100 border border-base-300 shadow-2xl rounded-3xl overflow-hidden">
        {/* Top Warning Bar */}
        <div className="h-2 bg-error"></div>

        <div className="p-8 text-center">
          {/* Icon Section */}
          <div className="w-20 h-20 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-hand-holding-dollar text-3xl"></i>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-base-content mb-3">
            Payment Cancelled
          </h1>

          <p className="text-base-content/70 mb-8 leading-relaxed">
            Your transaction was not completed. This could be due to a manual
            cancellation or a technical issue with the payment provider.
          </p>

          {/* Info Card */}
          <div className="bg-base-200 rounded-2xl p-4 mb-8 text-left flex items-start gap-4">
            <i className="fa-solid fa-circle-info text-info mt-1"></i>
            <div>
              <p className="text-sm font-bold">What happens next?</p>
              <p className="text-xs opacity-70">
                Don't worry, your application progress is saved as "Pending
                Payment" in your dashboard. You can try again whenever you're
                ready.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              to="/dashboard/my-applications"
              className="btn btn-error btn-outline rounded-xl"
            >
              <i className="fa-solid fa-rotate-left"></i>
              Retry from Dashboard
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="btn btn-ghost btn-sm opacity-50 hover:opacity-100"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-base-200 py-4 px-8 text-center border-t border-base-300">
          <p className="text-[10px] uppercase font-bold opacity-40 tracking-widest">
            ScholarStream Secure Payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
