import Booking from "../models/Booking.model.js";
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

    return res.status(200).json(booking);
  } catch (error) {
    console.log(
      "Error occure in the bookingDoctor.controller.js ===> " + error.message
    );
  }
};

export default bookingDoctor;
