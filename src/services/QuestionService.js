import axios from "axios";

export async function getAllQuestions(){
    try {
        console.log("service GetAllQuestions");
        const response = await axios.get(
            "https://localhost:7120/api/Questions");
        console.log("response", response);
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function getQuestionsById(id){
    try {
        const response = await axios.get(
            `https://localhost:7120/api/Questions/${id}`
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function CreateQuestions(data){
    try {
        console.log(data);
        const response = axios.post('https://localhost:7120/api/Questions', data)
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

export async function UpdateQuestions(id, data){
    try {
        const response = await axios.put(
            `https://localhost:7120/api/Questions/${id}`, data
        );
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

export async function DeleteQuestions(id){
    try {
        const response = await axios.delete(
            `https://localhost:7120/api/Questions/${id}`
        );
        console.log(response.data)
    } catch (error) {
        return [];
    }
}