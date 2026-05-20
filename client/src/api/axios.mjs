import axios from 'axios';

const API =  axios.create({
    baseURL: "localhost:5000/api"
});

export default API;