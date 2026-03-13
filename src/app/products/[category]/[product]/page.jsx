import Image from "next/image";
import Link from "next/link";
import { productCategories } from "../../../../data/productCategories";

export async function generateStaticParams() {
  // pre-generate paths for each product under each category
  const params = [];
  productCategories.forEach((cat) => {
    cat.products.forEach((p) => {
      params.push({ category: cat.slug, product: p.slug });
    });
  });
  return params;
}

export default async function ProductDetailPage({ params }) {
  // Next.js passes params as a Promise for server components
  const resolved = await params;
  const { category, product } = resolved;

  const cat = productCategories.find((c) => c.slug === category);
  const prod = cat?.products.find((p) => p.slug === product);

  if (!cat || !prod) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p>
          <Link href="/products" className="text-primary underline">
            Back to products
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-widest text-gray-400 mb-12">
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900">{cat.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-3xl p-12 aspect-square relative flex items-center justify-center border border-gray-100 shadow-inner">
            {prod.image && (
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                className="object-contain p-8 transform scale-100 group-hover:scale-105 transition-transform duration-700"
                priority
              />
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className={`inline-block px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-white mb-4 ${
                category.includes('toplink') ? 'bg-baldan-prepare' : 'bg-primary'
              }`}>
                {cat.title}
              </span>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight">
                {prod.name}
              </h1>
            </div>

            {prod.description && (
              <p className="text-xl text-gray-600 font-body mb-10 leading-relaxed">
                {prod.description}
              </p>
            )}

            <div className="space-y-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 border-b-4 border-primary inline-block pb-2">
                Technical Specifications
              </h2>
              
              <div className="grid grid-cols-1 gap-4 font-body">
                {[
                  { label: "Material", value: "High-grade forged steel" },
                  { label: "Finish", value: "Zinc-plated / Powder Coated" },
                  { label: "Durability", value: "Toughness tested for harsh conditions" },
                  { label: "Compatibility", value: "Universal / Tractor Specific" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-gray-100">
                    <span className="font-bold text-gray-400 uppercase tracking-widest text-xs uppercase">{spec.label}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Link 
                href="/contact"
                className="bg-primary hover:bg-baldan-red/90 text-white px-10 py-5 rounded-full font-heading font-bold transition-all duration-300 shadow-2xl inline-flex items-center group"
              >
                Request a Quote
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
