import mongoose from "mongoose";
import Booking from "../models/Booking.model.js";
import Doctor from "../models/doctor.model.js";
import Patient from "../models/patient.model.js";
import bookingAuth from "../zod/bookingAuth.js";

const bookingDoctor = async (req, res) => {
  try {
    const { success } = bookingAuth.safeParse(req.body);
    if (!success) {
      res.status(401).json({
        msg: "Some mistake in your inputs",
      });
      return;
    }
    const { slot, doctor_id, patient_id, reportfile } = req.body;

    const isBooking = await Booking.find({
      $and: [{ doctor_id: doctor_id }, { patient_id: patient_id }],
    });
    if (isBooking.length) {
      return res.status(201).json({
        msg: "Booking Exist",
        isBooking,
      });
    }

    const booking = await Booking.create({
      slot,
      doctor_id,
      patient_id,
      reportfile,
    });

    return res.status(200).json({ msg: "Booked Successfully", booking });
  } catch (error) {
    console.log(
      "Error occure in the bookingDoctor.controller.js ===> " + error.message
    );
  }
};

const getBookingByDoctor = async (req, res) => {
  try {
    const doctorId = req.body.userId;
    // const doctorId = new mongoose.Types.ObjectId(req.body.userId);
    const bookings = await Booking.find({ doctor_id: doctorId });
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
    console.log(patientId)
    if(!patientId){
      return res.status(400).json({
        msg : "User not Logged In"
      })
    }
    const bookings = await Booking.find({ patient_id: patientId }).populate(['doctor_id','patient_id']).exec();
    return res.status(200).send(bookings);
  } catch (error) {
    console.log(
      "Error occure in the bookingDoctor.controller.js ===> " + error.message
    );
  }
};

export { bookingDoctor, getBookingByDoctor, getBookingByPatient };
