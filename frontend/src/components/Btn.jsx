import React, { useRef } from "react";
import Loading from "./Loading";

const Btn = ({ btninfo, loading }) => {
  const btnref = useRef();
  return (
    <button
      ref={btnref}
      disabled={loading}
      className={`flex w-full my-4 justify-center rounded-md  px-3 py-2 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${loading ? 'bg-black cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 cursor-pointer'}`}
      // className=" drop-shadow-2xl bg-heading brightness-90 text-background border-2 border-black p-2 font-semibold m-1 rounded-lg cursor-pointer"
      onClick={btninfo.onclick}
    >
      {loading ? <Loading/> : btninfo.label}
    </button>
  );
};

export default Btn;
