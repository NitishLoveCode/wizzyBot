import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"
import { BiTime } from "react-icons/bi"
import { AiOutlineSetting } from "react-icons/ai"
import { BiFilterAlt } from "react-icons/bi"
import { useNavigate } from "react-router-dom"


export default function ChatbotCard({ chatbot, deleteChatbot }) {
    const navigate = useNavigate();

    return (
        <>
            <div className='w-[50vw] rounded-md border-[1px] border-gray-400 h-fit'>
                <div className='flex py-2 px-4 bg-gray-100 rounded-t-md items-center justify-between'>
                    <button onClick={()=>{
                        navigate(`/chatbot/preview/${chatbot.id}`)
                    }}>
                        <h3 className='text-xl font-semibold'>{chatbot.name}</h3>
                    </button>
                    <div onClick={() => { deleteChatbot(chatbot.id) }}>
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
                <div className='flex justify-around my-8'>
                    <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                        <FiEdit2 />
                        <h3>CUSTOMIZE</h3>
                    </div>
                    <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                        <BiFilterAlt />
                        <h3>DATA SOURCE</h3>
                    </div>
                    <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                        <BiTime />
                        <h3>INBOX</h3>
                    </div>
                    <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                        <AiOutlineSetting />
                        <h3>SETTINGS</h3>
                    </div>
                </div>
            </div>
        </>)
}