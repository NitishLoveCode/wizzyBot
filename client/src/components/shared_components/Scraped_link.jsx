import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"

export default function Scraped_link({ link, data, id, deleteAction}) {
    return (
        <>
            <div className='flex items-center justify-center gap-6'>
                <div>
                    <input className='border-2 outline-none rounded-md w-full sm:w-[28vw] text-gray-600 h-10 pl-2' type="text" name="links" value={link} />
                </div>
                <div>
                    <h3>{data}</h3>
                </div>
                <div onClick={() => {deleteAction(id) }}>
                    <RiDeleteBin6Line className='text-2xl hover:text-red-400 active:scale-90 text-gray-500 cursor-pointer' />
                </div>
            </div>
        </>
    )
}
