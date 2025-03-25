import { Route, Routes } from "react-router-dom";
import "./App.css";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import DoctorRegister from "./pages/Register/DoctorRegister";
import PatientRegister from "./pages/Register/PatientRegister";
import LoginDoctor from "./pages/Login/LoginDoctor";
import LoginPatient from "./pages/Login/LoginPatient";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/signin" element={<SignIn />}></Route> */}
        <Route path="/registerDoctor" element={<DoctorRegister />}></Route>
        <Route path="/registerPatient" element={<PatientRegister />}></Route>
        <Route path="/loginDoctor" element={<LoginDoctor />}></Route>
        <Route path="/loginPatient" element={<LoginPatient />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
