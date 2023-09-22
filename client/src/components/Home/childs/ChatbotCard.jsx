import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"
import { BiTime } from "react-icons/bi"
import { AiOutlineSetting } from "react-icons/ai"
import { BiFilterAlt } from "react-icons/bi"
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Delete_popup from "./Delete_popup"


export default function ChatbotCard({ chatbot, delete_traind_bot }) {
    const navigate = useNavigate();
    // console.log('from chatbot card', chatbot)

    return (
        <>
            <div className='w-[95vw] sm:w-[60vw] md:w-[55vw] lg:w-[40vw] rounded-md border-[1px] border-gray-400 h-fit'>
                <div className='flex py-2 px-4 bg-gray-100 rounded-t-md items-center justify-between'>
                    <button onClick={() => {
                        if (chatbot.id !== undefined) {
                            navigate(`/chatbot/preview/${chatbot.id}`)
                        }
                        else {
                            navigate(`/chatbot/preview/${chatbot._id}`)

                        }
                    }}>
                        <h3 className='text-xl font-semibold'>{chatbot.name}</h3>
                    </button>
                    <div onClick={() => {
                        if (chatbot.id !== undefined) {
                            delete_traind_bot(chatbot.id);
                        }
                        else {
                            delete_traind_bot(chatbot._id);

                        }
                        
                        }}>
                        <AiOutlineDelete className='text-2xl hover:text-red-500 cursor-pointer active:scale-95' />
                    </div>
                </div>
                <div className='flex justify-around mt-8'>
                    <div className='flex flex-col items-center'>
                        <div><h3 className='text-3xl'>{chatbot.totalMessages}</h3></div>
                        <div><h3>Messages</h3></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div><h3 className='text-3xl'>{chatbot.totalConversations}</h3></div>
                        <div><h3>Conversations</h3></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div><h3 className='text-3xl'>{chatbot.totalResolutions}</h3></div>
                        <div><h3>Resolutions</h3></div>
                    </div>
                </div>



                <div className='flex justify-around items-center my-8'>
                    <div className='flex flex-col lg:flex-row gap-[4vw]'>
                        <Link to={"/chatbot/customize/" + chatbot.id}>
                            <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                                <FiEdit2 />
                                <h3 className='text-sm'>CUSTOMIZE</h3>
                            </div>
                        </Link>
                        <Link to={"/chatbot/manage_data_sources/" + chatbot.id}>
                            <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                                <BiFilterAlt />
                                <h3 className='text-sm'>DATA SOURCE</h3>
                            </div>
                        </Link>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-[4vw]'>
                        <Link to={"/chatbot/chat-inbox/" + chatbot.id}>
                            <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                                <BiTime />
                                <h3 className='text-sm'>INBOX</h3>
                            </div>
                        </Link>
                        <Link to={"/chatbot/settings/" + chatbot.id}>
                            <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                                <AiOutlineSetting />
                                <h3 className='text-sm'>SETTINGS</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>)
}