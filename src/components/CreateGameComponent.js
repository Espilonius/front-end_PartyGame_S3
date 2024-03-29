import React, { useState, } from "react";
//import { useContext, useEffect } from "react";
import { CreateGame } from "../services/GameService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateGameComponent = () => {
    const [players] = useState([])
    const [valuettlRounds, setValueTtlRounds] = useState('');

    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');
    
        setValueTtlRounds(result);
      };
    
    async function PostGame () {
        let totalRounds = document.getElementById('ttlRounds').value;
        let questionIds = document.getElementById('qIds').value;
        let commandIds = document.getElementById('cIds').value;
        
        console.log("before check numbers");
        var regex=/^[0-9]+$/;
        if (!totalRounds.match(regex))
        {
            alert("must be a number")
            return;
        }
        console.log("after check numbers");
        if (totalRounds > 10 || totalRounds < 0) {
            console.log("number not between 0 and 10");
            if (totalRounds > 10){
                ChangeMessage(1);
            }
            if (totalRounds < 0){
                ChangeMessage(0);
            }
            return;
        }
        if (players.length <= 1){
            console.log("Players can't be null")
            ChangeMessage(2);
            return;
        }
        
        let reservationbody = {
              TotalRounds: totalRounds,
              QuestionIds: [questionIds],
              CommandIds: [commandIds],
              PlayerNames: players,
            };

            try {
                await CreateGame(reservationbody).then((response) => {
                    console.log(response);
                    if (response.id !== null) {
                        console.log("Succesfully created a game")
                        toasrMessage("Succes", "Succesfully created a game.")
                      } else {
                        console.log("Failed to create a game")
                      }
                });
                
              } catch (error) {
                console.log("error", error)
              }
        
    }

    function AddPlayer() {
        console.log("AddPlayer");
        let newPlayer=document.getElementById('plyNames').value;
        players.push(newPlayer);
        SetPlayerList(newPlayer);
    }

    function SetPlayerList(newPlayer) {
        document.getElementById('playerList').innerHTML += '<tr><td>' + newPlayer + '</td></tr>';
        console.log("New player name: ", newPlayer);
    }

    function ChangeMessage(typeMessage){
        switch(typeMessage) {
            case 0:          
            toasrMessage("error","Rounds can't be negative.")
              break;
            case 1:          
            toasrMessage("error","Rounds can't be over 10.")
              break;
            case 2:            
              toasrMessage("error","Players can't be less then 2.")
              break;
            case 3:            
                toasrMessage("Succes","Succesfully created a game.")
              break;
            default:
              console.log("There isn't a switch case for this", typeMessage)
          } 
      }

    function toasrMessage(type, message) {
        if (type === "error") {
          toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          })
        } else {
          toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          })
        }
      }
    
    return (
        <>
            <div>            
                <div className="btn btn-info" onClick={PostGame}>Make game</div>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Total rounds</span>
                <input id='ttlRounds' type="number" min="0" max="100" value={valuettlRounds} onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Question Ids</span>
                <input id='qIds' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Command Ids</span>
                <input id='cIds' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Player names</span>
                <input id='plyNames' type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button onClick={AddPlayer} className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>

            <div className="container">
                <h3 className="p-3 text-center">Player Names</h3>
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Names</th>
                    </tr>
                </thead>
                <tbody id="playerList">
                
                </tbody>
                </table>
            </div>
        </>
    );
};

export default CreateGameComponent;