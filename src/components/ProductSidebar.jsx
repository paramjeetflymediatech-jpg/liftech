"use client";
import { useState } from "react";

export default function ProductSidebar({ categories, active, onSelect }) {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  
  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);
  const paginatedCategories = categories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <aside className="w-full lg:w-64 lg:sticky lg:top-24 self-start bg-gray-50/50 lg:bg-transparent -mx-4 px-4 sm:mx-0 sm:px-0 py-6 lg:py-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-heading font-black uppercase tracking-[0.3em] text-gray-400">
          Catalog Index
        </h3>
        {/* Pagination indicators on desktop */}
        <div className="hidden lg:flex gap-1">
          {[...Array(totalPages)].map((_, i) => (
            <div 
              key={i} 
              className={`w-1 h-1 rounded-full transition-all ${currentPage === i + 1 ? 'w-4 bg-primary' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="lg:hidden flex overflow-x-auto pb-4 gap-3 no-scrollbar snap-x">
        {categories.map((cat, i) => {
          const selected = active === cat.slug;
          return (
            <button
              key={i}
              onClick={() => onSelect && onSelect(cat.slug)}
              className={`flex-shrink-0 snap-start px-6 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-widest transition-all border ${
                selected
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-500 hover:border-primary/30"
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Desktop Vertical List with Pagination */}
      <div className="hidden lg:block space-y-2">
        <ul className="space-y-1">
          {paginatedCategories.map((cat, i) => {
            const selected = active === cat.slug;
            return (
              <li key={i}>
                <button
                  onClick={() => onSelect && onSelect(cat.slug)}
                  className={`group flex items-center w-full p-4 rounded-2xl transition-all ${
                    selected
                      ? "bg-primary text-white shadow-xl shadow-primary/20"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-primary"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full mr-4 transition-all ${selected ? 'bg-white scale-125' : 'bg-gray-300 group-hover:bg-primary'}`} />
                  <span className="text-sm font-heading font-bold tracking-tight">
                    {cat.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-6 mt-4 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 text-gray-400 hover:text-primary disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-[10px] font-heading font-black text-gray-300 uppercase tracking-widest">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-400 hover:text-primary disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}