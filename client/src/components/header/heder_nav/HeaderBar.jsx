import React, { useEffect, useState } from 'react'
import User_popup_info from './User_popup_info'
import { Link } from 'react-router-dom'
import serverBasePath from '../../../../constants';
import {BiSolidUserCircle} from 'react-icons/bi';
import axios from 'axios';

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
        <div className='flex justify-between sm:pl-10 sm:pr-10 mb-8 shadow-md p-1'>
            <Link to={"/Dashboard"}>
            <div className='flex cursor-pointer active:scale-95 items-center'>
                <img src="https://app.livechatai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99eba397.png&w=48&q=75" alt='logo'/>
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
