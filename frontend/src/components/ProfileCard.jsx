import React from 'react';

const ProfileCard = ({ name, role, image, description, onLogin }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-[200px] flex flex-col gap-2 items-center justify-between">
      <img
        src={image}
        alt={role}
        className="w-24 h-24 rounded-full border-4 border-blue-500 shadow mt-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mt-2">{role}</h2>
      <button
        onClick={onLogin}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
};

export default ProfileCard;
// 