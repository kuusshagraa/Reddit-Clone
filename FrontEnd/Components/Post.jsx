import { useState,useEffect } from "react"
import Comments from "./Comments"
import PostNavBar from "./PostNavBar"
import { getcurrPost, viewcomments } from "./api";
import useForum from "./context";
import { postcomment } from "./api";
function Post()
{
    const{joinedcom}=useForum()
    const[content,setcontent]=useState('')
    const[comments,setcomments]=useState([])
    const [postdetials,setpostdetials]=useState({})
    const [isJoined,checkJoined]=useState(false)
    
        useEffect(()=>
        {
            const cid=localStorage.getItem("communityid")
            const alreadyjoined=joinedcom?.some((com)=>com.id==cid)
            checkJoined(alreadyjoined)
        },[joinedcom])

        useEffect(()=>{
    const fetchPost=(async()=>
      {
         const pid=localStorage.getItem("PostId")
        const data=await getcurrPost(pid)
        setpostdetials(data)
      }
    )
    const fetchcomments=(async()=>
      {
        try {
            const data = await viewcomments(localStorage.getItem("PostId"))
            // If data is null/undefined, default to an empty array []
            setcomments(Array.isArray(data) ? data : []) 
        } catch (error) {
            console.error("Failed to load comments:", error);
            setcomments([]); // Fallback to empty array on error
        }
      }
    )
    
    fetchPost()
    fetchcomments()
    
}, [])
        const handleclick=(async(PostId,c)=>{
            await postcomment(PostId,c)
            const data=await viewcomments(localStorage.getItem("PostId"))
            setcomments(data)
            
        })

        

    return(
        <>
        <PostNavBar/>


        <div className="w-screen flow-root min-h-screen pt-[150px]  bg-[linear-gradient(135deg,#485AA1_0%,#8248BF_25%,#B36FB5_50%,#41E0C3_75%,#2A2766_100%)]">
            <div className="ml-[118px] w-[1198px] h-[301px] rounded-[20px] bg-[#FFFFFF] pt-[29px] ">
                <div className="w-[1114px] min-h-[100px] font-[400] text-[40px] text-[#000000] ml-[28px]">{postdetials.title}</div>   
                <div className="w-[236px] h-[26px] font-[400] text-[20px] text-[#787272] ml-[28px] mt-[12px]">Posted by u/tech_enthusiasts</div>
                <div className="w-[1120px] min-h-[84px] font-[600] text-[32px] ml-[28px] text-[#676565] mt-[12px]">{postdetials.content}</div>
            </div>
        <div className="ml-[116px] w-[1198px] min-h-[377px] rounded-[20px] bg-[#FFFFFF] pt-[29px] mt-[70px] mb-[126px] box-border pb-[59px]">
            <div className="flex mt-[24px] ml-[44px] gap-[20px] mb-[36px]">
                <img src='images/icon (1).svg' className="h-[38px] w-[38px]"></img>
                <div className="w-[167px] h-[30px] font-[400] text-[24px] text-[#000000] ">Comments (2)</div>
            </div>
            <div className="flex flex-col gap-[36px]">
                {
                    isJoined && (<>
                    <input 
                     className=" font-[400] text-[20px] text-[#625F5F]  ml-[44px] min-h-[80px] w-[1100px] rounded-[15px] bg-[#E2E2E2] box-border pl-[25px] border-none"
                     type='text'
                     placeholder="Add a comment"
                     id='comment'
                     value={content}
                    onChange={(e)=>
                  {
                    setcontent(e.target.value)
                  }}
                     >
                    </input>
                    <button onClick={()=>(handleclick(localStorage.getItem("PostId"),content))}className=" mr-[54px] ml-[956px] w-[188px] h-[44px] rounded-[15px] bg-[#52BFAF] border-none flex gap-[9px] box-border justify-center">
                        <img src='images/Sent.svg'></img>
                        <div className="font-[700] text-[24px] text-[#FFFFFF] pt-[7px]">Comment</div>

                    </button></>)
                }
                {
                  comments?.map((c)=>
                  (
                      <Comments key={c.id} id={c.id} content={c.content}/>
                  )
                  )

                }
              



            </div>

        </div>



        </div>
        </>
    )
}
export default Post