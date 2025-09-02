import axios from "axios";
import config from "../config.json"

const API = axios.create({ baseURL: config.baseURL });

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;