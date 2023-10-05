import React, { useEffect, useState } from 'react'
import { AiOutlineSend } from "react-icons/ai"
import ChatBubble from '../../shared_components/ChatBubble'
import { useParams } from 'react-router-dom';
import serverBasePath from '../../../../constants';
import axios from 'axios';

// -------------driver.js-----------------

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// -----------------------------------------------

export default function Main_chat_box() {

  // ---------------for driver.js-------------
  const driverObj = driver({
    showProgress: true,
    showButtons: ['next', 'previous'],
    steps: [
      { element: '#for_drive_try_chat', popover: { title: 'Try Your Personal Bot', description: 'Experience the Power of Chat! Asking Any Questions related to your content of webPages', side: "left", align: 'start' }},
      { element: '#for_drive_type_your_demo_chat', popover: { title: 'Type Your Questions', description: '', side: "left", align: 'start' }},
      { element: '#for_drive_type_your_demo_chat_send', popover: { title: 'Click here', description: '', side: "left", align: 'start' }},
    ]
  });
  useEffect(()=>{
    setTimeout(()=>{

      const Bot_available=localStorage.getItem("Bot_available")
      if(Bot_available==null){
      const find_new_user=localStorage.getItem("new_for_preview")
      if(find_new_user===null){
        driverObj.drive();
        localStorage.setItem("new_for_preview",true)
      }
    }
    },2000)
  },[])
  // --------------------------------


  const { id } = useParams();

  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [conversationId, setConversationId] = useState('');

  function addMessage(message) {
    setMessages(messages => [...messages, message]);
  }

  function sendMessage(event) {
    if (text === ''){
      return;
    } 
    let messageBody = { sender: 'user', body: text, conversationId: conversationId }
    addMessage(messageBody);
    setTyping(true);
    axios.post(serverBasePath + '/message/' + id, messageBody, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then((response) => {
        const data = response.data;
        setTyping(false)
        addMessage(data);
        if (conversationId === '') {
          setConversationId(data.conversationId)
        }
      })
      .catch(err => console.log(err));
    setText('')
  }

  function handleChange(event) {
    //handle input being done in the text area. This text will be the user input that will be sent to the server. 
    setText(event.target.value)
  }

  function restartConvo(id) {
    setMessages([]);
    setConversationId('');
    setTyping(true)

    axios.post(serverBasePath + '/start/' + id, {},  {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then((response) => {
        const data = response.data;
        addMessage(data.message);
        setTyping(false)
      })
      .catch(err => console.log(err));
  }


  useEffect(() => { restartConvo(id) }, [])
  useEffect(() => {
    const link = document.createElement("link");
    link.href = `${serverBasePath}/styles/userStyle.css/${id}`;
    link.rel = "stylesheet";

    // Append the new stylesheet to the document head
    document.head.appendChild(link);
}, []); // Empty array ensures this runs once on mount and not on updates

  return (
    <>
      {/* ----------------right side chat------------- */}
      <div className='sticky top-0 ml-4 lg:ml-24 h-screen'>
        <div id='for_drive_try_chat' className=' relative border-[1px] shadow-xl overflow-hidden rounded-3xl border-gray-300 w-full sm:w-[68vw] h-[80vh]'>
          <div className={"bg-[#2188f3] px-2 py-2 header-bar-color h-14"}>
            {/* <img className='h-10' src="https://app.livechatai.com/_next/static/media/logo-white.94898d4d.png" alt="logo" /> */}
          </div>

          {/* --------------------message --------------- */}
          <div className='px-4 mt-4 pb-4 h-[72%] overflow-y-auto'>
            <div className='flex flex-col gap-4'>

              {messages.map((message, index) => <ChatBubble key={index + 1}
                id={index + 1}
                message={message} />)}

              {typing && <ChatBubble key={-1} typing={typing} />}


              {/* ----------------------------------------------------- */}
            </div>
          </div>
          {/* ------------------------------------------- */}

          <div className='absolute bg-white bottom-0 w-full'>
            <div className='border-[1px] h-14  px-2 mb-4 flex items-center'>
              <input id='for_drive_type_your_demo_chat'
                className='outline-none w-full'
                type="text"
                name="message"
                value={text}
                onChange={handleChange}
                onKeyDown={event => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    sendMessage(event);
                  }
                }}
                placeholder='Send message'
                required
                 />
              <button id='for_drive_type_your_demo_chat_send' onClick={sendMessage}>
                <AiOutlineSend className='pl-2 text-4xl' />
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
