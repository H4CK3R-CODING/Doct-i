import { Router } from "express"
import {doctorLogin, doctorRegister} from "../controllers/doctor.controller.js"
import { patientLogin, patientRegister } from "../controllers/patient.controller.js"

const router = Router()

router.post("/doctorRegister", doctorRegister)
router.post("/doctorLogin", doctorLogin)
router.post("/patientRegister", patientRegister)
router.post("/patientLogin", patientLogin)

export default router
