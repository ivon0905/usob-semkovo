import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7179/api",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
    "Access-Control-Allow-Credentials": "true",
  }
});