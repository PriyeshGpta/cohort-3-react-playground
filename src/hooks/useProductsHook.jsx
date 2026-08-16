import axios from "axios";
import { useEffect, useState } from "react";

export const useProductsHook = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response?.data);
        } catch (error) {
            console.log("Error fetching products: ", error);
            setError(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    return { products, isLoading, error }
}