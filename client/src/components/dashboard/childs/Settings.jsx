import React, { useEffect, useState } from 'react'
import { AiOutlineArrowDown } from "react-icons/ai"
import Button from '../../shared_components/Button'
import { BiUser } from "react-icons/bi"
import { BiMessageRoundedDots } from "react-icons/bi"
import { useParams } from 'react-router-dom'
import serverBasePath from '../../../../constants'
import axios from 'axios'
import LoadingDots from '../../loading/LoadingDots'

// -----for driver.js-----------
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
// -------------

export default function Settings() {
    const [ai_profile, setai_profile] = useState(false);
    const [human_support, sethuman_support] = useState(true);
    const [response, setResponse] = useState(false);

    // ---------------for driver.js-------------
  const driverObj = driver({
    showProgress: true,
    showButtons: ['next', 'previous'],
    steps: [
        { element: '#for_drive_ai_bot_name', popover: { title: 'Your Bot name here.', description: 'You can rename you Bot name.', side: "left", align: 'start' }},
        { element: '#for_drive_base_prompt', popover: { title: 'Your base prompt here.', description: 'You can customize base prompt bot will react accordenly', side: "left", align: 'start' }},
        { element: '#for_drive_gpt_model', popover: { title: 'You can select GPT Model', description: '', side: "left", align: 'start' }},
        { element: '#for_drive_Temperature', popover: { title: 'Adjust the temperature to fine-tune', description: "Adjust the temperature to fine-tune the balance between creativity and coherence in the AI's responses.", side: "left", align: 'start' }},
        { element: '#for_drive_access_mode', popover: { title: 'You can change accessed mode', description: 'private Chatbot can only be accessed from your account.', side: "left", align: 'start' }},
        { element: '#for_drive_cencel_setting', popover: { title: 'Click here to save all changes.', description: '', side: "left", align: 'start' }},
      ]
  });

  useEffect(()=>{
    setTimeout(()=>{
      const find_new_user=localStorage.getItem("new_for_setting")
      if(find_new_user===null){
        driverObj.drive();
        localStorage.setItem("new_for_setting",true)
      }
    },4000)
  },response)
  // --------------------------------

    
    const [settings, setSettings] = useState({
        name: "",
        basePrompt: "",
        model: "",
        temprature: 0,
        totalChars: 0,
    });
    const [backup, setBackup] = useState({});//keeps a backup of the settings currently on the server.
    const [updating, setUpdating] = useState(false);

    // -------human live sopport switch---
    const [live_support, setlive_support] = useState(false)

    const { id } = useParams();



    // -----------fuction for human live sopport switch------------
    const forLiveSupprort = () => {
        if (live_support == false) {
            setlive_support(true)
        } else {
            setlive_support(false)
        }
    }


    // -----------------------open card-----------
    const open_Card = (card_name) => {
        if (card_name == "ai_profile") {
            if (ai_profile == false) {
                setai_profile(true)
            } else {
                setai_profile(false)
            }
        }
        if (card_name == "human_sopport") {
            if (human_support == true) {
                sethuman_support(false)
            } else {
                sethuman_support(true)
            }
        }
    }


    function handleChange(key, event) {
        setSettings(settings => {
            return {
                ...settings,
                [key]: event.target.value

            }
        });

    }

    useEffect(() => {
        axios.get(`${serverBasePath}/settings/${id}`, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
            .then((response) => {
                setSettings(response.data);
                setBackup(response.data);
                setResponse(true);
            })
            .catch(err => console.log(err));

    }, []);

    function cancelUpdate() {
        const backupCopy = { ...backup };
        setSettings(backupCopy);

    }


    function handleVisbilityChange(event) {
        setSettings({
            ...settings,
            publicAccess: event.target.value === 'private' ? false : true
        });
    }


    function updateSettings() {
        setUpdating(true);
        axios.post(`${serverBasePath}/settings/${id}`, settings, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
            .then((response) => {
                if (response.status === 200) {
                    setBackup({ ...settings });
                    setUpdating(false)
                }
            })
            .catch(err => {
                console.log(err)
                setUpdating(false)
            });
    }

    return (
        <>
            {response === false ?
                <div className='mt-10'>
                    <LoadingDots size={4} />
                </div>
                :
                <>
                    <div className='flex sm:flex-row flex-col w-full gap-4'>
                        <div className='w-full sm:w-[70%] gap-8 flex flex-col'>
                            {
                                ai_profile ? <>
                                    <div onClick={() => open_Card("ai_profile")} className='flex rounded-md cursor-pointer 
                w-full justify-between pl-4 pr-4 h-10 bg-gray-300 items-center'>
                                        <div className='w-full'>
                                            <h3>Chatbot Profile & GPT Settings</h3>
                                        </div>
                                        <div>
                                            <AiOutlineArrowDown />
                                        </div>
                                    </div>
                                </> :
                                    <>
                                        <div className='flex mb-10 flex-col rounded-md cursor-pointer w-full justify-between h-fit py-2 border-[1px] gap-2'>
                                            <div onClick={() => open_Card("ai_profile")} className='flex pr-4 justify-between w-full border-b-[1px] pb-1'>
                                                <div className=' w-[60%]'>
                                                    <h3 className='pl-4'>Chatbot Profile & GPT Settings</h3>
                                                </div>
                                                <div>
                                                    <AiOutlineArrowDown />
                                                </div>
                                            </div>

                                            <div className='pl-4 pr-4'>
                                                <div className='flex flex-col gap-2 justify-start'>
                                                    <h3>AI Bot Name</h3>
                                                    <input id='for_drive_ai_bot_name'
                                                        className='border-2 h-8 outline-none pl-2'
                                                        type="text"
                                                        name="site"
                                                        value={settings.name}
                                                        onChange={(evt) => { handleChange('name', evt) }}
                                                    />

                                                    <div>
                                                        <h3>Base Prompt</h3>
                                                        <div className='border-[2px] hover:border-main rounded-md '>
                                                            <textarea id='for_drive_base_prompt' name="basePrompt"
                                                                className="p-2 w-full resize-none focus:outline-none h-full rounded-md"
                                                                rows={5}
                                                                value={settings.basePrompt}
                                                                onChange={(evt) => { handleChange('basePrompt', evt) }}
                                                            />
                                                        </div>
                                                        <h3 className='text-[13px]'>Changing the AI base prompt is an advanced setting. If you do not know about AI profiles, do not exchange them. As Vistabots.ai, we have already prepared the base prompt for you in the most ideal way.</h3>
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <h3>GPT Model</h3>
                                                        <select id='for_drive_gpt_model'
                                                            value={settings.model}
                                                            onChange={(evt) => { handleChange('model', evt) }}
                                                            className=" p-1 border-gray-300 border rounded focus:outline-blue-900"
                                                        >

                                                            <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
                                                            <option value="gpt-4">gpt-4</option>

                                                        </select>
                                                        <p className='text-[13px]'>1 message using gpt-3.5-turbo costs 1 message credit. 1 message using gpt-4 costs 20 message credits.</p>
                                                    </div>

                                                    <div className='flex flex-col'>
                                                        <h3 className='text-xl'>Temperature</h3>
                                                        <input id='for_drive_Temperature'
                                                            className='p-2 border-2 h-8'
                                                            type="number"
                                                            name="temp"
                                                            value={settings.temprature}
                                                            min="0"
                                                            max="1"
                                                            step="0.1"
                                                            onChange={(evt) => {
                                                                let value = parseFloat(evt.target.value);
                                                                if (value < 0) evt.target.value = 0;
                                                                if (value > 1) evt.target.value = 1;
                                                                handleChange('temprature', evt);
                                                            }}
                                                        />
                                                    </div>
                                                    <h3 className='text-[13px]'>Adjust the 'temperature' to fine-tune the balance between creativity and coherence in the AI's responses. A higher temperature encourages the AI to generate more diverse and creative output, but it may also introduce randomness and reduce focus. A lower temperature, on the other hand, prompts the AI to produce more deterministic and focused responses, potentially at the cost of creativity and novelty.</h3>

                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <h3>Access mode</h3>
                                                    <select id='for_drive_access_mode'
                                                        value={settings.publicAccess ? 'public' : 'private'} onChange={handleVisbilityChange}
                                                        className=" p-1 border-gray-300 border rounded focus:outline-blue-900"
                                                    >

                                                        <option value="private">private</option>
                                                        <option value="public">public</option>

                                                    </select>
                                                    <p className='text-[13px]'>'private': Chatbot can only be accessed from your account. Used for testing purposes. </p>
                                                    <p className='text-[13px]'>'public': People can chat with your chatbot if you send them a link or you can embed the chatbot on your website
                                                        so your visitors are able to use it.</p>
                                                </div>



                                                <div className='flex mt-8 justify-end gap-8 mr-10'>
                                                    <Button style={"border-[1px] active:scale-95 rounded-md border-gray-800 p-1 w-24"} text={"Cancel"} action={cancelUpdate} />
                                                    <div id='for_drive_cencel_setting'>
                                                    <Button style={"rounded-md active:scale-95 bg-gray-900 text-white border-gray-800 border-[1px] p-1 w-24"} text={updating ? <LoadingDots size={"1"} color={'bg-white'} /> : "Save"} action={updateSettings} />

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                            }




                            {
                                human_support ? <>
                                    <div onClick={() => open_Card("human_sopport")} className='flex rounded-md cursor-pointer 
            w-full justify-between pl-4 pr-4 h-10 bg-gray-300 items-center'>
                                        <div className='w-full'>
                                            <h3>Human Support Live Chat Settings</h3>
                                        </div>
                                        <div>
                                            <AiOutlineArrowDown />
                                        </div>
                                    </div>
                                </> :
                                    <>
                                        <div className='flex mb-20 flex-col rounded-md cursor-pointer w-full justify-between
              h-fit py-2 border-[1px] gap-2'>
                                            <div onClick={() => open_Card("human_sopport")} className='flex pr-4 justify-between w-full border-b-[1px] pb-1'>
                                                <div className=' w-[60%]'>
                                                    <h3 className='pl-4'>Human Support Live Chat Settings</h3>
                                                </div>
                                                <div>
                                                    <AiOutlineArrowDown />
                                                </div>
                                            </div>

                                            <div className='pl-4 pr-4'>
                                                <div className='flex flex-col gap-2 justify-start'>
                                                    <h3>Immediate Assistance from Human Agents Directly in the Chat Inbox</h3>
                                                    <h3 className='text-[13px]'>
                                                        Enable this feature to connect your customers directly with human support agents through the live chat interface. Perfect for providing real-time assistance, this setting ensures that customers can instantly reach a human representative within the chat window on your website. It's like having a support agent standing by, ready to assist at any moment.</h3>
                                                </div>
                                                <div className='mt-6'>
                                                    <div onClick={() => forLiveSupprort()} className='border-[1px] flex items-center border-gray-500 rounded-full w-16 h-7'>
                                                        <div className={`${live_support ? "ml-[35px]" : "ml-[4px]"} w-6 rounded-full h-6 bg-main`}></div>
                                                    </div>
                                                </div>
                                                <div className='flex mt-8 justify-end gap-8 mr-10'>
                                                    <Button style={"border-[1px] active:scale-95 rounded-md border-gray-800 p-1 w-24"} text={"Cancel"} />
                                                    <Button style={"rounded-md active:scale-95 bg-gray-900 text-white border-gray-800 border-[1px] p-1 w-24"} text={updating ? <LoadingDots size={"1"} color={'bg-white'} /> : "Save"} action={() => {
                                                        setUpdating(true);
                                                        setTimeout(() => { setUpdating(false) }, 1000);
                                                    }} />
                                                </div>
                                            </div>

                                        </div>
                                    </>
                            }


                        </div >

                        <div className='w-full sm:w-[30%]'>
                            <div>
                                <h1 className='text-xl'>About Your AI Bot</h1>
                            </div>

                            <div className='w-full gap-2 bg-green-50 flex items-center p-4 border-[1px] h-20 mt-4 rounded-md'>
                                <div className='bg-main p-2 rounded-full'>
                                    <BiUser className='text-3xl text-white' />
                                </div>
                                <div>
                                    <div><h3>AI Bot ID</h3></div>
                                    <div>
                                        <h3>{id}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full gap-2 bg-green-50 flex items-center p-4 border-[1px] h-20 mt-4 rounded-md'>
                                <div className='bg-yellow-400 p-2 rounded-full'>
                                    <BiMessageRoundedDots className='text-3xl text-white' />
                                </div>
                                <div>
                                    <div><h3>Total Characters</h3></div>
                                    <div>
                                        <h3>{settings.totalChars}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </>
    )
}