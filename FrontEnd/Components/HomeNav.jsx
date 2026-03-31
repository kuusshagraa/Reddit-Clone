import React, { useState } from "react"
import useForum from "./context"
import { useNavigate } from "react-router-dom"


function HomeNav()
{
  const nav=useNavigate()
  const handleClick=()=>
    {
      nav("/")
      localStorage.setItem("token",'')

    }
  const{isOpenCC,OpenCC,CloseCC}=useForum()

  
  const {username}=useForum()
  const {ComNum}=useForum()
  
    return(
        <div className={`w-full top-0 left-0 h-[129px] z-0 bg-[#FFFFFF] flex justify-between pr-[133px] pl-[126px] box-border transition-all duration-0 ${isOpenCC? 'absolute':'fixed'}`}>
                <div className="flex flex-col justify-center items-center">
                  <div className=" w-[339px] h-[53px] text-[48px] text-[#52BFAF] font-[400] tracking-wider text-start">
                  INSTI FORUM
                  </div>
                  <div className=" w-[335px] h-[26px] text-[20px] text-start text-[#3A3636] font-[600] tracking-wider" >
                    -Find your people. Share your world.
                  </div>
                </div>
                <div className="flex flex-row justify-end items-center ">
                  <div className="flex flex-col justify-start">
                    <div className="w-[114px] h-[31px] text-[24px] text-[#191717] font-[700] tracking-wider text-center"> {username}</div>
                    <div className="w-[100px] h-[19px] text-[15px] text-[#3D3D3D] font-[600] tracking-wider text-end">{ComNum} communities</div>
                  </div>
                  <button onClick={()=>(handleClick())}className="w-[108px] h-[39px] rounded-[10px] bg-[#52BFAF]">
                    <span className="flex justify-end items-center">
                      <img src='images/Logout.svg'></img>
                      <span className='w-[66px] h-[26px] text-[20px] text-[#FFFFFF] font-[700] tracking-wider'>Logout</span>
                    </span>
                  </button>
                </div>
              </div>
    )
}
export default HomeNav