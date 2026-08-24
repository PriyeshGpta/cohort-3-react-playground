import ProductCard from "../../components/ProductCard"
import { useProducts } from "../../hooks/useProducts"

const Products = () => {
    const { products, isLoading, error } = useProducts();

    if (isLoading) return <p className='bg-slate-950 text-white pt-6 flex justify-center'>Loading...</p>

    if (error) return <p className="p-6 text-red-400">Error fetching products: {error.response.data.message} </p>

    return (
        <section className="p-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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