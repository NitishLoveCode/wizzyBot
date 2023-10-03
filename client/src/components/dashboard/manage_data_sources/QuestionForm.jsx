import React, { useState } from 'react'
import Button from '../../shared_components/Button'
import Input_field from '../../shared_components/Input_field'
import LoadingDots from '../../loading/LoadingDots';

export default function QuestionForm({ sendQuestions }) {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [clicked, setClicked] = useState(false);
  


  return (
    <>
      <div className='flex bg-gray-200 p-3 rounded-xl flex-col gap-2 mt10'>
        <div>
          <label>Question</label>
          <Input_field style={"border-[1px] outline-none border-gray-300 w-full h-10 pl-2 rounded-md"} placeholder={"New Questation"} value={question} setValue={setQuestion} />
        </div>
        <div>
          <label>Answer</label>
          <textarea
            className="border-[1px] outline-none border-gray-300 w-full p-2 rounded-md"
            placeholder='Answer'
            name="answer"
            cols="30"
            rows="5"
            value={answer}
            onChange={(evt)=>setAnswer(evt.target.value)}
          ></textarea>
        </div>
        <div className='flex justify-end gap-10 mt-2'>
          <Button style={"border-[1px] rounded-md border-gray-600 active:scale-95 w-fit p-2 pr-8 pl-8"} text={"Cancel"} action={()=>{
             setQuestion('');
             setAnswer('');
          }} />
          <Button style={"border-[1px] bg-black text-white active:scale-95 rounded-md border-gray-800 w-fit p-2 pr-8 pl-8"} text={clicked ? <LoadingDots size={1} color={'bg-white'}/> : "Save"} action={()=>{
            setClicked(true)
            sendQuestions([{question: question , answer: answer}], setClicked);
            setQuestion('');
            setAnswer('');
        }}/>
        </div>
      </div>
    </>
  )
}
