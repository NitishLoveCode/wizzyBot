import React from 'react'

export default function Setup_guide({BsArrowRightCircle,AiFillCheckCircle}) {
  return (
    <>
    <div className="mt-48 md:mt-20 md:mx-10 mb-10 flex sm:flex-row flex-col bg-gradient-to-r from-[#f7feff] to-white">
        <div className=" md:w-[50vw] shadow-2xl p-8 shadow-gray-400 py-12 border-[1px] border-gray-200 rounded-xl">
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
              vistabots offers solutions to intricate issues while delivering
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
    </>
  )
}
