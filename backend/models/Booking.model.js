import mongoose from "mongoose";


const BookingSchema = new mongoose.Schema({
    slot:{
        type: String,
        required: true,
    },
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    reportfile:{
        type: String,
        required : false
    }
})

const Booking = new mongoose.model("Booking", BookingSchema);

export default Booking;

