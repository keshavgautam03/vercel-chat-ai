import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://vercel-chat-ai.onrender.com/api",
  withCredentials: true,
});
