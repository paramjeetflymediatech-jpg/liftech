import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 to-indigo-900 dark:from-gray-900 dark:to-black text-white py-10 transition-colors">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/toplink.jpg"
          alt="Toplink"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold leading-tight animate-fade-in-up">
            Precision Tractor Linkage Parts
          </h2>

          <p className="text-lg">
            Manufacturer & Exporter of agricultural implement components.
          </p>

          <Link
            href="/products"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-dark transition animate-bounce"
          >
            Explore Products
          </Link>
        </div>

        <div className="hidden md:block">
          <img
            src="/images/toplink.jpg"
            alt="Toplink closeup"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}