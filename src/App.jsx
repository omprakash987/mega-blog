import React from "react";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css'
import authService from "./appwrite/auth"
import { login,logout } from "./store/authSlice";
import {Footer,Header} from './components'
import { Outlet } from "react-router-dom";





function App() {
const [loding , SetLoding] = useState(true)
const dispatch = useDispatch()


useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))

    }
    else{
      dispatch(logout()); 

    }
  })
  .finally(()=>SetLoding(false))
})


 return !loding ? (
 
  <div className='min-h-screen flex flex-wrap content-between bh-gray-400'> 
  
  
  <div className='w-full block '>
    <Header/>
    <main>

      {/*</Outlet> */}

    </main>
    <Footer/>
  


  </div>


  </div>

 ) : (null)


}

export default App
