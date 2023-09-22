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

export default function Scraped_url({ agencyView, agencyClient }) {
  // -----------Human and AI bot popup-----------------
  const [selectMode, setselectMode] = useState(false)
  const location = useLocation();
  const [sources, setSources] = useState(location.state.sources);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const navigate = useNavigate();

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
      })
      .catch((err) => console.log(err));

  }, []);


  // --------------human and AI bot function-----------------
  const human_ai_popup = () => {
    if (selectMode == false) {
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
          navigate(agencyView ? `client-dashboard/${agencyClient.id}` :'/Dashboard');
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
        {sources.map(webpage => {
          return <Scraped_link link={webpage.link} data={webpage.charCount} id={webpage.id} deleteAction={handleRemove} key={webpage.id} />
        })}
        {/* --------------scraped links end------------------- */}


        {/* ---passing porps for Ai_human_popup--- */}
        <Button action={human_ai_popup} style={"bg-gray-800 text-white sm:p-3 pl-7 pr-7 rounded-full active:scale-95"} text={"Import the content & create my AI bot"} />

        {/* ------------scraped page info---------------- */}
        <div className='flex justify-between mt-6 gap-6 w-full sm:w-[35vw] mb-10'>
          <div className='border-2 h-20 flex flex-col justify-center items-center shadow-xl pl-14 pr-14 w-[50%] sm:w-[17vw]'>
            <h2 className='text-md font-bold text-gray-600'>Total Pages</h2>
            <h3 className='text-2xl sm:text-4xl font-bold text-gray-700'>{sources.length}</h3>
          </div>
          <div className='border-2 h-20 flex flex-col justify-center items-center shadow-xl w-[50%] sm:w-[17vw]'>
            <h2 className='text-md font-bold text-gray-600'>Total Characters</h2>
            <h3 className='text-2xl sm:text-4xl font-bold text-gray-700'>{totalCharacters}</h3>
          </div>
        </div>


        {/* ----------------select bot or human popup---------- */}

        {
          selectMode ? <><Human_Ai_select_popup action={sendLinks} /></> : ""
        }

      </div>
    </>
  )
}
