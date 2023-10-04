import React from 'react'

export default function Point1({AiFillCheckCircle}) {
  return (
    <>
        <div className="flex sm:flex-row flex-col mt-10 sm:mt-44">
        <div className="mb-20 sm:w-[50vw] relative">
          <div className="w-32 h-32 sm:w-48 sm:h-48 border-[1px] border-gray-400 bg-gray-100 ml-20 flex items-center justify-center rounded-full">
            <h3 className="text-8xl text-gray-300">1</h3>
          </div>
          <div className="mx-2 sm:ml-20">
            <div className="absolute top-20 sm:top-32">
              <h3 className="text-2xl md:text-3xl xl:text-5xl">
                Dramatically reduce your support volume.
              </h3>
            </div>
            <div className="mt-14 sm:mt-12 md:mt-14 text-xl">
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
        <div className="w-[48vw] hidden sm:block relative sm:ml-20">
          <div className="border-[1px] rounded-md bg-red-50 border-gray-400 md:h-[70vh] xl:h-[90vh] h-[90%] md:w-[35vw] xl:w-[35vw] w-[30vw]">
            <div className="">
              <img
                className="w-[30vw] md:w-[40vw] xl:w-[35vw] md:mb-40 xl:mb-0 absolute xl:right-72 bottom-16"
                src="/rectangle-11@2x.png"
                alt="img-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mt-20 sm:mx-10 mx-2 mb-10 flex sm:flex-row flex-col relative">
        <div
          className="w-full sm:w-[60vw] h-fit  p-36 border-[1px] border-r-8 border-b-8
         border-gray-700 rounded-2xl bg-[#f6f3f2] px-4 sm:px-8 py-8"
        >
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
            <h3 className="text-xl sm:text-xl">
              Implementing Vistabots has been a game-changing experience for
              Popupsmart. Before Vistabots, we struggled with overwhelming
              support queries and long response times. Now, our AI answers
              resolve an astonishing 82% of queries, allowing our human support
              team to focus on more complex issues. The seamless blend of AI bot
              and live chat has not only streamlined our support but also
              enhanced customer satisfaction.
            </h3>
          </div>
        </div>

        <div
          className="border-[1px] border-gray-700 mt-10 sm:mt-0 z-40 bg-white relative 
          rounded-3xl sm:ml-8 sm:w-[30vw]"
        >
          <div className="border-r-8 p-4 rounded-r-2xl border-b-8 rounded-b-2xl border-gray-700 h-full">
            <div className="w-fit xl:w-[60%]">
              <img src="/image-4@2x.png" alt="itsLogo" />
            </div>
            <div className="mt-10">
              <h3 className="text-6xl md:text-6xl xl:text-8xl">82%</h3>
            </div>
            <div className="ml-2 w-48">
              <h3 className="text-xl">
                Average AI Bot Resolution Rate from Customer Queries
              </h3>
            </div>
          </div>
        </div>

        {/* <div className="absolute hidden sm:block -right-10 -z-10 sm:w-72 -top-32">
          <img src="/vector-19.svg" alt="riht-line" />
        </div> */}
      </div>
    </>
  )
}
