import api from "../config/axios"

export const getAllProducts = async (limit, skip) => {
    const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
    return response;
}

