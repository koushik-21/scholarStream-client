// import React, { useState, useEffect } from "react";

// const ScholarShipReview = ({ scholarshipId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!scholarshipId) return;

//     const fetchReviews = async () => {
//       try {
//         const res = await fetch(
//           `https://scholar-stream-server-mu.vercel.app/reviews-by-scholarship/${scholarshipId}`
//         );
//         const result = await res.json();
//         setReviews(result);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, [scholarshipId]);

//   return (
//     <div className="space-y-4">
//       {loading ? (
//         <p className="text-center py-2">Loading reviews...</p>
//       ) : reviews.length === 0 ? (
//         <p className="text-center font-semibold py-2">No reviews to show.</p>
//       ) : (
//         reviews.map((review) => (
//           <div
//             key={review._id}
//             className="border p-3 rounded-lg flex gap-3 items-start"
//           >
//             <img
//               src={review.userPhoto || "https://via.placeholder.com/50"}
//               alt={review.userName}
//               className="w-12 h-12 rounded-full object-cover"
//             />
//             <div>
//               <p className="font-semibold">{review.userName}</p>
//               <p className="text-sm text-gray-500">
//                 {new Date(review.createdAt).toLocaleDateString()}
//               </p>
//               <p className="text-yellow-500 font-bold">
//                 {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
//               </p>
//               <p>{review.comment}</p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ScholarShipReview;
import React, { useState, useEffect } from "react";

const ScholarShipReview = ({ scholarshipId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!scholarshipId) return;

    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `https://scholar-stream-server-mu.vercel.app/reviews-by-scholarship/${scholarshipId}`,
        );
        const result = await res.json();
        setReviews(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [scholarshipId]);

  return (
    <div className="space-y-6">
      {loading ? (
        <div className="flex flex-col items-center py-10 gap-2">
          <span className="loading loading-bars loading-md text-primary"></span>
          <p className="text-sm opacity-50">Loading community feedback...</p>
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-10 opacity-60 italic">
          <i className="fa-solid fa-comment-slash text-3xl mb-2 block"></i>
          <p>Be the first to share your thoughts on this scholarship!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="chat chat-start bg-base-300/30 p-4 rounded-2xl transition-all hover:bg-base-300/50 border border-transparent hover:border-base-300"
            >
              {/* User Avatar */}
              <div className="chat-image avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      review.userPhoto ||
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    }
                    alt={review.userName}
                  />
                </div>
              </div>

              {/* Review Header */}
              <div className="chat-header mb-1 flex items-center gap-2">
                <span className="font-bold text-base-content uppercase text-xs tracking-wider">
                  {review.userName}
                </span>
                <time className="text-[10px] opacity-50 font-medium">
                  {new Date(review.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>

              {/* Star Rating */}
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa-solid fa-star text-xs ${i < review.rating ? "text-yellow-400" : "text-base-300"}`}
                  ></i>
                ))}
              </div>

              {/* Comment Body */}
              <div className="chat-bubble bg-base-100 text-base-content border border-base-300 shadow-sm leading-relaxed">
                {review.comment}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScholarShipReview;
