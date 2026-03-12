export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Precision Tractor Linkage Parts
          </h2>

          <p className="mb-6">
            Manufacturer & Exporter of agricultural implement components.
          </p>

          <button className="bg-red-600 px-6 py-3 rounded">
            View Products
          </button>
        </div>

        <img src="/images/toplink.jpg" className="rounded-xl" />
      </div>
    </section>
  );
}