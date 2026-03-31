import useForum from "./context"
import { createCommunity } from "./api"
import { useState } from "react"
import { viewCommunities } from "./api"
function CreateCommunity()
{
    const {CloseCC,setCommunities}=useForum()
    const[name,setname]=useState('')
    const[discription,setDis]=useState('')
    const handleclick=async(n,d)=>
        {
            await createCommunity(n,d)
            const fetchCommunities=(async()=>
                          {
                            const data=await viewCommunities()
                              setCommunities(data)
                            
                            if (data.error) { 
                            settotalposts([]);}
                             else {
                                settotalposts(data);
                            }
                          }
                        )  
            fetchCommunities()
            CloseCC()
            
        }
    return(
        <>
        <div className="mt-[145px] mb-[145px] ml-[243px] mr-[265px] min-h-[734px] w-[932px] bg-[#FFFFFF] absolute z-50 box-border pt-[30px] rounded-[20px] ">
            <div className="w-[336px] h-[45px] font-[400] text-[36px] text-[#52BFAF] ml-[43px]  ">Create Community</div>
            <div className="w-[190px] h-[31px] font-[600] text-[24px] text-[#000000] ml-[43px] mt-[27px]">Community Name </div>
            
                <input
                type='text'
                placeholder="Enter community name"
                id='community name'
                value={name}
                onChange={(e)=>
                  {
                    setname(e.target.value)
                  }}
                className=" w-[833px] h-[78px] overflow-hidden  rounded-[10px]  ml-[43px]  pl-[25px] text-[24px] text-[#787272] font-[600] bg-[#E9E9E9] border-none">
                </input>
            <div className="w-[121px] h-[31px] font-[600] text-[24px] text-[#000000] ml-[43px] mt-[22px]">Description </div>
            
                <textarea
                type='text'
                placeholder="Enter description"
                id='description'
                value={discription}
                onChange={(e)=>
                  {
                    setDis(e.target.value)
                  }}
                className="w-[833px] h-[317px] overflow-hidden  rounded-[10px]  ml-[43px]  text-[24px] text-[#787272] font-[600] bg-[#E9E9E9] border-none pt-[27px] pl-[25px]">
                </textarea>            

            <div className="mt-[31px] flex ml-[43px] mr-[56px] justify-start gap-[23px] mb-[50px] ">
                <button onClick={()=>{CloseCC()}} className="w-[405px] h-[68px] bg-[#C8C8C8] flex justify-center items-center font-[700] text-[32px] text-[#000000] rounded-[10px] border-none">Cancel</button>
                <button onClick={()=>{handleclick(name,discription)}}className="w-[405px] h-[68px] bg-[#52BFAF] flex justify-center items-center font-[700] text-[32px] text-[#FFFFFF] rounded-[10px] border-none">Create</button>

            </div>
        </div>
        
        </>
    )
}
export default CreateCommunity