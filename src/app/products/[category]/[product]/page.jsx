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
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/products" className="text-primary-dark underline mb-6 block font-medium">
        ← Back to all products
      </Link>

      <h1 className="text-4xl font-bold mb-6">{prod.name}</h1>

      {prod.image && (
        <div className="relative w-full h-80 mb-8">
          <Image
            src={prod.image}
            alt={prod.name}
            fill
            className="object-contain"
            priority
          />
        </div>
      )}

      <p className="mb-4">Category: {cat.title}</p>

      {prod.description && (
        <p className="mb-6 text-gray-700">{prod.description}</p>
      )}

      <section className="bg-gray-50 p-6 rounded">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Material: High-grade forged steel</li>
          <li>Finish: Zinc-plated for corrosion resistance</li>
          <li>Weight: Approx. 2–5 kg (varies by model)</li>
          <li>Usage: Compatible with most standard tractors</li>
          <li>Warranty: 1 year against manufacturing defects</li>
        </ul>
      </section>
    </div>
  );
}
