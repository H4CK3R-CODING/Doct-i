import zod from "zod";

const doctorAuth = zod.object({
  name: zod.string().nonempty("Required"),
  gmail: zod.string().email().nonempty("Required"),
  phone: zod.number(),
  age: zod.number(),
  experience: zod.number(),
  qualification: zod.string(),
  licence: zod.string().nonempty("Required"),
  password: zod.string(),
  specilization: zod.string(),
  location: zod.string().nonempty("Required"),
});

export default doctorAuth;
