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
//           `https://scholar-stream-server-mu.vercel.app/reviews?userEmail=${user.email}`
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
//       await fetch(`https://scholar-stream-server-mu.vercel.app/reviews/${reviewId}`, {
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
//         `https://scholar-stream-server-mu.vercel.app/reviews/${selectedReview._id}`,
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
// ...........>>>>>>>>>>>>>>>>>>>>>>>>>>////////////////////.....................
// import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";

// const MyReviews = () => {
//   const { user } = useAuth();
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");

//   // Fetch reviews
//   useEffect(() => {
//     if (!user?.email) return;
//     const fetchReviews = async () => {
//       try {
//         const res = await fetch(
//           `https://scholar-stream-server-mu.vercel.app/reviews?userEmail=${user.email}`
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

//   // Submit updated review
//   const handleUpdate = async () => {
//     try {
//       await fetch(
//         `https://scholar-stream-server-mu.vercel.app/reviews/${selectedReview._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ rating, comment }),
//         }
//       );
//       alert("Review updated successfully");
//       setSelectedReview(null);
//       setRating(5);
//       setComment("");
//       // Refresh reviews
//       setReviews((prev) =>
//         prev.map((r) =>
//           r._id === selectedReview._id ? { ...r, rating, comment } : r
//         )
//       );
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update review");
//     }
//   };

//   // Delete review
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this review?")) return;
//     try {
//       await fetch(`https://scholar-stream-server-mu.vercel.app/reviews/${id}`, {
//         method: "DELETE",
//       });
//       setReviews(reviews.filter((r) => r._id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete review");
//     }
//   };

//   if (loading) return <p>Loading reviews...</p>;

//   return (
//     <div>
//       <h3 className="text-xl font-bold mb-4">My Reviews</h3>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr className="text-center">
//               <th className="px-4 py-2 border">Scholarship Name</th>
//               <th className="px-4 py-2 border">University Name</th>
//               <th className="px-4 py-2 border">Rating</th>
//               <th className="px-4 py-2 border">Comment</th>
//               <th className="px-4 py-2 border">Review Date</th>
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reviews.map((review) => (
//               <tr key={review._id} className="text-center">
//                 <td className="px-4 py-2 border">{review.scholarshipName}</td>
//                 <td className="px-4 py-2 border">{review.universityName}</td>
//                 <td className="px-4 py-2 border">{review.rating}</td>
//                 <td className="px-4 py-2 border">{review.comment}</td>
//                 <td className="px-4 py-2 border">
//                   {new Date(review.createdAt).toLocaleDateString()}
//                 </td>
//                 <td className="px-4 py-2 border space-x-1 ">
//                   <button
//                     className="bg-yellow-500 text-white px-2 my-1 py-1 rounded"
//                     onClick={() => {
//                       setSelectedReview(review);
//                       setRating(review.rating);
//                       setComment(review.comment);
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => handleDelete(review._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Edit Review Modal */}
//       {selectedReview && (
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
//               className="w-full border rounded p-2 min-h-[120px]"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />

//             <div className="mt-4 flex justify-end gap-2">
//               <button
//                 className="bg-green-600 text-white p-2 rounded"
//                 onClick={handleUpdate}
//               >
//                 Update
//               </button>
//               <button
//                 className="bg-gray-500 text-white p-2 rounded"
//                 onClick={() => setSelectedReview(null)}
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
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!user?.email) return;
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `https://scholar-stream-server-mu.vercel.app/reviews?userEmail=${user.email}`,
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

  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `https://scholar-stream-server-mu.vercel.app/reviews/${selectedReview._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rating, comment }),
        },
      );
      if (res.ok) {
        Swal.fire("Updated!", "Your review has been modified.", "success");
        setReviews((prev) =>
          prev.map((r) =>
            r._id === selectedReview._id ? { ...r, rating, comment } : r,
          ),
        );
        setSelectedReview(null);
      }
    } catch (err) {
      Swal.fire("Error", "Update failed", "error");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Review?",
      text: "Other students won't be able to see your feedback anymore.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it",
    });

    if (result.isConfirmed) {
      try {
        await fetch(
          `https://scholar-stream-server-mu.vercel.app/reviews/${id}`,
          {
            method: "DELETE",
          },
        );
        setReviews(reviews.filter((r) => r._id !== id));
        Swal.fire("Deleted!", "Review removed.", "success");
      } catch (err) {
        Swal.fire("Error", "Deletion failed", "error");
      }
    }
  };

  if (loading)
    return (
      <div className="flex justify-center p-20">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <i className="fa-solid fa-comments text-primary"></i> My Reviews
      </h3>

      {reviews.length === 0 ? (
        <div className="text-center py-20 bg-base-200 rounded-2xl border-2 border-dashed border-base-300">
          <p className="opacity-50 italic">
            You haven't written any reviews yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="card-body p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg leading-tight">
                      {review.scholarshipName}
                    </h4>
                    <p className="text-sm opacity-60">
                      {review.universityName}
                    </p>
                  </div>
                  <div className="rating rating-xs">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <input
                        key={star}
                        type="radio"
                        className="mask mask-star-2 bg-orange-400"
                        checked={review.rating === star}
                        readOnly
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-base-200/50 p-3 rounded-lg mt-3">
                  <p className="text-sm italic">"{review.comment}"</p>
                </div>

                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-xs opacity-40">
                    {new Date(review.createdAt).toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    })}
                  </span>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-ghost btn-xs text-info hover:bg-info/10"
                      onClick={() => {
                        setSelectedReview(review);
                        setRating(review.rating);
                        setComment(review.comment);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i> Edit
                    </button>
                    <button
                      className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                      onClick={() => handleDelete(review._id)}
                    >
                      <i className="fa-solid fa-trash-can"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Review Modal */}
      {selectedReview && (
        <div className="modal modal-open">
          <div className="modal-box bg-base-100 border border-base-300 shadow-2xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <i className="fa-solid fa-pen-nib text-primary"></i> Edit Your
              Feedback
            </h3>

            <div className="form-control mb-4">
              <label className="label font-bold text-xs uppercase opacity-50">
                Overall Rating
              </label>
              <div className="rating rating-md">
                {[1, 2, 3, 4, 5].map((star) => (
                  <input
                    key={star}
                    type="radio"
                    name="edit-rating"
                    className="mask mask-star-2 bg-orange-400"
                    checked={rating === star}
                    onChange={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <div className="form-control">
              <label className="label font-bold text-xs uppercase opacity-50">
                Your Experience
              </label>
              <textarea
                className="textarea textarea-bordered h-32 bg-base-200 focus:textarea-primary transition-all"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <div className="modal-action">
              <button
                className="btn btn-ghost"
                onClick={() => setSelectedReview(null)}
              >
                Cancel
              </button>
              <button className="btn btn-primary px-8" onClick={handleUpdate}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
