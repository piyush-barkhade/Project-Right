import axios from "axios";

const api = axios.create({
  baseURL: "https://project-right.onrender.com/api",
});

export default api;
