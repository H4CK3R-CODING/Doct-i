import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
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
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Patient = new mongoose.model("Patient", patientSchema);

export default Patient;
