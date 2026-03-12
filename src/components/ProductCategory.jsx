export default function ProductCategory({ title, products }) {
  return (
    <section className="py-16 border-b">

      <h2 className="text-3xl font-bold mb-8">
        {title}
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 hover:shadow-lg transition"
          >
            <div className="h-40 bg-gray-100 mb-4"></div>

            <h3 className="font-semibold text-lg">
              {product}
            </h3>

            <button className="mt-3 text-blue-700 font-medium">
              View Details →
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}