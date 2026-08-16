import api from "../config/axios"

export const getAllProducts = () => {
    return api.get("/products");
}