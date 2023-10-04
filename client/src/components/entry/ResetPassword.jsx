import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import serverBasePath from '../../../constants';
import logo from '../../assets/logo.png'

export default function ResetPassword() {
    const [response, setResponse] = useState('');
    const [color, setColor] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();

    function resetPassword() {
        setResponse('');
        if (password !== confirmPassword) {
            setColor('text-red-500');
            setResponse('Passwords must match!');
            return;
        }
        if (password.length < 8) {
            setColor('text-red-500');
            setResponse('Passwords must have atleast 8 characters.');
            return;
        }

        axios.post(`${serverBasePath}/auth/reset-password/${token}`,
            {
                password: password,
                type: 'user'
            },
            {
                withCredentials: true
            })
            .then(function (response) {
                if (response.status === 200) {
                    navigate('/Dashboard');
                }
            })
            .catch(function (error) {
                setColor('text-red-500');
                console.log(error.response)
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
                    <h1 className='text-2xl sm:text-3xl font-bold'>Reset password</h1>
                    <h3 className='text-gray-500'>Reset your password or <span className='font-bold text-main cursor-pointer active:scale-95'><Link to={"/login"}>return to login</Link></span></h3>
                </div>
                <div className='border border-gray-400 bg-gray-50 rounded-md gap-4 lg:w-[30vw] w-[95vw] p-2 sm:w-[50vw] h-fit sm:p-10 flex flex-col justify-center'>
                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input
                            className='h-10 border-2 hover:border-main rounded-md pl-2 pr-2 outline-none'
                            type="password"
                            name="passwod"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label>Confirm Password</label>
                        <input
                            className='h-10 border-2 hover:border-main rounded-md pl-2 pr-2 outline-none'
                            type="password"
                            name="passwod"
                            value={confirmPassword}
                            onChange={evt => setConfirmPassword(evt.target.value)}
                        />
                    </div>
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
