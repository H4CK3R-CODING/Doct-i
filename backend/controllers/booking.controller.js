import mongoose from "mongoose";
import Booking from "../models/Booking.model.js";
import Doctor from "../models/doctor.model.js";
import Patient from "../models/patient.model.js";
import bookingAuth from "../zod/bookingAuth.js";

const bookingDoctor = async (req, res) => {
  try {
    const { success, error } = bookingAuth.safeParse(req.body);
    if (!success) {
      console.log(error);
      res.status(401).json({
        msg: "Some mistake in your inputs",
      });
      return;
    }
    const { date, slot, doctor_id, patient_id, reportfile } = req.body;


    const isBooking = await Booking.findOneAndUpdate(
      { doctor_id, patient_id },
      { $set: { date, slot, reportfile } },
      { new: true, upsert: true }
    );

    // const isBooking = await Booking.findOneAndUpdate(
    //   {
    //     $and: [{ doctor_id: doctor_id }, { patient_id: patient_id }],
    //   },
    //   { date, slot, reportfile,updatedAt: new Date() },
    //   { new: true, upsert: true }
    // );
    return res.status(201).json({
      msg: "Booked Successfully",
      isBooking,
    });
  } catch (error) {
    console.log(
      "Error occure in the bookingDoctor.controller.js ===> " + error.message
    );
  }
};

const getBookingByDoctor = async (req, res) => {
  try {
    const doctorId = await req.body.userId;
    // const doctorId = new mongoose.Types.ObjectId(req.body.userId);
    if (!doctorId) {
      return res.status(400).json({
        msg: "User not Logged In",
      });
    }
    const bookings = await Booking.find({ doctor_id: doctorId })
      .populate(["doctor_id", "patient_id"])
      .exec();
    return res.status(200).send(bookings);
  } catch (error) {
    console.log(
      "Error occure in the bookingDoctor.controller.js ===> " + error.message
    );
  }
};

const getBookingByPatient = async (req, res) => {
  try {
    const patientId = await req.body.userId;
    //const patientId = new mongoose.Types.ObjectId(req.body.userId);
    // console.log(patientId)
    if (!patientId) {
      return res.status(400).json({
        msg: "User not Logged In",
      });
    }
    const bookings = await Booking.find({ patient_id: patientId })
      .populate(["doctor_id", "patient_id"])
      .exec();
    return res.status(200).send(bookings);
  } catch (error) {
    console.log(
      "Error occure in the bookingDoctor.controller.js ===> " + error.message
    );
  }
};

export { bookingDoctor, getBookingByDoctor, getBookingByPatient };
