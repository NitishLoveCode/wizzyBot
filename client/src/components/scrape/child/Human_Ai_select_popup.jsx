import React, { useEffect, useRef, useState } from 'react'
import Button from '../../shared_components/Button';
// -------------driver.js-----------------

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { redirect } from 'react-router-dom';
import LoadingDots from '../../loading/LoadingDots';
import logo from '../../../assets/logo.png';

// -----------------------------------------------

export default function Human_Ai_select_popup({ action, closePopup }) {

  const popupRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  // ---------------for driver.js-------------
  const driverObj = driver({
    showProgress: true,
    showButtons: ['next', 'previous'],
    steps: [
      { element: '#driver_Ai_bot', popover: { title: 'Hurray! Your AI Bot is Now Activated!', description: '', side: "left", align: 'start' } },
      { element: '#human_support_live_chat', popover: { title: 'Activate Human Support in Live Chat', description: 'Human and Bot Collaborate Seamlessly!', side: "left", align: 'start' } },
      { element: '#driver_create_my_ai', popover: { title: 'You are Almost Done, click on Create My Ai Bot, Hurry Up!', description: "You're Almost There! Click Create My AI Bot Now – Don't Miss Out!", side: "top", align: 'start' } },
    ]
  });

  useEffect(() => {
    setTimeout(() => {
      const find_new_user = localStorage.getItem("new_for_human_ai_select_popup")
      if (find_new_user === null) {
        driverObj.drive();
        localStorage.setItem("new_for_human_ai_select_popup", true)
      }
    }, 100)

    // The function to be called when anything is clicked
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // If the click is outside the popup, close it
        closePopup();
      }
    }

    // Listen for click events on the document
    document.addEventListener("mousedown", handleClickOutside);

    // Stop listening for the click event when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };



  }, [])
  // --------------------------------


  // --------------swith for human sopport------------------
  const [swith, setswitch] = useState(true);


  // ------------function for on off human and ai chat---- 
  const human_ai_mode = () => {
    if (swith == true) {
      setswitch(false)
    } else {
      setswitch(true)
    }
  }

  // ----------------navigate to setting page------------

  return (
    <>
      <div className='absolute top-0 bg-opacity-90 bg-gray-600 w-screen h-screen'>



        {/* pop up */}
        <div ref={popupRef} className='flex relative border-2 overflow-y-auto shadow-md rounded-md ml-auto mr-auto mt-10 sm:mt-14 w-[90%] sm:w-[70vw] md:w-[60vw] h-[90vh] lg:w-[45%] sm:h-[85vh] bg-white'>
          <div className='w-[50%] h-full bg-gradient-to-r from-green-50 to-white'></div>
          <div className='flex z-30 absolute flex-col w-full h-full items-center p-5'>
            {/* ... Your content ... */}
            {/* -------------top animation code here------------------ */}
            <div className='w-40 h-24 bg-gray-200'>
              <p>Header animation will take a longer time, we i'll do it later on.</p>
            </div>
            {/* --------------animation code end here------------------------ */}
            <div className='flex text-xl flex-col justify-center items-center'>
              <h3>Would you like to activate human</h3>
              <h3>supported live chat into your AI bot?</h3>
            </div>
            <div className='flex text-sm mt-2 flex-col justify-center items-center'>
              <p>You can always change your preferences through theSettings section with</p>
              <p>the <span className='font-semibold text-gray-400'>"Human Support Live Chat Settings"</span> tab.</p>
              <p className='text-[14px] mt-4 underline'>How AI bot and human-support live chat works together?</p>
            </div>
            <div className='flex justify-center gap-[4.5rem] w-full mt-8'>
              <div id='driver_Ai_bot' className='w-56 justify-center flex flex-col bg-blue-100 rounded-md sm:h-32 border-2 border-blue-300'>
                <div className='flex flex-col justify-center items-center w-full'>
                  <img className='w-10 h-10' src={logo} alt="logo" />
                  <h3>Ai Bot</h3>
                  <div className='flex items-center justify-center gap-1 bg-blue-200 text-main pl-2 pr-2 rounded-xl'>
                    <div className='w-2 h-2 rounded-full bg-main'></div>
                    <button className='text-sm'>Activated</button>
                  </div>
                </div>
              </div>
              <div id='human_support_live_chat' className='w-56 flex justify-center items-center rounded-md h-32 border-2'>
                <div className='flex flex-col justify-center items-center w-full'>
                  <img className='w-10 h-10' src={logo} alt="logo" />
                  <h3>Human-Support Live Chat</h3>swith
                  <div onClick={() => human_ai_mode()} className='flex gap-1 bg-blue-200 text-main w-12 p-[3px] cursor-pointer rounded-xl'>
                    <div className={`${swith ? "ml-[25px]" : ""} w-4 h-4 rounded-full bg-main`}></div>
                  </div>
                </div>
              </div>
            </div>
            <div id='driver_create_my_ai' className='mt-10'>
              <Button disabled={clicked} style={"bg-gray-800 text-white w-[70vw] sm:w-[50vw] md:w-[45vw] lg:w-[35vw] p-3  rounded-xl active:scale-95"} text={clicked ? <LoadingDots color={'bg-white'} size={1} /> : "Create My AI Bot"} action={() => { setClicked(true); action() }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


