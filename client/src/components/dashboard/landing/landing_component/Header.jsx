import React from 'react'

export default function Header({openSideBar,HiMenuAlt2,sideBar}) {

  
  return (
    <>
    <div className="fixed sm:static h-20 w-full sm:w-auto top-0 z-50">
          {/* <div className="absolute right-48 -top-44 ">
            <img className="z-0" src="/vector-141.svg" alt="image" />
          </div> */}
          <div className="flex items-center justify-around z-40 lg:justify-around bg-white 
             lg:h-20 h-16 w-full lg:w-[88vw]  border-2 lg:ml-24 xl:rounded-md md:rounded-none">
            <div
              onClick={() => openSideBar()}
              className="lg:hidden w-10 block active:scale-95"
            >
              <HiMenuAlt2 className="text-3xl" />
            </div>

            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Vistabots.ai</h3>
              <div className="w-2 h-2 bg-[#00d1ff] rounded-full"></div>
            </div>

            <div className={`${sideBar ? "hidden lg:block" : ""}`}>
              <div className="flex bg-white z-50 border-[1px] lg:border-none border-gray-300 lg:flex-row
                  flex-col lg:items-center xl:pb-4 absolute lg:static top-[64px] left-0 sm:w-[80vw] md:px-10 md:gap-5 md:pt-5 md:w-[40%] md:h-full  px-10 sm:px-0 h-[92vh]
                  rounded-tr-md rounded-r-md rounded-br-md sm:rounded-none 
                  sm:h-auto pt-14 sm:pt-0 gap-5 sm:gap-24 text-xl sm:text-xl">
                {/* <div>
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
                </div> */}
              </div>
            </div>

            <div className="mr-2 sm:mr-2">
              <div className="rounded-full sm:h-14 bg-[#00d1ff] border-gray-800 border-r-4 
                border-b-4 flex items-center text-center justify-center active:scale-95">
                <button className="text-sm sm:text-[18px] px-2 sm:px-6 py-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}
