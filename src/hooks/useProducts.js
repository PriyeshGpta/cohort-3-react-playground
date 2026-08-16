import axios from "axios";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productsApi";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllProducts = async () => {
        try {
            const response = await getAllProducts()
            setProducts(response);
        } catch (error) {
            console.error("Error fetching products: ", error);
            setError(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])

    return { products, isLoading, error }
}