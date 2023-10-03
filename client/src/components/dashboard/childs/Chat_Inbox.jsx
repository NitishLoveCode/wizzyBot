
import React, { useContext, useEffect, useState } from 'react'
import { CiVolumeHigh } from "react-icons/ci"
import { AiOutlineSend } from "react-icons/ai"
import UserCard from './UserCard'
import { useParams } from 'react-router-dom';
import ChatArea from './ChatArea';
import serverBasePath from '../../../../constants';
// import socketIOClient from "socket.io-client";
import axios from 'axios';
import image from '../../../assets/listening.svg';
import SocketContext from '../../../SocketContext';
// const socket = socketIOClient(serverBasePath);

export default function Chat_Inbox({ messages, setMessages, botState, setBotState }) {
  const socket = useContext(SocketContext);
  const { id } = useParams();
  const [active, setActive] = useState(0);
  // const [messages, setMessages] = useState([
  //   // { conversationId: '321', socketId: 'Sameer', conversation: [{}, { sender: 'bot', body: 'hello' }, { sender: 'user', body: 'kesay ho?' }] },
  // ]);

  const [loading, setLoading] = useState('')

  function addMessage(message, conversationId) {
    let temp = [...messages]
    temp = temp.filter(message => conversationId === message.conversationId);
    // console.log(temp[0].conversation)

    if (temp.length !== 0) {

      temp[0].conversation.push({ sender: message.sender, body: message.body });
      setMessages(messages => [...messages.slice(0, active), temp[0], ...messages.slice(active + 1)]);
    }
  }

  function sendMessage(message, socketId) {
    socket.emit('stop bot', socketId)
    setBotState('Start');
    socket.emit('new message', id, { sender: 'supportAgent', body: message.body, conversationId: message.conversationId }, socketId)
    addMessage(message, message.conversationId);
  }


  // useEffect(() => {
  //   socket.connect()
  //   socket.on('connect', (socket) => {
  //     // console.log('hello')
  //     // socket.emit('agentConnect', id);
  //     // socket.emit('joinRoom', 'Support Agents', id);
  //     console.log('connected')
  //   });

  //   // socket.emit('joinRoom', 'Support Agents', id);

  //   socket.emit('agentConnect', id);

  //   socket.on('identify', () => {
  //     // socket.emit('joinRoom', 'Support Agents', id);
  //     socket.emit('agentConnect', id);
  //     console.log('identification successfull')
  //   });


  //   socket.on('userDisconnect', (socketId) => {
  //     socket.emit('leaveRoom', socketId);
  //     // setMessages(prevMessages => {
  //     //   let updatedMessages = [...prevMessages];
  //     //   if (active === updatedMessages.length - 1) {
  //     //     setActive(active - 1)
  //     //   }
  //     //   updatedMessages = updatedMessages.filter(message => message.socketId !== socketId);
  //     //   return updatedMessages;
  //     // });
  //   });

  //   socket.on("Pair with Customer", (id) => {
  //     console.log('pairing')
  //     socket.emit("joinRoom", id);
  //   });

  //   socket.on("new message", (data, socketId) => {
  //     console.log(data)
  //     // console.log('new message received')
  //     // Directly using setMessages with function parameter 
  //     // to ensure we always work with the most current state
  //     setMessages(prevMessages => {
  //       const existingIndex = prevMessages.findIndex(message => message.conversationId === data.conversationId);

  //       if (existingIndex > -1) {
  //         // Existing conversation   
  //         // Using spread to make a new copy and mutate that
  //         const updatedMessages = [...prevMessages];
  //         updatedMessages[existingIndex].conversation.push({
  //           sender: data.sender,
  //           body: data.body
  //         });
  //         return updatedMessages;
  //       }
  //       else {
  //         // New conversation
  //         const newConversation = {
  //           conversationId: data.conversationId,
  //           socketId: socketId,
  //           new: true,
  //           conversation: [{ sender: data.sender, body: data.body }],
  //           startTime: new Date()
  //         };
  //         return [...prevMessages, newConversation];
  //       }
  //     });

  //   });

  //   const beforeUnload = (ev) => {
  //     ev.preventDefault();
  //     // socket.emit('leaveRoom', `Support Agents ${id}`);
  //     socket.disconnect();
  //   };

  //   window.addEventListener('beforeunload', beforeUnload);



  //   // Cleanup function to leave room when component unmounts
  //   return () => {
  //     window.removeEventListener('beforeunload', beforeUnload);
  //     // socket.emit('leaveRoom');
  //     // socket.disconnect()
  //   }
  // }, []);


  function handleBotClick() {

    if (botState[active].state === 'Stop') {
      const temp = {
        socketId: botState[active].socketId,
        state: 'Start'
      }
      setBotState(bots => {
        return [...bots.slice(0, active), temp, ...bots.slice(active + 1)]
      });
      socket.emit('stop bot', messages[active].socketId);
    }
    else if (botState[active].state === 'Start') {
      const temp = {
        socketId: botState[active].socketId,
        state: 'Stop'
      }
      setBotState(bots => {
        return [...bots.slice(0, active), temp, ...bots.slice(active + 1)]
      });
      socket.emit('start bot', messages[active].socketId);
    }
  }

  function setActiveConversation(index) {
    const chosenMessage = messages[index]; //to get conversation id and save socket id;
    if (chosenMessage.new === true) {
      setLoading(chosenMessage.conversationId);
    }
    if (chosenMessage.new === true) {
      const messageBackup = [...messages];

      axios.post(
        serverBasePath + '/conversationHistory',
        {
          conversationId: chosenMessage.conversationId,
          chatbotId: id
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          withCredentials: true
        }
      )
        .then(response => {
          const newMessage = {
            conversationId: chosenMessage.conversationId,
            new: false,
            socketId: chosenMessage.socketId,
            startTime: chosenMessage.startTime,
            conversation: response.data
          }
          messageBackup[index] = newMessage;
          setMessages(messageBackup)
          setLoading('');
        })
        .catch(err => {
          console.log(err);
          setLoading('');
        }
        );
    }
    setActive(index)

  }



  return (
    <div className='sm:mx-5'>


      {
        messages.length === 0 &&
        <>
          <div className='m-auto w-full h-full text-center'>

            <img className='w-1/2 md:w-1/3 mx-auto mt-6 opacity-95' src={image} alt="image notifying users of current conversations with chatbot" />
            <p className='font-light text-blue-800 opacity-70 text-xl mx-auto my-8 p-5 w-[40%]'>No one is using the chatbot right now, but don't worry we will keep on listening for new conversations</p>

          </div>
        </>
      }

      <div className='mt-2 sm:mt-4 flex sm:flex-row flex-col gap-2'>
        <div className='w-full sm:w-[28vw] border-[1px] p-1 h-[80vh]'>
          <div className='bg-gray-100 mb-2 rounded-3xl flex items-center'>
            <input className='w-full bg-transparent h-10 outline-none px-2' placeholder='Search' type="text" name="search" id="" />
          </div>


      {messages.length > 0 &&
        <>
          {messages.length > 0 &&
            <div className='flex sm:flex-row flex-col items-center sm:items-start gap-1 border-[0.5px] p-5 border-gray-300 rounded-t-2xl justify-between'>
              <div className='flex items-center gap-2'>
                <div>
                  <h3 className='text-sm sm:text-xl'>Chatting with</h3>
                </div>
                <div>
                  <h3 className='text-sm sm:text-xl'>{messages[active].name === undefined ? messages[active].socketId : messages[active].name}</h3>
                </div>
                <div className='w-2 h-2 rounded-full bg-green-400'></div>
              </div>

              <div className='flex items-center gap-2'>
                <div className='border-[1px] border-gray-400 p-[3px] rounded-full cursor-pointer active:scale-95'><CiVolumeHigh className='text-xl' /></div>
                <div
                  className='bg-gray-700 active:scale-95 p-1 px-4 text-white rounded-md'
                  onClick={handleBotClick}
                >
                  <h3 className='text-[13px]'>{(() => {
                    const bots = botState.filter(bot => bot.socketId === messages[active].socketId);
                    if (bots.length > 0) {
                      console.log(bots)

                      return bots[0].state;
                    }
                  })()} bot</h3>
                </div>
              </div>
            </div>
          }

          <div className='mt-2 sm:mt-4 flex sm:flex-row flex-col gap-2'>
            <div className='w-full sm:w-[28vw] border-[1px] p-1 h-[80vh]'>
              <div className='bg-gray-100 mb-2 rounded-3xl flex items-center h-2'>
                {/* <input className='w-full bg-transparent h-10 outline-none px-2' placeholder='Filter with date range' type="text" name="search" id="" /> */}
              </div>

              <div className='w-full gap-3 flex flex-col overflow-y-scroll h-[70vh]'>




                {messages.map((message, index) => {
                  return <UserCard
                    id={index}
                    messages={message.conversation}
                    conversationId={message.conversationId}
                    name={message.name}
                    time={message.startTime}
                    active={active}
                    setActive={setActiveConversation}
                    key={index}
                  />
                })}

              </div>
            </div>


            {/* ----------------middle card for message------------------------- */}


            {messages.length !== 0 ?
              <ChatArea messages={messages[active].conversation} setMessages={sendMessage} name={messages[active].socketId} conversationId={messages[active].conversationId} socketId={messages[active].socketId} loading={loading} /> :
              <ChatArea messages={[]} setMessages={() => { }} conversationId={[]} socketId={''} />
            }




            {/* -------------------Right sectation card-------------- */}
            {/* <div className='w-[25vw]'>
          <div className='p-2'>
            <h3 className='text-xl'>Details</h3>
          </div>
          <div className='border-[1px] h-[73.5vh] rounded-md'>

          </div>
        </div> */}
          </div>
        </>
      }
    </div>
    </div>
    </div>
  )
}
