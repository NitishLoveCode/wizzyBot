import React, { useEffect, useState } from 'react'
import Source_1_2_card from './child/Source_1_2_card'
import Heading_text from '../shared_components/Heading_text'
import Input_field from '../shared_components/Input_field'
import Button from '../shared_components/Button'
import Scraped_link from '../shared_components/Scraped_link'
import Human_Ai_select_popup from './child/Human_Ai_select_popup'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineManageAccounts } from "react-icons/md"
import serverBasePath from '../../../constants'

// -------------driver.js-----------------

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// -----------------------------------------------



export default function Scraped_url({ agencyView, agencyClient }) {

  const [linkMap, setlinkMap]=useState(true)

  // ---------------for driver.js-------------
  const driverObj = driver({
    showProgress: true,
    showButtons: ['next', 'previous'],
    steps: [
      { element: '#for_drive_step2', popover: { title: 'Step 1: Choose page, for supercharge your AI', description: 'Empower your AI journey by choosing the right page. Supercharge your AI', side: "left", align: 'start' }},
      { element: '#driver_all_url', popover: { title: 'Your Root Domain here.', description: 'Add the Root Domain to gather content & Supercharge Your Chatbot Training.', side: "bottom", align: 'start' }},
      { element: '#driver_import_the_content', popover: { title: 'Click to Fetch all Links', description: 'After adding your root domain, simply click Save to gather all the links!', side: "left", align: 'start' }},
      { element: '#driver_no_of_pages_we_found', popover: { title: ' You are Almost Done, Get Ready, Hurry Up!', description: 'you are good to go for the next and final step – get ready!', side: "top", align: 'start' }},
      { element: '#driver_total_characters', popover: { title: ' You are Almost Done, Get Ready, Hurry Up!', description: 'you are good to go for the next and final step – get ready!', side: "top", align: 'start' }},
      { element: '#driver_create_my_ai', popover: { title: ' You are Almost Done, Get Ready, Hurry Up!', description: 'you are good to go for the next and final step – get ready!', side: "top", align: 'start' }},
    ]
  });
  useEffect(()=>{
    setTimeout(()=>{
      const find_new_user=localStorage.getItem("new_for_scraped_url")
      if(find_new_user===null){
        driverObj.drive();
        localStorage.setItem("new_for_scraped_url",true)
      }
    },2000)
  },[])
  // --------------------------------


  // -----------Human and AI bot popup-----------------
  const [selectMode, setselectMode] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const [sources, setSources] = useState([]);
  const [totalCharacters, setTotalCharacters] = useState(0);



  useEffect(() => {

    axios.get(serverBasePath + '/auth/isAuthenticated', {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      },
      withCredentials: true
    })
      .then((response) => {
        if (response.data.authenticated === false) {
          navigate('/login')
        }
        else{
          if (location.state !== null) {
            setSources(location.state.sources);
          }
          else {
            navigate('/load-url');
          }
        }
      })
      .catch((err) => console.log(err));

  }, []);



  // --------------human and AI bot function-----------------
  const human_ai_popup = () => {
    setlinkMap(false)
    if (selectMode === false) {
      setselectMode(true);
    } else {
      setselectMode(false);
    }
  }

  function handleRemove(id) {
    const linkToRemove = sources.filter(item => item.id === id);
    setTotalCharacters(totalCharacters => totalCharacters - linkToRemove[0].charCount);
    setSources(prevArray => prevArray.filter(item => item.id !== id));
  }


  function addLink(link, index) {

    setSources(prev => {
      if (link.id === undefined) {
        link.id = index
      }
      return [...prev, link]
    })
  }

  function sendLinks() {

    let chatbotId;
    const newChatbotRoute = agencyView ? `${serverBasePath}/agency/new-chatbot/${agencyClient.id}` : `${serverBasePath}/new-chatbot`
    axios.get(newChatbotRoute, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then(response => {
        const data = response.data;
        chatbotId = data.newBotId;

        const untrainedLinks = sources.filter(item => item.status === undefined || item.status === '');

        return axios.post(serverBasePath + '/train/website/links',
          { links: untrainedLinks, chatbotId: chatbotId },
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            withCredentials: true
          });
      })
      .then(response => {
        const data = response.data;

        if (data.links !== undefined && response.status !== 400) {
          navigate(agencyView ? `client-dashboard/${agencyClient.id}` : '/Dashboard');
        }
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    sources.forEach(link => {
      setTotalCharacters(totalCharacters => totalCharacters + link.charCount)
    });
  }, []);


  return (
    <>
      <div className='overflow-hidden'>
        {agencyView &&
        // NOTE FOR NITISH: DO NOT MOVE THIS BAR FROM THIS PLACE!!!!!!!!
        <div className='p-3 px-11 w-screen bg-blue-900 mt-[-2rem] mb-8 text-white font-medium'>
          <MdOutlineManageAccounts size={25} className='inline mx-2' />
          You are viewing this page as an manager
        </div>
      }
      <Source_1_2_card />
      <div className='flex flex-col gap-3 justify-center items-center text-center'>
        <Heading_text text_size={"text-xl sm:text-3xl mt-4 font-bold text-gray-800"} text={"Choose Pages and Import Custom Data"} />
        <Heading_text text_size={"text-md text-gray-800"} text={"We have crawled all the pages on your website and listed them here. If you wish to exclude any pages, you can delete them from the list."} />
        <Heading_text text_size={"text-sm mb-3 text-gray-500"} text={"Once you're satisfied with the selection, click the 'Import The Content and Create My AI Bot' button below to complete the import process."} />


        {/* -----------scraped links------------ */}
        {
          linkMap? <><div id='driver_all_url'>
          {sources.map(webpage => {
            return <Scraped_link link={webpage.link} data={webpage.charCount} id={webpage.id} deleteAction={handleRemove} key={webpage.id} />
          })}
          </div></>:<></>
        }
        {/* --------------scraped links end------------------- */}


        {/* ---passing porps for Ai_human_popup--- */}
        <div id='driver_import_the_content'>
          <Button action={human_ai_popup} style={"bg-gray-800 text-white sm:p-3 pl-7 pr-7 rounded-full active:scale-95"} text={"Import the content & create my AI bot"} />
        </div>
          

        {/* ------------scraped page info---------------- */}
        <div className='flex justify-between mt-6 gap-6 w-full sm:w-[35vw] mb-10'>
          <div id='driver_no_of_pages_we_found' className='border-2 h-20 flex flex-col justify-center items-center shadow-xl pl-14 pr-14 w-[50%] sm:w-[17vw]'>
            <h2 className='text-md font-bold text-gray-600'>Total Pages</h2>
            <h3 className='text-2xl sm:text-4xl font-bold text-gray-700'>{sources.length}</h3>
          </div>
          <div id='driver_total_characters' className='border-2 h-20 flex flex-col justify-center items-center shadow-xl w-[50%] sm:w-[17vw]'>
            <h2 className='text-md font-bold text-gray-600'>Total Characters</h2>
            <h3 className='text-2xl sm:text-4xl font-bold text-gray-700'>{totalCharacters}</h3>
          </div>
        </div>


        {/* ----------------select bot or human popup---------- */}

        

      </div>

      </div>

        {
          selectMode ? <><Human_Ai_select_popup action={sendLinks} /></> : ""
        }
    </>
  )
}
