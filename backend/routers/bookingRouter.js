import {Router } from "express"
import {bookingDoctor, cancelBookingByDoctor, cancelBookingByPatient, getBookingByDoctor, getBookingByPatient} from "../controllers/booking.controller.js";


const router = Router();

router.post("/Doctor", bookingDoctor)
router.post("/getbookingsByDoctor", getBookingByDoctor)
router.post("/getbookingsByPatient", getBookingByPatient)
router.post("/cancelBookingByDoctor", cancelBookingByDoctor)
router.get("/cancelBookingByPatient", cancelBookingByPatient)

export default router;