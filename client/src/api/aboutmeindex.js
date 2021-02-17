// utils/API.js

import axios from "axios";

export default axios.create({
    baseURL: "https://bomtaweewat.herokuapp.com/apiaboutme",
    responseType: "json"
});
