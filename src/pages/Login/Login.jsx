import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocailLogin/SocialLogin";
import Swal from "sweetalert2";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    // console.log("form data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // 🔥 SUCCESS ALERT
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
          timer: 1800,
          showConfirmButton: false,
        });

        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl m-2">
      <h3 className="text-2xl text-center">Welcome Back Scholar</h3>
      <p className="text-center text-gray-600 font-semibold">Please Login</p>
      <form className="card-body  py-0" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset m-0 py-0">
          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* password field */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer{" "}
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>
          New to this website?{" "}
          <Link
            state={location.state}
            className="text-blue-400 underline"
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>
      <div className="mb-2">
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
