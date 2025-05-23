import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import validateEmail from "../../../utils/validateEmail";
import { useNavigate } from "react-router-dom";
import Timer from "../InputContainer/Timer";
import Btn from "../Btn";

const OTPPopup = ({ gmail, onClose, onVerify, remMin, remSec, startTimer }) => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async () => {
    // You can replace this with an API call
    try {
      setIsLoading(true);
      console.log(gmail, otp);
      if (gmail == "" || otp == "") {
        toast.error("Please fill the OTP");
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
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/api/v1/user/verifyOtp`,
        {
          gmail,
          otp,
        },
        { withCredentials: true },
        config
      );
      if (data.msg == "Otp verified Successfully") {
        toast.success("Otp Verified Successfully!");
        onVerify();
        navigate("/loginPatient");
      } else {
        toast.error("data.response.data.msg");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Verify OTP</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-3"
          />
          <span
            onClick={() => {}}
            className="absolute top-1 right-3 p-1 text-heading"
          >
            <div>
              {!startTimer ? (
                <p className="text-red-600">OTP Expired</p>
              ) : (
                <div>
                  {remMin < 10 ? "0" + remMin : remMin} :{" "}
                  {remSec < 10 ? "0" + remSec : remSec}
                </div>
              )}
            </div>
          </span>
          {/* <span
            onClick={() => {}}
            className="absolute top-1 right-3 p-1 text-heading"
          >
            <Timer />
          </span> */}
        </div>
        {/* <button
          onClick={handleVerify}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Verify
        </button> */}
      <Btn btninfo={{label: "Verify", onclick: handleVerify}} loading={isLoading} />
        <button
          onClick={onClose}
          className="text-sm text-gray-500 mt-2 w-full  px-4 py-2 rounded hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OTPPopup;
