import React, { useState } from 'react'
import { LiaEye } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";
// import { useRecoilValue } from 'recoil';
// import { seletedThemeAtom } from '../../Recoil/Atom';
import Timer from './Timer';

const InputContainer = ({detail}) => {

  const [passvisible, setPassvisible] = useState(false);
  // const theme = useRecoilValue(seletedThemeAtom)
  const theme = "light"
  
  return (
    <div className='flex flex-col my-2'>
      <label className='text-xl font-[450] cursor-pointer font-[Poppins] ml-1 text-heading' htmlFor={`${detail.id}`}>{detail.label}</label>
      <div className='relative w-full'>
        <input className={`w-full font-[400] text-lg rounded-lg p-2 m-1  block text-heading ${ theme === "dark" ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" : "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"}`} placeholder={`${detail.placeholder}`} type={`${detail.inputType}`} name={`${detail.id}`} id={`${detail.id}`} onFocus={()=>{
          detail.inputType = "password"
          setPassvisible(false)
        }} required autoComplete={`${detail.id}`} value={detail.value ?? detail.value } onChange={(event)=>{
          detail.onchange(event) 
        }}/>
        {
          detail.id == "password" ? <span onClick={()=>{
            if(passvisible){
              detail.inputType = "password"
              setPassvisible(false)
            }
            else{
              detail.inputType = "text"
              setPassvisible(true)
            }
          }} className='absolute top-2 right-3 p-2'>{passvisible ? <LiaEye className='text-2xl' /> : <LiaEyeSlash className='text-2xl' />}</span> : ""
        }
        {
          detail.id == "otp" ? <span onClick={()=>{
            
          }} className='absolute top-2 right-3 p-2 text-heading'><Timer/></span> : ""
        }
      </div>
      
    </div>
  )
}

export default InputContainer
