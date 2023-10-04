import React from 'react'

export default function Footer({BiLogoFacebook,AiFillInstagram,BiLogoTwitter}) {
  return (
    <>
        <div className="bg-gray-800 sm:hidden items-center justify-center w-full flex pt-3">
        <div className="flex text-white text-2xl items-center justify-center gap-4">
          <h3>Vistabots.ai</h3>
          <div className="w-2 h-2 bg-[#00d1ff] rounded-full"></div>
        </div>
      </div>

      <div className="sm:px-16 px-3 flex flex-row  sm:flex-row justify-between bg-gray-800 pt-8 pb-3">
        <div className="hidden sm:block">
          <div className="flex text-white items-center gap-4">
            <img className='w-20' src="https://app.vistabots.ai/assets/logo-eea1fe82.png" alt="site logo" />
            <h3>Vistabots.ai</h3>
            <div className="w-2 h-2 bg-[#00d1ff] rounded-full"></div>
          </div>
        </div>

        {/* <div className=" px-4"> */}
        <div className="flex text-white gap-4 flex-col">
          <h3 className="text-2xl font-bold">More info</h3>
          {/* <h3>Blog</h3>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Customers</h3>
          <h3>Partnership</h3> */}
        </div>
        <div className="flex text-white gap-4 flex-col">
          <h3 className="text-2xl font-bold">Services</h3>
          <h3>Pricing</h3>
          <h3>Free Tools</h3>
          <h3>Roadmap</h3>
          <h3>Help Center</h3>
          <h3>Demo AI Bots</h3>
          <h3>Discord</h3>
          <h3>Community</h3>
        </div>
        {/* </div> */}

        <div className="flex hidden sm:block flex-col items-center gap-4">
          <h3 className="text-2xl text-white font-bold">Follow Us</h3>
          <div className="flex gap-4">
            <div className="border-2 w-12 rounded-full h-12 flex items-center justify-center">
              <BiLogoFacebook className="text-white" />
            </div>
            <div className="border-2 w-12 rounded-full h-12 flex items-center justify-center">
              <AiFillInstagram className="text-white" />
            </div>
            <div className="border-2 w-12 rounded-full h-12 flex items-center justify-center">
              <BiLogoTwitter className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-gray-800 py-4 sm:hidden flex-col items-center gap-4">
        <h3 className="text-2xl text-white font-bold">Follow Us</h3>
        <div className="flex justify-around w-full gap-4">
          <div className="border-2 w-12 rounded-full h-12 flex items-center justify-center">
            <BiLogoFacebook className="text-white" />
          </div>
          <div className="border-2 w-12 rounded-full h-12 flex items-center justify-center">
            <AiFillInstagram className="text-white" />
          </div>
          <div className="border-2 w-12 rounded-full h-12 flex items-center justify-center">
            <BiLogoTwitter className="text-white" />
          </div>
        </div>
      </div>

      <div className="flex justify-between px-2 sm:px-14 text-white py-6 border-t-[1px] border-white bg-gray-800">
        <h3 className="text-sm sm:text-xl">
          Copyyright © 2023 All Rights Reserved
        </h3>
        <h3 className="text-sm sm:text-xl">Privacy Policy</h3>
      </div>
    </>
  )
}