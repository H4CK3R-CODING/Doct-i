import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Link, useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  const navigate = useNavigate();
  const userData = [
    {
      role: "Doctor",
      name: "Dr. John Smith",
      image: "doctor.png",
      description: "Cardiologist at HealthPlus",
      onLogin: () => navigate("/loginDoctor"),
    },
    {
      role: "Patient",
      name: "Emily Clark",
      image: "user-profile.png",
      description: "Routine Checkups",
      onLogin: () => navigate("/loginPatient"),
    },
    {
      role: "Admin",
      name: "Michael Lee",
      image: "admin.jpg",
      description: "System Administrator",
      onLogin: () => {
        navigate("/admin");
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col items-center justify-center p-10">
      {/* 3D Glassmorphic Card */}
      <div className="bg-white/20 backdrop-blur-lg shadow-lg shadow-blue-200 p-8 rounded-3xl w-full max-w-4xl text-center border border-white/40">
        {/* Title */}
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Welcome to <span className="text-blue-200">Doct-i</span>
        </h1>
        <p className="text-white/80 mt-4 text-lg">
          Your smart AI-driven doctor consultation platform.
        </p>

        {/* 3D Button */}
        <Link to={"/searchDoctors"} className="mt-6">
          <button className="bg-white text-sky-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-xl">
            Get Started
          </button>
        </Link>
      </div>

      <div className="min-h-screen mt-5 flex items-center justify-center gap-6 p-6 md:flex-row">
        {userData.map((user, index) => (
          <ProfileCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
