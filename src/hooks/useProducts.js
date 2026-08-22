import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/productsApi";
import { useEffect, useState } from "react";

export const useProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("")
    const [debounceSearch, setDebounceSearch] = useState("");
    let limit = 8;
    let skip = (currentPage - 1) * limit
    const { data: products, isPending: isLoading, error, isPlaceholderData } = useQuery({ queryKey: ['products', currentPage, debounceSearch], queryFn: () => getAllProducts(limit, skip, debounceSearch.trim()), placeholderData: keepPreviousData });

    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebounceSearch(searchQuery);
        }, 1000)
        return () => {
            clearTimeout(timeout);
        };
    }, [searchQuery])

    const onPrevious = () => {
        setCurrentPage((prev) => prev - 1);
    }
    const onNext = () => {
        setCurrentPage((prev) => prev + 1);
    }
    const onSearch = (search) => {
        setSearchQuery(search)
        setCurrentPage(1);
    }

    return { products, isLoading, error, currentPage, onPrevious, onNext, isPlaceholderData, searchQuery, onSearch }
}