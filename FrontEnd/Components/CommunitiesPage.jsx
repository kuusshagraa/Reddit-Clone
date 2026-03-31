import CommunitesPageNavBar from "./CommunitesPageNavBar"
import CommunitiesCard from "./CommunitiesCard"
import useForum from "./context"
import CreatePost from "./CreatePost"
import { viewCurrCommunity } from "./api"
import { useEffect, useState } from "react"
function CommunitiesPage()
{
    
    const{communities,currentId,posts}=useForum()
    const {isOpenCP,OpenCP,CloseCP}=useForum()
    const [currdata,setcurdata]=useState({})
    
    useEffect(()=>{
                
                const fetchDetails=(async()=>
                  {
                    const data=await viewCurrCommunity(localStorage.getItem("communityid"))
                    setcurdata(data)
                    console.log(currdata)                  
                    //settotalCommunities(data.length)
                  }    
                ) 
                fetchDetails()
            },
                [])

    return(<>
    {
            isOpenCP && <CreatePost/>
    }

        <CommunitesPageNavBar name={currdata.name} discription={currdata.description}/>
        <div className="w-screen min-h-screen pt-[328px]  bg-[linear-gradient(135deg,#485AA1_0%,#8248BF_25%,#B36FB5_50%,#41E0C3_75%,#2A2766_100%)]">
            <div className="flex flex-col gap-[74px]">
                {
                
                  posts.length!=0 && posts.map((post)=>
                  (
                      <CommunitiesCard key={post.id} id={post.id} title={post.title} content={post.content}/>
                  )
                  )

                
                }
               
            </div>
        
        </div>
        </>
    )
}
export default CommunitiesPage