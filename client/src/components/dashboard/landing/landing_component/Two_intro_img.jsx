import React from 'react'

export default function Two_intro_img() {
  return (
    <>
    <div className="flex mt-[90vh] md:mt-0 my-4 mx-2 sm:mx-0 mr-0 sm:flex-row flex-col relative items-center justify-between">
        <div className="sm:w-[50vw] w-[95vw] p-[3px] sm:p-8 sm:mx-10 border-r-8 border-b-8 border-[1.5px] border-gray-700 rounded-3xl">
          <div>
            <img
              className="sm:w-[50vw]"
              src="/rectangle-31@2x.png"
              alt="img00"
            />
          </div>
        </div>

        <div
          className="sm:w-[50vw] w-[95vw] sm:p-8 sm:mx-10 bg-white z-40 my-9 border-r-8 
              border-b-8 border-[1.5px] border-gray-700 rounded-3xl"
        >
          <div>
            <img className="sm:w-[50vw]"
              src="/rectangle-33@2x.png"
              alt="iggmg00"/>
          </div>
        </div>

        <div className="absolute w-64 -right-0 -z-0 top-[80vh] md:top-44 lg:top-[70vh] bottom-0">
          <img src="/vector-21.svg" alt="riht-line" />
        </div>
      </div>
    </>
  )
}
