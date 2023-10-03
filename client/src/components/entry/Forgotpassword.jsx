import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import serverBasePath from '../../../constants';
import logo from '../../assets/logo.png'

export default function Forgotpassword() {
  const [response, setResponse] = useState('');
  const [color, setColor] = useState('');
  const [email, setEmail] = useState('');

  function resetPassword() {
    axios.post(`${serverBasePath}/auth/forgot-password`,
      {
        email: email,
        type: 'user'
      },
      {
        withCredentials: true
      })
      .then(function (response) {
        if (response.status === 200) {
          setColor('text-green-500');
          setResponse(response.data.message);
          setTimeout(() => {
            setColor('');
            setResponse('');
          }, 8000);
        }
      })
      .catch(function (error) {
        setColor('text-red-500');
        setResponse(error.response.data.error);
        setTimeout(() => {
          setColor('');
          setResponse('');
        }, 8000);
      });
  }



  return (
    <>
      <div className='flex flex-col mt-[8vh] sm:mt-[15vh] gap-4 items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-4'>
        <img src={logo} className='w-28 m-10' alt="logo" />
          <h1 className='text-2xl sm:text-3xl font-bold'>Forgot password</h1>
          <h3 className='text-gray-500'>Reset your password or <span className='font-bold text-main cursor-pointer active:scale-95'><Link to={"/login"}>return to login</Link></span></h3>
        </div>
        <div className='border border-gray-400 bg-gray-50 rounded-md gap-4 md:w-[50vw] w-[95vw] p-2 sm:w-[32vw] h-[35vh] sm:p-10 flex flex-col justify-center'>
          <label>Email address</label>
          <input
            className='border gray-400 focus:border-main h-10 outline-none rounded-md pl-2 pr-2'
            type="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            className='bg-main active:scale-95 w-full h-10 text-white rounded-md'
            onClick={resetPassword}
          >
            Send Email</button>
          <p className={color}>{response}</p>
        </div>
      </div>
    </>
  )
}
