// utils/API.js

import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:3000/apiaboutme",
    responseType: "json"
});
