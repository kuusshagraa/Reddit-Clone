import React, { useEffect, useState } from "react";
import AllCommunites from '../Components/AllCommunities';
import JoinedCommunites from '../Components/JoinedCommunites';
import HomeNav from '../Components/HomeNav';
import useForum from '../Components/context';
import CreateCommunity from "./CreateCommunity";
import { viewProfile } from "./api";
import { viewCommunities,getJoinedCommunitieses } from "./api";
import Modal from "./modal";
function Home()
    {
      let {username,setusername,setjoinedcom}=useForum()
      let {setComNum}=useForum()
      const {setCommunities,settotalCommunities,communities}=useForum()
      useEffect(()=>{
        viewCommunities()
        const usercom=(async ()=>
                    {
                        const data= await getJoinedCommunitieses();
                        setjoinedcom(data)
        
                    })
          usercom()
        const fetchCommunities=(async()=>
          {
            const data=await viewCommunities()
            setCommunities(data)
            //settotalCommunities(data.length)
          })
        const fetchUserData=(async()=>
          {
            const data = await viewProfile()
            setusername(data.name)
            setComNum(data.communities_joined_count)
            console.log(data)
            console.log(data.name)
            if (data.name) {
                setusername(data.name);
                console.log(username)
            } else {
                console.error("Property 'name' not found in:", data);
            }
            

          })
          fetchUserData()
          fetchCommunities()}
      ,[])
      useEffect(()=>
        {
          const fetchCommunities=(async()=>
          {
            const data=await viewCommunities()
            setCommunities(data)
            
          })
          fetchCommunities()

        },[communities.length])
      const {checkCommunities,setAllCom,setJoinedCom,isOpenCC,OpenCC,CloseCC}=useForum();
      
        return (
          <>
          {
            isOpenCC && <CreateCommunity/>
          }
          <HomeNav/>
          
            <div className={`w-screen min-h-screen pt-[149px]  bg-[linear-gradient(135deg,#485AA1_0%,#8248BF_25%,#B36FB5_50%,#41E0C3_75%,#2A2766_100%)] `}>
             
              <div className='flex justify-between items-center w-full box-border pr-[133px] pl-[133px] mb-[33px] '>
                <div className='w-[493px] h-[50px]  bg-[#EFEBEB] rounded-[30px] flex box-border pt-[4px] pl-[2px]'>
                  <button onClick={()=>{setAllCom()}} className={`w-[240px] h-[41px] rounded-[50px] font-semibold text-[24px] border-none text-center flex items-center justify-center pt-[4px] text-[#000000] transition-all duration-200 ${checkCommunities ? 'bg-[#FFFFFF] ' : 'bg-transparent '}`}>All Communities</button>
                  <button onClick={()=>{setJoinedCom()}} className={`w-[240px] h-[41px] rounded-[50px] font-semibold text-[24px] border-none text-center flex items-center justify-center pt-[4px] text-[#000000]  transition-all duration-200 ${!checkCommunities ? 'bg-[#FFFFFF] ' : 'bg-transparent '}`}>Joined Communities</button>
                </div>
                <button onClick={()=>{OpenCC()}} className='w-[250px] border-none whitespace-nowrap h-[50px]  bg-[#52BFAF] box-border rounded-[12px] mr-[95px] flex justify-start pt-[10px] pb-[11px] pl-[11px] pr-[9px] gap-[7px]'>
                  <img src='images/Plus.svg' className="flex justify-center items-start mb-[3px]"></img>
                  <div className="font-[600] text-[22px] text-[#FFFFFF] text-center">Create Community</div>
                </button>
              </div>
              

              
                <div>
                  {checkCommunities?<AllCommunites/>:<JoinedCommunites/>}
                </div>
                
               
              



              
            </div>
            <Modal/>
            </>
            
            


            
        )
    }
export default Home