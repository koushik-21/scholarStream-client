// import React, { useState } from "react";
// import Swal from "sweetalert2";

// const AddScholarShip = () => {
//   const [formData, setFormData] = useState({
//     scholarshipName: "",
//     universityName: "",
//     universityImage: "",
//     universityCountry: "",
//     universityCity: "",
//     universityWorldRank: "",
//     subjectCategory: "",
//     scholarshipCategory: "",
//     degree: "",
//     tuitionFees: "",
//     applicationFees: "",
//     serviceCharge: "",
//     applicationDeadline: "",
//     postedUserEmail: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(
//         "https://scholar-stream-server-mu.vercel.app/allScholarships",
//         {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await res.json();

//       if (res.ok) {
//         Swal.fire("Success!", "Scholarship Added Successfully", "success");
//         e.target.reset();
//       } else {
//         Swal.fire("Error", data.message || "Something went wrong", "error");
//       }
//     } catch (error) {
//       Swal.fire("Error", "Server Error", "error");
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded">
//       <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
//         {/* Scholarship Name */}
//         <input
//           name="scholarshipName"
//           placeholder="Scholarship Name"
//           className="input input-bordered"
//           onChange={handleChange}
//           required
//         />

//         {/* University Name */}
//         <input
//           name="universityName"
//           placeholder="University Name"
//           className="input input-bordered"
//           onChange={handleChange}
//           required
//         />

//         {/* University Image */}
//         <input
//           name="universityImage"
//           placeholder="University Image URL"
//           className="input input-bordered"
//           onChange={handleChange}
//         />

//         {/* Country (Searchable + Any Country) */}
//         <input
//           list="countryList"
//           name="universityCountry"
//           placeholder="Type or Select Country"
//           className="input input-bordered"
//           onChange={handleChange}
//           required
//         />
//         <datalist id="countryList">
//           <option value="USA" />
//           <option value="Canada" />
//           <option value="UK" />
//           <option value="Germany" />
//           <option value="Australia" />
//           <option value="Italy" />
//           <option value="France" />
//           <option value="Netherlands" />
//           <option value="Sweden" />
//           <option value="Finland" />
//           <option value="Japan" />
//           <option value="China" />
//           <option value="Malaysia" />
//           <option value="Singapore" />
//           <option value="Bangladesh" />
//           <option value="India" />
//         </datalist>

//         {/* City */}
//         <input
//           name="universityCity"
//           placeholder="City"
//           className="input input-bordered"
//           onChange={handleChange}
//           required
//         />

//         {/* World Rank */}
//         {/* <input
//           name="worldRank"
//           type="number"
//           placeholder="World Rank"
//           className="input input-bordered"
//           onChange={handleChange}
//         /> */}

//         <div>
//           <input
//             type="number"
//             name="universityWorldRank"
//             placeholder="World Rank"
//             className="input input-bordered"
//             required
//             onChange={handleChange}
//           />
//         </div>

//         {/* Subject Category */}
//         <select
//           name="subjectCategory"
//           className="select select-bordered"
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Subject Category</option>
//           <option value="Engineering">Engineering</option>
//           <option value="Business">Business</option>
//           <option value="Medical">Medical</option>
//           <option value="Science">Science</option>
//           <option value="Arts">Arts</option>
//         </select>

//         {/* Scholarship Category (FILTER COMPATIBLE) */}
//         <select
//           name="scholarshipCategory"
//           className="select select-bordered"
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Scholarship Category</option>
//           <option value="Full Fund">Full Fund</option>
//           <option value="Partial">Partial</option>
//           <option value="Self-fund">Self-fund</option>
//         </select>

//         {/* Degree (SEARCH COMPATIBLE) */}
//         <select
//           name="degree"
//           className="select select-bordered"
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Degree</option>
//           <option value="Bachelor">Bachelor</option>
//           <option value="Master">Master</option>
//           <option value="PhD">PhD</option>
//         </select>

//         {/* Tuition Fees */}
//         <input
//           name="tuitionFees"
//           type="number"
//           placeholder="Tuition Fees (Optional)"
//           className="input input-bordered"
//           onChange={handleChange}
//         />

//         {/* Application Fees (SORT COMPATIBLE) */}
//         <input
//           name="applicationFees"
//           type="number"
//           placeholder="Application Fees"
//           className="input input-bordered"
//           onChange={handleChange}
//           required
//         />

//         {/* Service Charge */}
//         <input
//           name="serviceCharge"
//           type="number"
//           placeholder="Service Charge"
//           className="input input-bordered"
//           onChange={handleChange}
//           required
//         />

//         {/* Deadline */}
//         <input
//           name="applicationDeadline"
//           type="date"
//           className="input input-bordered"
//           onChange={handleChange}
//           required
//         />

//         {/* User Email */}
//         <input
//           name="postedUserEmail"
//           type="email"
//           placeholder="User Email"
//           className="input input-bordered"
//           onChange={handleChange}
//           required
//         />

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="md:col-span-2 mt-4 py-3 rounded text-white font-bold
//           bg-gradient-to-r from-blue-600 to-cyan-400"
//         >
//           Add Scholarship
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddScholarShip;

import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth"; // Assuming you want to auto-fill the user email

const AddScholarShip = () => {
  const { user } = useAuth();

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
    postedUserEmail: user?.email || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://scholar-stream-server-mu.vercel.app/allScholarships",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "Success!",
          text: "Scholarship Added Successfully",
          icon: "success",
          background:
            document.documentElement.getAttribute("data-theme") === "dark"
              ? "#1d232a"
              : "#fff",
          color:
            document.documentElement.getAttribute("data-theme") === "dark"
              ? "#a6adbb"
              : "#545454",
        });
        e.target.reset();
      } else {
        Swal.fire("Error", data.message || "Something went wrong", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Server Error", "error");
    }
  };

  const inputClass =
    "input input-bordered w-full bg-base-100 focus:input-primary transition-all";
  const labelClass = "label-text font-semibold opacity-80";

  return (
    <div className="w-full transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Scholarship Name */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>Scholarship Name</span>
          </label>
          <input
            name="scholarshipName"
            placeholder="e.g. Global Excellence"
            className={inputClass}
            onChange={handleChange}
            required
          />
        </div>

        {/* University Name */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>University Name</span>
          </label>
          <input
            name="universityName"
            placeholder="e.g. Harvard University"
            className={inputClass}
            onChange={handleChange}
            required
          />
        </div>

        {/* University Image */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>University Image URL</span>
          </label>
          <input
            name="universityImage"
            placeholder="https://..."
            className={inputClass}
            onChange={handleChange}
          />
        </div>

        {/* Country */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>Country</span>
          </label>
          <input
            list="countryList"
            name="universityCountry"
            placeholder="Type or Select"
            className={inputClass}
            onChange={handleChange}
            required
          />
          <datalist id="countryList">
            {[
              "USA",
              "Canada",
              "UK",
              "Germany",
              "Australia",
              "Italy",
              "Japan",
              "Bangladesh",
            ].map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        {/* City */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>City</span>
          </label>
          <input
            name="universityCity"
            placeholder="City"
            className={inputClass}
            onChange={handleChange}
            required
          />
        </div>

        {/* World Rank */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>World Rank</span>
          </label>
          <input
            type="number"
            name="universityWorldRank"
            placeholder="Rank"
            className={inputClass}
            onChange={handleChange}
            required
          />
        </div>

        {/* Subject Category */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>Subject Category</span>
          </label>
          <select
            name="subjectCategory"
            className="select select-bordered bg-base-100"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Medical">Medical</option>
            <option value="Science">Science</option>
          </select>
        </div>

        {/* Scholarship Category */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>Scholarship Category</span>
          </label>
          <select
            name="scholarshipCategory"
            className="select select-bordered bg-base-100"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Full Fund">Full Fund</option>
            <option value="Partial">Partial</option>
            <option value="Self-fund">Self-fund</option>
          </select>
        </div>

        {/* Degree */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>Degree</span>
          </label>
          <select
            name="degree"
            className="select select-bordered bg-base-100"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        {/* Fees Row */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>Tuition Fees ($)</span>
          </label>
          <input
            name="tuitionFees"
            type="number"
            placeholder="Optional"
            className={inputClass}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className={labelClass}>Application Fees ($)</span>
          </label>
          <input
            name="applicationFees"
            type="number"
            placeholder="Amount"
            className={inputClass}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className={labelClass}>Service Charge ($)</span>
          </label>
          <input
            name="serviceCharge"
            type="number"
            placeholder="Amount"
            className={inputClass}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date & User */}
        <div className="form-control">
          <label className="label">
            <span className={labelClass}>Application Deadline</span>
          </label>
          <input
            name="applicationDeadline"
            type="date"
            className={inputClass}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control md:col-span-2">
          <label className="label">
            <span className={labelClass}>Admin Email</span>
          </label>
          <input
            name="postedUserEmail"
            type="email"
            value={formData.postedUserEmail}
            readOnly
            className={`${inputClass} bg-base-200 cursor-not-allowed`}
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 lg:col-span-3 pt-4">
          <button
            type="submit"
            className="btn btn-primary w-full shadow-lg shadow-primary/20 text-white font-bold text-lg"
          >
            <i className="fa-solid fa-cloud-arrow-up mr-2"></i>
            Publish Scholarship
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddScholarShip;
