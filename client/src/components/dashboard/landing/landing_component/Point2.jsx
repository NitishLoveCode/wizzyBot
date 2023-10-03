import React from 'react'

export default function Point2({AiFillCheckCircle}) {
  return (
    <>
    <div className="flex flex-col sm:flex-row">
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

        <div className="mb-20 flex flex-col sm:flex-col items-center justify-center w-full md:w-[50vw] relative">
          <div
            className="w-32 h-32 sm:w-48 sm:h-48 border-[1px] border-gray-400 bg-gray-100 
             flex items-center justify-center rounded-full"
            >
            <h3 className="text-8xl text-gray-300">2</h3>
          </div>
          <div>
            <div className="absolute top-20 sm:top-32">
              <h3 className="text-2xl sm:text-5xl">Answer issues instantly.</h3>
            </div>
            <div className="mt-12 w-[85vw] sm:w-auto text-justify text-xl">
              <h3>
                No one likes waiting. We understand the value of immediate
                responses. Our AI bot is designed to answer customer inquiries
                on the spot, boasting a remarkable 70% resolution rate.
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
        <div className=" border-gray-700 bg-white z-40 border-[1px] rounded-2xl overflow-hidden w-[95vw] sm:w-[40vw] h-full">
          <div className=" sm:p-3 border-r-8 border-b-8 pl-8 sm:pl-16 rounded-2xl border-gray-700 md:h-[75vh] xl:h-auto">
            <div className="xl:w-80 pl-10 md:pl-0">
              <img src="/image-3@2x.png" alt="itsLogo" />
            </div>
            <div className="mt-10">
              <h3 className="text-5xl md:text-6xl xl:text-6xl">80%</h3>
            </div>
            <div className=" w-48">
              <h3 className="text-xl">Improved Response Times</h3>
            </div>
          </div>
        </div>

        <div className="sm:w-[50vw] w-[95vw] border-gray-700 border-r-8 border-b-8 border-[1px] 
        rounded-2xl bg-red-50 px-8 py-8"
        >
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

    </>
  )
}
