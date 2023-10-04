import React from 'react'

export default function Point4({AiFillCheckCircle}) {
  return (
    <>
      <div className="mx-2 sm:mx-10 flex flex-col sm:flex-row items-center">
        <div className="sm:w-[50vw]">
          <h1 className="text-3xl sm:text-5xl">Transparent</h1>
          <h3 className="mt-3 mx-3 sm:mx-10 text-xl">
            AI Conversations in Inbox lets your team easily monitor all of AI’s
            responses and also Live Chat messages.
          </h3>
        </div>
        <div className="sm:w-[50vw] mt-8">
          <h1 className="text-3xl sm:text-5xl">Human support</h1>
          <h3 className="mt-3 mx-3 sm:mx-10 text-xl">
            LiveChatAI can triage complex problems and seamlessly pass them to
            your human support teams.
          </h3>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mx-2 sm:mx-10 sm:mt-16">
        <div className="w-[90vw] sm:w-[50vw] relative mt-20">
          <div className="border-2 rounded-2xl bg-red-50 border-gray-400 h-[50vh] sm:h-[65vh] sm:w-[35vw]">
            <div>
              <img
                className="w-[85vw] sm:w-[35vw] absolute right-5 sm:right-8 -top-8 lg:-top-20"
                src="/rectangle-35@2x.png"
                alt="img-3"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0 sm:w-[50vw] relative">
          <div
            className="w-32 h-32 sm:w-48 sm:h-48 border-[1px] border-gray-400 bg-gray-100 
              ml-20 flex items-center justify-center rounded-full"
          >
            <h3 className="text-8xl text-gray-300">4</h3>
          </div>
          <div className="ml-2 sm:ml-20">
            <div className="absolute top-24 sm:top-32">
              <h3 className="text-3xl xl:text-5xl">
                Works any platform and any language.
              </h3>
            </div>
            <div className="sm:mt-12 mt-20 text-xl">
              <h3>
                LiveChatAI breaks down language barriers by supporting 95
                different languages, ensuring seamless communication across
                diverse audiences.
              </h3>
              <h3 className="mt-4">
                Whether you're using our chat messenger, inline embedding, full
                page, or even our flexible API, LiveChatAI is designed to work
                effortlessly on any platform, anywhere
              </h3>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Chat Messenger</p>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>Inline & Full-page Chat</p>
            </div>
            <div className="flex items-center gap-1 mt-5 mb-2">
              <AiFillCheckCircle className="text-[#00d1ff] text-2xl" />
              <p>API Available For All Other Platforms</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
