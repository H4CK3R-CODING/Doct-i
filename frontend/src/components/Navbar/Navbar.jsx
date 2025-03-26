import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full gap-3 ">
      <Link
        className="flex m-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to={"/registerDoctor"}
      >
        Doctor Register
      </Link>
      <Link
        className="flex m-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to={"/loginDoctor"}
      >
        Doctor Login
      </Link>
      <Link
        className="flex m-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to={"/registerPatient"}
      >
        Patient Register
      </Link>
      <Link
        className="flex m-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to={"/loginPatient"}
      >
        Patient Login
      </Link>
      <button
        onClick={async () => {
          localStorage.removeItem("token");
          await axios.get(
            `${import.meta.env.VITE_BACKENDURL}/api/v1/user/logout`,
            { withCredentials: true }
          );
          setIsLoggedIn(false);
        }}
        className="flex m-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
