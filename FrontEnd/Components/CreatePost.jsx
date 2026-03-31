import useForum from "./context"
import { createPost } from "./api"
import { useState } from "react"
import { getposts } from "./api"
function CreatePost()
{
    const {currentId}=useForum()
    const {CloseCP,settotalposts}=useForum()
        const[title,setTitle]=useState('')
        const[content,setContent]=useState('')
    const handleclick=async(currentId,title,content)=>
        {
            await createPost(currentId,title,content)
            const fetchPosts=(async()=>
                          {
                            const data=await getposts(localStorage.getItem("communityid"))
                            console.log(data)
                            
                            if (data.error) { 
                            settotalposts([]);}
                             else {
                                settotalposts(data);
                            }
                          }
                        )  
            fetchPosts()
            CloseCP()
            
        }

    return(
        <>
        
        <div className="mt-[145px] mb-[145px] ml-[243px] mr-[265px] min-h-[734px] w-[932px] bg-[#FFFFFF] absolute z-50 box-border pt-[30px] rounded-[20px] ">
            <div className="w-[336px] h-[45px] font-[400] text-[36px] text-[#52BFAF] ml-[43px]  ">Create Post</div>
            <div className="w-[190px] h-[31px] font-[600] text-[24px] text-[#000000] ml-[43px] mt-[27px]">Title </div>
            
                <input
                type='text'
                placeholder="Enter post title"
                id='Post Title'
                value={title}
                onChange={(e)=>
                  {
                    setTitle(e.target.value)
                  }}
                className=" w-[833px] h-[78px] overflow-hidden  rounded-[10px]  ml-[43px]  pl-[25px] text-[24px] text-[#787272] font-[600] bg-[#E9E9E9] border-none">
                </input>
            <div className="w-[121px] h-[31px] font-[600] text-[24px] text-[#000000] ml-[43px] mt-[22px]">Content</div>
            
                <textarea
                type='text'
                placeholder="Writ your post content"
                id='Post Content'
                value={content}
                onChange={(e)=>
                  {
                    setContent(e.target.value)
                  }}
                className="w-[833px] h-[317px] overflow-hidden  rounded-[10px]  ml-[43px]  text-[24px] text-[#787272] font-[600] bg-[#E9E9E9] border-none pt-[27px] pl-[25px]">
                </textarea>            

            <div className="mt-[31px] flex ml-[43px] mr-[56px] justify-start gap-[23px] mb-[50px] ">
                <button onClick={()=>{CloseCP()}} className="w-[405px] h-[68px] bg-[#C8C8C8] flex justify-center items-center font-[700] text-[32px] text-[#000000] rounded-[10px] border-none">Cancel</button>
                <button onClick={()=>{handleclick(currentId,title,content)}} className="w-[405px] h-[68px] bg-[#52BFAF] flex justify-center items-center font-[700] text-[32px] text-[#FFFFFF] rounded-[10px] border-none">Post</button>

            </div>
        </div>
        
        </>
    )
}
export default CreatePost