import { Router } from "express"
import {doctorLogin, doctorRegister, doctorVerify, getDoctors, searchDoctor} from "../controllers/doctor.controller.js"
import { logout, patientLogin, patientRegister, setRating } from "../controllers/patient.controller.js"
import isLoggedIn from "../controllers/isLoggedIn.controller.js"
import verifyOtp from "../controllers/verifyOtp.js"

const router = Router()

router.post("/doctorRegister", doctorRegister)
router.post("/doctorLogin", doctorLogin)
router.get("/doctorVerify", doctorVerify)
router.get("/getDoctors", getDoctors)
router.post("/patientRegister", patientRegister)
router.post("/verifyOtp", verifyOtp)
router.post("/patientLogin", patientLogin)
router.post("/searchDoctor", searchDoctor)
router.post("/isLoggedIn", isLoggedIn)
router.post("/rating", setRating)
router.get("/logout",logout)

export default router
