import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Accounts from '../Components/Accounts.jsx'
import CommunitiesPage from '../Components/CommunitiesPage.jsx'
import Post from '../Components/Post.jsx'
import Home from '../Components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
