import ProductCard from "../../components/ProductCard"
import { useProductsHook } from "../../hooks/useProductsHook"

const Products = () => {
    const { products, isLoading, error } = useProductsHook();

    if (isLoading) {
        return <p className="p-6 text-white">Loading...</p>
    }

    if (error) {
        return <p className="p-6 text-red-400">Error fetching products: {error.message} </p>
    }

    return (
        <section className="p-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products