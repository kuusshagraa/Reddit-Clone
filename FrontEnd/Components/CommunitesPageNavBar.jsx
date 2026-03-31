import { useState,useEffect } from "react"
import useForum from "./context"
import { NavLink } from "react-router-dom"
import { getposts, joinCommunity,leavecommunity } from "./api"

function CommunitesPageNavBar(props)
{

    const{settotalposts,posts}=useForum()
    const {isOpenCP,OpenCP,joinedcom}=useForum()
    const [isJoined,checkJoined]=useState(false)
    const handleClick2=(id)=>
        {
            leavecommunity(id)
            checkJoined(false)

        }
    useEffect(()=>{      
            const fetchPosts=(async()=>
              {
                const data=await getposts(localStorage.getItem("communityid"))
                
                if (data.error) { 
                settotalposts([]);}
                 else {
                    settotalposts(data);
                }
              }
            ) 
            fetchPosts()
        },
            [localStorage.getItem("communityid"),posts.length])
    useEffect(()=>
        {
            const cid=localStorage.getItem("communityid")
            const alreadyjoined=joinedcom?.some((com)=>com.id==cid)
            checkJoined(alreadyjoined)
        },[joinedcom])

    const handleClick=(id)=>
        {
            joinCommunity(id)
            checkJoined(true)

        }
    
    return (
        <>
        <div className={`w-full h-[261px]  bg-[#FFFFFF]  z-30 top-0 right-0 flex justify-between box-border pr-[102px] transition-all duration-0 ${isOpenCP ? 'absolute':'fixed'}`}>
            <div>
            <div className="mt-[25px] w-[211px] h-[26px] mb-[43px] ml-[102px] flex">
                <img src='images/Icon.svg' className="flex mr-[5px] mb-[3px]"></img>
                <div className="w-[191px] h-[26px] font-[600] text-[20px] text-[#52BFAF]"><NavLink to='/Home' className='whitespace-nowrap'>Back To Communities</NavLink></div>
            </div>
            <div>
            <div className=" ml-[102px] h-[80px] w-[387px] text-[64px] font-[400] text-[#000000] text-start">{props.name}</div>
             <div className="pl-[5px] ml-[102px] h-[31px] w-[496px] text-[24px] font-[600] text-[#3A3636] text-start whitespace-nowrap">{props.discription}</div>
            <div className='flex mt-[9px]  ml-[107px]'>
                      <img src='images/person.svg '></img>
                      <div className='font-[400] text-[13px] text-[#79747E] whitespace-nowrap pt-[3px]'>1250 members</div>
            </div>
            </div>
        </div>
        {isJoined ? 
        (<div className="flex gap-[15px] mt-[122px] ">
        <button onClick={()=>{handleClick2(localStorage.getItem("communityid"))}} className=" h-[50px] w-[227px] bg-[#DAD7D7]  rounded-[12px]  font-[700] text-[24px] box-border text-[#FFFFFF] text-center pt-[2px] border-none">
            Leave Community
        </button>
        <button onClick={()=>{OpenCP()}} className=" h-[50px] w-[227px] bg-[#52BFAF]  rounded-[12px]  font-[700] text-[24px] box-border text-[#FFFFFF] text-center pt-[2px] border-none">
            Create Post
        </button>
        </div>):
        (
        <button onClick={()=>{handleClick(localStorage.getItem("communityid"))}}  className=" mt-[122px] h-[50px] w-[227px] bg-[#52BFAF]  rounded-[12px]  font-[700] text-[24px] box-border text-[#FFFFFF] text-center pt-[2px] border-none">
            Join 
        </button>   
        )}
        


        
        </div>
        </>


    )
}
export default CommunitesPageNavBar