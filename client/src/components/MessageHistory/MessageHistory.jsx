import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineArrowDown } from "react-icons/ai"
import { IoMdAddCircle } from "react-icons/io"

import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chatbox from './childs/Chatbox';
import serverBasePath from '../../../constants';
import LoadingDots from '../loading/LoadingDots';
import { addDays } from 'date-fns';
import ConversationHistory from './childs/ConversationHistory'
import DatePicker from './childs/DatePicker'

// -------------driver.js-----------------

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// -----------------------------------------------

export default function messageHistory() {
  // ---------------for driver.js-------------
  const driverObj = driver({
    showProgress: true,
    showButtons: ['next', 'previous'],
    steps: [
      { element: '#driver_choose_date', popover: { title: 'You can Select Date for Message History.', description: '', side: "left", align: 'start' }},
      { element: '#driver_Export_Filtered_Converations', popover: { title: 'You can Export Filtered Converations.', description: '', side: "left", align: 'start' }},
    ]
  });
  useEffect(()=>{
    setTimeout(()=>{

      const Bot_available=localStorage.getItem("Bot_available")
      if(Bot_available==null){

      const find_new_user=localStorage.getItem("embed-and-messageHistory")
      if(find_new_user===null){
        driverObj.drive();
        localStorage.setItem("embed-and-messageHistory",true)
      }

    }

    },6000)
  },[])
  // --------------------------------


  const { id } = useParams();
  const [messages, setMessages] = useState([]); //stores all the messages from the selected conversation.
  const [settings, setSettings] = useState({});
  const [response, setResponse] = useState(false);
  const [selectOn, toggleSelect] = useState(false);
  const [chatView, setChatView] = useState(false);
  const [history, setHistory] = useState([]); //keeps a record of all the conversations in the given date range
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ]);

  const ref = useRef(); // Create a reference

  useEffect(() => {
    axios.get(`${serverBasePath}/settings/${id}`, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then((response) => {
        setSettings(response.data);
        setResponse(true);
      })
      .catch(err => console.log(err));


    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleSelect(false);
      }
    }

    // Add the click handler to the document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the click handler from the document when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };


  }, []);

  function toggleDatePicker() {
    toggleSelect(!selectOn);
  }

  function sendToBackend(dateRange) {
    if (dateRange[0].startDate !== undefined) {
      let startDate = dateRange[0].startDate;
      let endDate = dateRange[0].endDate;

      axios.post(serverBasePath + '/history',
        { startDate: startDate, endDate: endDate, chatbotId: id },
        {
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
          },
          withCredentials: true
        }
      )
        .then((response) => {
          const data = response.data;
          setHistory(data.history);
        })
        .catch(err => console.log(err));
    }
  }

  function downloadJson() {
    if (history.length === 0) {
      return;
    }
    const dataStr = JSON.stringify(history, function (key, value) {
      if (key === "_id" || key === 'id') { return undefined; }
      else { return value; }
    }, 2);

    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", url);
    downloadAnchorNode.setAttribute("download", "data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    //removing the reference to file in memory
    URL.revokeObjectURL(url);
  }

  function retrieveConvHis(conversationId) {
    axios.post(serverBasePath + '/conversationHistory',
      { conversationId: conversationId, chatbotId: id },
      {
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      }
    )
      .then((response) => {
        const data = response.data;
        setMessages(data);
        setChatView(true);
      })
      .catch(err => console.log(err));

  }


  return (

    <>
      {response === false ?
        <div className='mt-10'>
          <LoadingDots size={4} />
        </div>
        :
        <>
          <h2 className='text-4xl text-center'>Message History</h2>
          <div className='flex sm:flex-row flex-col gap-10 sm:justify-items-center sm:ml-16 mt-10'>
            <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 m-2 sm:m-10 items-center sm:items-start">
              <button id='driver_choose_date' className="w-[94%] sm:w-11/12 bg-main m-1.5 rounded p-2 font-bold text-white focus:blue300 hover:bg-blue-600"
                onClick={toggleDatePicker}
              // ref={ref}
              >Choose Dates</button>

              <div ref={ref}>
                {selectOn && <DatePicker sendToBackend={sendToBackend} date={date} setDate={setDate} />}
              </div>

              <button id='driver_Export_Filtered_Converations'
                className="w-[94%] sm:w-11/12 bg-main m-1.5 rounded p-2 font-bold text-white focus:blue300 hover:bg-blue-600"
                onClick={downloadJson}
              >Export Filtered Converations
              </button>
              <div className='mt-1 w-full flex items-center'>
                <ConversationHistory
                  messageHistory={history}
                  retrieveConvHis={retrieveConvHis}
                  className='w-full self-start' //prevents adding undefined as a classname in the component
                />
              </div>
            </div>

            {
              chatView &&
              <Chatbox AI_Bot_color={settings.headerBarColor} User_message_color={settings.userBubbleColor} Message_color={settings.botBubbleColor} messages={messages} />
            }

            {/* -------------------------------- */}
          </div>
        </>
      }
    </>
  )
}
