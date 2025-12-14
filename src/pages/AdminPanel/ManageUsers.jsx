import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState("");

  // 🔁 Fetch users
  const fetchUsers = async (role = "") => {
    try {
      const url = role
        ? `http://localhost:5000/admin/users?role=${role}`
        : `http://localhost:5000/admin/users`;

      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  useEffect(() => {
    fetchUsers(roleFilter);
  }, [roleFilter]);

  // 🔄 Change Role
  const handleRoleChange = async (userId, newRole) => {
    const confirm = await Swal.fire({
      title: "Change user role?",
      text: `User will be updated to ${newRole}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update",
    });

    if (!confirm.isConfirmed) return;

    const res = await fetch(
      `http://localhost:5000/admin/users/role/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      }
    );

    if (res.ok) {
      Swal.fire("Updated!", "User role updated successfully", "success");
      fetchUsers(roleFilter);
    }
  };

  // 🗑️ Delete User
  const handleDeleteUser = async (userId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });

    if (!confirm.isConfirmed) return;

    const res = await fetch(`http://localhost:5000/admin/users/${userId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      Swal.fire("Deleted!", "User has been removed", "success");
      fetchUsers(roleFilter);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Users ({users.length})</h2>

      {/* 🔽 Role Filter */}
      <div className="mb-4">
        <select
          className="select select-bordered w-full max-w-xs"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All Users</option>
          <option value="Student">Student</option>
          <option value="Moderator">Moderator</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      {/* 📋 Users Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name || "N/A"}</td>
                <td>{user.email}</td>
                <td>
                  <span className="badge badge-outline">{user.role}</span>
                </td>

                {/* 🔄 Role Change */}
                <td>
                  <select
                    className="select select-sm select-bordered"
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  >
                    <option value="Student">Student</option>
                    <option value="Moderator">Moderator</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>

                {/* 🗑️ Delete */}
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-sm btn-error"
                    disabled={user.role === "Admin"}
                    title={
                      user.role === "Admin" ? "Admin cannot be deleted" : ""
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
