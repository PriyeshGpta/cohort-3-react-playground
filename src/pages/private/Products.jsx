import ProductCard from "../../components/ProductCard"
import { useProducts } from "../../hooks/useProducts"

const Products = () => {
    const { products, isLoading, error } = useProducts();

    if (isLoading) return <p className='h-full w-full bg-slate-950 text-white flex items-center justify-center'>Loading...</p>

    if (error) return <p className="p-6 text-red-400">Error fetching products: {error.message} </p>

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