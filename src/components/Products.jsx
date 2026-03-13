"use client"
"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import ProductSidebar from "./ProductSidebar";
import ProductCategory from "./ProductCategory";
import { productCategories } from "../data/productCategories";

export default function ProductsPage() {
    const router = useRouter();
    const params = useParams();
    const activeCategory = params?.category || null;
    
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_SIZE = 6;

    // Scroll to top when category changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeCategory]);

    const handleCategorySelect = (slug) => {
        if (slug) {
            router.push(`/products/${slug}`);
        } else {
            router.push(`/products`);
        }
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleReset = () => {
        setSearchTerm("");
        setCurrentPage(1);
        router.push(`/products`);
    };

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

    // pagination logic for category grid
    const totalPages = Math.ceil(productCategories.length / PAGE_SIZE);
    const paginatedCategories = productCategories.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 transition-colors">

            <h1 id="products" className="text-5xl md:text-6xl font-heading font-black mb-16 text-gray-900 leading-tight tracking-tighter">
                Explore Our <br/><span className="text-primary italic">Industrial</span> Portfolio
            </h1>

            <div className="flex flex-col lg:flex-row gap-12">

                {/* Sidebar */}
                <ProductSidebar
                    categories={productCategories}
                    active={activeCategory}
                    onSelect={handleCategorySelect}
                />

                {/* Product Content */}
                <div className="flex-1">
                    {/* Breadcrumbs */}
                    <nav className="mb-8 flex items-center gap-2 text-[10px] font-heading font-bold uppercase tracking-widest text-gray-400">
                        <button 
                            onClick={() => window.location.href = "/"}
                            className="hover:text-primary transition-colors"
                        >
                            Home
                        </button>
                        <span>/</span>
                        <button 
                            onClick={handleReset}
                            className={`${!activeCategory ? "text-gray-900" : "hover:text-primary transition-colors"}`}
                        >
                            Products
                        </button>
                        {activeCategory && (
                            <>
                                <span>/</span>
                                <span className="text-gray-900">
                                    {productCategories.find(c => c.slug === activeCategory)?.title}
                                </span>
                            </>
                        )}
                    </nav>

                    <div className="mb-12 flex flex-col md:flex-row md:items-center gap-6 animate-fadeInUp">
                        <div className="relative flex-1 group">
                            <input
                                type="text"
                                placeholder="Search the catalog..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full border-b-2 border-gray-100 bg-transparent px-0 py-4 text-gray-900 text-xl font-heading font-medium focus:border-primary outline-none transition-all placeholder:text-gray-300"
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-primary transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        {(activeCategory || searchTerm) && (
                            <button
                                onClick={handleReset}
                                className="text-xs font-heading font-bold text-primary uppercase tracking-widest hover:underline decoration-2"
                            >
                                Reset View
                            </button>
                        )}
                    </div>

                    {!activeCategory && !searchTerm ? (
                        /* Default Paginated Category Grid */
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {paginatedCategories.map((cat) => (
                                    <button
                                        key={cat.slug}
                                        onClick={() => handleCategorySelect(cat.slug)}
                                        className="group relative h-80 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 text-left bg-white"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                                        {cat.products[0]?.image && (
                                            <img 
                                                src={cat.products[0].image} 
                                                alt={cat.title} 
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        )}
                                        <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                                            <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-primary bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-3 inline-block transition-colors group-hover:bg-primary group-hover:text-white">
                                                {cat.products.length} Products
                                            </span>
                                            <h3 className="text-2xl font-heading font-bold text-white leading-tight">
                                                {cat.title}
                                            </h3>
                                            <div className="mt-4 flex items-center text-white/60 text-xs font-heading font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                                                Explore Category
                                                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="mt-16 flex items-center justify-center gap-2">
                                    <button 
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="p-4 rounded-full border border-gray-100 text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:hover:text-gray-400 disabled:hover:border-gray-100 transition-all group"
                                    >
                                        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                        </svg>
                                    </button>

                                    <div className="flex gap-2">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentPage(i + 1)}
                                                className={`w-12 h-12 rounded-full font-heading font-bold text-sm transition-all ${
                                                    currentPage === i + 1 
                                                        ? "bg-primary text-white shadow-lg shadow-primary/20" 
                                                        : "text-gray-400 hover:bg-gray-100"
                                                }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>

                                    <button 
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="p-4 rounded-full border border-gray-100 text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:hover:text-gray-400 disabled:hover:border-gray-100 transition-all group"
                                    >
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-32 rounded-[3rem] bg-gray-50 border-2 border-dashed border-gray-100">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172L15.828 15.828m0-6.656l-6.656 6.656M12 21a9 9 0 110-18 9 9 0 010 18z" />
                                </svg>
                            </div>
                            <p className="text-xl font-heading font-bold text-gray-900">No products found</p>
                            <p className="text-gray-500 mt-2 font-body">Try adjusting your search or category selection.</p>
                            <button 
                                onClick={handleReset}
                                className="mt-8 bg-primary text-white font-heading font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                            >
                                Reset Catalog
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-24 animate-in fade-in duration-500">
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