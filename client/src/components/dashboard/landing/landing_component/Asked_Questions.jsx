import React from 'react'

export default function Asked_Questions({IoIosArrowUp,IoIosArrowDown,openQuestion,openQuery1,openQuery2,openQuery3,openQuery4}) {
  return (
    <>
    <div className="sm:mx-10 mx-3 my-8 gap-4 flex flex-col items-center relative justify-center">
        <div className="flex items-center justify-center my-9">
          <h3 className="text-3xl sm:text-5xl">Frequently asked questions</h3>
        </div>

        {/* -------question 1-------------- */}
        <div className="shadow-sm p-2 sm:p-6  shadow-gray-300 rounded-xl">
          <div className="flex justify-between w-[90vw] sm:w-[70vw]">
            <h3 className="sm:text-2xl text-xl font-bold">
              What is LiveChatAI?
            </h3>
            <button
              onClick={() => openQuestion(1)}
              className="bg-[#00d1ff] rounded-full sm:h-10 sm:w-10 flex items-center active:scale-95 justify-center"
            >
              {openQuery1 === 1 ? (
                <div>
                  <IoIosArrowDown className="text-3xl" />
                </div>
              ) : (
                <div>
                  <IoIosArrowUp className="text-3xl" />
                </div>
              )}
            </button>
          </div>
          <div
            className={`${
              openQuery1 === 1 ? "w-[70vw] mt-4 hidden" : "w-[70vw] mt-4 block"
            }`}
          >
            <h3 className="text-xl">
              Introducing LiveChatAI, your ultimate AI bot architect. Harnessing
              the capabilities of ChatGPT, it tailors your data into an
              interactive chat widget for your website. Simply upload a document
              or include a link to your site, and behold a chatbot ready to
              address any inquiries related to its content. With LiveChatAI,
              turn your information into an engaging conversation
            </h3>
          </div>
        </div>

        {/* -------question 2-------------- */}
        <div className="shadow-sm p-2 sm:p-6  shadow-gray-300 rounded-xl">
          <div className="flex justify-between w-[90vw] sm:w-[70vw]">
            <h3 className="sm:text-2xl text-xl font-bold w-[70vw] sm:w-auto">
              How can I add my AI bot to my website?
            </h3>
            <button
              onClick={() => openQuestion(2)}
              className="bg-[#00d1ff] rounded-full w-8 h-8 sm:h-10 sm:w-10 flex items-center active:scale-95 justify-center"
            >
              {openQuery2 === 2 ? (
                <div>
                  <IoIosArrowUp className="text-3xl" />
                </div>
              ) : (
                <div>
                  <IoIosArrowDown className="text-3xl" />
                </div>
              )}
            </button>
          </div>
          <div
            className={`${
              openQuery2 === 2 ? "w-[70vw] mt-4 block" : "w-[70vw] mt-4 hidden"
            }`}
          >
            <h3 className="text-xl">How can I add my AI bot to my website?</h3>
          </div>
        </div>

        {/* -------question 3-------------- */}
        <div className="shadow-sm p-2 sm:p-6  shadow-gray-300 rounded-xl">
          <div className="flex justify-between w-[90vw] sm:w-[70vw]">
            <h3 className="sm:text-2xl text-xl font-bold w-[70vw] sm:w-auto">
              How to import my data?
            </h3>
            <button
              onClick={() => openQuestion(3)}
              className="bg-[#00d1ff] rounded-full w-8 h-8 sm:h-10 sm:w-10 flex items-center active:scale-95 justify-center"
            >
              {openQuery3 === 3 ? (
                <div>
                  <IoIosArrowUp className="text-3xl" />
                </div>
              ) : (
                <div>
                  <IoIosArrowDown className="text-3xl" />
                </div>
              )}
            </button>
          </div>
          <div
            className={`${
              openQuery3 === 3 ? "w-[70vw] mt-4 block" : "w-[70vw] mt-4 hidden"
            }`}
          >
            <h3 className="text-xl">
              Introducing LiveChatAI, your ultimate AI bot architect. Harnessing
              the capabilities of ChatGPT, it tailors your data into an
              interactive chat widget for your website. Simply upload a document
              or include a link to your site, and behold a chatbot ready to
              address any inquiries related to its content. With LiveChatAI,
              turn your information into an engaging conversation
            </h3>
          </div>
        </div>

        {/* -------question 4-------------- */}
        <div className="shadow-sm p-2 sm:p-6  shadow-gray-300 rounded-xl">
          <div className="flex justify-between w-[90vw] sm:w-[70vw] ">
            <h3 className="text-xl sm:text-2xl font-bold w-[80vw] sm:w-auto">
              Can I share a AI Bot I created?
            </h3>
            <button
              onClick={() => openQuestion(4)}
              className="bg-[#00d1ff] rounded-full w-8 h-8 sm:h-10 sm:w-10 flex items-center active:scale-95 justify-center"
            >
              {openQuery4 === 4 ? (
                <div>
                  <IoIosArrowUp className="text-3xl" />
                </div>
              ) : (
                <div>
                  <IoIosArrowDown className="text-3xl" />
                </div>
              )}
            </button>
          </div>
          <div
            className={`${
              openQuery4 === 4 ? "w-[70vw] mt-4 block" : "w-[70vw] mt-4 hidden"
            }`}
          >
            <h3 className="text-xl">
              Introducing LiveChatAI, your ultimate AI bot architect. Harnessing
              the capabilities of ChatGPT, it tailors your data into an
              interactive chat widget for your website. Simply upload a document
              or include a link to your site, and behold a chatbot ready to
              address any inquiries related to its content. With LiveChatAI,
              turn your information into an engaging conversation
            </h3>
          </div>
        </div>

        <div className="absolute hidden sm:block -left-52 top-[55vh] ">
          <img src="/vector-22.svg" alt="bg-line" />
        </div>
      </div>


    </>
  )
}
