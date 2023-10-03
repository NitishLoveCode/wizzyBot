import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderBar from './HeaderBar'

export default function HeaderRoot() {
  const location = useLocation()


  return (
    <>
      <div className=''>
        {
          location.pathname === "/login" || location.pathname.includes("/reset-password") || location.pathname.includes("/landing-1") || location.pathname === "/profile/billing" || location.pathname === "/forgot-password" || location.pathname === "/profile/team" || location.pathname === "/profile/personal-information" || location.pathname === "/register" || location.pathname === "/profile" ? "" : <HeaderBar />
        }
      </div>
    </>
  )
}
