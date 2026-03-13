import ProductCard from "./ProductCard";

export default function ProductCategory({ title, products = [], slug }) {
    return (
        <section className="py-16 border-b dark:border-gray-800 transition-colors">

            <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-white tracking-tight">
                {title}
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

                {products.map((product) => (
                    <ProductCard
                        key={product.slug}
                        product={product}
                        categorySlug={slug}
                    />
                ))}

            </div>
        </section>
    );
}