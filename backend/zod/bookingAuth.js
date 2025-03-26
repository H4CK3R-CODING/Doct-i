import zod from 'zod'

const bookingAuth = zod.object({
    slot: zod.string(),
    doctor_id: zod.string(),
    patient_id: zod.string(),
    reportfile: zod.string(),
}).required()

export default bookingAuth;