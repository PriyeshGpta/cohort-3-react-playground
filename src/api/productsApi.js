import api from "../config/axios"

export const getAllProducts = async (limit, skip) => {
    const params = new URLSearchParams({
        limit,
        skip,
    });
    const response = await api.get(`/products/search?${params}`);
    return response;
}