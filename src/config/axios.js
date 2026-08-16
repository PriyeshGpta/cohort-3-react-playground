import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.response.use(
    (response) => {
        return response?.data;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;