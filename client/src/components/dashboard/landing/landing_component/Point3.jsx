import React from 'react'

export default function Point3({AiFillCheckCircle}) {
  return (
    <>
    <div className="flex flex-col sm:flex-row mt-20 sm:mt-36 justify-between">
        <div className="mb-20 sm:w-[50vw] relative">
          <div
            className="w-32 h-32 sm:w-48 sm:h-48 border-[1px] border-gray-400 bg-gray-100 
            ml-12 sm:ml-20 flex items-center justify-center rounded-full"
          >
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

    </>
  )
}
