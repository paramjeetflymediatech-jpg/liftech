"use client";   
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FALLBACK_IMAGE = "https://via.placeholder.com/400x300?text=image+unavailable";

export default function ProductCard({ product, categorySlug }) {
  const [imgSrc, setImgSrc] = useState(product.image);

  return (
    <Link
      href={`/products/${categorySlug}/${product.slug}`}
      className="group relative h-72 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
          priority={false}
          unoptimized={true}
          onError={() => {
            if (imgSrc !== FALLBACK_IMAGE) {
              setImgSrc(FALLBACK_IMAGE);
            }
          }}
        />
      )}
      <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
        <h3 className="text-lg font-heading font-bold text-white leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center text-white/60 text-[10px] font-heading font-bold uppercase tracking-widest group-hover:text-white transition-colors">
          View Details
          <svg className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
