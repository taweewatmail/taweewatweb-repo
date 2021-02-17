// utils/API.js

import axios from "axios";

export default axios.create({
    baseURL: "https://taweewat.herokuapp.com:3000/apiaboutme",
    responseType: "json"
});
