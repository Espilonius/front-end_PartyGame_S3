import React, { useState, useEffect} from "react";
//import { useContext, useEffect } from "react";
import { GetQuestions } from "../services/QuestionApiService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const GetQuestionsComponent = (props) => {
    const [Questions, setQuestions] = useState(null);

    useEffect(() => {
        async function AsignQuestions() {
            setQuestions()
          }
    }, [Questions])

    function GetGameQuestions(){
        
    }
    
    return (
        <>
            
        </>
    );
};

export default GetQuestionsComponent;