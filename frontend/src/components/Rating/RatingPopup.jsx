import React, { useState } from "react";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid";

const RatingPopup = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  if (!isOpen) return null;

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating === 0 || review.trim() === "") {
      alert("Please provide both rating and review.");
      return;
    }
    onSubmit({ rating, review });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-bold">Rate Your Experience</h2>
          <XMarkIcon
            className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700"
            onClick={onClose}
          />
        </div>

        {/* Star Rating */}
        <div className="flex justify-center my-4">
          {[1, 2, 3, 4, 5].map((value) => (
            <StarIcon
              key={value}
              className={`w-10 h-10 cursor-pointer ${
                value <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleRatingClick(value)}
            />
          ))}
        </div>

        {/* Review Textarea */}
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
        />

        {/* Buttons */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingPopup;
