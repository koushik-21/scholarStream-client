import React, { useEffect, useState } from "react";

const ModeratorReviewPanel = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all reviews
  const fetchReviews = async () => {
    try {
      const res = await fetch("http://localhost:5000/all-reviews");
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Delete review
  const handleDelete = async (reviewId) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    try {
      const res = await fetch(`http://localhost:5000/reviews/${reviewId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setReviews(reviews.filter((r) => r._id !== reviewId));
        alert("Review deleted successfully");
      } else {
        alert("Failed to delete review");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting review");
    }
  };

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div className="overflow-x-auto">
      {reviews.length === 0 ? (
        <p className="text-center py-4">No reviews found.</p>
      ) : (
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="text-center">
              <th className="px-4 py-2 border">Scholarship Name</th>
              <th className="px-4 py-2 border">University Name</th>
              <th className="px-4 py-2 border">Reviewer Name</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Comment</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id} className="text-center">
                <td className="px-4 py-2 border">{review.scholarshipName}</td>
                <td className="px-4 py-2 border">{review.universityName}</td>
                <td className="px-4 py-2 border">{review.userName}</td>
                <td className="px-4 py-2 border">{review.rating}</td>
                <td className="px-4 py-2 border">{review.comment}</td>
                <td className="px-4 py-2 border">
                  {new Date(review.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border">
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
      )}
    </div>
  );
};

export default ModeratorReviewPanel;
