import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'
import { BsTrash3 } from 'react-icons/bs'
import LoadingDots from '../../loading/LoadingDots'

export default function Saved_question({ cur, deleteQuestion, sendQuestion }) {
    const [card_open, setcard_open] = useState(false);
    const [question, setQuestion] = useState(cur.question);
    const [answer, setAnswer] = useState(cur.answer);
    const [clicked, setClicked] = useState(false);
    const [saveClick, setSaveClick] = useState(false);


    const open_card = () => {
        if (card_open === false) {
            setcard_open(true)
        } else {
            setcard_open(false)
        }
    }

    function handleCancel(){
        setQuestion(cur.question);
        setAnswer(cur.answer);
        open_card()
    }

    function handleEdit(){
        setSaveClick(true);
        deleteQuestion(cur.id);
        sendQuestion([{question: question , answer: answer}], setSaveClick);
    }


    return (
        <>



            <div>
                <div onClick={() => open_card()} className={`${!card_open ? "" : "hidden"} bg-gray-200 cursor-pointer justify-between my-2 px-2 h-10 rounded-md flex items-center`}>
                    <h3>{question}</h3>
                    <IoIosArrowDown className='text-2xl' />
                </div>
                {/* -------------------opened question---------------------------- */}
                <div className={`${card_open ? "" : "hidden"} flex bg-gray-200 p-3 rounded-xl flex-col gap-2 mt-5`}>

                    <button
                        disabled={!setClicked}
                        className='self-end mr-3 mt-1 hover:text-red-600 active:scale-95'
                        onClick={() => {
                            setClicked(true);
                            deleteQuestion(cur.id)
                        }
                        }
                    >
                        {!clicked ? <BsTrash3 /> : <LoadingDots size={1} color={'bg-black'} />}
                    </button>

                    <div>
                        <label>Question</label>
                        <Input_field value={question} style={"border-[1px] outline-none border-gray-300 w-full h-10 pl-2 rounded-md"} placeholder={"New Questation"} setValue={setQuestion} />
                    </div>

                    <div>
                        <label>Answer</label>
                        <textarea
                            value={answer}
                            className="border-[1px] outline-none border-gray-300 w-full p-2 rounded-md"
                            placeholder='Answer'
                            name="answer"
                            cols="30"
                            rows="5"
                            onChange={(evt) => setAnswer(evt.target.value)}
                        />
                    </div>
                    <div className='flex justify-end gap-10 mt-2'>
                        <Button action={handleCancel} style={"border-[1px] rounded-md border-gray-600 active:scale-95 w-fit p-2 pr-8 pl-8"} text={"Cancel"} />
                        <Button action={handleEdit} style={"border-[1px] bg-black text-white active:scale-95 rounded-md border-gray-800 w-fit p-2 pr-8 pl-8"} text={saveClick ? <LoadingDots size={1} color={'bg-white'}/> : "Save"} />
                    </div>
                </div>
            </div>
        </>
    )
}
