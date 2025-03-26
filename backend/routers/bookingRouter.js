import {Router } from "express"
import bookingDoctor from "../controllers/booking.controller.js";


const router = Router();

router.post("/Doctor", bookingDoctor)

export default router;