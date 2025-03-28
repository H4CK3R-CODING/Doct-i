import React, { useState } from "react";
import RatingPopup from "./RatingPopup";

const Rating = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmitRating = (data) => {
    console.log("Rating submitted:", data);
    alert(`Rating: ${data.rating}, Review: ${data.review}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Doctor Rating</h1>
        <button
          onClick={handleOpenPopup}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Rate Doctor
        </button>
      </div>

      {/* Popup Component */}
      <RatingPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={handleSubmitRating}
      />
    </div>
  );
};

export default Rating;
