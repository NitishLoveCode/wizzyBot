import React from 'react'

export default function Blogs() {
  return (
    <>
        <div className="sm:mx-10 mx-2 my-4 sm:mb-32 mb-16 flex-col flex items-center justify-center">
        <div>
          <h3 className="text-3xl sm:text-5xl">Blogs</h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-16 gap-8 mt-8">
          <div className="sm:w-[30vw] border-2 border-r-8 border-b-8 border-gray-700 sm:p-8 p-2 rounded-2xl mt-4">
            <div>
              <img
                className="sm:w-[30vw]"
                src="/rectangle-9821@2x.png"
                alt="blog-Thumbnail"
              />
              <h3 className="text-xl sm:text-3xl">
                Unveiling Chat Surveys: A Revolution in Online Feedback
              </h3>
            </div>
          </div>
          <div className="sm:w-[30vw] border-2 border-r-8 border-b-8 border-gray-700 sm:p-8 p-2 rounded-2xl sm:mt-4">
            <div>
              <img
                className="sm:w-[30vw]"
                src="/rectangle-9821@2x.png"
                alt="blog-Thumbnail"
              />
              <h3 className="text-xl sm:text-3xl">
                Unveiling Chat Surveys: A Revolution in Online Feedback
              </h3>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
