import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../shared_components/Button'
import axios from 'axios';
import serverBasePath from '../../../constants';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    function authencticateWithGoogle() {
        window.open(serverBasePath + '/auth/login/user/google', '_self')
    }

    function sendToBackend() {
        setError('');
        if (email === '' || password === '' || name === '') {
            setError('Please fill all the fields before registering.');
            return;
        }

        if (password.length < 8) {
            setError('Please make sure that the password is atleast 8 characters long');
            return;
        }
        axios.post(`${serverBasePath}/auth/register/user`,
            {
                email: email,
                name: name,
                password: password,
                type: 'user'
            },
            {
                withCredentials: true
            })
            .then(function (response) {
                if (response.status === 200) {
                    navigate('/load-url');
                }
            })
            .catch(function (error) {
                setError(error.response.data.response)
            });
    }


    return (
        <>
            <div className='w-screen p-2 sm:p-0 mb-2 sm:mb-0 sm:pt-8 flex flex-col items-center h-screen bg-slate-50'>
                <div className='flex flex-col gap-1 mb-4 justify-center text-center items-center'>
                    <div>
                        <img src="https://app.livechatai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99eba397.png&w=48&q=75" alt='logo' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl sm:text-4xl font-semibold'>Create a free account</h1>
                        <h3>Already have an account? <span className='font-bold text-main'><Link to="/login">Sign In</Link></span></h3>
                    </div>
                </div>

                {/* ---------------user field section seart from here-------- */}
                <div className='w-full h-fit sm:w-[50%] lg:w-[40%] xl:w-[30%] gap-7 flex flex-col p-4 bg-white border-2 rounded-md'>
                    <div className='flex flex-col'>
                        <label>Full name</label>
                        <input className='h-10 border-2 hover:border-main rounded-md pl-2 pr-2 outline-none'
                            type="text"
                            name="name"
                            value={name}
                            onChange={(evt) => setName(evt.target.value)}
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label>Email address</label>
                        <input className='h-10 border-2 hover:border-main rounded-md pl-2 pr-2 outline-none'
                            type="email"
                            name="email"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input className='h-10 border-2 hover:border-main rounded-md pl-2 pr-2 outline-none'
                            type="password"
                            name="passwod"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            required
                        />
                    </div>
                    <div className='gap-3 flex'>
                        <input className='w-4' type="checkbox" name="policy" required />
                        <label className='underline'>I accept the privacy policy</label>
                    </div>
                    {error !== '' && <p className='text-red-400'>{error}</p>}
                    <Button style={"flex items-center justify-center w-full border border-gray-400 bg-main text-white text-lg rounded py-2 transition duration-500 ease select-none hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline scale-95"} text={"Login"} action={sendToBackend} />
                    <Button style={"flex items-center justify-center w-full border border-gray-400 bg-white text-black text-lg rounded py-2 transition duration-500 ease select-none hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline scale-95"} text={<><FcGoogle size={20} className="mr-2" />
                        <span>Login with Google</span> </>} action={authencticateWithGoogle} />
                </div>
            </div>
        </>
    )
}
