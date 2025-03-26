import {Router } from "express"
import {bookingDoctor, getBookingByDoctor, getBookingByPatient} from "../controllers/booking.controller.js";


const router = Router();

router.post("/Doctor", bookingDoctor)
router.post("/getbookingsByDoctor", getBookingByDoctor)
router.post("/getbookingsByPatient", getBookingByPatient)

export default router;