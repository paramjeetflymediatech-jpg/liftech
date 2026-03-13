import Link from "next/link";
import Image from "next/image";
import { productCategories } from "../data/productCategories";

export default function CategoryPreview() {
  const samples = productCategories.slice(0, 4);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
              Our Product Categories
            </h3>
            <p className="text-lg text-gray-600 mt-4 font-body">
              Engineered for endurance. Explore our professional-grade agricultural machinery and replacement parts.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center text-primary font-heading font-bold text-lg group"
          >
            Explore the catalog
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {samples.map((cat, idx) => {
          const first = cat.products[0];
          const imgSrc = first ? first.image : "/images/toplink.jpg";
          
          // Categorical focus colors (cycle through baldan palette)
          const colors = ['bg-baldan-prepare', 'bg-baldan-sow', 'bg-baldan-protect', 'bg-baldan-move'];
          const accentColor = colors[idx % colors.length];

          return (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized={true}
                />
                <div className={`absolute top-4 left-4 ${accentColor} text-white px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider shadow-lg`}>
                  New Tech
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-heading font-bold text-2xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {cat.title}
                </h4>
                <div className="mt-auto pt-6 flex items-center text-gray-400 group-hover:text-primary transition-colors duration-300">
                  <span className="font-heading font-bold text-sm uppercase tracking-widest">Learn More</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              {/* Bottom accent line */}
              <div className={`h-1.5 w-0 group-hover:w-full transition-all duration-500 ${accentColor}`} />
            </Link>
          );
        })}
      </div>

      <div className="mt-20 text-center md:hidden px-6">
        <Link
          href="/products"
          className="w-full inline-block bg-primary hover:bg-baldan-red/90 text-white px-8 py-4 rounded-full font-heading font-bold transition-all shadow-xl"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
