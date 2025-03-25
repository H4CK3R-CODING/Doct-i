import React, { useState } from "react";
import Loading from "../../components/Loading";
import InputContainer from "../../components/InputContainer/InputContainer";
import { useNavigate } from "react-router-dom";
import Btn from "../../components/Btn";

const LoginDoctor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const noInput = [
    {
      label: "Username",
      id: "username",
      placeholder: "gaurav@gmail.com",
      inputType: "text",
      onchange: (event) => {
        setUsername(event.target.value);
      },
    },
    {
      label: "Password",
      id: "password",
      placeholder: "*********",
      inputType: "password",
      Icon: "",
      onchange: (event) => {
        setPassword(event.target.value);
      },
    },
  ];

  const btninfo = {
    label: "Sign In",
    onclick: async (event) => {
      try {
        event.preventDefault();
        setIsLoading(true);
      } catch (error) {
        toast.error("Try Again Some Issue Occur");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
  };

  return (
    <>
      <h1 className="text-4xl p-2 m-2 font-semibold text-center text-heading">
        Patient Login
      </h1>
      <div className="flex justify-center items-center bg-background">
        <form className="w-full px-9 md:w-1/2">
          {noInput.map((ele, idx) => {
            return <InputContainer key={idx} detail={ele} />;
          })}
          {/* <Link to={"/forgetpass"} className="text-blue-600 underline my-3 block">Forget Password!</Link> */}
          {isLoading ? <Loading /> : <Btn btninfo={btninfo} />}
        </form>
      </div>
    </>
  );
};

export default LoginDoctor;
