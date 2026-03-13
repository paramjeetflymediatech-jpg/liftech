"use client";
import { useState, useMemo } from "react";
import ProductSidebar from "./ProductSidebar";
import ProductCategory from "./ProductCategory";
import { productCategories } from "../data/productCategories";

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // compute filtered categories based on selection and search
    const filtered = useMemo(() => {
        let cats = productCategories;
        if (activeCategory) {
            cats = cats.filter((c) => c.slug === activeCategory);
        }
        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase();
            cats = cats
                .map((c) => ({
                    ...c,
                    products: c.products.filter((p) => p.name.toLowerCase().includes(term)),
                }))
                .filter((c) => c.products.length > 0);
        }
        return cats;
    }, [activeCategory, searchTerm]);

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 transition-colors">

            <h1 id="products" className="text-4xl font-black mb-10 text-gray-900 dark:text-white tracking-tight">
                Liftech Product Range
            </h1>

            <div className="flex flex-col lg:flex-row gap-12">

                {/* Sidebar */}
                <ProductSidebar
                    categories={productCategories}
                    active={activeCategory}
                    onSelect={setActiveCategory}
                />

                {/* Product Content */}
                <div className="flex-1">
                    <div className="mb-10 flex flex-col md:flex-row md:items-center gap-6">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-5 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                🔍
                            </div>
                        </div>
                        {activeCategory && (
                            <button
                                onClick={() => setActiveCategory(null)}
                                className="text-sm font-bold text-primary hover:text-primary-dark underline underline-offset-4 decoration-2 transition-colors"
                            >
                                Clear filters
                            </button>
                        )}
                    </div>

                    {filtered.length === 0 ? (
                        <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
                            <p className="text-xl text-gray-500 dark:text-gray-400">No products found for this selection.</p>
                            <button 
                                onClick={() => {setSearchTerm(""); setActiveCategory(null);}}
                                className="mt-4 text-primary font-bold hover:underline"
                            >
                                Reset search
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {filtered.map((cat) => (
                                <ProductCategory
                                    key={cat.slug}
                                    title={cat.title}
                                    slug={cat.slug}
                                    products={cat.products}
                                />
                            ))}
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
}