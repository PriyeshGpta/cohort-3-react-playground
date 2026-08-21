import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/productsApi";

export const useProducts = () => {
    const { data: products, isPending: isLoading, error } = useQuery({ queryKey: ['products'], queryFn: getAllProducts, staleTime: 5000 });
    return { products, isLoading, error }
}