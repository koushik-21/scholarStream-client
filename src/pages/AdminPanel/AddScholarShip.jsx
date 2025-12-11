// import React from "react";

// const AddScholarShip = () => {
//   return (
//     <div className="border p-5 border-gray-400 rounded-xl">
//       <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Scholarship Name */}
//         <div>
//           <label className="label">
//             <span className="label-text">Scholarship Name</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             placeholder="Scholarship Name"
//           />
//         </div>

//         {/* University Name */}
//         <div>
//           <label className="label">
//             <span className="label-text">University Name</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             placeholder="University Name"
//           />
//         </div>

//         {/* Image URL */}
//         <div>
//           <label className="label">
//             <span className="label-text">Image URL</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             placeholder="Image URL"
//           />
//         </div>

//         {/* Country */}
//         <div>
//           <label className="label">
//             <span className="label-text">Country</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             placeholder="Country"
//           />
//         </div>

//         {/* City */}
//         <div>
//           <label className="label">
//             <span className="label-text">City</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             placeholder="City"
//           />
//         </div>

//         {/* World Rank */}
//         <div>
//           <label className="label">
//             <span className="label-text">World Rank</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="number"
//             placeholder="World Rank"
//           />
//         </div>

//         {/* Subject Category */}
//         <div>
//           <label className="label">
//             <span className="label-text">Subject Category</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             placeholder="Subject Category"
//           />
//         </div>

//         {/* Scholarship Category */}
//         <div>
//           <label className="label">
//             <span className="label-text">Scholarship Category</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             placeholder="Scholarship Category"
//           />
//         </div>

//         {/* Degree */}
//         <div>
//           <label className="label">
//             <span className="label-text">Degree</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             placeholder="Degree"
//           />
//         </div>

//         {/* Tuition Fees (optional) */}
//         <div>
//           <label className="label">
//             <span className="label-text">Tuition Fees (optional)</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="number"
//             placeholder="Tuition Fees (optional)"
//           />
//         </div>

//         {/* Application Fees */}
//         <div>
//           <label className="label">
//             <span className="label-text">Application Fees</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="number"
//             placeholder="Application Fees"
//           />
//         </div>

//         {/* Service Charge */}
//         <div>
//           <label className="label">
//             <span className="label-text">Service Charge</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="number"
//             placeholder="Service Charge"
//           />
//         </div>

//         {/* Deadline */}
//         <div>
//           <label className="label">
//             <span className="label-text">Deadline</span>
//           </label>
//           <input type="date" className="input input-bordered w-full" />
//         </div>

//         {/* User Email */}
//         <div>
//           <label className="label">
//             <span className="label-text">User Email</span>
//           </label>
//           <input
//             className="input input-bordered w-full"
//             type="email"
//             placeholder="User Email"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="col-span-full">
//           <button className="btn btn-primary w-full py-2 rounded font-extrabold tracking-wide text-white font-[Poppins] bg-gradient-to-r from-blue-500 to-cyan-400">
//             Add Scholarship
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddScholarShip;
import React, { useState } from "react";
import axios from "axios";

const AddScholarShip = () => {
  const [formData, setFormData] = useState({
    scholarshipName: "",
    universityName: "",
    universityImage: "",
    universityCountry: "",
    universityCity: "",
    universityWorldRank: "",
    subjectCategory: "",
    scholarshipCategory: "",
    degree: "",
    tuitionFees: "",
    applicationFees: "",
    serviceCharge: "",
    applicationDeadline: "",
    postedUserEmail: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:5000/allScholarships",
        formData
      );
      setMessage(res.data.message);
      setFormData({
        scholarshipName: "",
        universityName: "",
        universityImage: "",
        universityCountry: "",
        universityCity: "",
        universityWorldRank: "",
        subjectCategory: "",
        scholarshipCategory: "",
        degree: "",
        tuitionFees: "",
        applicationFees: "",
        serviceCharge: "",
        applicationDeadline: "",
        postedUserEmail: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border p-5 border-gray-400 rounded-xl max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Add Scholarship</h2>
      {message && (
        <p
          className={`mb-3 text-center font-semibold ${
            message.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      <form
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        onSubmit={handleSubmit}
      >
        {[
          { name: "scholarshipName", label: "Scholarship Name", type: "text" },
          { name: "universityName", label: "University Name", type: "text" },
          { name: "universityImage", label: "Image URL", type: "text" },
          { name: "universityCountry", label: "Country", type: "text" },
          { name: "universityCity", label: "City", type: "text" },
          { name: "universityWorldRank", label: "World Rank", type: "number" },
          { name: "subjectCategory", label: "Subject Category", type: "text" },
          {
            name: "scholarshipCategory",
            label: "Scholarship Category",
            type: "text",
          },
          { name: "degree", label: "Degree", type: "text" },
          {
            name: "tuitionFees",
            label: "Tuition Fees (optional)",
            type: "number",
          },
          {
            name: "applicationFees",
            label: "Application Fees",
            type: "number",
          },
          { name: "serviceCharge", label: "Service Charge", type: "number" },
          { name: "applicationDeadline", label: "Deadline", type: "date" },
          { name: "postedUserEmail", label: "User Email", type: "email" },
        ].map((field) => (
          <div key={field.name}>
            <label className="label">
              <span className="label-text">{field.label}</span>
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder={field.label}
            />
          </div>
        ))}

        {/* Submit Button */}
        <div className="col-span-full">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full py-2 rounded font-extrabold tracking-wide text-white font-[Poppins] bg-gradient-to-r from-blue-500 to-cyan-400"
          >
            {loading ? "Submitting..." : "Add Scholarship"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddScholarShip;
