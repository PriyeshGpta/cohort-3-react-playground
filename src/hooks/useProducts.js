import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/productsApi";
import { useState } from "react";

export const useProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let limit = 8;
    let skip = (currentPage - 1) * 10

    const { data: products, isPending: isLoading, error, isPlaceholderData } = useQuery({ queryKey: ['products', currentPage], queryFn: () => getAllProducts(limit, skip), placeholderData: keepPreviousData });

    const onPrevious = () => {
        setCurrentPage((prev) => prev - 1);
    }
    const onNext = () => {
        setCurrentPage((prev) => prev + 1);
    }

    return { products, isLoading, error, currentPage, onPrevious, onNext, isPlaceholderData }
}