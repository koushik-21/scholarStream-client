// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../contexts/AuthContext";

// const UserProfile = () => {
//   const { user } = useContext(AuthContext);
//   //   console.log(user);
//   const [name, setName] = useState(user?.displayName || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
//   //   const [loading, setLoading] = useState(false);

//   //   const handleUpdate = async () => {
//   //     setLoading(true);

//   //     const updatedData = { name, email, photoURL };

//   //     try {
//   //       const res = await fetch(`https://scholar-stream-server-mu.vercel.app/users/${user._id}`, {
//   //         method: "PUT",
//   //         headers: { "Content-Type": "application/json" },
//   //         body: JSON.stringify(updatedData),
//   //       });

//   //       const data = await res.json();

//   //       if (data.modifiedCount > 0) {
//   //         alert("Profile Updated Successfully!");
//   //       }
//   //     } catch (err) {
//   //       console.log(err);
//   //     }

//   //     setLoading(false);
//   //   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-xl mt-6 border-2 border-gray-300">
//       {/* Profile Picture */}
//       <div className="flex flex-col items-center bg-gra">
//         <img
//           src={photoURL}
//           className="w-28 h-28 rounded-full border mb-3 object-cover"
//           alt="profile"
//         />
//         <h2 className="text-xl font-bold">{name}</h2>
//         <p className="text-gray-600">{email}</p>
//       </div>
//       <div className="divider divider-info font-semibold font-serif">
//         Person Information
//       </div>
//       {/* Edit Form */}
//       <div className="space-y-3">
//         <div>
//           <label className="text-sm text-gray-600">Name</label>
//           <input
//             type="text"
//             className="border w-full px-3 py-2 rounded mt-1 bg-gray-100 font-semibold font-serif"
//             disabled
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-600">Email</label>
//           <input
//             type="email"
//             className="border w-full px-3 py-2 rounded bg-gray-100 mt-1 font-semibold font-serif"
//             disabled
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-600">Photo URL</label>
//           <input
//             type="text"
//             className="border w-full px-3 py-2 rounded mt-1 bg-gray-100 font-semibold font-serif"
//             disabled
//             value={photoURL}
//             onChange={(e) => setPhotoURL(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Update Button */}
//       {/* <button
//         onClick={handleUpdate}
//         disabled={loading}
//         className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//       >
//         {loading ? "Updating..." : "Update Profile"}
//       </button> */}
//     </div>
//   );
// };

// export default UserProfile;
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const inputClass =
    "input input-bordered w-full bg-base-200 font-semibold cursor-not-allowed opacity-70";
  const labelClass = "label-text font-medium opacity-60";

  return (
    <div className="max-w-xl mx-auto mt-10 transition-colors duration-300">
      <div className="card bg-base-100 border border-base-300 shadow-xl overflow-hidden">
        {/* Profile Header with Gradient Background */}
        <div className="h-32 bg-gradient-to-r from-primary/80 to-secondary/80 relative">
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="avatar">
              <div className="w-28 h-28 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-2 overflow-hidden bg-base-300">
                <img
                  src={photoURL || "https://via.placeholder.com/150"}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card-body pt-16 items-center text-center">
          <h2 className="card-title text-2xl font-black">{name}</h2>
          <div className="badge badge-primary badge-outline font-bold">
            Verified User
          </div>
          <p className="text-sm opacity-60 mt-1">{email}</p>

          <div className="divider opacity-50 my-4">Personal Information</div>

          {/* Info Section */}
          <div className="w-full space-y-4 text-left">
            <div className="form-control">
              <label className="label">
                <span className={labelClass}>Full Name</span>
              </label>
              <input type="text" className={inputClass} disabled value={name} />
            </div>

            <div className="form-control">
              <label className="label">
                <span className={labelClass}>Email Address</span>
              </label>
              <input
                type="email"
                className={inputClass}
                disabled
                value={email}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className={labelClass}>Avatar URL</span>
              </label>
              <input
                type="text"
                className={inputClass}
                disabled
                value={photoURL}
              />
            </div>
          </div>

          <div className="card-actions justify-end w-full mt-6">
            <button className="btn btn-block btn-outline btn-sm opacity-50 cursor-not-allowed">
              <i className="fa-solid fa-lock mr-2"></i> Profile Editing Disabled
              by Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
