import React from 'react'

export default function Loading() {
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <div className=' border-4 border-t-transparent rounded-full animate-spin border-main w-28 h-28'></div>
            <div className='text-xl sm:text-2xl'>Loading...</div>
        </div>
    </>
  )
}