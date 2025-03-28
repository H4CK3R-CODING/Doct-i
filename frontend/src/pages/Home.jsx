import React from "react";
import DoctorRegister from "./Register/DoctorRegister";
import Sign from "../components/Sign/Sign";
import Mybooking from "../components/Mybooking/Mybooking";
import List from "../components/Mybooking/List";
import Bookings from "../components/Mybooking/Bookings";
import { useRecoilValue } from "recoil";
import { userRecoil } from "../Recoils/Atoms";
import Rating from "../components/Rating/Rating";

const Home = () => {
  const user = useRecoilValue(userRecoil)
  return (
    <div className="text-lg">
      <Rating/>
      Home
      {/* <DoctorRegister/> */}
      {/* <Sign/> */}
      {user=="Patient"? <Mybooking/>: <Bookings/>}
      
      
      {/* <List/> */}
    </div>
  );
};

export default Home;
