import React, { useEffect } from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { PiUsersThreeLight } from "react-icons/pi"
import { MdOutlinePayment } from "react-icons/md"
import { useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import User_popup_info from '../header/heder_nav/User_popup_info';
import Profile_info from './childs/Profile_info';
import { useLocation } from 'react-router-dom';
import Team from './childs/Team';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Billing from './childs/Billing';
import { MdOutlineAdd } from "react-icons/md";
import Addteam from './childs/Addteam';
import logo from '../../assets/logo.png';
import axios from 'axios';
import serverBasePath from '../../../constants';
import {BiSolidUserCircle} from 'react-icons/bi';

export default function Left_sidebar() {
    const location = useLocation()

    const [userInfoToggle, setuserInfoToggle] = useState(false)
    const [hide_and_show, sethide_and_show] = useState("hidden")
    const [AddteamPopup, setaddteamPopup] = useState(false)
    const [userImage, setUser] = useState(null);

    const headerToggleOn = () => {
        if (userInfoToggle == true) {
            setuserInfoToggle(false)
        } else {
            setuserInfoToggle(true)
        }
    }

    const left_bar_show = () => {
        if (hide_and_show == "") {
            sethide_and_show("hidden")
        } else {
            sethide_and_show("")
        }
    }

    // ------------------add new Team------------------
    const add_new_team_popup = () => {
        if (AddteamPopup === false) {
            setaddteamPopup(true)
        } else {
            setaddteamPopup(false)
        }
    }

    useEffect(() => {
        const getUser = async () => {
          try {
            const res = await axios.get(`${serverBasePath}/user/user-image`, {withCredentials: true});
            setUser(res.data);
          } catch (error) {
            console.error(error);
          }
        }
    
        getUser();
      }, []);


    return (
        <>
            <div className='flex'>
                <div className={`${hide_and_show === "hidden" ? "w-[14vw]" : "w-[70vw]"} bg-white sm:w-[25vw] fixed border-r-[1px] h-[100vh] border-gray-300`}>
                    <Link to={"/"}>
                        <div className='hidden sm:block'>
                            <div className='flex active:scale-95 h-16 items-center gap-2 border-b-[1px] border-gray-300 p-10'>
                                <div>
                                    <img src={logo} className='w-20 mr-5' alt="logo" />
                                </div>
                                <div>
                                    <h3>vistabots.ai</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* -----------------all menu-------- */}
                    <div className='sm:mt-4 text-gray-800 ml-2 sms:ml-8 flex flex-col gap-8'>
                        <div className='block sm:hidden pt-5'>
                            <div onClick={() => left_bar_show()} className='flex active:scale-95 cursor-pointer items-center gap-2'>
                                <div>
                                    {/* <HiMenuAlt2 className='text-3xl'/> */}
                                    {hide_and_show === "hidden" ? <HiMenuAlt2 className='text-3xl' /> : <AiOutlineClose className='text-3xl' />}

                                </div>
                            </div>
                        </div>

                        <Link to={"/"}>
                            <div className='flex active:scale-95 cursor-pointer items-center gap-2'>
                                <div>
                                    <AiOutlineHome className='text-2xl' />
                                </div>
                                <div className={`${hide_and_show} sm:block`}>
                                    <h3 className='font-semibold'>Dashboard</h3>
                                </div>
                            </div>
                        </Link>


                        <Link to={"/profile/personal-information"}>
                            <div className='flex active:scale-95 cursor-/pointer items-center gap-2'>
                                <div>
                                    <AiOutlineUser className='text-2xl' />
                                </div>
                                <div className={`${hide_and_show} sm:block`}>
                                    <h3 className='font-semibold'>Profile</h3>
                                </div>
                            </div>
                        </Link>

                        <Link to={"/profile/team"}>
                            <div className='flex active:scale-95 cursor-pointer items-center gap-2'>
                                <div>
                                    <PiUsersThreeLight className='text-2xl' />
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
                                    <MdOutlinePayment className='text-2xl' />
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
                    <div className='flex justify-end h-16 items-center gap-2 border-b-[1px]  p-10'>
                        <div onClick={() => headerToggleOn()} className='w-12 h-12 sm:w-16 sm:h-16  active:scale-95 cursor-pointer rounded-full items-center justify-center'>
                            {userImage !== null && userImage.imagePath !== undefined ? <img className='w-12 h-12 sm:w-16 sm:h-16 rounded-full' src={userImage.imagePath} alt="user1" /> : <BiSolidUserCircle size={'110%'} className='text-main' />}
                        </div>
                    </div>
                    {
                        userInfoToggle ? <User_popup_info /> : ""
                    }


                    {/* -----------------child is calling here--------------- */}
                    {
                        location.pathname === "/profile/personal-information" ? <><Profile_info /></> : ""
                    }

                    {
                        location.pathname === "/profile/team" ? <Team add_new_team_popup={add_new_team_popup} /> : ""
                    }
                    {
                        location.pathname === "/profile/billing" ? <Billing /> : ""
                    }


                    {/* ----------------------users code till here---------- */}


                </div>
            </div>
            {/* --------------Team---add new user popup--------------- */}

            {
                AddteamPopup ? <Addteam add_new_team_popup={add_new_team_popup} /> : ""
            }
        </>
    )
}
