import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Input_field from '../../shared_components/Input_field'
import {MdDeleteOutline} from "react-icons/md"
import {LuRefreshCw} from "react-icons/lu"
import Button from '../../shared_components/Button'
import Website from '../manage_data_sources/Website'
import Text from '../manage_data_sources/Text'
import Pdf from '../manage_data_sources/Pdf'
import Q_and_a from '../manage_data_sources/Q_and_a'
import { useEffect } from 'react'



// -------------driver.js-----------------

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// -----------------------------------------------

export default function Manage_Data_Sources() {

  
  // ---------------for driver.js-------------

  // --------------------------------


    // --------for randring component------------
    const [open, setopen]=useState("website")

    const change_page=(page_name)=>{
      setopen(page_name)
    }


  return (
    <>
      <div className='flex flex-col mb-10 gap-12 justify-center items-center'>
        <div className='flex w-fit pl-2 pr-2 gap-12 justify-center items-center border-b-2'>
          <div onClick={()=>change_page("website")} className={`border-b-2 border-gray-600 cursor-pointer`}>
            <h3>Website</h3>
          </div>

          <div onClick={()=>change_page("text")} className={` border-b-2 border-gray-600 cursor-pointer`}>
            <h3>Text</h3>
          </div>
          
          <div onClick={()=>change_page("pdf")} className='cursor-pointer border-b-2 border-gray-600'>
            <h3>PDF</h3>
          </div>
          <div onClick={()=>change_page("qna")} className='cursor-pointer border-b-2 border-gray-600'>
            <h3>Q&A</h3>
          </div>
        </div>

        {/* -------------now as per url we change the component--- */}
        {/* -------component from (manage_data_sources)--------------- */}

        {
          open==="website" ? <><Website/></>:<></>
        }
        {
          open==="text" ? <><Text/></>:<></>
        }
        {
          open==="pdf" ? <><Pdf/></>:<></>
        }
        {
          open==="qna" ? <><Q_and_a/></>:<></>
        }
        

      </div>
    </>
  )
}