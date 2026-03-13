import Link from "next/link";
import Image from "next/image";
import { productCategories } from "../data/productCategories";

export default function CategoryPreview() {
  const samples = productCategories.slice(0, 4);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Product Categories</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Browse a selection of what we manufacture and export.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {samples.map((cat) => {
          const first = cat.products[0];
          const imgSrc = first ? first.image : "/images/toplink.jpg";
          return (
            <Link
              key={cat.slug}
              href="/products"
              className="relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            >
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src={imgSrc}
                  alt={cat.title}
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {cat.title}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/products"
          className="inline-block    px-8 py-3 rounded-full font-bold transition-all shadow-md   hover:shadow-lg"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
