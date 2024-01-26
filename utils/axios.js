import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  withCredentials: false,
});

export default api;
