import React, { useState } from "react";
import { BsChatRightDotsFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import {IoIosArrowUp} from "react-icons/io"
import {HiMenuAlt2} from "react-icons/hi"
import {IoIosArrowDown} from "react-icons/io"

export default function LandingPage() {

    const [openQuery1, setopenQuery1]=useState(null)
    const [openQuery2, setopenQuery2]=useState(null)
    const [openQuery3, setopenQuery3]=useState(null)
    const [openQuery4, setopenQuery4]=useState(null)
    const [sideBar, setsideBar]= useState(true)

    const openQuestion=(q)=>{
       if(q==1){
        if(openQuery1===null){
            setopenQuery1(1)
        }else{
            setopenQuery1(null)
        }
       }
       if(q==2){
        if(openQuery2===null){
            setopenQuery2(2)
        }else{
            setopenQuery2(null)
        }
       }
       if(q==3){
        if(openQuery3===null){
            setopenQuery3(3)
        }else{
            setopenQuery3(null)
        }
       }
       if(q==4){
        if(openQuery4===null){
            setopenQuery4(4)
        }else{
            setopenQuery4(null)
        }
       }
    }

    const openSideBar=()=>{
        if(sideBar===false){
            setsideBar(true)
        }else{
            setsideBar(false)
        }
    }
  return (
    <>
      <div className="bg-[#f4f4f1] sm:py-14  relative">
        <div className="absolute right-48 -top-44 ">
          <img className="z-0" src="/vector-141.svg" alt="image" />
        </div>
        <div className="flex items-center px-3 sm:px-0 justify-between z-50 sm:justify-around bg-white h-12 sm:h-20
         w-full sm:w-[88vw] sm:ml-24 rounded-md">
          
          <div onClick={()=>openSideBar()} className="sm:hidden block active:scale-95">
            <HiMenuAlt2 className="text-3xl"/>
          </div>

          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">Vistabot</h3>
            <div className="w-2 h-2 bg-[#00d1ff] rounded-full"></div>
          </div>

          <div className={`${sideBar ? "hidden sm:block":""}`}>
          <div className="flex bg-white z-50 border-[1px] sm:border-none border-gray-300 sm:flex-row
           flex-col sm:items-center absolute sm:static top-12 left-0 w-[80vw] sm:w-auto px-10 sm:px-0 h-[92vh]
            rounded-tr-md rounded-r-md rounded-br-md sm:rounded-none 
           sm:h-auto pt-10 sm:pt-0 gap-5 sm:gap-24">
            <div>
              <h3>Product</h3>
            </div>
            <div>
              <h3>Pricing</h3>
            </div>
            <div>
              <h3>Integrations</h3>
            </div>
            <div>
              <h3>Resources</h3>
            </div>
          </div>


          </div>
        
          <div>
            <div className="rounded-full sm:h-14 bg-[#00d1ff] border-gray-800 border-r-4 
            border-b-4 flex items-center active:scale-95">
              <button className="text-sm sm:text-[18px] px-1 sm:px-6 py-1">Get Started</button>
            </div>
          </div>

        </div>

        <div className="flex sm:flex-row px-2 flex-col sm:px-10 mt-20 pt-2">
          <div className="w-[100vw] sm:w-[40vw] mb-4 sm:mb-0">
            <h3 className="text-2xl sm:text-8xl sm:ml-12 font-bold">
              AI bot & human-support live chat simplified.
            </h3>
          </div>
          <div className="w-[100vw] sm:w-[60vw] sm:pl-24 pb-[35%]">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="w-full sm:w-[60%]">
                <h3 className="text-xl">
                  Reduce support volumes and increase customer satisfaction in
                  minutes with the{" "}
                  <span className="font-bold">GPT4-powered AI bot</span> that is
                  trained with your own docs and content.
                </h3>
              </div>
              <div className="bg-[#00d1ff] sm:my-0 my-4 h-16 border-r-4 border-gray-800 border-b-4 active:scale-95 cursor-pointer p-2 px-4 rounded-full flex items-center gap-6">
                <button>Get Started</button>
                <BsFillArrowUpRightCircleFill className="text-4xl" />
              </div>
            </div>
            {/* --------------right image------------- */}
            <div className="relative mt-10">
              <div className="absolute right-0 shadow-2xl w-[70%]">
                <img
                  className="w-"
                  src="/mask-group1@2x.png"
                  alt="left-image-1"
                />
              </div>
              <div className="absolute left-2 shadow-2xl top-10 w-[50%]">
                <img
                  className="w-"
                  src="/rectangle-5@2x.png"
                  alt="left-image-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-48 sm:mt-20 mx-2 sm:mx-10 mb-10 flex sm:flex-row flex-col bg-gradient-to-r from-[#f7feff] to-white">
        <div className=" sm:w-[50vw] shadow-2xl p-8 shadow-gray-400 py-12 border-[1px] border-gray-200 rounded-xl">
          <h3 className="text-3xl mb-3">
            Train AI and create your GPT-powered live chat in minutes.
          </h3>
          <p>
            Empower your customer support with LiveChatAI. Quickly train your AI
            with specific content, and launch a GPT-powered live chat in just
            minutes. Enhance customer interactions with responsive and precise
            assistance, all at your fingertips.
          </p>
          <div className="flex items-center gap-1 mt-5 mb-2">
            <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
            <p>No AI expertise needed.</p>
          </div>
          <div className="flex items-center gap-1">
            <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
            <p>Instant localization with 95 language</p>
          </div>
          <div className="mt-5">
            <img className="w-[90%]" src="/rectangle-8@2x.png" alt="img-1" />
          </div>
        </div>
        <div className="sm:w-[50vw] sm:ml-10 mt-10 sm:mt-0">
          <div>
            <h3 className="text-3xl sm:text-4xl">How AIChatBox Works?</h3>
            <h3 className="mt-8">
              An innovative AI assistant, fueled by OpenAI technology,
              LiveChatAI offers solutions to intricate issues while delivering
              more secure and precise responses compared to other AI bots
              available today.
            </h3>
          </div>
          <div className="mt-16">
            <div className="flex items-center gap-4">
              <BsArrowRightCircle className="text-3xl sm:text-5xl text-[#00d1ff]" />
              <h3 className="text-2xl sm:text-3xl">Setup In Minutes</h3>
            </div>
            <div className="ml-16 flex flex-col gap-8 mt-8">
              <h3 className="text-2xl sm:text-3xl">AI Bot with your Data</h3>
              <h3 className="text-2xl sm:text-3xl">Live Chat Support</h3>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------- */}

      <div className="sm:my-20 flex flex-col gap-6 items-center relative py-10 sm:py-20 justify-center bg-[#F6F3F2]">
        <div className="flex items-center justify-center">
          <h3 className="text-2xl px-2 sm:px-0 sm:text-4xl">
            Four reasons LiveChatAI will transform your customer support.
          </h3>
        </div>
        <div className="flex gap-5 sm:gap-0 flex-col sm:flex-row">
          <div className="justify-center item-center gap-4 flex flex-row sm:flex-col">
            <div className="sm:w-16 w-12 sm:h-16 h-12 bg-main rounded-full relative">
              <div className="sm:w-12 w-10 sm:h-12 h-10 flex items-center absolute -right-3 top-2 justify-center bg-black rounded-full">
                <h3 className="text-3xl text-white">1</h3>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl mt-3 w-60">Reduce support volume.</h3>
          </div>

          <div className="justify-center item-center gap-4 flex flex-row sm:flex-col">
            <div className="sm:w-16 w-12 sm:h-16 h-12 bg-main rounded-full relative">
              <div className="sm:w-12 w-10 sm:h-12 h-10 flex items-center absolute -right-3 top-2 justify-center bg-black rounded-full">
                <h3 className="text-3xl text-white">2</h3>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl mt-3 w-60">Answer issues instantly</h3>
          </div>

          <div className="justify-center item-center gap-4 flex flex-row sm:flex-col">
            <div className="sm:w-16 w-12 sm:h-16 h-12 bg-main rounded-full relative">
              <div className="sm:w-12 w-10 sm:h-12 h-10 flex items-center absolute -right-3 top-2 justify-center bg-black rounded-full">
                <h3 className="text-3xl text-white">3</h3>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl mt-3 w-60">Ai Botyou can trust</h3>
          </div>

          <div className="justify-center item-center gap-4 flex flex-row sm:flex-col">
            <div className="sm:w-16 w-12 sm:h-16 h-12 bg-main rounded-full relative">
              <div className="sm:w-12 w-10 sm:h-12 h-10 flex items-center absolute -right-3 top-2 justify-center bg-black rounded-full">
                <h3 className="text-3xl text-white">4</h3>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl mt-3 w-60">Works any platform & language</h3>
          </div>
                  </div>

        {/* ------------------------bg image----------------- */}
        <div className="absolute hidden sm:block left-0 w-[50vw] -z-10 -bottom-44">
          <img src="/vector-18.svg" alt="bg-line" />
        </div>
      </div>

      {/* --------------------------------------------------------------------- */}

      <div className="flex sm:flex-row flex-col mt-10 sm:mt-44">
        <div className="mb-20 sm:w-[50vw] relative">
          <div className="w-32 h-32 sm:w-48 sm:h-48 border-[1px] border-gray-400 bg-gray-100 ml-20 flex items-center justify-center rounded-full">
            <h3 className="text-8xl text-gray-300">1</h3>
          </div>
          <div className="mx-2 sm:ml-20">
            <div className="absolute top-20 sm:top-32">
              <h3 className="text-2xl sm:text-5xl">
                Dramatically reduce your support volume.
              </h3>
            </div>
            <div className="mt-14 sm:mt-12 text-xl">
              <h3>
                With Live ChatBot, you can quickly answer most customer
                questions, cutting support volume significantly. Say goodbye to
                long waiting times and hello to satisfied customers. It's the
                effortless way to streamline your customer service.
              </h3>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>%70 AI Resolution Average</p>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Improve Resolution Rate with AI</p>
            </div>
          </div>
        </div>
        <div className="w-[48vw] hidden sm:block relative ml-20">
          <div className="border-[1px] rounded-md bg-red-50 border-gray-400 h-[90%] w-[30vw]">
            <div className="">
              <img
                className="w-[30vw] absolute right-72 bottom-16"
                src="/rectangle-11@2x.png"
                alt="img-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mt-20 sm:mx-10 mb-10 flex sm:flex-row flex-col relative">
        <div className="w-full sm:w-[60vw] h-[72vh] sm:h-[58vh] p-36 border-[1px] border-r-8 border-b-8
         border-gray-700 rounded-2xl bg-[#f6f3f2] px-4 sm:px-8 py-8">
          <div className="flex items-center">
            <div className="w-16 rounded-full">
              <img src="/ellipse-13@2x.png" alt="user info" />
            </div>
            <div className="ml-2">
              <h3 className="text-xl font-bold">Zeynep Sargın</h3>
              <h3>Popupsmart</h3>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-md sm:text-xl">
              Implementing LiveChatAI has been a game-changing experience for
              Popupsmart. Before LiveChatAI, we struggled with overwhelming
              support queries and long response times. Now, our AI answers
              resolve an astonishing 82% of queries, allowing our human support
              team to focus on more complex issues. The seamless blend of AI bot
              and live chat has not only streamlined our support but also
              enhanced customer satisfaction.
            </h3>
          </div>
        </div>

        <div className="border-[1px] border-gray-700 mt-10 sm:mt-0 z-50 bg-white relative rounded-3xl sm:ml-8 
        sm:w-[30vw]">
          <div className="border-r-8 p-4 rounded-r-2xl border-b-8 rounded-b-2xl border-gray-700 h-full">
            <div className="sm:w-80 w-60 sm:pl-10">
              <img src="/image-4@2x.png" alt="itsLogo" />
            </div>
            <div className="mt-10">
              <h3 className="text-6xl sm:text-8xl">82%</h3>
            </div>
            <div className="ml-10 w-48">
              <h3 className="text-xl">
                Average AI Bot Resolution Rate from Customer Queries
              </h3>
            </div>
          </div>
        </div>

        <div className="absolute hidden sm:block -right-10 -z-10 sm:w-72 -top-32">
          <img src="/vector-19.svg" alt="riht-line" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mx-10">
        <div className="sm:w-[70vw] relative mt-20 hidden sm:block">
          <div className="border-2 rounded-2xl bg-red-50 border-gray-400 h-[75vh] sm:w-[24vw]">
            <div>
              <img
                className=" absolute -left-16 -top-20 h-[100vh]"
                src="/image-1@2x.png"
                alt="img-3"
              />
            </div>
          </div>
        </div>

        <div className="mb-20 sm:w-[50vw] relative">
          <div className="w-32 h-32 sm:w-48 sm:h-48 border-[1px] border-gray-400 bg-gray-100 ml-12 sm:ml-20 flex items-center justify-center rounded-full">
            <h3 className="text-8xl text-gray-300">2</h3>
          </div>
          <div className="">
            <div className="absolute top-20 sm:top-32">
              <h3 className="text-2xl sm:text-5xl">
              Answer issues instantly.
              </h3>
            </div>
            <div className="mt-12 text-xl">
              <h3>
              No one likes waiting. We understand the value of immediate responses. Our AI bot is designed to answer customer inquiries on the spot, boasting a remarkable 70% resolution rate.
              </h3>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Immediate Customer Satisfaction</p>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Efficient Support Operations</p>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Enhanced Resolution Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col items-center relative sm:mx-10 sm:my-10 gap-8">
        <div className=" border-gray-700 bg-white z-50 border-[1px] rounded-2xl overflow-hidden w-[90vw] sm:w-[40vw]">
          <div className=" sm:p-3 border-r-8 border-b-8 sm:pl-16 rounded-2xl border-gray-700 h-full">
            <div className="sm:w-80 pl-10">
              <img src="/image-3@2x.png" alt="itsLogo" />
            </div>
            <div className="mt-10">
              <h3 className="text-5xl sm:text-8xl">80%</h3>
            </div>
            <div className="ml-10 w-48">
              <h3 className="text-xl">Improved Response Times</h3>
            </div>
          </div>
        </div>

        <div className="sm:w-[50vw] sm:h-[50vh] border-gray-700 border-r-8 border-b-8 border-[1px] rounded-2xl bg-red-50 px-8 py-8">
          <div className="flex items-center">
            <div className="w-16 rounded-full">
              <img src="/ellipse-14@2x.png" alt="user info" />
            </div>
            <div className="ml-2">
              <h3 className="text-xl font-bold">Mert Aktas</h3>
              <h3>UserGuiding</h3>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl">
              Integrating LiveChatAI into our customer success strategy was one
              of the best decisions we've made. Our customers appreciate the
              quick responses, and our human support staff can now focus on more
              complex customer needs. LiveChatAI didn't just meet our
              expectations – it exceeded them
            </h3>
          </div>
        </div>

        {/* ------------------------bg image----------------- */}
        <div className="absolute hidden sm:block w-80 top-24 -left-24 z-0">
          <img src="/vector-18.svg" alt="bg-line" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-20 sm:mt-36 justify-between">
        <div className="mb-20 sm:w-[50vw] relative">
        <div className="w-32 h-32 sm:w-48 sm:h-48 border-[1px] border-gray-400 bg-gray-100 
            ml-12 sm:ml-20 flex items-center justify-center rounded-full">
            <h3 className="text-8xl text-gray-300">3</h3>
          </div>
          <div className="mx-4 sm:mx-0 sm:ml-20">
            <div className="absolute top-20 sm:top-32">
              <h3 className="text-3xl sm:text-5xl">AI bot you can trust.</h3>
            </div>
            <div className="mt-12 text-xl">
              <h3>
                Import your content by simply adding your website.We crawl all
                the pages on your website, and you can add which content should
                be trained.
              </h3>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Train AI with your website data in minutes.</p>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Long-term memory up to 50M tokens.</p>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>GPT 4 and 3.5 supported.</p>
            </div>
          </div>
        </div>
        <div className="sm:w-[48vw] z-40 relative mx-2 sm:mx-0 sm:ml-20">
          <div className="sm:border-2 rounded-3xl bg-red-50 border-gray-400 h-[90%] sm:w-[37vw]">
            <div className="">
              <img
                className="sm:w-[38vw] h-[75vh] absolute sm:right-14 top-10 shadow-xl"
                src="/rectangle-26@2x.png"
                alt="img-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-[90vh] sm:mt-0 mx-2 sm:mx-0 mr-0 sm:flex-row flex-col relative items-center justify-between">
        <div className="sm:w-[50vw] p-[3px] sm:p-8 sm:mx-10 sm:my-20 border-r-8 border-b-8 border-[1.5px] border-gray-700 rounded-3xl">
          <div>
            <img className="sm:w-[50vw]" src="/rectangle-31@2x.png" alt="img00" />
          </div>
        </div>



        <div className="sm:w-[50vw] sm:p-8 sm:mx-10 bg-white z-50 my-9 sm:my-20 border-r-8 
              border-b-8 border-[1.5px] border-gray-700 rounded-3xl">
          <div>
            <img className="sm:w-[50vw]" src="/rectangle-33@2x.png" alt="iggmg00" />
          </div>
        </div>

        <div className="absolute w-64 -right-0 -z-0 top-[80vh]  bottom-0">
          <img src="/vector-21.svg" alt="riht-line" />
        </div>
      </div>

      <div className="mx-2 sm:mx-10 my-10 flex flex-col sm:flex-row items-center">
        <div className="sm:w-[50vw]">
          <h1 className="text-3xl sm:text-5xl">Transparent</h1>
          <h3 className="mt-3 mx-3 sm:mx-10 text-xl">
            AI Conversations in Inbox lets your team easily monitor all of AI’s
            responses and also Live Chat messages.
          </h3>
        </div>
        <div className="sm:w-[50vw] mt-8">
          <h1 className="text-3xl sm:text-5xl">Human support</h1>
          <h3 className="mt-3 mx-3 sm:mx-10 text-xl">
            LiveChatAI can triage complex problems and seamlessly pass them to
            your human support teams.
          </h3>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mx-2 sm:mx-10 sm:my-16">
        <div className="w-[90vw] sm:w-[50vw] relative mt-20">
          <div className="border-2 rounded-2xl bg-red-50 border-gray-400 h-[50vh] sm:h-[65vh] sm:w-[35vw]">
            <div>
              <img
                className="w-[85vw] sm:w-[35vw] absolute right-5 sm:right-8 -top-8 sm:-top-20"
                src="/rectangle-35@2x.png"
                alt="img-3"
              />
            </div>
          </div>
        </div>

        <div className="mb-20 mt-10 sm:mt-0 sm:w-[50vw] relative">
          <div className="w-32 h-32 sm:w-48 sm:h-48 border-[1px] border-gray-400 bg-gray-100 
              ml-20 flex items-center justify-center rounded-full">
            <h3 className="text-8xl text-gray-300">4</h3>
          </div>
          <div className="ml-2 sm:ml-20">
            <div className="absolute top-24 sm:top-32">
              <h3 className="text-3xl sm:text-5xl">Works any platform and any language.</h3>
            </div>
            <div className="sm:mt-12 mt-20 text-xl">
              <h3>
                LiveChatAI breaks down language barriers by supporting 95
                different languages, ensuring seamless communication across
                diverse audiences.
              </h3>
              <h3 className="mt-4">
                Whether you're using our chat messenger, inline embedding, full
                page, or even our flexible API, LiveChatAI is designed to work
                effortlessly on any platform, anywhere
              </h3>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Chat Messenger</p>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Inline & Full-page Chat</p>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>API Available For All Other Platforms</p>
            </div>
          </div>
        </div>
      </div>


      {/* -------------------------------------------------------------------------------------------------- */}

      <div className='px-2 sm:px-10 my-10 py-6 bg-[#f6f4f2]'>
            <div className='flex items-center justify-center'> 
                <h3 className='text-3xl sm:text-5xl'>What sets LiveChatAI apart from the rest</h3>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 relative'>
                <div className=' sm:w-[48vw] border-b-8 rounded-3xl border-gray-800'>
                <div className='border-l-2 bg-white border-t-2 border-r-8 mt-8 border-gray-700 p-5 px-10 rounded-2xl'>
                    <h3 className='text-4xl mb-2'>LiveChatAI</h3>
                    <h3 className='text-2xl font-bold'>Features Included</h3>

                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>Unlimited AI Bots</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>Live Chat with Human</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>50M Character Content Import</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>Seamless Human Routing</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>API Available For All Other Platforms</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>API Available With Trained Data</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>Affordable pricing with message counts</p>
                    </div>
                </div>
                </div>



                <div className=' sm:w-[45vw] border-b-8 rounded-3xl border-gray-800'>
                <div className='border-l-2 bg-white border-t-2 border-r-8 mt-2 sm:mt-8 border-gray-700 
                     p-5 px-10 rounded-2xl'>
                    <h3 className='text-4xl mb-2'>LiveChatAI</h3>
                    <h3 className='text-2xl font-bold'>Features Included</h3>

                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>Unlimited AI Bots</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>Live Chat with Human</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>50M Character Content Import</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>Seamless Human Routing</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>API Available For All Other Platforms</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>API Available With Trained Data</p>
                    </div>
                    <div className='flex items-center gap-1 mt-5 mb-2'>
                          <AiFillCheckCircle className='text-[#00d1ff] text-2xl'/>
                          <p>Affordable pricing with message counts</p>
                    </div>
                </div>
                </div>

            <div className='absolute ml-2 mt-3 sm:mt-0 sm:ml-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-20 w-16 sm:h-20 h-16 bg-[#00d1ff] rounded-full flex items-center justify-center'>
                <div className='sm:w-14 w-10 sm:h-14 h-10 bg-black text-white rounded-full flex items-center justify-center'>
                    <h3 className='text-2xl'>VS</h3>
                </div>
            </div>


            </div>
        </div>

        <div className='sm:mx-10 mx-3 my-8 flex flex-col items-center relative justify-center'>
            <div className='flex items-center justify-center my-9'>
                <h3 className='text-3xl sm:text-5xl'>Frequently asked questions</h3>
            </div>

            {/* -------question 1-------------- */}
            <div className='shadow-sm p-2 sm:p-6  shadow-gray-300 rounded-xl'>
                <div className='flex justify-between w-[90vw] sm:w-[70vw]'>
                    <h3 className='sm:text-2xl text-xl font-bold'>What is LiveChatAI?</h3>
                    <button onClick={()=>openQuestion(1)} className='bg-[#00d1ff] rounded-full sm:h-10 sm:w-10 flex items-center active:scale-95 justify-center'>
                        {openQuery1 === 1 ? (
                          <div>
                            <IoIosArrowDown className='text-3xl' />
                          </div>
                        ) : (
                          <div>
                            <IoIosArrowUp className='text-3xl' />
                          </div>
                        )}</button>
                </div>
                <div className={`${openQuery1===1 ? "w-[70vw] mt-4 hidden":"w-[70vw] mt-4 block"}`}>
                    <h3 className='text-xl'>Introducing LiveChatAI, your ultimate AI bot architect. Harnessing the capabilities of ChatGPT, it tailors your data into an interactive chat widget for your website. Simply upload a document or include a link to your site, and behold a chatbot ready to address any inquiries related to its content. With LiveChatAI, turn your information into an engaging conversation</h3>
                </div>
            </div>

            {/* -------question 2-------------- */}
            <div className='shadow-sm p-2 sm:p-6  shadow-gray-300 rounded-xl'>
                <div className='flex justify-between w-[90vw] sm:w-[70vw]'>
                    <h3 className='sm:text-2xl text-xl font-bold w-[70vw] sm:w-auto'>How can I add my AI bot to my website?</h3>
                    <button onClick={()=>openQuestion(2)} className='bg-[#00d1ff] rounded-full w-8 h-8 sm:h-10 sm:w-10 flex items-center active:scale-95 justify-center'>
                        {openQuery2 === 2 ? (
                          <div>
                            <IoIosArrowUp className='text-3xl' />
                          </div>
                        ) : (
                            <div>
                              <IoIosArrowDown className='text-3xl' />
                          </div>
                        )}
                    </button>
                </div>
                <div className={`${openQuery2===2 ? "w-[70vw] mt-4 block":"w-[70vw] mt-4 hidden"}`}>
                    <h3 className='text-xl'>How can I add my AI bot to my website?</h3>
                </div>
            </div>


            {/* -------question 3-------------- */}
            <div className='shadow-sm p-2 sm:p-6  shadow-gray-300 rounded-xl'>
                <div className='flex justify-between w-[90vw] sm:w-[70vw]'>
                    <h3 className='sm:text-2xl text-xl font-bold w-[70vw] sm:w-auto'>How to import my data?</h3>
                    <button onClick={()=>openQuestion(3)} className='bg-[#00d1ff] rounded-full w-8 h-8 sm:h-10 sm:w-10 flex items-center active:scale-95 justify-center'>
                        {openQuery3 === 3 ? (
                          <div>
                            <IoIosArrowUp className='text-3xl' />
                          </div>
                        ) : (
                            <div>
                              <IoIosArrowDown className='text-3xl' />
                          </div>
                        )}
                    </button>
                </div>
                <div className={`${openQuery3===3 ? "w-[70vw] mt-4 block":"w-[70vw] mt-4 hidden"}`}>
                    <h3 className='text-xl'>Introducing LiveChatAI, your ultimate AI bot architect. Harnessing the capabilities of ChatGPT, it tailors your data into an interactive chat widget for your website. Simply upload a document or include a link to your site, and behold a chatbot ready to address any inquiries related to its content. With LiveChatAI, turn your information into an engaging conversation</h3>
                </div>
            </div>


            {/* -------question 4-------------- */}
            <div className='shadow-sm p-2 sm:p-6  shadow-gray-300 rounded-xl'>
                <div className='flex justify-between sm:w-[70vw]'>
                    <h3 className='text-xl sm:text-2xl font-bold w-[80vw] sm:w-auto'>Can I share a AI Bot I created?</h3>
                    <button onClick={()=>openQuestion(4)} className='bg-[#00d1ff] rounded-full w-8 h-8 sm:h-10 sm:w-10 flex items-center active:scale-95 justify-center'>
                        {openQuery4 === 4 ? (
                          <div>
                            <IoIosArrowUp className='text-3xl' />
                          </div>
                        ) : (
                            <div>
                              <IoIosArrowDown className='text-3xl' />
                          </div>
                        )}
                    </button>
                </div>
                <div className={`${openQuery4===4 ? "w-[70vw] mt-4 block":"w-[70vw] mt-4 hidden"}`}>
                    <h3 className='text-xl'>Introducing LiveChatAI, your ultimate AI bot architect. Harnessing the capabilities of ChatGPT, it tailors your data into an interactive chat widget for your website. Simply upload a document or include a link to your site, and behold a chatbot ready to address any inquiries related to its content. With LiveChatAI, turn your information into an engaging conversation</h3>
                </div>
            </div>



            <div className="absolute hidden sm:block -left-52 top-[55vh] ">
                <img src="/vector-22.svg" alt="bg-line" />
            </div>
        </div>
        


        <div className='sm:mx-10 mx-2 sm:py-16 sm:mt-32'>
            <div className='flex items-center justify-center mb-6'>
                <h3 className='text-3xl sm:text-5xl'>Some Reviews From Happy Customers.</h3>
            </div>


            <div className='flex flex-col sm:flex-row gap-2'>
            <div className='sm:w-[33vw] border-2 border-r-8 border-b-8 border-gray-700 rounded-2xl px-8 py-8'>
                <div className='flex items-center'>
                    <div className='w-16 rounded-full'>
                        <img src="/ellipse-13@2x.png" alt="user info" />
                    </div>
                    <div className='ml-2'>
                        <h3 className='text-xl font-bold'>Zeynep Sargın</h3>
                        <h3>Popupsmart</h3>
                    </div>
                </div>
                <div className='flex ml-2 mt-2'>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                </div>
                <div className='mt-4'>
                    <h3 className='text-xl'>Implementing LiveChatAI has been a game-changing experience for Popupsmart. Before LiveChatAI, we struggled with overwhelming support queries and long response times. Now, our AI answers resolve an astonishing 82% of queries, allowing our human support team to focus on more complex issues. The seamless blend of AI bot and live chat has not only streamlined our support but also enhanced customer satisfaction.</h3>
                </div>
            </div>
            <div className='sm:w-[33vw] border-2 border-r-8 border-b-8 border-gray-700 rounded-2xl px-8 py-8'>
                <div className='flex items-center'>
                    <div className='w-16 rounded-full'>
                        <img src="/ellipse-109@2x.png" alt="user info" />
                    </div>
                    <div className='ml-2'>
                        <h3 className='text-xl font-bold'>Nusret</h3>
                        <h3>Formcarry</h3>
                    </div>
                </div>
                <div className='flex ml-2 mt-2'>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                </div>
                <div className='mt-4'>
                    <h3 className='text-xl'>Another fantastic feature is the bot's ability to send sample codes using Markdown formatting. This is extremely beneficial for our users, as it allows them to see code snippets in a clean, easy-to-read format. It's like having a knowledgeable developer on-hand to provide quick snippets, all automated and available 24/7."</h3>
                </div>
            </div>
            <div className='sm:w-[33vw] border-2 border-r-8 border-b-8 border-gray-700 rounded-2xl px-8 py-8'>
                <div className='flex items-center'>
                    <div className='w-16 rounded-full'>
                        <img src="/ellipse-110@2x.png" alt="user info" />
                    </div>
                    <div className='ml-2'>
                        <h3 className='text-xl font-bold'>Berna</h3>
                        <h3>QRCodeDynamic</h3>
                    </div>
                </div>
                <div className='flex ml-2 mt-2'>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                    <AiTwotoneStar className='text-2xl ml-2 text-yellow-400'/>
                </div>
                <div className='mt-4'>
                    <h3 className='text-xl'>As a growing e-commerce business, we needed a solution to handle our increasing customer inquiries. LiveChatAI has been the perfect answer. Watching it learn and adapt to our business needs has been fantastic. And the analytics? Pure gold! It's given us a whole new perspective on customer interaction.</h3>
                </div>
            </div>
            </div>
        </div>


        <div className='sm:mx-10 mx-2 my-4 sm:mb-32 mb-16 flex-col flex items-center justify-center'>
            <div>
                <h3 className='text-3xl sm:text-5xl'>Blogs</h3>
            </div>
            <div className='flex flex-col sm:flex-row sm:gap-16 gap-8 mt-8'>
            <div className='sm:w-[30vw] border-2 border-r-8 border-b-8 border-gray-700 sm:p-8 p-2 rounded-2xl mt-4'>
                <div>
                    <img className='sm:w-[30vw]' src="/rectangle-9821@2x.png" alt="blog-Thumbnail" />
                    <h3 className='text-xl sm:text-3xl'>Unveiling Chat Surveys: A Revolution in Online Feedback</h3>
                </div>
            </div>
            <div className='sm:w-[30vw] border-2 border-r-8 border-b-8 border-gray-700 sm:p-8 p-2 rounded-2xl sm:mt-4'>
                <div>
                    <img className='sm:w-[30vw]' src="/rectangle-9821@2x.png" alt="blog-Thumbnail" />
                    <h3 className='text-xl sm:text-3xl'>Unveiling Chat Surveys: A Revolution in Online Feedback</h3>
                </div>
            </div>
            </div>
        </div>


        <div className="bg-gray-800 sm:hidden items-center justify-center w-full flex pt-3">
            <div className='flex text-white text-2xl items-center justify-center gap-4'>
                <h3>Vistabot</h3>
                <div className='w-2 h-2 bg-[#00d1ff] rounded-full'></div>
            </div>
        </div>

        <div className='sm:px-16 px-3 flex flex-row  sm:flex-row justify-between bg-gray-800 pt-8 pb-3'>
            <div className="hidden sm:block">
            <div className='flex text-white gap-4'>
                <h3>Vistabot</h3>
                <div className='w-2 h-2 bg-[#00d1ff] rounded-full'></div>
            </div>
            </div>
            

            {/* <div className=" px-4"> */}
            <div className='flex text-white gap-4 flex-col'>
                <h3 className='text-2xl font-bold'>More info</h3>
                <h3>Blog</h3>
                <h3>About</h3>
                <h3>Contact</h3>
                <h3>Customers</h3>
                <h3>Partnership</h3>
            </div>
            <div className='flex text-white gap-4 flex-col'>
                <h3 className='text-2xl font-bold'>Services</h3>
                <h3>Pricing</h3>
                <h3>Free Tools</h3>
                <h3>Roadmap</h3>
                <h3>Help Center</h3>
                <h3>Demo AI Bots</h3>
                <h3>Discord</h3>
                <h3>Community</h3>
            </div>
            {/* </div> */}


            <div className='flex hidden sm:block flex-col items-center gap-4'>
                <h3 className='text-2xl text-white font-bold'>Follow Us</h3>
                <div className='flex gap-4'>
                    <div className='border-2 w-12 rounded-full h-12 flex items-center justify-center'>
                        <BiLogoFacebook className='text-white'/>
                    </div>
                    <div className='border-2 w-12 rounded-full h-12 flex items-center justify-center'>
                        <AiFillInstagram className='text-white'/>
                    </div>
                    <div className='border-2 w-12 rounded-full h-12 flex items-center justify-center'>
                        <BiLogoTwitter className='text-white'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex bg-gray-800 py-4 sm:hidden flex-col items-center gap-4'>
                <h3 className='text-2xl text-white font-bold'>Follow Us</h3>
                <div className='flex justify-around w-full gap-4'>
                    <div className='border-2 w-12 rounded-full h-12 flex items-center justify-center'>
                        <BiLogoFacebook className='text-white'/>
                    </div>
                    <div className='border-2 w-12 rounded-full h-12 flex items-center justify-center'>
                        <AiFillInstagram className='text-white'/>
                    </div>
                    <div className='border-2 w-12 rounded-full h-12 flex items-center justify-center'>
                        <BiLogoTwitter className='text-white'/>
                    </div>
                </div>
            </div>
        
        <div className='flex justify-between px-2 sm:px-14 text-white py-6 border-t-[1px] border-white bg-gray-800'>
            <h3 className='text-sm sm:text-xl'>Copyyright © 2023 All Rights Reserved</h3>
            <h3 className='text-sm sm:text-xl'>Privacy Policy</h3>
    </div>
    </>
  );
}
