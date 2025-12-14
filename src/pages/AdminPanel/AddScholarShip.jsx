import React, { useState } from "react";
import Swal from "sweetalert2";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/allScholarships", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success!", "Scholarship Added Successfully", "success");
        e.target.reset();
      } else {
        Swal.fire("Error", data.message || "Something went wrong", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Server Error", "error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        {/* Scholarship Name */}
        <input
          name="scholarshipName"
          placeholder="Scholarship Name"
          className="input input-bordered"
          onChange={handleChange}
          required
        />

        {/* University Name */}
        <input
          name="universityName"
          placeholder="University Name"
          className="input input-bordered"
          onChange={handleChange}
          required
        />

        {/* University Image */}
        <input
          name="universityImage"
          placeholder="University Image URL"
          className="input input-bordered"
          onChange={handleChange}
        />

        {/* Country (Searchable + Any Country) */}
        <input
          list="countryList"
          name="universityCountry"
          placeholder="Type or Select Country"
          className="input input-bordered"
          onChange={handleChange}
          required
        />
        <datalist id="countryList">
          <option value="USA" />
          <option value="Canada" />
          <option value="UK" />
          <option value="Germany" />
          <option value="Australia" />
          <option value="Italy" />
          <option value="France" />
          <option value="Netherlands" />
          <option value="Sweden" />
          <option value="Finland" />
          <option value="Japan" />
          <option value="China" />
          <option value="Malaysia" />
          <option value="Singapore" />
          <option value="Bangladesh" />
          <option value="India" />
        </datalist>

        {/* City */}
        <input
          name="universityCity"
          placeholder="City"
          className="input input-bordered"
          onChange={handleChange}
          required
        />

        {/* World Rank */}
        {/* <input
          name="worldRank"
          type="number"
          placeholder="World Rank"
          className="input input-bordered"
          onChange={handleChange}
        /> */}

        <div>
          <input
            type="number"
            name="universityWorldRank"
            placeholder="World Rank"
            className="input input-bordered"
            required
            onChange={handleChange}
          />
        </div>

        {/* Subject Category */}
        <select
          name="subjectCategory"
          className="select select-bordered"
          onChange={handleChange}
          required
        >
          <option value="">Select Subject Category</option>
          <option value="Engineering">Engineering</option>
          <option value="Business">Business</option>
          <option value="Medical">Medical</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
        </select>

        {/* Scholarship Category (FILTER COMPATIBLE) */}
        <select
          name="scholarshipCategory"
          className="select select-bordered"
          onChange={handleChange}
          required
        >
          <option value="">Select Scholarship Category</option>
          <option value="Full Fund">Full Fund</option>
          <option value="Partial">Partial</option>
          <option value="Self-fund">Self-fund</option>
        </select>

        {/* Degree (SEARCH COMPATIBLE) */}
        <select
          name="degree"
          className="select select-bordered"
          onChange={handleChange}
          required
        >
          <option value="">Select Degree</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </select>

        {/* Tuition Fees */}
        <input
          name="tuitionFees"
          type="number"
          placeholder="Tuition Fees (Optional)"
          className="input input-bordered"
          onChange={handleChange}
        />

        {/* Application Fees (SORT COMPATIBLE) */}
        <input
          name="applicationFees"
          type="number"
          placeholder="Application Fees"
          className="input input-bordered"
          onChange={handleChange}
          required
        />

        {/* Service Charge */}
        <input
          name="serviceCharge"
          type="number"
          placeholder="Service Charge"
          className="input input-bordered"
          onChange={handleChange}
          required
        />

        {/* Deadline */}
        <input
          name="applicationDeadline"
          type="date"
          className="input input-bordered"
          onChange={handleChange}
          required
        />

        {/* User Email */}
        <input
          name="postedUserEmail"
          type="email"
          placeholder="User Email"
          className="input input-bordered"
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="md:col-span-2 mt-4 py-3 rounded text-white font-bold
          bg-gradient-to-r from-blue-600 to-cyan-400"
        >
          Add Scholarship
        </button>
      </form>
    </div>
  );
};

export default AddScholarShip;
