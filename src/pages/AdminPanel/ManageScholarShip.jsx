// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";

// const ManageScholarShip = () => {
//   const [scholarships, setScholarships] = useState([]);
//   const [selectedScholarship, setSelectedScholarship] = useState(null);
//   const [formData, setFormData] = useState({});

//   //  Fetch all scholarships (NO LIMIT)
//   const fetchScholarships = async () => {
//     try {
//       const res = await fetch(
//         "https://scholar-stream-server-mu.vercel.app/admin/allScholarships"
//       );
//       if (!res.ok) throw new Error("Failed to fetch scholarships");
//       const data = await res.json();
//       setScholarships(data);
//     } catch (error) {
//       console.error("Error fetching scholarships:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetchScholarships();
//     };
//     fetchData();
//   }, []);

//   //  DELETE
//   const handleDelete = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Are you sure?",
//       text: "This scholarship will be deleted!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (confirm.isConfirmed) {
//       await fetch(
//         `https://scholar-stream-server-mu.vercel.app/allScholarships/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       Swal.fire("Deleted!", "Scholarship has been deleted.", "success");
//       fetchScholarships();
//     }
//   };

//   //  OPEN UPDATE MODAL
//   const openUpdateModal = (scholarship) => {
//     setSelectedScholarship(scholarship);
//     setFormData(scholarship);
//   };

//   //  CLOSE MODAL
//   const closeModal = () => {
//     setSelectedScholarship(null);
//   };

//   // ✍️ INPUT CHANGE
//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "number" ? Number(value) : value,
//     });
//   };

//   //  UPDATE SUBMIT
//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(
//         `https://scholar-stream-server-mu.vercel.app/allScholarships/${selectedScholarship._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (res.ok) {
//         Swal.fire("Updated!", "Scholarship updated successfully", "success");
//         closeModal();
//         fetchScholarships();
//       } else {
//         const errorData = await res.json();
//         Swal.fire("Error", errorData.message || "Update failed", "error");
//       }
//     } catch (error) {
//       console.error("Update error:", error);
//       Swal.fire("Error", "Something went wrong", "error");
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">
//         Manage Scholarships ({scholarships.length})
//       </h2>

//       {/* 📋 TABLE */}
//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Scholarship</th>
//               <th>University</th>
//               <th>Country</th>
//               <th>Degree</th>
//               <th>Fees</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {scholarships.map((item, index) => (
//               <tr key={item._id}>
//                 <td>{index + 1}</td>
//                 <td>{item.scholarshipName}</td>
//                 <td>{item.universityName}</td>
//                 <td>{item.universityCountry}</td>
//                 <td>{item.degree}</td>
//                 <td>{item.applicationFees}$</td>
//                 <td className="space-x-2">
//                   <button
//                     onClick={() => openUpdateModal(item)}
//                     className="btn btn-sm btn-info"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item._id)}
//                     className="btn btn-sm btn-error"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* 🪟 UPDATE MODAL */}
//       {selectedScholarship && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
//             <h3 className="text-xl font-bold mb-4">Update Scholarship</h3>

//             <form
//               onSubmit={handleUpdate}
//               className="grid grid-cols-1 md:grid-cols-2 gap-4"
//             >
//               <input
//                 name="scholarshipName"
//                 value={formData.scholarshipName || ""}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 placeholder="Scholarship Name"
//               />

//               <input
//                 name="universityName"
//                 value={formData.universityName || ""}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 placeholder="University Name"
//               />

//               <input
//                 name="degree"
//                 value={formData.degree || ""}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 placeholder="Degree"
//               />

//               <input
//                 name="applicationFees"
//                 type="number"
//                 value={formData.applicationFees || ""}
//                 onChange={handleChange}
//                 className="input input-bordered"
//                 placeholder="Application Fees"
//               />

//               <div className="col-span-full flex justify-end gap-2 mt-4">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="btn btn-outline"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageScholarShip;

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageScholarShip = () => {
  const [scholarships, setScholarships] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [formData, setFormData] = useState({});

  const fetchScholarships = async () => {
    try {
      const res = await fetch(
        "https://scholar-stream-server-mu.vercel.app/admin/allScholarships",
      );
      if (!res.ok) throw new Error("Failed to fetch scholarships");
      const data = await res.json();
      setScholarships(data);
    } catch (error) {
      console.error("Error fetching scholarships:", error);
    }
  };

  useEffect(() => {
    fetchScholarships();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This scholarship will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      background:
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "#1d232a"
          : "#fff",
      color:
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "#a6adbb"
          : "#545454",
    });

    if (confirm.isConfirmed) {
      await fetch(
        `https://scholar-stream-server-mu.vercel.app/allScholarships/${id}`,
        { method: "DELETE" },
      );
      Swal.fire("Deleted!", "Record removed.", "success");
      fetchScholarships();
    }
  };

  const openUpdateModal = (scholarship) => {
    setSelectedScholarship(scholarship);
    setFormData(scholarship);
  };

  const closeModal = () => setSelectedScholarship(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://scholar-stream-server-mu.vercel.app/allScholarships/${selectedScholarship._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (res.ok) {
        Swal.fire("Updated!", "Scholarship details saved.", "success");
        closeModal();
        fetchScholarships();
      }
    } catch (error) {
      Swal.fire("Error", "Update failed", "error");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Manage Scholarships
          <span className="badge badge-primary badge-outline ml-3">
            {scholarships.length}
          </span>
        </h2>
      </div>

      {/* 📋 TABLE SECTION */}
      <div className="border border-base-300 rounded-2xl overflow-hidden shadow-sm bg-base-100">
        <div className="overflow-x-auto h-[600px]">
          <table className="table table-pin-rows table-zebra">
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Scholarship & University</th>
                <th>Country</th>
                <th className="hidden md:table-cell">Degree</th>
                <th>App Fee</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((item, index) => (
                <tr
                  key={item._id}
                  className="hover:bg-base-200/50 transition-colors"
                >
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex flex-col">
                      <span className="font-bold text-primary">
                        {item.scholarshipName}
                      </span>
                      <span className="text-xs opacity-60 italic">
                        {item.universityName}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="badge badge-ghost badge-sm font-medium">
                      {item.universityCountry}
                    </div>
                  </td>
                  <td className="hidden md:table-cell">{item.degree}</td>
                  <td className="font-mono text-success font-bold">
                    ${item.applicationFees}
                  </td>
                  <td>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => openUpdateModal(item)}
                        className="btn btn-square btn-ghost btn-sm text-info hover:bg-info/10"
                        title="Edit"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-square btn-ghost btn-sm text-error hover:bg-error/10"
                        title="Delete"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🪟 UPDATE MODAL */}
      {selectedScholarship && (
        <div className="modal modal-open modal-bottom sm:modal-middle transition-all">
          <div className="modal-box bg-base-100 border border-base-300 shadow-2xl max-w-3xl">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <i className="fa-solid fa-pen-nib text-primary"></i>
              Update Scholarship Details
            </h3>

            <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Scholarship Name</span>
                </label>
                <input
                  name="scholarshipName"
                  value={formData.scholarshipName || ""}
                  onChange={handleChange}
                  className="input input-bordered bg-base-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">University Name</span>
                </label>
                <input
                  name="universityName"
                  value={formData.universityName || ""}
                  onChange={handleChange}
                  className="input input-bordered bg-base-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Degree Program</span>
                </label>
                <select
                  name="degree"
                  value={formData.degree || ""}
                  onChange={handleChange}
                  className="select select-bordered bg-base-200"
                >
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Application Fee ($)
                  </span>
                </label>
                <input
                  name="applicationFees"
                  type="number"
                  value={formData.applicationFees || ""}
                  onChange={handleChange}
                  className="input input-bordered bg-base-200"
                />
              </div>

              <div className="modal-action col-span-full">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary px-8">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
          <div
            className="modal-backdrop bg-base-900/40 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ManageScholarShip;
