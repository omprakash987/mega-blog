import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logouthandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())

        })

    }
  return (
   <button className='inline-block bg-blue-400'>logout</button>
  )
}

export default LogoutBtn