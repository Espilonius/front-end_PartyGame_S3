//import React, { useContext, useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
//import { getAllGames } from '../services/GameService'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import '../styling/NewGamePage.css'
import CreateGame from "../components/CreateGameComponent";

const NewGamePage = () => {
    //const [games, setGames] = useState([])
    const navigate = useNavigate();

    //useEffect(() => {
        //console.log("in use effect")
        //async function AssignGames(){
            //setGames(await getAllGames())
            //console.log("Setting all games");
        //}
        //AssignGames();
    //}, [])

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