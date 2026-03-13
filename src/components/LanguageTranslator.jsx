"use client";
import { useState, useEffect, useRef } from "react";
import { Languages } from "lucide-react";

export default function LanguageTranslator({ uniqueId = "google_translate_element" }) {
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const translatorInitialized = useRef(false);

  useEffect(() => {
    setMounted(true);

    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        initTranslator();
      } else if (!document.getElementById('google-translate-script')) {
        loadScript();
      }
    };

    const loadScript = () => {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        initTranslator();
      };
    };

    const initTranslator = () => {
      if (translatorInitialized.current) return;
      
      const element = document.getElementById(uniqueId);
      if (element) {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi,pa,es,fr,de,zh-CN,ar",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            uniqueId
          );
          translatorInitialized.current = true;
          setReady(true);
        } catch (e) {
          console.error("Translation init error:", e);
        }
      }
    };

    // Delay a bit to ensure DOM is ready
    const timer = setTimeout(checkGoogleTranslate, 500);
    
    // Periodically check if banner appears and hide it
    const interval = setInterval(() => {
      const banner = document.querySelector('.goog-te-banner-frame');
      if (banner) {
        banner.style.display = 'none';
        document.body.style.top = '0';
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [uniqueId]);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm">
        <Languages className="w-4 h-4 text-gray-400" />
        <span className="text-[13px] font-semibold text-gray-400 uppercase">Lang</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer overflow-hidden max-w-full">
      <Languages className="w-4 h-4 text-gray-500 group-hover:text-primary shrink-0" />
      <div id={uniqueId} className="translate-widget" />
      
      {!ready && !translatorInitialized.current && (
        <span className="text-[12px] font-bold text-gray-400 animate-pulse uppercase tracking-tight">Loading...</span>
      )}

      <style jsx global>{`
        .goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; }
        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
          display: flex !important;
          align-items: center !important;
          font-family: inherit !important;
        }
        .goog-te-gadget-icon { display: none !important; }
        .goog-te-menu-value {
          margin: 0 !important;
          color: #374151 !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          display: flex !important;
          align-items: center !important;
          text-transform: uppercase !important;
        }
        .goog-te-menu-value span { color: #374151 !important; }
        .goog-te-menu-value img { display: none !important; }
        .goog-te-gadget-simple .goog-te-menu-value:after {
          content: '▼';
          font-size: 8px;
          margin-left: 4px;
          color: #9ca3af;
        }
        .goog-te-menu-frame {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
          border-radius: 0.5rem !important;
          border: 1px solid #e5e7eb !important;
        }
      `}</style>
    </div>
  );
}
