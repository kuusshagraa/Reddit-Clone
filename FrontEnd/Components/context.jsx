import { createContext, useContext } from "react";
import AllCommunites from "./AllCommunities";

export const ForumContext=createContext(
    {
        joinedcom:[],
        setjoinedcom:()=>{},
        isJoined:false,
        checkJoined:()=>{},
        PostId:'',
        setcurrPostId:()=>{},
        settotalposts:()=>{},
        posts:[],
        currentId:'',
        setCurrentId:()=>{},
        totalCommunites:'',
        settotalCommunities:()=>{},
        communities:[],
        setCommunities:()=>{},
        checkCommunities:false,
        username:'',
        setusername:()=>{},
        ComNum:'',
        setComNum:()=>{},
        setAllCom:()=>{},
        setJoinedCom:()=>{},
        usercommunites:[{}],
        isOpenCC:false,
        OpenCC:()=>{},
        CloseCC:()=>{},
        isOpenCP:false,
        OpenCP:()=>{},
        CloseCP:()=>{},
        
        

        
        

    }
)
export const ForumProvider=ForumContext.Provider
export default function useForum(){
    return useContext(ForumContext)
}    