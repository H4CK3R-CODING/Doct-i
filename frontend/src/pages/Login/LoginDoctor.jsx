import React, { useState } from "react";
import Loading from "../../components/Loading";
import InputContainer from "../../components/InputContainer/InputContainer";
import { useNavigate } from "react-router-dom";
import Btn from "../../components/Btn";
import axios from "axios";
import toast from "react-hot-toast";

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
        if (username == "" || password == "") {
          toast.error("Please Fill Up Username and Password");
          return;
        }
        
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKENDURL}/api/v1/user/doctorLogin`,
          {
            username,
            password,
          },
          { withCredentials: true },
          config
        );

        if (data.msg == "Successfully Login") {
          toast.success("Successfully Login");
          // setIsLoggedIn(true);
          localStorage.setItem("token", data.jwt)
          
          // console.log(data.jwt)
          // localStorage.setItem("isLoggedIn", {
          //     value: true,
          //     expiry: now.getTime() + 15  * 24 * 60 * 60
          // });
          navigate("/");
        } else if (data.msg == "Input are not correct") {
          toast.error("Input are not correct");
        } else if (data.msg == "Admin don't access you") {
          toast.error("Admin don't access you");
        } else if (data.msg == "You are not Registered!") {
          toast.error("You are not Registered!");
        } else if (data.msg == "Password is wrong!") {
          toast.error("Password is wrong!");
        } else {
          toast.error("Fill Up Again");
        }


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
        Doctor Login
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
