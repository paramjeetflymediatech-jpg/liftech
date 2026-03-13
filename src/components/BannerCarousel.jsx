"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    title: "Designed for Tough Conditions",
    subtitle: "Liftech linkage parts endure the harshest use",
    image: "/assets/slide 1.jpg",
    href: "/products",
    cta: "View Products",
  },
  {
    title: "Custom Parts to Your Specs",
    subtitle: "We design and manufacture according to your requirements",
    image: "/assets/slide-2.jpg",
    href: "/contact",
    cta: "Get a Quote",
  },
  {
    title: "Exporting Since 1998",
    subtitle: "Proudly made in Ludhiana, shipped worldwide",
    image: "/assets/slide-3.jpg",
    href: "/about",
    cta: "Our Story",
  },
];

function Slide({ slide, visible }) {
  if (!visible) return null; // Only render the visible slide to prevent any interference
  
  return (
    <div className="absolute inset-0 z-10 animate-in fade-in duration-700">
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center items-start p-12 md:p-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 leading-tight">
            {slide.title}
          </h2>
  
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl font-body">
            {slide.subtitle}
          </p>
  
          <Link
            href={slide.href}
            className="group relative bg-primary hover:bg-baldan-red/90 text-white px-10 py-4 rounded-full font-heading font-bold transition-all duration-300 shadow-xl inline-flex items-center overflow-hidden"
          >
            <span className="relative z-10">{slide.cta}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative h-[600px] md:h-[800px] overflow-hidden">

      {slides.map((slide, i) => (
        <Slide key={i} slide={slide} visible={i === index} />
      ))}

      {/* arrows */}
      <div className="hidden md:block">
        <button
          onClick={prev}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 border border-white/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 border border-white/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === i ? "w-10 bg-primary" : "w-4 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </div>
  );
}