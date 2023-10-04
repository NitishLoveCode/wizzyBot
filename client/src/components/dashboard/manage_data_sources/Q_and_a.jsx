import React, { useEffect, useState } from 'react'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'
import { BsDatabase } from "react-icons/bs"
import { MdAddCircle } from "react-icons/md"
import { IoIosArrowDown } from "react-icons/io"
import QuestionForm from './QuestionForm'
import Saved_question from './Saved_question'
import LoadingDots from '../../loading/LoadingDots'
import axios from 'axios'
import serverBasePath from '../../../../constants'
import { useParams } from 'react-router-dom'

// -------------driver.js-----------------

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// -----------------------------------------------

export default function Q_and_a() {

    // ---------------for driver.js-------------

    const driverObj = driver({
        showProgress: true,
        showButtons: ['next', 'previous'],
        steps: [
          { element: '#driver_add_question_answer', popover: { title: 'Train you Bot with Questions and Answers ', description: '', side: "left", align: 'start' }},
        ]
      });
      useEffect(()=>{
        setTimeout(()=>{
          const find_new_user=localStorage.getItem("embed-and-q-and-")
          if(find_new_user===null){
            driverObj.drive();
            localStorage.setItem("embed-and-q-and-a",true)
          }
        },7000)
      },[])
      // --------------------------------



    const [loaded, setLoaded] = useState(false);
    const [add_new_question, setadd_new_question] = useState(false);
    const [QA, setQA] = useState([]);
    const { id } = useParams();

    // ------------dummy question form------------------
    // const questionsAndAnswers = [
    //     {
    //         id: 1,
    //         question: "What is the capital of France?",
    //         answer: "Paris"
    //     },
    //     // {
    //     //   id: 2,
    //     //   question: "What is 2 + 2?",
    //     //   answer: "4"
    //     // },
    //     // {
    //     //   id: 3,
    //     //   question: "Who wrote 'To Kill a Mockingbird'?",
    //     //   answer: "Harper Lee"
    //     // },
    //     // {
    //     //   id: 4,
    //     //   question: "What is the symbol for water?",
    //     //   answer: "H2O"
    //     // }
    // ];



    // creteing new Question and answer-------------
    const new_question_adding = () => {
        if (add_new_question === false) {
            setadd_new_question(true)
        } else {
            setadd_new_question(false)
        }
    }

    function getQuestions() {
        axios.get(`${serverBasePath}/train/QuestionAnswers/${id}`, {
            withCredentials: true,
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => {
                setQA([]);
                setQA(response.data.questionAnswers);
                setLoaded(true);
            })
            .catch(error => {
                console.log('error fetching uploaded files: ', error);
            });
    }

    function sendQuestions(questions, setClicked) {
        axios.post(serverBasePath + '/train/addQuestions', { QA: questions, chatbotId: id }, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
            .then(response => {
                // setResponse(true);
                // setResMessage(response.data.response);
                if (response.status === 200) {
                    getQuestions();
                    if (setClicked !== undefined){
                        setClicked(false);
                    }
                }

            })
            .catch(err => console.log(err))
    }

    function deleteQuestion(itemId) {
        const QAToRemove = QA.filter(question => question.id === id);
        if (QAToRemove.new !== true) {
            axios.delete(`${serverBasePath}/train/deleteQuestions`, {
                params: {
                    itemId: itemId,
                    chatbotId: id
                },
                withCredentials: true
            })
                .then(function (response) {
                    if (response.status === 200) {
                        getQuestions();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        setQA(prev => prev.filter(item => item.id !== id));
    }

    useEffect(getQuestions, []);


    return (

        <>

            {!loaded ? <LoadingDots size={4} /> :
                <>
                    <div className='sm:w-[50vw] w-[95vw]'>
                        <div className='flex flex-col gap-4 mb-6'>
                            <h3 className='text-2xl font-bold'>Questions and Answers</h3>
                            <h3>You can add specific answers to questions here.</h3>
                        </div>

                        {/* ----------------add questions button------------- */}
                        <div className='flex justify-between sm:justify-normal sm:gap-8 my-2'>
                            {/* <div className='bg-green-100 active:scale-95 p-2 rounded-md'>
                    <button>Generate with AI</button>
                </div> */}
                            <button id='driver_add_question_answer'
                                onClick={() => new_question_adding()}
                                className='bg-green-100 active:scale-95 flex items-center gap-2 p-2 px-8 rounded-md'>
                                <MdAddCircle />
                                Add
                            </button>
                        </div>
                        {/* --------------------------------------------------------- */}

                        {/* -----------------------create new questions and answers--------- */}
                        {
                            add_new_question ? <QuestionForm sendQuestions={sendQuestions} key={1} /> : ""
                        }


                        {/* ---------------------------------------------------------------------- */}

                        <div className='my-8'>
                            <h3 className='text-2xl font-bold'>Trained Q&A Contents</h3>
                        </div>
                        {QA.length > 0 ?

                            <>
                                {
                                    QA.map((cur) => {
                                        return <Saved_question cur={cur} deleteQuestion={deleteQuestion} sendQuestion={sendQuestions} key={cur.id} />
                                    })

                                }
                                {/* --------------------------------------------------------------- */}

                            </>
                            :


                            < div className='flex items-center justify-center mt-6'>
                                <div className='flex gap-2 flex-col items-center justify-center'>
                                    <BsDatabase className='text-4xl' />
                                    <h3>You haven't added any Question Answers yet.</h3>
                                </div>
                            </div>
                        }

                    </div >
                </>}
        </>
    )
}
