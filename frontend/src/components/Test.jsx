import React from "react";
import { Toaster, toast } from "react-hot-toast";

const Test = () => {
  
  // Simulated API Call (Promise)
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() < 0.5;  // Random success or failure
        success ? resolve("Data loaded successfully!") : reject("Failed to load data!");
      }, 2000);
    });
  };

  // Trigger Promise Toast
  const handleFetch = () => {
    const promise = fetchData();

    toast.promise(promise, {
      loading: "Loading data...",
      success: (data) => `${data}`,
      error: (err) => ` ${err}`,
    });
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">React Hot Toast with Promise</h1>
        <button
          onClick={handleFetch}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          Fetch Data
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Test;
