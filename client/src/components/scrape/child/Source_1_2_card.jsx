import React from 'react'
import {MdDone} from "react-icons/md"
import { useLocation } from 'react-router-dom'

export default function Source_1_2_card() {
    const location =useLocation()
  return (
    <>
        <div className='flex flex-col sm:flex-row gap-1 md:gap-16 rounded-md ml-auto mr-auto sm:justify-center sm:items-center border-2 w-[94%] p-1 sm:w-[45%] h-[17vh] sm:h-[13%] sm:p-4'>
                <div id='for_drive_step1' className='flex sm:justify-center items-center gap-4'>
                    <div className={`${location.pathname==="/scrape" ? "bg-main ":""}border-4 border-main justify-center flex items-center text-center w-10 h-10 rounded-full`}>
                        {
                            location.pathname==="/scrape" ? <MdDone className='text-3xl text-white'/>:<h2 className='text-main'>1</h2>
                        }
                    </div>
                    <div className={`${location.pathname==="/scrape" ? "text-gray-700":"text-main"}`}>
                        <h3 className='text-sm' >Add Website and Import Data</h3>
                    </div>
                </div>

                <div id='for_drive_step2' className=' flex sm:justify-center items-center gap-4'>
                    <div className={`${location.pathname==="/scrape" ? "border-4 text-main border-main":"border-4 text-gray-600 border-gray-600"} justify-center flex items-center text-center w-10 h-10 rounded-full`}>
                        <h2>2</h2>
                    </div>
                    <div>
                        <h3 className={`text-sm ${location.pathname==="/scrape" ? " text-main":""}`}>Choose Pages and Train AI</h3>
                    </div>
                </div>

            </div>
    </>
  )
}
