// utils/API.js

import axios from "axios";

export default axios.create({
    baseURL: "https://limitless-falls-29739.herokuapp.com:3001/apiaboutme",
    responseType: "json"
});
