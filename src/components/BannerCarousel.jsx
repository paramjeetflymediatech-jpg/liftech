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
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        visible ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start p-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 max-w-2xl">
          {slide.title}
        </h2>

        <p className="text-lg md:text-xl text-white mb-6 max-w-xl">
          {slide.subtitle}
        </p>

        <Link
          href={slide.href}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition transform hover:scale-105"
        >
          {slide.cta}
        </Link>
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
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">

      {slides.map((slide, i) => (
        <Slide key={i} slide={slide} visible={i === index} />
      ))}

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full ${
              index === i ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}