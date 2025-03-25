import mongoose from "mongoose";

const dotorSchema = new mongoose.Schema({
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
  experience: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  licence: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  specilization: {
    type: String,
    required: false,
  },
  isVerify:{
    type: Boolean,
    default: false
  }
});

const Doctor = new mongoose.model("Doctor", dotorSchema);

export default Doctor;
