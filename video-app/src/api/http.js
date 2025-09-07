import axios from "axios";

const API_BASE_URL = "https://yt-api-reactnative-project.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
});

api.interceptors.request.use(
  (config) => {
    console.log("Making API request to:", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error.message);
    if (error.code === "ECONNABORTED") {
      throw new Error("Request timeout - server is taking too long to respond");
    }
    throw error;
  }
);

export default api;
