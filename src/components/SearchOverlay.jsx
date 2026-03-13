"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { productCategories } from "../data/productCategories";

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults = [];
    const searchTerms = query.toLowerCase().split(" ").filter(t => t.length > 0);

    productCategories.forEach(category => {
      // Check category title
      const catMatch = searchTerms.every(term => 
        category.title.toLowerCase().includes(term)
      );
      
      if (catMatch) {
         searchResults.push({
           type: 'category',
           id: category.slug,
           title: category.title,
           href: `/products/${category.slug}`
         });
      }

      // Check products
      category.products.forEach(product => {
        const prodMatch = searchTerms.every(term => 
          product.name.toLowerCase().includes(term) || 
          product.description?.toLowerCase().includes(term)
        );

        if (prodMatch) {
          searchResults.push({
            type: 'product',
            id: `${category.slug}-${product.slug}`,
            title: product.name,
            category: category.title,
            image: product.image,
            href: `/products/${category.slug}/${product.slug}`
          });
        }
      });
    });

    setResults(searchResults.slice(0, 10)); // Limit results
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 h-full flex flex-col">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-4 text-gray-400 hover:text-primary transition-colors transition-transform hover:scale-110"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Search Input Area */}
        <div className="relative border-b-4 border-gray-100 pb-4 mb-12">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, categories, or parts..."
            className="w-full text-3xl md:text-5xl font-heading font-bold text-gray-900 bg-transparent outline-none placeholder:text-gray-200"
          />
          <div className={`absolute bottom-[-4px] left-0 h-1 bg-primary transition-all duration-500 ${query ? 'w-full' : 'w-0'}`} />
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
          {query && results.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 font-heading font-bold uppercase tracking-widest">No results found for "{query}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {results.map((result) => (
                <Link 
                  key={result.id}
                  href={result.href}
                  onClick={onClose}
                  className="group flex items-center gap-6 p-6 rounded-3xl hover:bg-gray-50 transition-all duration-300"
                >
                  {result.type === 'product' && result.image ? (
                    <div className="relative w-20 h-20 bg-white rounded-2xl p-2 shrink-0 border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                      <Image src={result.image} alt={result.title} fill className="object-contain" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-baldan-prepare/10 rounded-2xl flex items-center justify-center shrink-0 border border-baldan-prepare/5 group-hover:bg-primary/10 transition-colors">
                       <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                       </svg>
                    </div>
                  )}
                  
                  <div>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-primary mb-1 block">
                      {result.type} {result.category ? `• ${result.category}` : ''}
                    </span>
                    <h4 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {result.title}
                    </h4>
                  </div>
                  
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {/* Quick Links / Suggestions */}
        {!query && (
          <div className="mt-8 animate-in slide-in-from-bottom-4 duration-500">
             <h5 className="text-xs font-heading font-bold uppercase tracking-widest text-gray-400 mb-6 border-l-4 border-primary pl-4">Popular Categories</h5>
             <div className="flex flex-wrap gap-3">
               {productCategories.slice(0, 5).map(cat => (
                 <Link 
                   key={cat.slug} 
                   href={`/products/${cat.slug}`}
                   onClick={onClose}
                   className="px-6 py-2 bg-gray-50 hover:bg-primary hover:text-white rounded-full text-sm font-heading font-bold transition-all"
                 >
                   {cat.title}
                 </Link>
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
