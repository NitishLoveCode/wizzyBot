import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Preview from './childs/Preview'
import Settings from './childs/Settings'
import Customize from './childs/Customize'
import Embed_and_Share from './childs/Embed_and_Share'
import Chat_Inbox from './childs/Chat_Inbox'
import Manage_Data_Sources from './childs/Manage_Data_Sources'
import MessageHistory from '../MessageHistory/MessageHistory'

import { BsFillEyeFill } from "react-icons/bs"
import { AiFillSetting } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
import { ImEmbed2 } from "react-icons/im"
import { BsChatLeftText } from "react-icons/bs"
import { BsDatabaseAdd } from "react-icons/bs"
import { RiChatHistoryLine } from "react-icons/ri"
import serverBasePath from '../../../constants'
import { MdOutlineManageAccounts } from "react-icons/md"
import SocketContext from '../../SocketContext'


export default function Root_page({ agencyView }) {
    const socket = useContext(SocketContext);
    const location = useLocation()
    const { id } = useParams();

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.connect()
        socket.emit('agentConnect', id);
        socket.on('identify', () => {
            // socket.emit('joinRoom', 'Support Agents', id);
            socket.emit('agentConnect', id);
        });

        socket.on('userDisconnect', (socketId) => {
            socket.emit('leaveRoom', socketId);
            // setMessages(prevMessages => {
            //   let updatedMessages = [...prevMessages];
            //   if (active === updatedMessages.length - 1) {
            //     setActive(active - 1)
            //   }
            //   updatedMessages = updatedMessages.filter(message => message.socketId !== socketId);
            //   return updatedMessages;
            // });
        });


        socket.on("Pair with Customer", (id) => {
            console.log('pairing')
            socket.emit("joinRoom", id);
        });

        socket.on("new message", (data, socketId) => {
            console.log(data)
            // console.log('new message received')
            // Directly using setMessages with function parameter 
            // to ensure we always work with the most current state
            console.log(messages.length)
            if (messages.length > 0) {
                if (data.signature === messages[messages.length - 1].signature) {
                    console.log(messages[messages.length - 1].signature, data.signature)
                    return;
                }
            }

            setMessages(prevMessages => {
                const existingIndex = prevMessages.findIndex(message => message.conversationId === data.conversationId);

                if (existingIndex > -1) {
                    // Existing conversation   
                    // Using spread to make a new copy and mutate that
                    const updatedMessages = [...prevMessages];
                    updatedMessages[existingIndex].conversation.push({
                        sender: data.sender,
                        body: data.body
                    });
                    return updatedMessages;
                }
                else {
                    // New conversation
                    const newConversation = {
                        conversationId: data.conversationId,
                        socketId: socketId,
                        new: true,
                        conversation: [{ sender: data.sender, body: data.body }],
                        startTime: new Date()
                    };
                    return [...prevMessages, newConversation];
                }
            });
        })

        const beforeUnload = (ev) => {
            ev.preventDefault();
            // socket.emit('leaveRoom', `Support Agents ${id}`);
            socket.disconnect();
        };

        window.addEventListener('beforeunload', beforeUnload);



        // Cleanup function to leave room when component unmounts
        return () => {
            window.removeEventListener('beforeunload', beforeUnload);
            // socket.emit('leaveRoom');
            // socket.disconnect()
        }

    }, []);




    return (
        <>
            {agencyView == true &&
                <div className='p-3 px-11 bg-blue-900 mt-[-2rem] mb-8 text-white font-medium'>
                    <MdOutlineManageAccounts size={25} className='inline mx-2' />
                    You are viewing this page as an manager
                </div>
            }
            <div className='ml-2 mr-2 sm:ml-24 pb-8 sm:mr-24 mt-10 gap-4 flex flex-col'>
                <div>
                    <h3 className='text-3xl pl-1 font-bold text-gray-800'>wizzyBot.com</h3>
                </div>

                <div className='flex justify-center border-b pb-3 items-center flex-col w-full'>

                    <div className='flex flex-wrap gap-2 p-1 justify-between w-full'>
                        <Link to={`/chatbot/preview/${id}`}>
                            <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                                <div>
                                    <BsFillEyeFill className='text-2xl' />
                                </div>
                                <div>
                                    <h3>Preview</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/chatbot/settings/${id}`}>
                            <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                                <div>
                                    <AiFillSetting className='text-2xl' />
                                </div>
                                <div>
                                    <h3>Settings</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/chatbot/customize/${id}`}>
                            <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                                <div>
                                    <BsPencil className='text-2xl' />
                                </div>
                                <div>
                                    <h3>Customize</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/chatbot/embed-and-Share/${id}`}>
                            <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                                <div>
                                    <ImEmbed2 className='text-2xl' />
                                </div>
                                <div>
                                    <h3>Embed & Share</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/chatbot/message-history/${id}`}>
                            <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                                <div>
                                    <RiChatHistoryLine className='text-2xl' />
                                </div>
                                <div>
                                    <h3>Message History</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/chatbot/chat-inbox/${id}`}>
                            <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                                <div>
                                    <BsChatLeftText className='text-2xl' />
                                </div>
                                <div>
                                    <h3>Chat Inbox</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/chatbot/manage_data_sources/${id}`}>
                            <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                                <div>
                                    <BsDatabaseAdd className='text-2xl' />
                                </div>
                                <div>
                                    <h3>Manage Data Sources</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='ml-2 mr-2 sm:ml-20 sm:mr-20'>

                {
                    location.pathname === `/chatbot/preview/${id}` ? <Preview /> : ""
                }
                {
                    location.pathname === `/chatbot/settings/${id}` ? <Settings /> : ""
                }
                {
                    location.pathname === `/chatbot/customize/${id}` ? <Customize /> : ""
                }
                {
                    location.pathname === `/chatbot/embed-and-Share/${id}` ? <Embed_and_Share /> : ""
                }
                {
                    location.pathname === `/chatbot/chat-inbox/${id}` ? <Chat_Inbox messages={messages} setMessages={setMessages} /> : ""
                }
                {
                    location.pathname === `/chatbot/message-history/${id}` ? <MessageHistory /> : ""
                }
                {
                    location.pathname === `/chatbot/manage_data_sources/${id}` ? <Manage_Data_Sources /> : ""
                }

            </div>
        </>
    )
}
