"use client";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const quotes = [
    {
      text: "We've relied on Liftech parts for over a decade. Always dependable, even in the most demanding conditions.",
      author: "Ravi Kumar",
      role: "Operations Manager, Harvest Pros",
    },
    {
      text: "Great service and quick delivery even overseas. Their custom manufacturing capability is unmatched in the industry.",
      author: "Jorge Silva",
      role: "Procurement Lead, Silva Agri-Distributors",
    },
    {
      text: "Quality that stands the test of time in the field. Liftech has become an essential partner for our contracting business.",
      author: "Meera Patel",
      role: "Founder, GreenField Agricultural Services",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-2/5">
            <h2 className="text-sm font-heading font-black uppercase tracking-[0.3em] text-primary mb-4">
              Testimonials
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Trusted by Professionals <br />
              <span className="text-white/40">Worldwide.</span>
            </h3>
            <div className="mt-10 flex gap-3">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    active === i ? "w-12 bg-primary" : "w-6 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-3/5 relative">
             {/* Quote Icon */}
             <div className="absolute -top-10 -left-10 text-primary/20 pointer-events-none">
                <svg className="w-32 h-32 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017C11.4647 13 11.017 12.5523 11.017 12V9C11.017 7.34315 12.3601 6 14.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C4.44772 8 4 8.44772 4 9V12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12V9C0 7.34315 1.34315 6 3 6H8C9.65685 6 11 7.34315 11 9V15C11 18.3137 8.31371 21 5 21H3Z" />
                </svg>
             </div>

            <div className="relative h-64 md:h-48">
              {quotes.map((q, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    active === i 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-12 pointer-events-none"
                  }`}
                >
                  <p className="text-2xl md:text-3xl font-body text-gray-300 italic leading-relaxed">
                    "{q.text}"
                  </p>
                  <div className="mt-8">
                    <h4 className="font-heading font-black text-white text-xl uppercase tracking-wider">
                      {q.author}
                    </h4>
                    <p className="text-primary font-heading font-bold text-sm tracking-widest mt-1 uppercase">
                      {q.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
