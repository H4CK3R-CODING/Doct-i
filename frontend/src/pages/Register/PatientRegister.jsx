import React, { useState } from "react";
import InputContainer from "../../components/InputContainer/InputContainer";
import Loading from "../../components/Loading";
import Btn from "../../components/Btn";
import Option from "../../components/Option";
import toast from "react-hot-toast";
import validateEmail from "../../../utils/validateEmail";
import axios from "axios";

const DoctorRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [age, setAge] = useState(null);
  const [disease, setDisease] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");

  const noInput = [
    {
      label: "Name",
      id: "name",
      placeholder: "Enter Your Name",
      inputType: "text",
      onchange: (event) => {
        setName(event.target.value);
      },
    },
    {
      label: "G-mail",
      id: "gmail",
      placeholder: "Enter G-mail",
      inputType: "email",
      onchange: (event) => {
        setGmail(event.target.value);
      },
    },
    {
      label: "Phone Number",
      id: "phone",
      placeholder: "Enter Phone Number",
      inputType: "Number",
      onchange: (event) => {
        setPhone(event.target.value);
      },
    },
    {
      label: "Age",
      id: "age",
      placeholder: "Enter Your Age",
      inputType: "Number",
      onchange: (event) => {
        setAge(event.target.value);
      },
    },
    {
      label: "Any Previous Disease",
      id: "disease",
      placeholder: "Previous Disease",
      inputType: "text",
      onchange: (event) => {
        setDisease(event.target.value);
      },
    },
    {
      label: "Password",
      id: "password",
      placeholder: "Enter Password",
      inputType: "password",
      onchange: (event) => {
        setPassword(event.target.value);
      },
    },
  ];

  const btninfo = {
    label: "Register",
    onclick: async (event) => {
      try {
        event.preventDefault();
        setIsLoading(true);
        if (
          name == "" ||
          gmail == "" ||
          phone == null ||
          age == null ||
          disease == "" ||
          password == "" ||
          gender == ""
        ) {
          toast.error("Please Fill Up Important Details");
          return;
        }
        if (!validateEmail(gmail)) {
          toast.error("Write Valid Gmail");
          return;
        }
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const phoneInt = parseInt(phone);
        const ageInt = parseInt(age)
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKENDURL}/api/v1/user/patientRegister`,
          {
            name,
            gmail,
            phone: phoneInt,
            age: ageInt,
            disease,
            password,
            gender,
          },
          { withCredentials: true },
          config
        );
        if (data.msg == "Patient Registered") {
          toast.success("Patient Registered Successfully!");
          // navigate("/register/verify", {
          //   state: { data: { name, semester, branch, gmail } },
          // });
        } else if (data.msg == "User already exist") {
          toast.success("User already exist");
        } else {
          toast.error("Some error fill query form");
        }
      } catch (error) {
        toast.error("Error on Backend Side");
      } finally {
        setIsLoading(false);
      }
    },
  };

  const data = [
    {
      label: "Gender",
      sele: "gender",
      opt: [
        {
          val: "male",
          name: "Male",
        },
        {
          val: "female",
          name: "Female",
        },
        {
          val: "other",
          name: "Other",
        },
      ],
    },
  ];

  return (
    <>
      <h1 className="text-4xl p-4 font-semibold text-center text-heading">
        Patient Registration
      </h1>
      <div className=" flex justify-center bg-background items-center">
        <form className="w-full px-9 md:w-[75vw]">
          {noInput.map((ele, idx) => {
            return <InputContainer key={idx} detail={ele} />;
          })}
          {data.map((ele, idx) => {
            return <Option key={idx} opt={ele}  setGender={setGender} />;
          })}
          {isLoading ? <Loading /> : <Btn btninfo={btninfo} />}
        </form>
      </div>
    </>
  );
};

export default DoctorRegister;
