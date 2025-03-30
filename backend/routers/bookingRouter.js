import { Router } from "express";
import {
  bookingDoctor,
  cancelBookingByDoctor,
  cancelBookingByPatient,
  getBookingByDoctor,
  getBookingByPatient,
  getBookings,
  patientExamined,
} from "../controllers/booking.controller.js";

const router = Router();

router.post("/Doctor", bookingDoctor);
router.post("/getbookingsByDoctor", getBookingByDoctor);
router.post("/getbookingsByPatient", getBookingByPatient);
router.post("/cancelBookingByDoctor", cancelBookingByDoctor);
router.get("/cancelBookingByPatient", cancelBookingByPatient);
router.get("/patientExamined", patientExamined);
router.get("/getBookings", getBookings);

export default router;
