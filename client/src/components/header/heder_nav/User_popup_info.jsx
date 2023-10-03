import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import serverBasePath from '../../../../constants';
import axios from 'axios';


let ran = false;
export default function User_popup_info() {

  function signout() {
    window.open(serverBasePath + "/auth/logout", "_self");
  }

  const [user, setUser] = useState({
    email: "",
    plan: "",
    totalConversations: 0,
    usedConversations: 0,
    name: '',
    API: "",
  });


  useEffect(() => {
    if (ran === false) {
      axios.get(serverBasePath + '/my-account', {
        withCredentials: true
      })
        .then(async response => {
          if (response.status === 200) {
            setUser(response.data);
            ran=true;
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 401) {
            navigate('/login');
          }
        });
    }
  }, [])


  return (
    <>

      <div className='absolute z-50 shadow-xl gap-1 flex flex-col right-2 sm:right-10 top-12 sm:top-[67px] rounded-md w-[70vw] md:w-[20vw] sm:w-[17vw] h-fit border-2 bg-white'>

        <div className='w-full h-12 border-b pl-2 cursor-pointer flex flex-col justify-start items-center'>
          <h3>Signed in as</h3>
          <p>{user.email}</p>
        </div>
        <Link to={"/agency-dashboard"}>
          <div className='w-full h-12 active:scale-95 border-b pl-2 cursor-pointer flex items-center hover:bg-gray-100'>
            Client Accounts
          </div>
        </Link>
        <Link to={"/profile/personal-information"}>
          <div className='w-full h-12 active:scale-95 border-b pl-2 cursor-pointer flex items-center hover:bg-gray-100'>
            <h3>Your Profile</h3>
          </div>
        </Link>
        <Link to={"/profile/team"}>
          <div className='w-full h-12 active:scale-95 border-b pl-2 cursor-pointer flex items-center hover:bg-gray-100'>
            <h3>Teammates</h3>
          </div>
        </Link>
        <div className='w-full h-12 active:scale-95 border-b pl-2 cursor-pointer flex items-center hover:bg-gray-100'>
          <h3>Billing</h3>

        </div>
        <button className='w-full h-12 active:scale-95 pl-2 cursor-pointer flex items-center hover:bg-gray-100'
          onClick={signout}
        >
          <h3>Sign out</h3>
        </button>
      </div>
    </>
  );
}
