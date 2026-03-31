import { useState } from 'react'
import SignUp from './SignUP'
import LogIn from './LogIn'
function Accounts()
{
    const [isLogin,checkLogin]=useState(true)
 
    
    
    return(
        <div className='h-[1024px] w-[1,440px] bg-[linear-gradient(135deg,#485AA1_0%,#8248BF_25%,#B36FB5_50%,#41E0C3_75%,#2A2766_100%)] flex justify-center items-center '>
            <div className='bg-[#FFFFFF]  h-[810.64px] w-[1,223.98px] rounded-[40px] overflow-hidden flex'>
                <div className='w-[612px] h-[811px]   flex flex-col justify-center items-center bg-[#52BFAF] gap-[20px] p-3' >
                <img src='images/iconreal.svg' className='mix-blend-screen mt-[10px]  '>
                </img>
                <div className='w-[362px] h-[80px] font-jolly text-[64px] font-[400] text-center'>Welcome</div>
                <div className='w-[394px] h-[25px] font-jolly text-[20px] font-[400] text-center'>-Find your people. Share your world.</div>
                </div>
                <div className='w-[612px] h-[811px] flex flex-col justify-evenly items-center pt-1  '>

                <div className='w-[516px] h-[50px] bg-[#EFEBEB] rounded-[30px] flex justify-center items-center overflow-hidden mt-[40px]' >
                    <button onClick={()=>{checkLogin(true)}} className={`w-[254px] h-[38px] rounded-[50px] font-semibold text-[25px] border-none flex items-center justify-center pt-[4px] transition-all duration-200 ${isLogin ? 'bg-[#FFFFFF] text-[#000000]' : 'bg-transparent text-[#666666]'}`}> LogIn</button>
                    <button onClick={()=>{checkLogin(false)}} className={`w-[254px] h-[38px] rounded-[50px] font-semibold text-[25px] border-none flex items-center justify-center pt-[4px] transition-all duration-200 ${!isLogin ? 'bg-[#FFFFFF] text-[#000000]' : 'bg-transparent text-[#666666]'}`}> SignUp</button></div>
                <div className='flex flex-col justify-evenly items-center gap-[20px] pt-1'>
                    { isLogin ? <LogIn/>:<SignUp/>}

                </div>
                
                </div>
                
                 
                



            </div>
        </div>

    )
}
export default Accounts