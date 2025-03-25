import React, { useState } from "react";
import InputContainer from "../../components/InputContainer/InputContainer";
import Loading from "../../components/Loading";
import Btn from "../../components/Btn";

const DoctorRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");

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
        setGmail(event.target.value);
      },
    },
    {
      label: "Age",
      id: "age",
      placeholder: "Enter Your Age",
      inputType: "Number",
      onchange: (event) => {
        setName(event.target.value);
      },
    },
    {
      label: "Experience of Years",
      id: "experience",
      placeholder: "Enter Your Experience",
      inputType: "Number",
      onchange: (event) => {
        setName(event.target.value);
      },
    },
    {
      label: "Qualification",
      id: "qualification",
      placeholder: "Enter Your Qualification",
      inputType: "text",
      onchange: (event) => {
        setName(event.target.value);
      },
    },
    {
      label: "Licence Number",
      id: "licence",
      placeholder: "Enter Licence Number",
      inputType: "text",
      onchange: (event) => {
        setName(event.target.value);
      },
    },
    {
      label: "Password",
      id: "password",
      placeholder: "Enter Password",
      inputType: "password",
      onchange: (event) => {
        setName(event.target.value);
      },
    },
    {
      label: "Specilization",
      id: "specilization",
      placeholder: "Enter Specilization",
      inputType: "text",
      onchange: (event) => {
        setName(event.target.value);
      },
    },
  ];

  const btninfo = {
    label: "Register",
    onclick: async (event) => {
      const semesterInt = parseInt(semester);
      try {
        event.preventDefault();
        setIsLoading(true);

        // if (name == "" || semester == "" || branch == "" || gmail == "") {
        //   toast.error("Please Fill Up Username and Password");
        //   return;
        // }
        // if (!validateEmail(gmail)) {
        //   toast.error("Write Valid Gmail");
        //   return;
        // }
        // const config = {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // };
        // const { data } = await axios.post(
        //   `${import.meta.env.VITE_BACKENDURL}/api/v1/user/register`,
        //   {
        //     name,
        //     semester: semesterInt,
        //     branch,
        //     gmail,
        //   },
        //   { withCredentials: true },
        //   config
        // );

        // if (data.msg == "OTP sent Successfully") {
        //   toast.success("OTP sent to Your Gmail");
        //   navigate("/register/verify", {
        //     state: { data: { name, semester, branch, gmail } },
        //   });
        // } else if (data.msg == "User already exist") {
        //   toast.success("User already exist");
        // } else {
        //   toast.error("Some error fill query form");
        // }
      } catch (error) {
        toast.error("Error on Backend Side");
      } finally {
        setIsLoading(false);
      }
    },
  };
  return (
    <>
      <h1 className="text-4xl p-4 font-semibold text-center text-heading">
        Doctor Registration
      </h1>
      <div className=" flex justify-center bg-background items-center">
        <form className="w-full px-9 md:w-[75vw]">
          {noInput.map((ele, idx) => {
            return <InputContainer key={idx} detail={ele} />;
          })}
          {/* {data.map((ele, idx) => {
            return <Option key={idx} opt={ele} />;
          })} */}
          {isLoading ? <Loading /> : <Btn btninfo={btninfo} />}
        </form>
      </div>
    </>
  );
};

export default DoctorRegister;
