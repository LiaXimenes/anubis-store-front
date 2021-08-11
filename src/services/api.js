import axios from "axios";

export const api = axios.create({
    baseURL: 'https://anubis-back-end.herokuapp.com/'
});