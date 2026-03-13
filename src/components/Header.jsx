"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/career", label: "Careers" },
  ];

  const isHome = pathname === "/";
  const showSolid = scrolled || !isHome;
  const textColor = showSolid ? "text-gray-900 dark:text-white" : "text-white";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        showSolid
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-xl py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link href="/" className="flex items-center group">
          <div className="bg-primary p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
            <img
              src="/assets/images/logo.png"
              alt="Liftech Logo"
              className="h-7 w-auto brightness-0 invert"
            />
          </div>
          <span className={`ml-3 font-black text-2xl tracking-tighter transition-colors duration-300 ${textColor}`}>
            LIFTECH
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary ${
                  isActive ? "text-primary" : textColor
                } group`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
          
          <button
            onClick={toggle}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              showSolid
                ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-gray-900"
                : "bg-white/10 backdrop-blur-md text-white hover:bg-white/30"
            }`}
            aria-label="Toggle dark mode"
          >
            <span className="text-xl leading-none">{dark ? "☀️" : "🌙"}</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-xl transition-colors ${textColor}`}
          aria-label="Toggle menu"
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-2xl transition-all duration-300 origin-top ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-bold text-gray-800 dark:text-gray-200 hover:text-primary border-l-4 border-transparent hover:border-primary pl-4 transition-all"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-2 mt-4 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
