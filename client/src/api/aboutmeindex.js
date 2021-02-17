// utils/API.js

import axios from "axios";

export default axios.create({
    baseURL: "https://taweewat.herokuapp.com/apiaboutme",
    responseType: "json"
});
