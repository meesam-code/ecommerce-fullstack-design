import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Adjust the base URL as needed
  withCredentials: true, // This is important for sending cookies with requests
});

export default api;
