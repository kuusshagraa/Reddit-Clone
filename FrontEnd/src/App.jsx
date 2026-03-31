import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LogIn from '../Components/LogIn';
import SignUp from '../Components/SignUP';
import Home from '../Components/Home';
import Accounts from '../Components/Accounts';
import CommunitiesPage from '../Components/CommunitiesPage';
import { ForumProvider } from '../Components/context';
import Post from '../Components/Post';
import CreatePost from '../Components/CreatePost';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout';
function App() {
  const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}
    >
      <Route path='' element={<Accounts/>}/>
      <Route path='Home' element={<Home/>}/>
      <Route path='CommunitiesPage' element={<CommunitiesPage/>}/>
      <Route path='Post' element={<Post/>}/>


    </Route>
  )
)
  const [checkCommunities,SetCommunities]=useState(true)
  const[isOpenCC,setOpenCC]=useState(false)
  const[isOpenCP,setOpenCP]=useState(false)
  const[username,setUsername]=useState('')
  const[ComNum,setcomnum]=useState('')
  const[communities,setcommunities]=useState([])
  const[totalCommunites,settc]=useState('')
  const[currentId,setCI]=useState('')
  const[posts,setPosts]=useState([])
  const[PostId,setPostId]=useState('')
  const[isJoined,setIsjoined]=useState(false)
  const[joinedcom,setjoinedcomm]=useState(false)
      const setjoinedcom=(data)=>
    {
      setjoinedcomm(data)
    }
       const checkJoined=(data)=>
    {
      setIsjoined(data)
    }
      const setcurrPostId=(data)=>
    {
      setPostId(data)
    }
    const settotalposts=(data)=>
    {
      setPosts(data)
    }
  const setCurrentId=(CI)=>
    {
      setCI(CI)
    }
  const settotalCommunities=(tc)=>
    {
      settc(tc)
    }
  const setCommunities=(data)=>
    {
      setcommunities(data)
    }
  const setComNum=(num)=>
    {
      setcomnum(num)
    }
  const setusername=(naam)=>
    {
      setUsername(naam)
    }
  const setAllCom= ()=>
    {
        SetCommunities(true)
    }
  const setJoinedCom= ()=>
    {
        SetCommunities(false)
    }
    const OpenCC= ()=>
    {
        setOpenCC(true)
    }
  const CloseCC= ()=>
    {
        setOpenCC(false)
    }
    const OpenCP= ()=>
    {
        setOpenCP(true)
    }
  const CloseCP= ()=>
    {
        setOpenCP(false)
    }

  

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />


    <ForumProvider value={{PostId,setcurrPostId,isJoined,checkJoined,joinedcom,
        setjoinedcom,
      currentId,setCurrentId,settotalposts,posts,
      communities,setCommunities,setComNum,ComNum,totalCommunites,settotalCommunities,
      username,setusername,checkCommunities,setAllCom,setJoinedCom,isOpenCC,OpenCC,CloseCC,isOpenCP,OpenCP,CloseCP}}>
      
      <RouterProvider router={router}/>

    </ForumProvider>
    </>
          
  )
}

export default App
