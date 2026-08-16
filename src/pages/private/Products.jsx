import ProductCard from "../../components/ProductCard"

const Products = () => {
    const products = [
        {
            id: 0,
            title: "Product One",
            price: 29.99,
            description: "This is a sample product description.",
            category: "electronics",
            image: "https://via.placeholder.com/400",
        },
        {
            id: 1,
            title: "Product Two",
            price: 49.99,
            description: "Another sample product description.",
            category: "clothing",
            image: "https://via.placeholder.com/400",
        },
    ]

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