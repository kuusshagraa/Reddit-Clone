import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { callSign } from './api';
function SignUp() {
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const[email,setEmail]=useState('')
    

  return (
    <>
    <div>
              <label for='email' className='text-[20px] font-[600] w-[49px] h-[26px]'>Email</label>
              <div>
                <input
                id='email'
                type='text'
                placeholder='Enter your email'
                required
                value={email}
                onChange={(e)=>
                  {
                    setEmail(e.target.value)
                  }}
                className=' p-[3px] w-[516px] h-[48px] rounded-[10px] border-none bg-[#EFEBEB]'
                >
                </input>
              </div>
    </div>
    <div>
              <label for='username' className='text-[20px] font-[600] w-[49px] h-[26px]'>UserName</label>
              <div>
                <input
                id='username'
                type='text'
                placeholder='Enter your username'
                required
                value={username}
                onChange={(e)=>
                  {
                    setusername(e.target.value)
                  }}
                className=' p-[3px] w-[516px] h-[48px] rounded-[10px] border-none bg-[#EFEBEB]'
                >
                </input>
              </div>
    </div>
    <div>
        <div className='w-[516px] h-[25px] flex justify-between items-start'>
                <label for='password' className='text-[20px] font-[600] w-[49px] h-[26px]'>Password</label>
                <p></p>
                </div>
                <div>
                  <input
                  id='password'
                  type='password'
                  placeholder='Enter your Password'
                  required
                  value={password}
                onChange={(e)=>
                  {
                    setpassword(e.target.value)
                  }}
                  className='p-[3px] w-[516px] h-[48px] rounded-[10px] border-none bg-[#EFEBEB]'
                  >
                </input>
                </div>
    </div>
            <div className='w-[516.01px] h-[66px] flex items-center justify-center'>
              <div className='w-[219.505px] h-[0px] border-[3px] border-[#A19D9D]'></div>
              <div className='w-[77px] h-[66px] font-[500] text-[#A19D9D] text-[32px] flex justify-center items-center'>OR</div>
              <div className='w-[219.505px] h-[0px] border-[3px] border-[#A19D9D]'></div>
            </div>
            <div className='w-[453px] h-[165px] flex flex-col p-2 justify-center gap-[24px]'>
              <div className='bg-[#FFFFFF] flex justify-between rounded-[10px] border-[1px] overflow-hidden'>
                <button className='bg-[#FFFFFF] w-[443px] h-[51px] font-[600] text-[25px] border-none text-start'>Continue with Google</button>
                <img src='images/googlelogo.svg'></img>
                 </div>
                 <div className='bg-[#FFFFFF] flex justify-between rounded-[10px] border-[1px] overflow-hidden'>
                <button className='bg-[#FFFFFF] w-[443px] h-[51px] font-[600] text-[25px] border-none text-start'>Continue with apple</button>
                <img src='images/applelogo.svg'></img>
                 </div>
                 
                </div>
                    <button onClick={()=>(callSign(username,email,password))} className='w-[516px] h-[58px] rounded-[15px] bg-[#52BFAF] border-none text-[28px] text-[#FFFFFF] font-[700] text-center flex items-center justify-center '>
                      SignUp</button>
                <div className='h-[38px] w-[429px] text-[13px] font-[700]'>By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.</div>
                                              
          
   
    

    </>
      
  )
}

export default SignUp
