import React, { useRef } from "react";

const Btn = ({ btninfo }) => {
  const btnref = useRef();
  return (
    <button
      ref={btnref}
      className=" drop-shadow-2xl bg-heading brightness-90 text-background border-2 border-black p-2 font-semibold m-1 rounded-lg cursor-pointer"
      onClick={btninfo.onclick}
    >
      {btninfo.label}
    </button>
  );
};

export default Btn;
