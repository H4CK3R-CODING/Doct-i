import React from "react";
import DoctorRegister from "./Register/DoctorRegister";
import Sign from "../components/Sign/Sign";
import Mybooking from "../components/Mybooking/Mybooking";
import Bookings from "../components/Mybooking/Bookings";
import { useRecoilValue } from "recoil";
import { userRecoil } from "../Recoils/Atoms";

const Home = () => {
  const user = useRecoilValue(userRecoil)
  return (
    <div className="text-lg">
      Home
      {/* <DoctorRegister/> */}
      {/* <Sign/> */}
      {user=="Patient"? <Mybooking/>: <Bookings/>}
      
      
      {/* <List/> */}
    </div>
  );
};

export default Home;
