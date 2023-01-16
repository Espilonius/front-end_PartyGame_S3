import React from "react";
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import '../styling/NewGamePage.css'
import CreateGame from "../components/CreateGameComponent";

const NewGamePage = () => {
    const navigate = useNavigate();

    function GoToHome() {
        navigate("/");
    }

    return(
        <>
            <div className="btn btn-primary"onClick={GoToHome}>
                Go home
            </div>

            <div>
                <CreateGame></CreateGame>
            </div>

        </>
    )

}

export default NewGamePage