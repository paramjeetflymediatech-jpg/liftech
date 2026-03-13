"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';
import SearchOverlay from "./SearchOverlay";
import LanguageSelector from "./LanguageSelector";
import LanguageTranslator from "./LanguageTranslator";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

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
    { href: "/products", label: t("nav.products") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/career", label: t("nav.careers") },
  ];

  const isHome = pathname === "/";
  const showSolid = scrolled || !isHome;
  
  // High contrast text color logic
  const textColor = showSolid ? "text-gray-950 dark:text-white" : "text-white";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-200 py-3 shadow-md"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-6">
        <Link href="/" className="flex items-center group shrink-0">
          <div className="flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="Liftech Logo"
              className="h-8 sm:h-10 w-auto"
            />
            <span className={`ml-2 sm:ml-3 font-heading font-black text-sm sm:text-xl md:text-2xl tracking-tight transition-colors whitespace-nowrap ${textColor}`}>
              LIFTECH
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-heading font-medium text-sm transition-all duration-300 hover:text-primary ${
                  isActive ? "text-primary" : textColor
                } group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
          
          <button
            onClick={() => setSearchOpen(true)}
            className="bg-primary text-white p-2.5 rounded-full hover:bg-baldan-red/90 transition-all duration-300 shadow-lg flex items-center justify-center"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <div className="max-w-[150px] overflow-hidden shrink-0">
            <LanguageTranslator uniqueId="translator-desktop" />
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2 sm:gap-4 shrink-0">
          {/* Mobile Language Button */}
          <button
            onClick={() => {
              const el = document.querySelector('.goog-te-menu-frame');
              if (el) el.style.display = 'block';
              else alert('Please wait for translation to load, or use desktop view for best experience');
            }}
            className="relative z-10 shrink-0 flex items-center gap-1 px-2 py-1.5 rounded-full border border-gray-200 bg-white"
            aria-label="Select language"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className={`p-1.5 sm:p-2 rounded-xl transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
          <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 origin-top ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-heading font-bold text-gray-800 hover:text-primary border-l-4 border-transparent hover:border-primary pl-4 transition-all"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setSearchOpen(true);
              setOpen(false);
            }}
            className="mt-4 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl text-primary font-heading font-bold"
          >
            Search Catalog
          </button>
        </div>
      </div>

      <SearchOverlay 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </header>
  );
}
