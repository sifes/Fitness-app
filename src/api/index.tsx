import axios from "axios";

export const api = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '3b22504ff1mshee8d3ab7dbb395fp14e064jsnc409977ffdbe',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
})
export const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': '3b22504ff1mshee8d3ab7dbb395fp14e064jsnc409977ffdbe',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
