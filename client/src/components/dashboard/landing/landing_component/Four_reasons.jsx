import React from 'react'

export default function Four_reasons() {
  return (
    <>
    
    <div className="sm:my-20 flex flex-col gap-6 items-center relative py-10 sm:py-20 justify-center bg-[#F6F3F2]">
        <div className="flex items-center justify-center">
          <h3 className="text-2xl px-2 sm:px-0 sm:text-4xl">
            Four reasons LiveChatAI will transform your customer support.
          </h3>
        </div>
        <div className="flex sm:flex-col md:flex-row gap-5 xl:gap-0 flex-col xl:flex-row">



            <div className='flex flex-col sm:flex-col md:flex-col xl:flex-row gap-5 xl:gap-2'>
              <div className="justify-center item-center gap-4 flex flex-row xl:flex-col">
                <div className="sm:w-16 w-12 sm:h-16 h-12 bg-main rounded-full relative">
                  <div className="sm:w-12 w-10 sm:h-12 h-10 flex items-center absolute -right-3 top-2 justify-center bg-black rounded-full">
                    <h3 className="text-3xl text-white">1</h3>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl mt-3 w-60">
                  Reduce support volume.
                </h3>
              </div>

              <div className="justify-center item-center gap-4 flex flex-row xl:flex-col">
                <div className="sm:w-16 w-12 sm:h-16 h-12 bg-main rounded-full relative">
                  <div className="sm:w-12 w-10 sm:h-12 h-10 flex items-center absolute -right-3 top-2 justify-center bg-black rounded-full">
                    <h3 className="text-3xl text-white">2</h3>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl mt-3 w-60">
                  Answer issues instantly
                </h3>
              </div>
            </div>


            <div className='flex flex-col sm:flex-col md:flex-col xl:flex-row gap-5 xl:gap-2'>
              <div className="justify-center item-center gap-4 flex flex-row xl:flex-col">
                <div className="sm:w-16 w-12 sm:h-16 h-12 bg-main rounded-full relative">
                  <div className="sm:w-12 w-10 sm:h-12 h-10 flex items-center absolute -right-3 top-2 justify-center bg-black rounded-full">
                    <h3 className="text-3xl text-white">3</h3>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl mt-3 w-60">
                  Ai Botyou can trust
                </h3>
              </div>

              <div className="justify-center item-center gap-4 flex flex-row xl:flex-col">
                <div className="sm:w-16 w-12 sm:h-16 h-12 bg-main rounded-full relative">
                  <div className="sm:w-12 w-10 sm:h-12 h-10 flex items-center absolute -right-3 top-2 justify-center bg-black rounded-full">
                    <h3 className="text-3xl text-white">4</h3>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl mt-3 w-60">
                  Works any platform & language
                </h3>
              </div>
          </div>


          
        </div>

        {/* ------------------------bg image----------------- */}
        <div className="absolute hidden sm:block left-0 w-[50vw] -z-10 -bottom-44">
          <img src="/vector-18.svg" alt="bg-line" />
        </div>
      </div>

    </>
  )
}
