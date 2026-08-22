import api from "../config/axios"

export const getAllProducts = async (limit, skip, searchQuery) => {
    const params = new URLSearchParams({
        limit,
        skip,
    });
    if (searchQuery) {
        params.set("q", searchQuery);
    }
    const response = await api.get(`/products/search?${params}`);
    return response;
}

