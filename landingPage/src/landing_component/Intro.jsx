import React from 'react'

export default function Intro({BsFillArrowUpRightCircleFill}) {
  return (
    <>
    <div className="flex sm:flex-row px-2 flex-col sm:px-10 mt-20 pt-2">
          <div className="w-[100vw] sm:w-[40vw] md:w-[40vw] mb-4 sm:mb-0">
            <h3 className="sm:text-2xl md:text-4xl lg:text-8xl sm:ml-12 font-bold">
              AI bot & human-support live chat simplified.
            </h3>
          </div>
          <div className="w-[100vw] sm:w-[60vw] sm:pl-24 pb-[35%]">
            <div className="flex flex-col md:flex-row  items-center justify-between">
              <div className="w-[92%] sm:w-[53%]">
                <h3 className="text-md sm:text-xl text-justify">
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
                  className=""
                  src="/rectangle-5@2x.png"
                  alt="left-image-1"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
