import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})
// attach token from localStorage to each request if present
api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token")
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
  } catch (err) {
    // ignore if localStorage is not available
  }
  return config
})
export default api;