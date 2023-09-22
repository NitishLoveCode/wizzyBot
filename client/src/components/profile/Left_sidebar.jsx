import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {PiUsersThreeLight} from "react-icons/pi"
import {MdOutlinePayment} from "react-icons/md"
import { useState } from 'react'
import {AiFillPlusCircle} from "react-icons/ai"
import User_popup_info from '../header/heder_nav/User_popup_info'
import Profile_info from './childs/Profile_info'
import { useLocation } from 'react-router-dom'
import Team from './childs/Team'
import { Link } from 'react-router-dom'
import {HiMenuAlt2} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import Billing from './childs/Billing'
import {MdOutlineAdd} from "react-icons/md"
import Addteam from './childs/Addteam'

export default function Left_sidebar() {
    const location =useLocation()

    const [userInfoToggle, setuserInfoToggle]=useState(false)
    const[hide_and_show, sethide_and_show]=useState("hidden")
    const[AddteamPopup, setaddteamPopup]=useState(false)

    const headerToggleOn=()=>{
      if(userInfoToggle==true){
        setuserInfoToggle(false)
      }else{
        setuserInfoToggle(true)
      }
    }

    const left_bar_show=()=>{
        if(hide_and_show==""){
            sethide_and_show("hidden")
        }else{
            sethide_and_show("")
        }
    }

    // ------------------add new Team------------------
    const add_new_team_popup=()=>{
        if(AddteamPopup===false){
            setaddteamPopup(true)
        }else{
            setaddteamPopup(false)
        }
    }


  return (
    <>
    <div className='flex'>
        <div className={`${hide_and_show==="hidden"? "w-[14vw]":"w-[70vw]"} bg-white sm:w-[25vw] fixed border-r-[1px] h-[100vh] border-gray-300`}>
            <Link to={"/"}>
            <div className='hidden sm:block'>
            <div className='flex active:scale-95 h-16 items-center gap-2 border-b-[1px] border-gray-300 p-2'>
                <div>
                    <img src="https://app.livechatai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99eba397.png&w=48&q=75" alt="logo" />
                </div>
                <div>
                    <h3>WizzyBot</h3>
                </div>
            </div>
            </div>
            </Link>
            {/* -----------------all menu-------- */}
            <div className='sm:mt-4 text-gray-800 ml-2 sms:ml-8 flex flex-col gap-8'>
                <div className='block sm:hidden pt-5'>
                    <div onClick={()=>left_bar_show()} className='flex active:scale-95 cursor-pointer items-center gap-2'>
                        <div>
                            {/* <HiMenuAlt2 className='text-3xl'/> */}
                            {hide_and_show==="hidden"? <HiMenuAlt2 className='text-3xl'/> : <AiOutlineClose className='text-3xl'/>}
                            
                        </div>
                    </div>
                </div>

                <Link to={"/"}>
                <div className='flex active:scale-95 cursor-pointer items-center gap-2'>
                    <div>
                        <AiOutlineHome className='text-2xl'/>
                    </div>
                    <div className={`${hide_and_show} sm:block`}>
                        <h3 className='font-semibold'>Dashboard</h3>
                    </div>
                </div>
                </Link>


                    <Link to={"/profile/personal-information"}>
                <div className='flex active:scale-95 cursor-/pointer items-center gap-2'>
                        <div>
                            <AiOutlineUser className='text-2xl'/>
                        </div>
                        <div className={`${hide_and_show} sm:block`}>
                            <h3 className='font-semibold'>Profile</h3>
                        </div>
                </div>
                    </Link>

                <Link to={"/profile/team"}>
                <div className='flex active:scale-95 cursor-pointer items-center gap-2'>
                    <div>
                        <PiUsersThreeLight className='text-2xl'/>
                    </div>
                    <div className={`${hide_and_show} sm:block`}>
                        <h3 className='font-semibold'>Team</h3>
                    </div>
                </div>
                </Link>

                {/* -----------------Billing section----------------- */}
                <Link to={"/profile/billing"}>
                <div className='flex active:scale-95 cursor-pointer items-center gap-2'>
                    <div>
                        <MdOutlinePayment className='text-2xl'/>
                    </div>
                    <div className={`${hide_and_show} sm:block`}>
                        <h3 className='font-semibold'>Billing</h3>
                    </div>
                </div>
                </Link>
                
            </div>
        </div>


        {/* -----------------right section------------------ */}
        <div className='w-[88vw] sm:w-[75vw] ml-10 sm:ml-[25vw]'>
            <div className='flex justify-end h-16 items-center gap-2 border-b-[1px] border-gray-300 p-2'>
                <div onClick={()=>headerToggleOn()} className='w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 active:scale-95 cursor-pointer rounded-full items-center justify-center'>
                    <img className='w-12 h-12 sm:w-16 sm:h-16 rounded-full' src="https://lh3.googleusercontent.com/a-/ALV-UjWVCUf8M6k7Fi1D15xkBwMEepL4Ma7U1tTz7-GvtzwYYccahb2L3D2lDenwfoZG-1gxgyM3uhI7-QDG08z9NdUK5RwJa9INBb_dmgdz9tfNi0gl2fGffDdo9_uC3Mxz6iEoABEZX8pRbdLhuODHLZlGUeEF3ceOxxzHNQyEru-G4ajj_ebS1oULels3U41K-tABoj9I29Chs16WIUq-w9_L5EZbi04CRj39BEt9Fw47d4b-Az39eRwlw3DZepRkKK90hoGy2xMSYfij0PVS0H4OkLGSyduvQkfLOAs9sTew8j7_17ZqywqaxVTQS5EDU7a5igfC-k3qDlyhblPoLEM7iQKTG0Y66kgHtYRO6G6eiWWB-bcNCCXUtlT0Zfb6n0gHuDXkillaKMx2QFkb6FscOEhs_fo8CNT8MIhAGhbsn6Z3TkDfj2knN2qXH5lxtv2PkRdabzzYt3AQaL3jXSsqmjTKSytz6plCu7LMS9aTA_bdw4ryItuUziQmfw7iuhvKAmJ4mKJk0drvELp4TpidpmV_03cRjDpJKwjAr0EULVdgFrOYsZGuJ-zrS9IPOBA5d17mTsF8XSYtaAkt4dt49dxC589XypcgUcsZLNKPZzFfyzZJpHlowypGpnqWAwdgh1sOfixUSaHVkwcqsHi4Wzqi8JTcic0yK0vDyFmMB3MrAq1BLseSfEm2Fu53bcyJRXjFUM7R4zj6Cx_uFKpZ2vNEyEh6apmYQcmcsjeTZNSfrvOig3L9bQu7Yqp7Z2aBz7kDmW3Ww6FPZlIJrGoPTlOmPQAx70YGPCya4D6g98n1WHMc3o6jv7Sv-EPxqZxCeU0HW0vV9VJo4NmQ3AThsCZRuF5YArUCwlnNaXrG_vKVVFFOpzMxl8dfe0D4rHGeAdUa5GfLp0xcZAGcPzkrue4_z5t3pvMAUlZohpq5S8CLJJqSa8BnmgbyEWtseA=s288-c-no" alt="user" />
                </div>
            </div>
            {
            userInfoToggle ? <User_popup_info/>:""
            }

            
            {/* -----------------child is calling here--------------- */}
            {
                location.pathname==="/profile/personal-information" ? <><Profile_info/></>:""
            }

            {
                location.pathname==="/profile/team" ? <Team add_new_team_popup={add_new_team_popup}/>:""
            }
             {
                location.pathname==="/profile/billing" ? <Billing/>:""
            }
            

            {/* ----------------------users code till here---------- */}
            
            
        </div>
    </div>
            {/* --------------Team---add new user popup--------------- */}
            
            {
                AddteamPopup? <Addteam add_new_team_popup={add_new_team_popup}/>:""
            }
    </>
  )
}
