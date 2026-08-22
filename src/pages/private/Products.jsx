import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard"
import { useProducts } from "../../hooks/useProducts"
import { Search } from "lucide-react";


const Products = () => {
    const { products, isLoading, error, currentPage, onPrevious, onNext, isPlaceholderData, searchQuery, onSearch } = useProducts();

    if (isLoading) return <p className='bg-slate-950 text-white pt-6 flex justify-center'>Loading...</p>

    if (error) return <p className="p-6 text-red-400">Error fetching products: {error.response.data.message} </p>

    return (
        <section className="p-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6">
                    <div className="relative max-w-sm">
                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-12 pr-4 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-slate-600"
                        />
                    </div>
                </div>

                <div
                    className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ${isPlaceholderData ? "opacity-[0.4]" : ""
                        }`}
                >
                    {products?.products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(products?.total / 8)}
                    onPrevious={onPrevious}
                    onNext={onNext}
                />
            </div>
        </section>
    )
}

export default Products