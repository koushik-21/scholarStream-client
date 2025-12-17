import React, { useState, useEffect } from "react";

const ScholarShipReview = ({ scholarshipId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!scholarshipId) return;

    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `https://scholar-stream-server-mu.vercel.app/reviews-by-scholarship/${scholarshipId}`
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
    <div className="space-y-4">
      {loading ? (
        <p className="text-center py-2">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-center font-semibold py-2">No reviews to show.</p>
      ) : (
        reviews.map((review) => (
          <div
            key={review._id}
            className="border p-3 rounded-lg flex gap-3 items-start"
          >
            <img
              src={review.userPhoto || "https://via.placeholder.com/50"}
              alt={review.userName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{review.userName}</p>
              <p className="text-sm text-gray-500">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
              <p className="text-yellow-500 font-bold">
                {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
              </p>
              <p>{review.comment}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ScholarShipReview;
