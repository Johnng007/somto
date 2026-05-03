import axios from "axios";
const url= 'https://somto.onrender.com/questions';

export const fetchQuestions =()=> axios.get(url);
export const createQuestion =(newQuestion)=> axios.post(url,newQuestion);

const url2= 'https://somto.onrender.com/results';
export const fetchResults =()=> axios.get(url2);
export const createResult =(results)=> axios.post(url2,results);
