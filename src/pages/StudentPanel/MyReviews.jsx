// import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";

// const MyReviews = () => {
//   const { user } = useAuth();
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   // Fetch user's reviews
//   useEffect(() => {
//     if (!user?.email) return;

//     const fetchReviews = async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:5000/reviews?userEmail=${user.email}`
//         );
//         const data = await res.json();
//         setReviews(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchReviews();
//   }, [user?.email]);

//   // Delete review
//   const handleDelete = async (reviewId) => {
//     if (!window.confirm("Are you sure you want to delete this review?")) return;

//     try {
//       await fetch(`http://localhost:5000/reviews/${reviewId}`, {
//         method: "DELETE",
//       });
//       setReviews(reviews.filter((r) => r._id !== reviewId));
//     } catch (err) {
//       console.error(err);
//       alert("Delete failed");
//     }
//   };

//   // Edit review
//   const handleEdit = (review) => {
//     setSelectedReview(review);
//     setRating(review.rating);
//     setComment(review.comment);
//     setShowModal(true);
//   };

//   const submitEdit = async () => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/reviews/${selectedReview._id}`,
//         {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ rating, comment }),
//         }
//       );
//       if (!res.ok) throw new Error("Update failed");

//       setReviews(
//         reviews.map((r) =>
//           r._id === selectedReview._id ? { ...r, rating, comment } : r
//         )
//       );
//       setShowModal(false);
//       setSelectedReview(null);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update review");
//     }
//   };

//   if (loading) return <p>Loading reviews...</p>;

//   return (
//     <div>
//       <h3 className="text-xl font-bold mb-4">My Reviews</h3>
//       {reviews.length === 0 ? (
//         <p>No reviews found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr className="text-center">
//                 <th className="px-4 py-2 border">Scholarship Name</th>
//                 <th className="px-4 py-2 border">University Name</th>
//                 <th className="px-4 py-2 border">Comment</th>
//                 <th className="px-4 py-2 border">Rating</th>
//                 <th className="px-4 py-2 border">Date</th>
//                 <th className="px-4 py-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reviews.map((review) => (
//                 <tr key={review._id} className="text-center">
//                   <td className="px-4 py-2 border">{review.scholarshipName}</td>
//                   <td className="px-4 py-2 border">{review.universityName}</td>
//                   <td className="px-4 py-2 border">{review.comment}</td>
//                   <td className="px-4 py-2 border">{review.rating} ⭐</td>
//                   <td className="px-4 py-2 border">
//                     {new Date(review.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="px-4 py-2 border space-x-1">
//                     <button
//                       className="bg-yellow-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleEdit(review)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleDelete(review._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {showModal && selectedReview && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-[420px]">
//             <h4 className="text-lg font-bold mb-3">Edit Review</h4>

//             <label className="block mb-1 font-medium">Rating</label>
//             <select
//               className="w-full border rounded p-2 mb-3"
//               value={rating}
//               onChange={(e) => setRating(Number(e.target.value))}
//             >
//               {[5, 4, 3, 2, 1].map((r) => (
//                 <option key={r} value={r}>
//                   {r} Star
//                 </option>
//               ))}
//             </select>

//             <label className="block mb-1 font-medium">Comment</label>
//             <textarea
//               className="w-full border rounded p-2 min-h-[100px] mb-3"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />

//             <div className="flex justify-end gap-2">
//               <button
//                 className="bg-green-600 text-white p-2 rounded"
//                 onClick={submitEdit}
//               >
//                 Save
//               </button>
//               <button
//                 className="bg-gray-500 text-white p-2 rounded"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyReviews;
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // Fetch reviews
  useEffect(() => {
    if (!user?.email) return;
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/reviews?userEmail=${user.email}`
        );
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [user?.email]);

  // Submit updated review
  const handleUpdate = async () => {
    try {
      await fetch(`http://localhost:5000/reviews/${selectedReview._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, comment }),
      });
      alert("Review updated successfully");
      setSelectedReview(null);
      setRating(5);
      setComment("");
      // Refresh reviews
      setReviews((prev) =>
        prev.map((r) =>
          r._id === selectedReview._id ? { ...r, rating, comment } : r
        )
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update review");
    }
  };

  // Delete review
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    try {
      await fetch(`http://localhost:5000/reviews/${id}`, { method: "DELETE" });
      setReviews(reviews.filter((r) => r._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete review");
    }
  };

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">My Reviews</h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="text-center">
              <th className="px-4 py-2 border">Scholarship Name</th>
              <th className="px-4 py-2 border">University Name</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Comment</th>
              <th className="px-4 py-2 border">Review Date</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id} className="text-center">
                <td className="px-4 py-2 border">{review.scholarshipName}</td>
                <td className="px-4 py-2 border">{review.universityName}</td>
                <td className="px-4 py-2 border">{review.rating}</td>
                <td className="px-4 py-2 border">{review.comment}</td>
                <td className="px-4 py-2 border">
                  {new Date(review.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border space-x-1 ">
                  <button
                    className="bg-yellow-500 text-white px-2 my-1 py-1 rounded"
                    onClick={() => {
                      setSelectedReview(review);
                      setRating(review.rating);
                      setComment(review.comment);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(review._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Review Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[420px]">
            <h4 className="text-lg font-bold mb-3">Edit Review</h4>
            <label className="block mb-1 font-medium">Rating</label>
            <select
              className="w-full border rounded p-2 mb-3"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} Star
                </option>
              ))}
            </select>

            <label className="block mb-1 font-medium">Comment</label>
            <textarea
              className="w-full border rounded p-2 min-h-[120px]"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <div className="mt-4 flex justify-end gap-2">
              <button
                className="bg-green-600 text-white p-2 rounded"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-gray-500 text-white p-2 rounded"
                onClick={() => setSelectedReview(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
