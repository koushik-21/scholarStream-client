// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useLocation, useNavigate } from "react-router";
// import useAuth from "../../hooks/useAuth";
// import SocialLogin from "../../components/SocailLogin/SocialLogin";
// import Swal from "sweetalert2";
// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const { signInUser } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = (data) => {
//     // console.log("form data", data);
//     signInUser(data.email, data.password)
//       .then((result) => {
//         // console.log(result.user);
//         // 🔥 SUCCESS ALERT
//         Swal.fire({
//           title: "Login Successful!",
//           text: "Welcome back!",
//           icon: "success",
//           timer: 1800,
//           showConfirmButton: false,
//         });

//         navigate(location?.state || "/");
//       })
//       .catch((error) => {
//         console.log(error);
//         Swal.fire({
//           title: "Login Failed!",
//           text: error.message,
//           icon: "error",
//         });
//       });
//   };

//   return (
//     <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl m-2">
//       <h3
//         className="text-3xl text-center font-bold
//       bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent inline-block"
//       >
//         Welcome Back
//       </h3>
//       <p className="text-center text-gray-600 font-semibold">Please Login</p>
//       <form className="card-body  py-0" onSubmit={handleSubmit(handleLogin)}>
//         <fieldset className="fieldset m-0 py-0">
//           {/* email field */}
//           <label className="label">Email</label>
//           <input
//             type="email"
//             {...register("email", { required: true })}
//             className="input"
//             placeholder="Email"
//           />
//           {errors.email?.type === "required" && (
//             <p className="text-red-500">Email is required</p>
//           )}

//           {/* password field */}
//           <label className="label">Password</label>
//           <input
//             type="password"
//             {...register("password", { required: true, minLength: 6 })}
//             className="input"
//             placeholder="Password"
//           />
//           {errors.password?.type === "minLength" && (
//             <p className="text-red-500">
//               Password must be 6 characters or longer{" "}
//             </p>
//           )}

//           <div>
//             <a className="link link-hover">Forgot password?</a>
//           </div>
//           <button className="btn btn-neutral mt-4">Login</button>
//         </fieldset>
//         <p>
//           New to this website?{" "}
//           <Link
//             state={location.state}
//             className="text-blue-400 underline"
//             to="/register"
//           >
//             Register
//           </Link>
//         </p>
//       </form>
//       <div className="mb-2">
//         <SocialLogin></SocialLogin>
//       </div>
//     </div>
//   );
// };

// export default Login;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.................>>>>>>>>>>>>>>>>>>>>>>>>>

import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocailLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Demo Login Handler
  const fillDemoCredentials = () => {
    setValue("email", "student12@gmail.com");
    setValue("password", "@1Asdf");

    Swal.fire({
      toast: true,
      position: "top",
      icon: "info",
      title: "Credentials Filled!",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome back, ${result.user?.displayName || "User"}!`,
          icon: "success",
          timer: 1800,
          showConfirmButton: false,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: "Invalid email or password. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl border border-base-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-center text-white">
          <h3 className="text-3xl font-black tracking-tight mb-2">
            ScholarStream
          </h3>
          <p className="text-blue-50 opacity-90 font-medium">
            Log in to manage your scholarships
          </p>
        </div>

        <div className="card-body p-8 pt-6">
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={`input input-bordered focus:input-primary ${errors.email ? "input-error" : ""}`}
                placeholder="name@example.com"
              />
              {errors.email && (
                <span className="text-error text-xs mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label flex justify-between">
                <span className="label-text font-bold">Password</span>
                {/* <span className="label-text-alt link link-hover text-primary font-medium">
                  Forgot?
                </span> */}
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
                className={`input input-bordered focus:input-primary ${errors.password ? "input-error" : ""}`}
                placeholder="••••••••"
              />
              {errors.password && (
                <span className="text-error text-xs mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Login Button */}
            <button className="btn btn-primary btn-block text-white font-bold mt-2">
              Sign In
            </button>
          </form>

          {/* Demo Login Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-base-300"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-base-100 px-2 text-base-content/40 font-bold">
                Quick Access
              </span>
            </div>
          </div>

          {/* Demo Button */}
          <button
            type="button"
            onClick={fillDemoCredentials}
            className="btn btn-outline btn-info btn-block gap-2 rounded-xl group"
          >
            <i className="fa-solid fa-user-shield transition-transform group-hover:scale-125"></i>
            Use Demo Student Account
          </button>

          <div className="divider opacity-50 my-4">OR</div>

          {/* Social Login */}
          <SocialLogin />

          <p className="text-center text-sm mt-4">
            New to ScholarStream?{" "}
            <Link
              state={location.state}
              className="text-primary font-bold hover:underline"
              to="/register"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
