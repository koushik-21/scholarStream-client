// import React, { useEffect, useState } from "react";

// const ModeratorReviewPanel = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch all reviews
//   const fetchReviews = async () => {
//     try {
//       const res = await fetch(
//         "https://scholar-stream-server-mu.vercel.app/all-reviews"
//       );
//       const data = await res.json();
//       setReviews(data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch reviews");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   // Delete review
//   const handleDelete = async (reviewId) => {
//     if (!window.confirm("Are you sure you want to delete this review?")) return;
//     try {
//       const res = await fetch(
//         `https://scholar-stream-server-mu.vercel.app/reviews/${reviewId}`,
//         {
//           method: "DELETE",
//         }
//       );
//       if (res.ok) {
//         setReviews(reviews.filter((r) => r._id !== reviewId));
//         alert("Review deleted successfully");
//       } else {
//         alert("Failed to delete review");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting review");
//     }
//   };

//   if (loading) return <p>Loading reviews...</p>;

//   return (
//     <div className="overflow-x-auto">
//       {reviews.length === 0 ? (
//         <p className="text-center py-4">No reviews found.</p>
//       ) : (
//         <table className="table-auto w-full border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr className="text-center">
//               <th className="px-4 py-2 border">Scholarship Name</th>
//               <th className="px-4 py-2 border">University Name</th>
//               <th className="px-4 py-2 border">Reviewer Name</th>
//               <th className="px-4 py-2 border">Rating</th>
//               <th className="px-4 py-2 border">Comment</th>
//               <th className="px-4 py-2 border">Date</th>
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reviews.map((review) => (
//               <tr key={review._id} className="text-center">
//                 <td className="px-4 py-2 border">{review.scholarshipName}</td>
//                 <td className="px-4 py-2 border">{review.universityName}</td>
//                 <td className="px-4 py-2 border">{review.userName}</td>
//                 <td className="px-4 py-2 border">{review.rating}</td>
//                 <td className="px-4 py-2 border">{review.comment}</td>
//                 <td className="px-4 py-2 border">
//                   {new Date(review.createdAt).toLocaleDateString()}
//                 </td>
//                 <td className="px-4 py-2 border">
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
//       )}
//     </div>
//   );
// };

// export default ModeratorReviewPanel;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>..................>>>>>>>>>>>>>>>>>>>>>>>>>>>
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ModeratorReviewPanel = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const res = await fetch(
        "https://scholar-stream-server-mu.vercel.app/all-reviews",
      );
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (reviewId) => {
    const result = await Swal.fire({
      title: "Remove Review?",
      text: "This feedback will be permanently deleted from the public scholarship page.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(
          `https://scholar-stream-server-mu.vercel.app/reviews/${reviewId}`,
          { method: "DELETE" },
        );
        if (res.ok) {
          setReviews(reviews.filter((r) => r._id !== reviewId));
          Swal.fire("Deleted!", "The review has been removed.", "success");
        }
      } catch (err) {
        Swal.fire("Error", "Could not remove review", "error");
      }
    }
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center p-20 gap-4">
        <span className="loading loading-bars loading-lg text-primary"></span>
        <p className="text-sm font-bold opacity-50 uppercase tracking-widest">
          Loading Reviews
        </p>
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xl font-black text-base-content/70">
          STUDENT FEEDBACK FEED
        </h3>
        <div className="badge badge-outline gap-2 p-3">
          <i className="fa-solid fa-star text-warning text-xs"></i>
          {reviews.length} Total Reviews
        </div>
      </div>

      {reviews.length === 0 ? (
        <div className="card bg-base-200 border-2 border-dashed border-base-300 py-20 text-center">
          <p className="opacity-40 font-medium">
            No reviews have been submitted yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-colors shadow-sm"
            >
              <div className="card-body p-5">
                {/* Header: Reviewer Info */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-10">
                        <span className="text-xs">
                          {review.userName?.charAt(0) || "U"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-none">
                        {review.userName}
                      </h4>
                      <p className="text-[10px] opacity-50 uppercase mt-1 font-bold tracking-tighter">
                        {new Date(review.createdAt).toLocaleDateString(
                          undefined,
                          { dateStyle: "long" },
                        )}
                      </p>
                    </div>
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

                {/* Subject Info */}
                <div className="bg-base-200/50 rounded-lg px-3 py-2 mb-3">
                  <p className="text-[11px] font-bold opacity-60 uppercase">
                    Scholarship
                  </p>
                  <p className="text-sm font-bold text-primary truncate">
                    {review.scholarshipName}
                  </p>
                  <p className="text-[10px] opacity-70 italic">
                    {review.universityName}
                  </p>
                </div>

                {/* The Comment */}
                <div className="relative">
                  <i className="fa-solid fa-quote-left absolute -top-1 -left-1 opacity-10 text-2xl"></i>
                  <p className="text-sm text-base-content/80 pl-4 py-2 italic min-h-[60px]">
                    {review.comment}
                  </p>
                </div>

                {/* Actions */}
                <div className="card-actions justify-end mt-4 pt-4 border-t border-base-200">
                  <button
                    className="btn btn-error btn-sm btn-ghost gap-2 hover:bg-error/10"
                    onClick={() => handleDelete(review._id)}
                  >
                    <i className="fa-solid fa-trash-can text-xs"></i>
                    Remove Content
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModeratorReviewPanel;
