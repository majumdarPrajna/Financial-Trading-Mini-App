import axios from "axios";

// Change baseURL to your backend URL (local or deployed)
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Automatically attach JWT token if stored
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export default API;
