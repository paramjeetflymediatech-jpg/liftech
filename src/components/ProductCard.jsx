"use client";   
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FALLBACK_IMAGE = "https://via.placeholder.com/400x300?text=image+unavailable";

export default function ProductCard({ product, categorySlug }) {
  // product: { name, slug, image }
  const [imgSrc, setImgSrc] = useState(product.image);

  return (
    <Link
      href={`/products/${categorySlug}/${product.slug}`}
      className="group block border dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900"
    >
      <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority={false}
            unoptimized={true} // bypass loader for external sources
            onError={() => {
              if (imgSrc !== FALLBACK_IMAGE) {
                setImgSrc(FALLBACK_IMAGE);
              }
            }}
          />
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
