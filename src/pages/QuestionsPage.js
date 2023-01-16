import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import '../styling/NewGamePage.css'

import { getAllQuestions, CreateQuestions } from "../services/QuestionService";
import { GetQuestions } from "../services/QuestionApiService";
import { Message } from "@mui/icons-material";

const QuestionsPage = () => {
    const [questions, setQuestions] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        async function AssignQuestions(){
          setQuestions(await getAllQuestions())
        }
        AssignQuestions()
    }, [])

    function GoToHome() {
        navigate("/");
    }

    async function GetNewQuestions(){
        console.log("Get new Questions")
        var newQuestions
        await GetQuestions(10).then((response) => {
            newQuestions = response.results
            console.log(newQuestions)
        })
        newQuestions.forEach(element => {
            console.log(element)

            let QuestionBody = {
                Message: element.question,
                CorrectAnswer: element.correct_answer,
                IncorrectAnswers: element.incorrect_answers,
            }
            console.log(QuestionBody)
            CreateQuestions(QuestionBody)
        });
    }

    return(
        <>
            <div className="btn btn-primary"onClick={GoToHome}>
                Go home
            </div>

            <div className="btn btn-primary"onClick={GetNewQuestions}>
                Get new questions
            </div>

            <div className='w-100'>{questions.map((c) => 
                <p className='table-container' key={c.id}>
                    <b className='list-item'>{c.Message}</b>
                </p>)}
            </div>
        </>
    )

}

export default QuestionsPage