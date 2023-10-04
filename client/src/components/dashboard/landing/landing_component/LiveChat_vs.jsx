import React from 'react'

export default function ({AiFillCheckCircle}) {
  return (
    <>
    <div className="px-2 sm:px-10 my-10 py-6 bg-[#f6f4f2]">
        <div className="flex items-center justify-center">
          <h3 className="text-3xl sm:text-5xl">
            What sets Vistabots apart from the rest
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 relative">
          <div className=" sm:w-[45vw] border-b-8 rounded-3xl border-gray-800">
            <div className="border-l-2 bg-white border-t-2 border-r-8 mt-8 border-gray-700 p-5 px-10 rounded-2xl">
              <h3 className="text-4xl mb-2">Vistabots</h3>
              <h3 className="text-2xl font-bold">Features Included</h3>

              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>Unlimited AI Bots</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>Live Chat with Human</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>50M Character Content Import</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>Seamless Human Routing</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>API Available For All Other Platforms</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>API Available With Trained Data</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>Affordable pricing with message counts</p>
              </div>
            </div>
          </div>

          <div className=" sm:w-[45vw] border-b-8 rounded-3xl border-gray-800">
            <div
              className="border-l-2 bg-white border-t-2 border-r-8 mt-2 sm:mt-8 border-gray-700 
                     p-5 px-10 rounded-2xl"
            >
              <h3 className="text-4xl mb-2">Vistabots</h3>
              <h3 className="text-2xl font-bold">Features Included</h3>

              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>Unlimited AI Bots</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>Live Chat with Human</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>50M Character Content Import</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>Seamless Human Routing</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>API Available For All Other Platforms</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>API Available With Trained Data</p>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-2">
                <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
                <p>Affordable pricing with message counts</p>
              </div>
            </div>
          </div>

          <div className="absolute ml-2 mt-3 sm:mt-0 sm:ml-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-20 w-16 sm:h-20 h-16 bg-[#00d1ff] rounded-full flex items-center justify-center">
            <div className="sm:w-14 w-10 sm:h-14 h-10 bg-black text-white rounded-full flex items-center justify-center">
              <h3 className="text-2xl">VS</h3>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
