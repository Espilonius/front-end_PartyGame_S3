
import axios from "axios";

export async function getAllGames(){
    try {
        console.log("service getAllGames");
        const response = await axios.get(
            "https://localhost:7057/api/Games");
        console.log("response", response);
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function getGameByUserId(id){
    try {
        const response = await axios.get(
            `https://localhost:7057/api/Games/${id}`
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function CreateGame(data){
    try {
        console.log(data);
        const response = axios.post('https://localhost:7057/api/Games', data)
        .catch(function (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function UpdateGame(id, data){
    try {
        const response = await axios.put(
            `https://localhost:7057/api/games/${id}`, data
        );
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

export async function DeleteGame(id){
    try {
        const response = await axios.delete(
            `https://localhost:7057/api/Games/${id}`
        );
        console.log(response.data)
    } catch (error) {
        return [];
    }
}