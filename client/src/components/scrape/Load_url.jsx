import React, { useEffect, useState } from 'react'
import Source_1_2_card from './child/Source_1_2_card'
import Heading_text from '../shared_components/Heading_text'
import Input_field from '../shared_components/Input_field'
import Button from '../shared_components/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import serverBasePath from '../../../constants'
import { MdOutlineManageAccounts } from "react-icons/md"
import toast from 'react-hot-toast';

// -----for driver.js-----------
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import Loading from '../loading/Loading'
// -------------

export default function Load_url({ agencyView }) {
  const [loadingStart, setloadingStart]=useState(false)

  // ---------------for driver.js-------------
  const driverObj = driver({
    showProgress: true,
    showButtons: ['next', 'previous'],
    steps: [
      { element: '#for_drive_step1', popover: { title: 'Step 1: Add the Root Domain', description: 'Step 1: Add the URL to gather content and train your chatbot.', side: "left", align: 'start' }},
      { element: '#for_drive_load_url', popover: { title: 'Your Root Domain here.', description: 'Add the Root Domain to gather content & Supercharge Your Chatbot Training.', side: "bottom", align: 'start' }},
      { element: '#for_driver_getall_links', popover: { title: 'Click to Fetch all Links', description: 'After adding your root domain, simply click Save to gather all the links!', side: "left", align: 'start' }},
      { element: 'you_are ready to go with this step', popover: { title: ' You are Almost Done, Get Ready, Hurry Up!', description: 'you are good to go for the next and final step – get ready!', side: "top", align: 'start' }},
    ]
  });
  useEffect(()=>{
    setTimeout(()=>{
      const find_new_user=localStorage.getItem("new_for_load_url")
      if(find_new_user===null){
        driverObj.drive();
        localStorage.setItem("new_for_load_url",true)
      }
    },2000)
  },[])
  // --------------------------------

  const [baseLink, setBaseLink] = useState('');
  // const [sources, setSources] = useState([]);
  const navigate = useNavigate();


  function getLinks() {
    
    if(baseLink){
      setloadingStart(true)
    }
    axios.post(serverBasePath + '/train/website/baseLink', { url: baseLink }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then((response) => {
        const data = response.data;
        if (data.pagesData !== undefined) {
          
          data.pagesData.forEach((link, index) => {
            if (link.id === undefined) {
              link.id = index;
            }
          })
          // setSources(data.pagesData);
          navigate('/scrape', { state: { sources: data.pagesData } })
        }
      })
      .catch(err => {console.log(err);toast.error(err.response.data.message !== undefined ? err.response.data.message : err.message)});
  }


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
        <Heading_text text_size={"text-xl sm:text-3xl mt-4 font-bold text-gray-800"} text={"Add a Website as Data Source"} />
        <Heading_text text_size={"text-md text-gray-800"} text={"Add a website as a data source by providing a URL for LiveChatAI to crawl and import content."} />
        <Heading_text text_size={"text-sm mb-3 text-gray-500"} text={"Use the main domain (e.g., domain.com) to crawl all pages, or specify a sub-path (e.g., domain.com/help/) or subdomain (e.g., docs.domain.com) to limit the content imported. This helps in tailoring the AI bot's training to your specific needs."} />
        <div id='for_drive_load_url'>
          <Input_field
            name={"url"}
            placeholder={"https://www.example.com"}
            style={"border-2 outline-main w-[94vw] sm:w-[45vw] pl-2 h-10 rounded-md"}
            value={baseLink}
            setValue={setBaseLink}
          />
        </div>
        <div id='for_driver_getall_links'>
          <Button style={"bg-gray-800 text-white p-3 pl-7 pr-7 rounded-full active:scale-95"} text={"Save and get all my links"}
            action={getLinks}
          />
        </div>
        {
          loadingStart ? <>
          <div className='absolute'>
            <div className='mx-auto w-fit h-fit'>
              <Loading/>
            </div>
          </div></>:<></>
        }
        

        {/* <div className='flex w-full gap-2 justify-center items-center'>
                <div className='w-[25%] bg-gray-400 h-[1px]'></div>
                <h3>OR</h3>
                <div className='w-[25%] bg-gray-400 h-[1px]'></div>
            </div>
            
            <Heading_text text_size={"text-xl md:text-4xl mt-4 font-bold text-gray-800"} text={"Submit Sitemap"}/>
            <Heading_text text_size={"text-md text-gray-800"} text={"When you add sitemap, we only crawl and get content from provided URLs on your sitemap."}/>
            <Input_field name={"sitemap"} placeholder={"https://..../sitemap.xml"} style={"border-2 w-[94vw] outline-main sm:w-[45vw] pl-2 h-10 rounded-md"}/>
            <Button style={"bg-gray-800 mb-14 text-white p-3 pl-7 pr-7 rounded-full active:scale-95"} text={"Save and load sitemap"}/> */}

      </div>
      
    </>
  )
}
