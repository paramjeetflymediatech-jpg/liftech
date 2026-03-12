import { products } from "../data/products";

export default function Products() {
  return (
    <section id="products" className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div key={i} className="border rounded-xl overflow-hidden">
            <img src={p.image} className="h-56 w-full object-cover" />

            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>

              <button className="mt-4 bg-blue-800 text-white px-4 py-2 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}