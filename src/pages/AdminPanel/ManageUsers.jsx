// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";

// const ManageUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [roleFilter, setRoleFilter] = useState("");

//   // 🔁 Fetch users
//   const fetchUsers = async (role = "") => {
//     try {
//       const url = role
//         ? `https://scholar-stream-server-mu.vercel.app/admin/users?role=${role}`
//         : `https://scholar-stream-server-mu.vercel.app/admin/users`;

//       const res = await fetch(url);
//       const data = await res.json();
//       setUsers(data);
//     } catch (error) {
//       console.error("Failed to fetch users", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(roleFilter);
//   }, [roleFilter]);

//   // 🔄 Change Role
//   const handleRoleChange = async (userId, newRole) => {
//     const confirm = await Swal.fire({
//       title: "Change user role?",
//       text: `User will be updated to ${newRole}`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, update",
//     });

//     if (!confirm.isConfirmed) return;

//     const res = await fetch(
//       `https://scholar-stream-server-mu.vercel.app/admin/users/role/${userId}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ role: newRole }),
//       }
//     );

//     if (res.ok) {
//       Swal.fire("Updated!", "User role updated successfully", "success");
//       fetchUsers(roleFilter);
//     }
//   };

//   // 🗑️ Delete User
//   const handleDeleteUser = async (userId) => {
//     const confirm = await Swal.fire({
//       title: "Are you sure?",
//       text: "This user will be permanently deleted!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete",
//     });

//     if (!confirm.isConfirmed) return;

//     const res = await fetch(
//       `https://scholar-stream-server-mu.vercel.app/admin/users/${userId}`,
//       {
//         method: "DELETE",
//       }
//     );

//     if (res.ok) {
//       Swal.fire("Deleted!", "User has been removed", "success");
//       fetchUsers(roleFilter);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Manage Users ({users.length})</h2>

//       {/* 🔽 Role Filter */}
//       <div className="mb-4">
//         <select
//           className="select select-bordered w-full max-w-xs"
//           value={roleFilter}
//           onChange={(e) => setRoleFilter(e.target.value)}
//         >
//           <option value="">All Users</option>
//           <option value="Student">Student</option>
//           <option value="Moderator">Moderator</option>
//           <option value="Admin">Admin</option>
//         </select>
//       </div>

//       {/* 📋 Users Table */}
//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Change Role</th>
//               <th>Delete</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <td>{index + 1}</td>
//                 <td>{user.name || "N/A"}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <span className="badge badge-outline">{user.role}</span>
//                 </td>

//                 {/* 🔄 Role Change */}
//                 <td>
//                   <select
//                     className="select select-sm select-bordered"
//                     value={user.role}
//                     onChange={(e) => handleRoleChange(user._id, e.target.value)}
//                   >
//                     <option value="Student">Student</option>
//                     <option value="Moderator">Moderator</option>
//                     <option value="Admin">Admin</option>
//                   </select>
//                 </td>

//                 {/* 🗑️ Delete */}
//                 <td>
//                   <button
//                     onClick={() => handleDeleteUser(user._id)}
//                     className="btn btn-sm btn-error"
//                     disabled={user.role === "Admin"}
//                     title={
//                       user.role === "Admin" ? "Admin cannot be deleted" : ""
//                     }
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}

//             {users.length === 0 && (
//               <tr>
//                 <td colSpan="6" className="text-center text-gray-500">
//                   No users found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUsers;
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState("");

  const fetchUsers = async (role = "") => {
    try {
      const url = role
        ? `https://scholar-stream-server-mu.vercel.app/admin/users?role=${role}`
        : `https://scholar-stream-server-mu.vercel.app/admin/users`;

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

  const handleRoleChange = async (userId, newRole) => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";

    const confirm = await Swal.fire({
      title: "Update Permissions?",
      text: `This user will be granted ${newRole} access.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm Change",
      background: isDark ? "#1d232a" : "#fff",
      color: isDark ? "#a6adbb" : "#545454",
      confirmButtonColor: "#3b82f6",
    });

    if (!confirm.isConfirmed) return;

    const res = await fetch(
      `https://scholar-stream-server-mu.vercel.app/admin/users/role/${userId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      },
    );

    if (res.ok) {
      Swal.fire("Role Updated", "", "success");
      fetchUsers(roleFilter);
    }
  };

  const handleDeleteUser = async (userId) => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";

    const confirm = await Swal.fire({
      title: "Delete User?",
      text: "All associated data for this account will be lost.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete Permanently",
      confirmButtonColor: "#ef4444",
      background: isDark ? "#1d232a" : "#fff",
      color: isDark ? "#a6adbb" : "#545454",
    });

    if (!confirm.isConfirmed) return;

    const res = await fetch(
      `https://scholar-stream-server-mu.vercel.app/admin/users/${userId}`,
      { method: "DELETE" },
    );

    if (res.ok) {
      Swal.fire("Deleted", "User account removed.", "success");
      fetchUsers(roleFilter);
    }
  };

  // Helper for role colors
  const getRoleBadge = (role) => {
    switch (role) {
      case "Admin":
        return "badge-secondary";
      case "Moderator":
        return "badge-accent";
      default:
        return "badge-ghost";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">
          User Directory
          <span className="badge badge-primary badge-outline ml-3">
            {users.length}
          </span>
        </h2>

        {/* 🔽 Role Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold opacity-60">Filter:</span>
          <select
            className="select select-sm select-bordered bg-base-100 focus:outline-none"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="Student">Student</option>
            <option value="Moderator">Moderator</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      </div>

      {/* 📋 Users Table */}
      <div className="border border-base-300 rounded-2xl overflow-hidden shadow-sm bg-base-100">
        <div className="overflow-x-auto h-[600px]">
          <table className="table table-pin-rows table-zebra">
            <thead>
              <tr className="bg-base-200">
                <th>User Info</th>
                <th>Role Status</th>
                <th>Change Permissions</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-base-200/30 transition-colors"
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-10">
                          <span className="text-xs">
                            {user.name?.charAt(0) || "U"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {user.name || "Unknown User"}
                        </div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`badge ${getRoleBadge(user.role)} font-bold`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <select
                      className="select select-xs select-bordered w-full max-w-[140px] bg-base-200"
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                    >
                      <option value="Student">Student</option>
                      <option value="Moderator">Moderator</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-square btn-ghost btn-sm text-error hover:bg-error/10"
                      disabled={user.role === "Admin"}
                      title={
                        user.role === "Admin"
                          ? "Master Admin cannot be deleted"
                          : "Delete User"
                      }
                    >
                      <i className="fa-solid fa-user-minus"></i>
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-20 opacity-50 italic"
                  >
                    No users matching this criteria were found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
