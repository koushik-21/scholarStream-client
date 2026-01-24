import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    // Simulate API Call
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. Our team will contact you soon.",
      icon: "success",
      confirmButtonColor: "#2563eb",
      background:
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "#1d232a"
          : "#fff",
      color:
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "#a6adbb"
          : "#545454",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {/* Header Section */}
      <div className="bg-base-200 py-16 px-4 text-center border-b border-base-300">
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block">
          Get In Touch
        </h1>
        <p className="mt-4 opacity-70 max-w-2xl mx-auto text-lg">
          Have questions about a scholarship or need technical support? Our team
          is here to help you navigate your journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info Cards */}
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Email */}
              <div className="card bg-base-200 p-6 border border-base-300 hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <i className="fa-solid fa-envelope text-primary group-hover:text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-sm opacity-70">support@scholarstream.com</p>
                <p className="text-sm opacity-70">info@scholarstream.com</p>
              </div>

              {/* Card 2: Phone */}
              <div className="card bg-base-200 p-6 border border-base-300 hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <i className="fa-solid fa-phone text-secondary group-hover:text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-sm opacity-70">+1 (555) 000-1234</p>
                <p className="text-sm opacity-70">Mon - Fri, 9am - 6pm</p>
              </div>

              {/* Card 3: Location */}
              <div className="card bg-base-200 p-6 border border-base-300 hover:border-primary transition-colors group sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-error/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-error transition-colors">
                    <i className="fa-solid fa-location-dot text-error group-hover:text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Global Headquarters</h3>
                    <p className="text-sm opacity-70">
                      123 Scholarship Way, Education District
                    </p>
                    <p className="text-sm opacity-70">
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-8 bg-base-300 rounded-3xl border border-base-300">
              <h4 className="font-bold mb-4">Follow our updates</h4>
              <div className="flex gap-4">
                {["facebook", "twitter", "linkedin", "instagram"].map(
                  (social) => (
                    <button
                      key={social}
                      className="btn btn-circle btn-outline btn-primary hover:text-white capitalize"
                    >
                      <i className={`fa-brands fa-${social}`}></i>
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="card bg-base-200 shadow-2xl border border-base-300 order-1 lg:order-2">
            <div className="card-body p-8">
              <h2 className="card-title text-2xl font-bold mb-4 text-primary">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Full Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered bg-base-100 focus:input-primary"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <span className="text-error text-xs mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Email Address
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="input input-bordered bg-base-100 focus:input-primary"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <span className="text-error text-xs mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Subject</span>
                  </label>
                  <select
                    className="select select-bordered bg-base-100 focus:select-primary"
                    {...register("subject")}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Scholarship Support">
                      Scholarship Support
                    </option>
                    <option value="Payment Issue">Payment Issue</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32 bg-base-100 focus:textarea-primary"
                    placeholder="How can we help you?"
                    {...register("message", {
                      required: "Message cannot be empty",
                    })}
                  ></textarea>
                  {errors.message && (
                    <span className="text-error text-xs mt-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full shadow-lg shadow-primary/20 text-white font-bold"
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
