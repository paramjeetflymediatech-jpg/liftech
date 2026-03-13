"use client";
import Image from "next/image";
import { use, useState } from "react";
import { productCategories } from "../data/productCategories";

const ABOUT_IMAGE = "/assets/aboutus-background-image.png";
const FALLBACK = "/assets/images/logo.png";

function GalleryItem({ product }) {
  return (
    <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200">
      <Image
        src={product.image || FALLBACK}
        alt={product.name}
        fill
        className="object-cover"
        unoptimized={true}
      />
      <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs text-center py-1">
        {product.name}
      </span>
    </div>
  );
}

export default function About() {
  // pick a handful of products to show in the about page gallery
  const samples = productCategories.flatMap((c) => c.products).slice(0, 6);

  return (
    <section id="about" className="bg-white dark:bg-gray-950 py-24 transition-colors">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Liftech Industries India Pvt. Ltd. was founded in Ludhiana in 1998 by
          Inderpal Singh. Over two decades we have grown into a trusted
          manufacturer & exporter of tractor linkage and implement parts,
          delivering rigorously tested products to farmers around the world.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        <div className="w-full relative shadow-lg rounded-xl overflow-hidden animate-fade-in-up">
          <Image
            src={ABOUT_IMAGE}
            alt="LifeTech Products"
            fill
            className="object-cover"
            unoptimized={true}
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Deliver robust linkage parts built to last.</li>
            <li>Provide exceptional customer service worldwide.</li>
            <li>Innovate continuously with precision engineering.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          Featured Products
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {samples.map((p) => (
            <div
              key={p.slug}
              className="relative h-36 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow hover:shadow-2xl transform hover:scale-105 transition"
            >
              <GalleryItem product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
