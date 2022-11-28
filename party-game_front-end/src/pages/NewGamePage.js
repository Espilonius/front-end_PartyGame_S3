import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getAllGames } from '../services/GameService'
import { UserContext } from '../userContext'
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import '../styling/NewGamePage.css'
import CreateGame from "../components/CreateGameComponent";

const NewGamePage = () => {
    const [games, setGames] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        console.log("in use effect")
        async function AssignGames(){
            setGames(await getAllGames())
            console.log("Setting all games");
        }
        AssignGames();
    }, [])   

    function GoToHome() {
        navigate("/");
    }

    return(
        <>
            <div onClick={GoToHome}>
                Go home
            </div>

            <div className="container">
            <h3 className="p-3 text-center">All game winners</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Winner</th>
                    </tr>
                </thead>
                <tbody>
                    {games && games.map(games =>
                        <tr key={games.id}>
                            <td>{games.winner}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

        <div>
            <CreateGame></CreateGame>
        </div>

        </>
    )

}

export default NewGamePage