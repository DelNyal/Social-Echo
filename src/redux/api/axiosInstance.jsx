import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("profile"))?.accessToken;
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
