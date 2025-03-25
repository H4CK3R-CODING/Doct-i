import React, { useState } from "react";
import InputContainer from "../../components/InputContainer/InputContainer";
import Loading from "../../components/Loading";
import Btn from "../../components/Btn";
import Option from "../../components/Option";

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
      id: "nubmer",
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
      label: "Any Previous Disease",
      id: "disease",
      placeholder: "Previous Disease",
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
  ];

  const btninfo = {
    label: "Register",
    onclick: async (event) => {
      const semesterInt = parseInt(semester);
      try {
        event.preventDefault();
        setIsLoading(true);
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
      sele: "gen",
      opt: [
        {
          val: 1,
          name: "Male",
        },
        {
          val: 2,
          name: "Female",
        },
        {
          val: 3,
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
            return <Option key={idx} opt={ele} />;
          })}
          {isLoading ? <Loading /> : <Btn btninfo={btninfo} />}
        </form>
      </div>
    </>
  );
};

export default DoctorRegister;
