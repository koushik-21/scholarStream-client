import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  //   const [loading, setLoading] = useState(false);

  //   const handleUpdate = async () => {
  //     setLoading(true);

  //     const updatedData = { name, email, photoURL };

  //     try {
  //       const res = await fetch(`https://scholar-stream-server-mu.vercel.app/users/${user._id}`, {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(updatedData),
  //       });

  //       const data = await res.json();

  //       if (data.modifiedCount > 0) {
  //         alert("Profile Updated Successfully!");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     setLoading(false);
  //   };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-xl mt-6 border-2 border-gray-300">
      {/* Profile Picture */}
      <div className="flex flex-col items-center bg-gra">
        <img
          src={photoURL}
          className="w-28 h-28 rounded-full border mb-3 object-cover"
          alt="profile"
        />
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
      <div className="divider divider-info font-semibold font-serif">
        Person Information
      </div>
      {/* Edit Form */}
      <div className="space-y-3">
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            className="border w-full px-3 py-2 rounded mt-1 bg-gray-100 font-semibold font-serif"
            disabled
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="border w-full px-3 py-2 rounded bg-gray-100 mt-1 font-semibold font-serif"
            disabled
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Photo URL</label>
          <input
            type="text"
            className="border w-full px-3 py-2 rounded mt-1 bg-gray-100 font-semibold font-serif"
            disabled
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
      </div>

      {/* Update Button */}
      {/* <button
        onClick={handleUpdate}
        disabled={loading}
        className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {loading ? "Updating..." : "Update Profile"}
      </button> */}
    </div>
  );
};

export default UserProfile;
