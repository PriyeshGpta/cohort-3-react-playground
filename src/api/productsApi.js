import api from "../config/axios"

export const getAllProducts = async () => {
    const response = await api.get("/products");
    return response?.products;
}

