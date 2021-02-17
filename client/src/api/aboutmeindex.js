// utils/API.js

import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/apiaboutme",
    responseType: "json"
});
