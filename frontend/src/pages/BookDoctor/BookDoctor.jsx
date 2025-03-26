import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaFilePdf } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const BookDoctor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const doctor_id = location.state.doctor_id.toString();
  const [slot, setSlot] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  // Handle slot selection
  const handleSlotChange = (e) => {
    setSlot(e.target.value);
  };

  // Handle file upload and preview
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile)); // Generate preview
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      if (!slot || !file) {
        toast.error("Please select a slot and upload a file.");
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/api/v1/booking/Doctor`,
        {
          slot,
          doctor_id,
          patient_id: "ksdjk",
          reportfile: "file",
        },
        { withCredentials: true },
        config
      );
      // Simulate form submission
      alert(`Booking submitted with Slot: ${slot}`);
    } catch (error) {
      toast.error("Error on Backend Side");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-4 bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking Form</h2>

        {/* Slot Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Slot:</label>
          <select
            value={slot}
            onChange={handleSlotChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">-- Choose a Slot --</option>
            <option value="9 AM - 10 AM">9 AM - 10 AM</option>
            <option value="11 AM - 12 PM">11 AM - 12 PM</option>
            <option value="2 PM - 3 PM">2 PM - 3 PM</option>
            <option value="4 PM - 5 PM">4 PM - 5 PM</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Upload File:</label>
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-lg"
          />
          <p>Formate - .pdf .jpg .png</p>
        </div>

        {/* File Preview */}
        {filePreview && (
          <div className="mb-4">
            <p className="text-gray-700 mb-2">File Preview:</p>
            <img
              src={file?.type == "application/pdf" ? "pdf.png" : filePreview}
              alt="Preview"
              className="w-full object-cover h-40 rounded-lg"
            />
          </div>
        )}
        {console.dir(file?.type)}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookDoctor;
