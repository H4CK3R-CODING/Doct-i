import React from "react";
import DoctorRegister from "./Register/DoctorRegister";
import Sign from "../components/Sign/Sign";
import Mybooking from "../components/Mybooking/Mybooking";
import List from "../components/Mybooking/List";

const Home = () => {
  return (
    <div className="text-lg">
      Home
      {/* <DoctorRegister/> */}
      {/* <Sign/> */}
      <Mybooking/>
      {/* <List/> */}
    </div>
  );
};

export default Home;
