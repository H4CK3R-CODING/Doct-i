import React from "react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import Atom, { seletedThemeAtom } from "../../Recoil/Atom";

const Option = ({ opt }) => {
  // const [sem, setSem] = useRecoilState(Atom.semAtom);
  // const [branch, setBranch] = useRecoilState(Atom.branchAtom);
  // const theme = useRecoilValue(seletedThemeAtom)
  const theme = "light"

  return (
    <div className="flex flex-col my-2">
      <label className='text-xl text-heading font-[450] cursor-pointer font-[Poppins]' htmlFor={`${opt.sele}`}>{opt.label}</label>
      <select
        name={`${opt.sele}`}
        id={`${opt.sele}`}
        className={`font-[400] text-lg rounded-lg p-2 m-1 block ${theme === "dark" ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" : "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"}`}
        required
        onChange={(event) => {
          // console.log(event.target.value);
          {opt.sele == "sem" ? setSem(event.target.value) : setBranch(event.target.value)};
        }}
      >
        {opt.opt.map((ele, idx) => {
          return (
            <option key={idx} value={`${ele.val}`}>
              {ele.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Option;
