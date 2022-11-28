import React, { useState, useContext, useEffect } from "react";
import { CreateGame } from "../services/GameService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const CreateGameComponent = () => {
    
    async function PostGame () {
        
            let reservationbody = {
              TotalRounds: 1,
              QuestionIds: ["Q1"],
              CommandIds: ["C1"],
              PlayerNames: ["Jeff", "Tim"],
              Winner: "Jeff",
            };

            try {
                await CreateGame(reservationbody).then((response) => {
                    console.log(response);
                    if (response.id !== null) {
                        console.log("Succesfully created a game")
                      } else {
                        console.log("Failed to create a game")
                      }
                });
                
              } catch (error) {
                console.log("error", error)
              }
        
    }
    
    return (
        <>
            <div>
                <div onClick={PostGame}>Make game</div>
            </div>
        </>
    );
};

export default CreateGameComponent;