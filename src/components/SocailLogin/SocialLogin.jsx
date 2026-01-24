// import React from "react";
// import { useLocation, useNavigate } from "react-router";
// import useAuth from "../../hooks/useAuth";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

// const SocialLogin = () => {
//   const { signInGoogle } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleGoogleSignIn = () => {
//     signInGoogle()
//       .then((result) => {
//         // console.log(result.user);

//         // create user in the database
//         const userInfo = {
//           email: result.user.email,
//           displayName: result.user.displayName,
//           photoURL: result.user.photoURL,
//         };

//         axiosSecure.post("/users", userInfo).then((res) => {
//           // console.log("user data has been stored", res.data);
//           // navigate(location.state || "/");
//           window.location.href = location.state || "/";
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="text-center w-full p-4">
//       <div className="divider">OR</div>

//       <button
//         onClick={handleGoogleSignIn}
//         className="btn font-semibold  border-gray rounded w-full bg-gray-200
//         hover:bg-blue-200 transition-all"
//       >
//         <svg
//           aria-label="Google logo"
//           width="16"
//           height="16"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//         >
//           <g>
//             <path d="m0 0H512V512H0" fill="#fff"></path>
//             <path
//               fill="#34a853"
//               d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//             ></path>
//             <path
//               fill="#4285f4"
//               d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//             ></path>
//             <path
//               fill="#fbbc02"
//               d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//             ></path>
//             <path
//               fill="#ea4335"
//               d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//             ></path>
//           </g>
//         </svg>
//         Login with Google
//       </button>
//     </div>
//   );
// };

// export default SocialLogin;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInGoogle } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInGoogle();

      const userInfo = {
        email: result.user?.email,
        displayName: result.user?.displayName,
        photoURL: result.user?.photoURL,
        role: "student", // Default role for new social logins
        createdAt: new Date(),
      };

      // Store user in DB
      const res = await axiosSecure.post("/users", userInfo);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Welcome, ${result.user?.displayName}!`,
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });

      // Navigate to the intended page or home
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google Sign In Error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Could not authenticate with Google. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 pb-6">
      <div className="divider opacity-50 text-xs font-bold uppercase tracking-widest">
        Or Continue With
      </div>

      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className={`btn btn-outline w-full rounded-xl border-base-300 normal-case font-bold gap-3 transition-all duration-300 hover:bg-base-200 hover:text-base-content ${
          loading ? "loading" : ""
        }`}
      >
        {!loading && (
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
        )}
        {loading ? "Authenticating..." : "Sign in with Google"}
      </button>

      <p className="mt-4 text-[10px] text-center opacity-40 leading-relaxed px-6">
        By continuing, you agree to ScholarStream's
        <span className="underline cursor-pointer ml-1">Terms of Service</span>.
      </p>
    </div>
  );
};

export default SocialLogin;
