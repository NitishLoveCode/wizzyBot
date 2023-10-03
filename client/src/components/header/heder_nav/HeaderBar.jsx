import React, { useEffect, useState } from 'react'
import User_popup_info from './User_popup_info'
import { Link } from 'react-router-dom'
import serverBasePath from '../../../../constants';
import {BiSolidUserCircle} from 'react-icons/bi';
import axios from 'axios';
import logo from '../../../assets/logo.png'


export default function HeaderBar() {
  const [userInfoToggle, setuserInfoToggle]=useState(false)
  const [userImage, setUser] = useState(null);

  const headerToggleOn=()=>{
    if(userInfoToggle==true){
      setuserInfoToggle(false)
    }else{
      setuserInfoToggle(true)
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
      <div className='relative '>
        <div className='flex justify-between items-center sm:pl-10 sm:pr-10 mb-8 shadow-md p-3'>
            <Link to={"/Dashboard"}>
            <div className='flex cursor-pointer active:scale-95 items-center'>
                <img src={logo} alt='logo' className='w-20 mr-5'/>
                <h1 className='text-xl sm:text-2xl font-semibold text-gray-700'>Vistabots.ai</h1>
            </div>
            </Link>
            <div onClick={()=>headerToggleOn()} className='w-12 h-12 sm:w-16 sm:h-14 my-1 active:scale-95 cursor-pointer rounded-full items-center justify-center'>
                
                {userImage !== null && userImage.imagePath !== undefined ? <img className='w-12 h-12 sm:w-16 sm:h-16 rounded-full' src={userImage.imagePath} alt="user1" /> : <BiSolidUserCircle size={'110%'} className='text-main'/>}
            </div>
        </div>


        {/* -----(User_popup_info.jsx) comming from header folder-------  */}
        {
          
          userInfoToggle ? <User_popup_info/>:""
        }
      </div>

    </>
  )
}
