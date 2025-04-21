import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gmail: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    disease: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    location: {
      type: String,
      enum: [
        "Hyderabad",
        "Mumbai",
        "Pune",
        "Bangalore",
        "Kolkata",
        "Jaipur",
        "Chennai",
        "Ahmedabad",
        "Lucknow",
        "Delhi",
      ],
      required: true,
    },
    expieredAt: {
      type: Date,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

const Patient = new mongoose.model("Patient", patientSchema);

export default Patient;
