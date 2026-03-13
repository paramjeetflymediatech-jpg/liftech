"use client";
import Link from "next/link";
import Image from "next/image";
import { productCategories } from "../data/productCategories";

const FALLBACK = "/assets/images/logo.png";

export default function About() {
  const samples = productCategories.flatMap((c) => 
    c.products.map(p => ({ ...p, categorySlug: c.slug }))
  ).slice(0, 6);

  return (
    <section id="about" className="bg-white dark:bg-gray-950 py-24 transition-colors overflow-hidden">
      {/* Hero Content / History */}
      <div className="max-w-5xl mx-auto px-6 mb-24 relative animate-fadeInUp">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <h2 className="text-sm font-heading font-black uppercase tracking-[0.3em] text-primary mb-6 text-center">
          Our Heritage
        </h2>
        <h3 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 dark:text-white text-center leading-[1.1] mb-12">
          Engineering Trust <br />
          <span className="text-gray-300">Since 1983.</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Liftech started its operation primarily as a cycle parts manufacturer in 1983, 
            supplying the Indian markets and receiving an overwhelming response for its quality. 
            Under the visionary leadership of Mr. Inderpal Singh, the company navigated through 
            early cycles of growth and adaptation to establish a global footprint.
          </p>
          <p>
            Today, after more than 25 years in the specialized manufacturing of tractor linkage 
            and implement parts, we have a clear understanding of the features and solutions 
            that users appreciate. Our products are exported worldwide, built on a foundation 
            of precision and reliability.
          </p>
        </div>

        {/* Founder Quote Block */}
        <div className="mt-20 py-12 border-y border-gray-100 dark:border-gray-800 relative group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-950 px-6">
            <svg className="w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017C11.4647 13 11.017 12.5523 11.017 12V9C11.017 7.34315 12.3601 6 14.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C4.44772 8 4 8.44772 4 9V12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12V9C0 7.34315 1.34315 6 3 6H8C9.65685 6 11 7.34315 11 9V15C11 18.3137 8.31371 21 5 21H3Z" />
            </svg>
          </div>
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-body italic text-gray-900 dark:text-white leading-relaxed max-w-4xl mx-auto">
              "Time has changed, Things have changed, We evolved, world around us has evolved too.. But our determination and passion towards work is still the same"
            </p>
            <footer className="mt-6">
              <span className="text-primary font-heading font-black uppercase tracking-[0.2em] text-sm">Inderpal Singh</span>
              <span className="text-gray-400 text-xs ml-3 border-l border-gray-300 dark:border-gray-700 pl-3">Founder, Liftech Industries</span>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Strategic Value Blocks */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "Our Mission",
            text: "Being a customer-oriented firm, we aim at manufacturing high quality spare parts with prompt delivery at a competitive price. We are committed to international market competitiveness through continual improvement.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          },
          {
            title: "Reliable High-Quality",
            text: "Our products are manufactured in India with modern production technology. The production and quality at our plants is controlled in accordance with the ISO 9001 standard. This makes it possible for us to ensure the high quality of our products.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          {
            title: "Extensive Experience",
            text: "In addition, we have more than 17 years of experience in the manufacturing of our products, which has given us a clear understanding of the features and solutions that users appreciate.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 114 0v2m7 0V9a2 2 0 00-2-2M9 11V9" />
              </svg>
            )
          }
        ].map((item, i) => (
          <div key={i} className="group p-10 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: `${(i + 1) * 200}ms` }}>
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h4 className="text-2xl font-heading font-black mb-4 dark:text-white uppercase tracking-tight">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Showcase Card Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-xs font-heading font-black uppercase tracking-[0.4em] text-primary mb-4">Industrial Showcase</h3>
            <p className="text-3xl font-heading font-bold dark:text-white">Precision Components</p>
          </div>
          <Link href="/products" className="text-primary font-heading font-bold text-sm uppercase tracking-widest hover:translate-x-2 transition-transform hidden md:flex items-center gap-2">
            View All Products <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((p) => (
            <Link
              key={`${p.categorySlug}-${p.slug}`}
              href={`/products/${p.categorySlug}/${p.slug}`}
              className="group relative h-80 bg-gray-50 dark:bg-gray-900 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-0 p-12 flex items-center justify-center">
                <Image
                  src={p.image || FALLBACK}
                  alt={p.name}
                  fill
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                  unoptimized={true}
                />
              </div>
              
              {/* Force visible overlay fixed for consistency */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                <span className="text-primary text-[10px] font-heading font-black uppercase tracking-[0.3em] mb-2">View Details</span>
                <h5 className="text-white text-xl font-heading font-bold leading-tight">{p.name}</h5>
              </div>

              {/* Static name badge for better visibility when not hovered */}
              <div className="absolute top-6 left-6 bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm group-hover:opacity-0 transition-opacity">
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest dark:text-white line-clamp-1">{p.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
