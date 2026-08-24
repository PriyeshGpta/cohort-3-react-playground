import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productsApi";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllProducts = async () => {
        try {
            const response = await getAllProducts()
            setProducts(response?.products);
        } catch (error) {
            console.error("Error fetching products: ", error.response.data.message);
            setError(error.response.data.message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])

    return { products, isLoading, error }
}