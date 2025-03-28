import Patient from "../models/patient.model.js";
import genOtp from "../utils/genOtp.js";
import signAuth from "../zod/signAuth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import patientAuth from "../zod/patientAuth.js";
import ratingAuth from "../zod/ratingAuth.js";
import Doctor from "../models/doctor.model.js";
import mongoose from "mongoose";

const patientRegister = async (req, res) => {
  try {
    const { success } = patientAuth.safeParse(req.body);
    if (!success) {
      res.status(401).json({
        msg: "Some mistake in your inputs",
      });
      return;
    }

    const { name, gmail, phone, age, disease, password, gender } = req.body;

    const verified = await Patient.findOne({
      gmail,
    });

    if (verified) {
      res.status(201).json({
        msg: "User already exist",
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const otp = genOtp();
    console.log(otp);

    console.log({
      name,
      gmail,
      phone,
      age,
      disease,
      password,
      gender,
    });

    await Patient.create({
      name,
      gmail,
      phone,
      age,
      disease,
      password: hashPass,
      gender,
    });

    res.status(200).json({
      msg: "Patient Registered",
    });
  } catch (error) {
    console.log(
      "error occur in the patient.controller.js ===> " + error.message
    );
  }
};

const patientLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { success, error } = signAuth.safeParse(req.body);
    if (!success) {
      // console.log(error)
      res.status(201).json({
        msg: "Input are not correct",
      });
      return;
    }

    const isUser = await Patient.findOne({
      gmail: username,
    });

    if (isUser !== null) {
      const checkPassword = await bcrypt.compare(password, isUser.password);
      if (checkPassword) {
        const userId = isUser._id.toString();
        const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
          expiresIn: "15d",
        });

        res.cookie("jwt", token, {
          maxAge: 15 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          // sameSite: 'strict',
          // secure: true,
        });

        return res.status(200).json({
          msg: "Successfully Login",
          jwt: token,
          userId: isUser._id,
          user: "Patient",
        });
      }
      return res.status(201).json({
        msg: "Password is wrong!",
      });
    }
    res.status(201).json({
      msg: "You are not Registered!",
    });
  } catch (error) {
    console.log(
      "Error occure in the patient.controller.js ===> " + error.message
    );
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(201).json({ message: "Logged out successfully." });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(501).json({ error: "Internal Server Error" });
  }
};

const setRating = async (req, res) => {
  try {
    const { success, error } = ratingAuth.safeParse(req.body);

    if (!success) {
      console.log(error);
      return res.status(400).json({
        msg: "Something Wrong in Inputs",
      });
    }

    const { doctor_id, patient_id, rating } = req.body;
    if (!mongoose.Types.ObjectId.isValid(doctor_id)) {
      return res.status(400).json({ message: "Invalid Doctor ID" });
    }
    //const isDoctor = await Doctor.findById(doctor_id);

    // const totalRating = isDoctor.rating * isDoctor.reviews;
    // const averageRating = (totalRating + rating) / (isDoctor.reviews + 1);

    const isDoctor = await Doctor.findByIdAndUpdate(
      doctor_id,
      [
        {
          $set: {
            rating: {
              $round: [
                {
                  $divide: [
                    { $add: [rating, { $multiply: ["$rating", "$reviews"] }] },
                    { $add: ["$reviews", 1] }
                  ]
                },
                1  // Round to 1 decimal place
              ]
            }
          }
        },
        {
          $set: { reviews: { $add: ["$reviews", 1] } }, // Increment reviews by 1
        },
      ],
      { new: true }
    );


    // const totalRating = isDoctor.rating * isDoctor.reviews;
    // const averageRating = (totalRating+rating)/(isDoctor.reviews + 1)

    // const isSetRating = await Doctor.findByIdAndUpdate(
    //   doctor_id,
    //   {
    //     rating: averageRating.toFixed(1),
    //     reviews: isDoctor.reviews + 1
    //   },
    //   { new: true }
    // );

    // isSetRating = {}
    // console.log(isDoctor);


    if(!isDoctor){
      return res.status(404).json({
        msg: "Review not Added",
      });
    }
    
    return res.status(200).json({
      msg: "Review added successfully",
    });

  } catch (error) {
    console.log("Error in setRating controller", error.message);
    res.status(501).json({ error: "Internal Server Error" });
  }
};

export { patientRegister, patientLogin, logout, setRating };
