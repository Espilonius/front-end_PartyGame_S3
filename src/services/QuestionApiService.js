import axios from "axios";

export async function GetQuestions(questionAmount){
    try {
        const response = await axios.get(
            `https://opentdb.com/api.php?amount=${questionAmount}&type=multiple`
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        return [];
    }
}