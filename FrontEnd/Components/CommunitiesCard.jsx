import { useNavigate } from "react-router-dom"
import useForum from "./context"

function CommunitiesCard(props)
{
    const{setcurrPostId}=useForum()
    const nav=useNavigate()
    
    const handleClick=()=>
        {
            nav('/Post')
            setcurrPostId(props.id)
            localStorage.setItem("PostId",props.id)
        }
    return(
        <>
        <button onClick={handleClick} className="ml-[118px] w-[1198px] h-[184px] rounded-[20px] bg-[#FFFFFF] pt-[5px] text-left hover:shadow-lg transition-shadow duration-200 block  "> 
            <div className="w-[1000px] h-[38px] font-[700] text-[34px] text-[#000000] ml-[34px]">{props.title}</div>           
            <div className="w-[1067px] h-[52px] font-[600] text-[20px] ml-[34px] text-[#726F6F] mt-[5px]">{props.content}</div>
            <div className="flex justify-between mt-[5px] ml-[34px] mr-[39px]">
                <div className="w-[236px] h-[26px] font-[400] text-[20px] text-[#787272] whitespace-nowrap">Posted by u/tech_enthusiasts</div>
                <div className="flex w-[161px] h-[26px]">
                    <img src='images/comment.svg'></img>
                    <div className="w-[137px] h-[26px] font-[400] text-[20px] whitespace-nowrap  text-[#787272]">View Comments</div>
                </div>
            </div>

        </button>

        </>
    )
}
export default CommunitiesCard