import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageScholarShip = () => {
  const [scholarships, setScholarships] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [formData, setFormData] = useState({});

  // 🔁 Fetch all scholarships (NO LIMIT)
  const fetchScholarships = async () => {
    const res = await fetch("http://localhost:5000/admin/allScholarships");
    const data = await res.json();
    setScholarships(data);
  };

  useEffect(() => {
    fetchScholarships();
  }, []);

  // 🗑️ DELETE
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This scholarship will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      await fetch(`http://localhost:5000/allScholarships/${id}`, {
        method: "DELETE",
      });

      Swal.fire("Deleted!", "Scholarship has been deleted.", "success");
      fetchScholarships();
    }
  };

  // ✏️ OPEN UPDATE MODAL
  const openUpdateModal = (scholarship) => {
    setSelectedScholarship(scholarship);
    setFormData(scholarship);
  };

  // ❌ CLOSE MODAL
  const closeModal = () => {
    setSelectedScholarship(null);
  };

  // ✍️ INPUT CHANGE
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };
  // ✅ UPDATE SUBMIT
  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:5000/allScholarships/${selectedScholarship._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      Swal.fire("Updated!", "Scholarship updated successfully", "success");
      closeModal();
      fetchScholarships();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Manage Scholarships ({scholarships.length})
      </h2>

      {/* 📋 TABLE */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Scholarship</th>
              <th>University</th>
              <th>Country</th>
              <th>Degree</th>
              <th>Fees</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {scholarships.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.scholarshipName}</td>
                <td>{item.universityName}</td>
                <td>{item.universityCountry}</td>
                <td>{item.degree}</td>
                <td>{item.applicationFees}$</td>
                <td className="space-x-2">
                  <button
                    onClick={() => openUpdateModal(item)}
                    className="btn btn-sm btn-info"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🪟 UPDATE MODAL */}
      {selectedScholarship && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Update Scholarship</h3>

            <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                name="scholarshipName"
                value={formData.scholarshipName || ""}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Scholarship Name"
              />

              <input
                name="universityName"
                value={formData.universityName || ""}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="University Name"
              />

              <input
                name="degree"
                value={formData.degree || ""}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Degree"
              />

              <input
                name="applicationFees"
                type="number"
                value={formData.applicationFees || ""}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Application Fees"
              />

              <div className="col-span-full flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageScholarShip;
