// import React, { useEffect, useState } from "react";
// import { useSearchParams, Link } from "react-router-dom";

// const PaymentSuccess = () => {
//   const [params] = useSearchParams();
//   const sessionId = params.get("session_id");
//   const [loading, setLoading] = useState(true);
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     const verify = async () => {
//       try {
//         const res = await fetch(
//           `https://scholar-stream-server-mu.vercel.app/scholarship-payment-success?session_id=${sessionId}`,
//           { method: "PATCH" }
//         );
//         const data = await res.json();
//         setSuccess(data.success);
//       } catch {
//         setSuccess(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (sessionId) verify();
//   }, [sessionId]);

//   if (loading) return <p className="text-center mt-20">Verifying payment...</p>;

//   if (!success)
//     return (
//       <div className="text-center m-30 border border-gray-300 p-10">
//         <h2 className="text-red-600 text-2xl font-bold mb-3">Payment Failed</h2>
//         <Link to="/dashboard" className="text-blue-600 underline">
//           Return to Dashboard
//         </Link>
//       </div>
//     );

//   return (
//     <div className="text-center m-30 border border-gray-300 p-10">
//       <h2 className="text-green-600 text-3xl font-bold mb-3">
//         Payment Successful 🎉
//       </h2>
//       <Link to="/dashboard" className="text-blue-600 underline">
//         Go to Dashboard
//       </Link>
//     </div>
//   );
// };

// export default PaymentSuccess;
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
          `https://scholar-stream-server-mu.vercel.app/scholarship-payment-success?session_id=${sessionId}`,
          { method: "PATCH" },
        );
        const data = await res.json();
        setSuccess(data.success);
      } catch (err) {
        console.error("Verification error:", err);
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) {
      verify();
    } else {
      setLoading(false);
      setSuccess(false);
    }
  }, [sessionId]);

  // LOADING STATE
  if (loading)
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-xl font-bold animate-pulse">
          Verifying Payment Security...
        </p>
        <p className="text-sm opacity-50">Please do not close this window</p>
      </div>
    );

  // FAILURE STATE
  if (!success)
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-base-100 border border-error/20 shadow-2xl rounded-3xl p-8 text-center">
          <div className="w-20 h-20 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-circle-xmark text-4xl"></i>
          </div>
          <h2 className="text-3xl font-black text-error mb-2">
            Verification Failed
          </h2>
          <p className="text-base-content/70 mb-8">
            We couldn't confirm your transaction. If money was deducted, please
            contact support with your session ID.
          </p>
          <div className="bg-base-200 p-3 rounded-lg text-xs font-mono mb-6 break-all">
            ID: {sessionId || "No Session ID Found"}
          </div>
          <Link to="/dashboard" className="btn btn-error w-full rounded-xl">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );

  // SUCCESS STATE
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-base-100 border border-success/20 shadow-2xl rounded-3xl p-8 text-center relative overflow-hidden">
        {/* Celebration Background Element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-success"></div>

        <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <i className="fa-solid fa-circle-check text-5xl"></i>
        </div>

        <h2 className="text-3xl font-black text-success mb-2">
          Payment Verified!
        </h2>
        <p className="text-lg font-bold mb-2">
          Scholarship Application Submitted 🎉
        </p>
        <p className="text-sm opacity-60 mb-8">
          Your payment was processed successfully. You can now track your
          application status in your dashboard.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/dashboard/my-applications"
            className="btn btn-primary btn-lg rounded-xl"
          >
            View My Applications
          </Link>
          <Link to="/" className="btn btn-ghost">
            Back to Home
          </Link>
        </div>

        <p className="mt-8 text-[10px] opacity-40 uppercase font-bold tracking-widest">
          Secure Transaction via Stripe
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
