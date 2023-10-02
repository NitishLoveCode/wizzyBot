import React from 'react'

export default function Reviews({AiTwotoneStar}) {
  return (
    <>
        <div className="sm:mx-10 mx-2 sm:py-16 sm:mt-32">
        <div className="flex items-center justify-center mb-6">
          <h3 className="text-3xl sm:text-5xl">
            Some Reviews From Happy Customers.
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <div className="sm:w-[33vw] md:w-[30vw] border-2 border-r-8 border-b-8 border-gray-700 rounded-2xl px-8 py-8">
            <div className="flex items-center">
              <div className="w-16 rounded-full">
                <img src="/ellipse-13@2x.png" alt="user info" />
              </div>
              <div className="ml-2">
                <h3 className="text-xl font-bold">Zeynep Sargın</h3>
                <h3>Popupsmart</h3>
              </div>
            </div>
            <div className="flex ml-2 mt-2">
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl">
                Implementing LiveChatAI has been a game-changing experience for
                Popupsmart. Before LiveChatAI, we struggled with overwhelming
                support queries and long response times. Now, our AI answers
                resolve an astonishing 82% of queries, allowing our human
                support team to focus on more complex issues. The seamless blend
                of AI bot and live chat has not only streamlined our support but
                also enhanced customer satisfaction.
              </h3>
            </div>
          </div>
          <div className="sm:w-[33vw] md:w-[30vw] border-2 border-r-8 border-b-8 border-gray-700 rounded-2xl px-8 py-8">
            <div className="flex items-center">
              <div className="w-16 rounded-full">
                <img src="/ellipse-109@2x.png" alt="user info" />
              </div>
              <div className="ml-2">
                <h3 className="text-xl font-bold">Nusret</h3>
                <h3>Formcarry</h3>
              </div>
            </div>
            <div className="flex ml-2 mt-2">
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl">
                Another fantastic feature is the bot's ability to send sample
                codes using Markdown formatting. This is extremely beneficial
                for our users, as it allows them to see code snippets in a
                clean, easy-to-read format. It's like having a knowledgeable
                developer on-hand to provide quick snippets, all automated and
                available 24/7."
              </h3>
            </div>
          </div>
          <div className="sm:w-[33vw] md:w-[30vw] border-2 border-r-8 border-b-8 border-gray-700 rounded-2xl px-8 py-8">
            <div className="flex items-center">
              <div className="w-16 rounded-full">
                <img src="/ellipse-110@2x.png" alt="user info" />
              </div>
              <div className="ml-2">
                <h3 className="text-xl font-bold">Berna</h3>
                <h3>QRCodeDynamic</h3>
              </div>
            </div>
            <div className="flex ml-2 mt-2">
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
              <AiTwotoneStar className="text-2xl ml-2 text-yellow-400" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl">
                As a growing e-commerce business, we needed a solution to handle
                our increasing customer inquiries. LiveChatAI has been the
                perfect answer. Watching it learn and adapt to our business
                needs has been fantastic. And the analytics? Pure gold! It's
                given us a whole new perspective on customer interaction.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
