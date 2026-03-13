"use client";
import { useState, useEffect, useRef } from "react";
import { Languages } from "lucide-react";

export default function LanguageTranslator({ uniqueId = "google_translate_element" }) {
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  
  // Use refs to avoid SSR issues
  const translatorInitialized = useRef(false);
  const scriptLoaded = useRef(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    // Hide Google Translate banner
    const hideBanner = () => {
      if (typeof window === 'undefined') return;
      const frames = document.querySelectorAll('.goog-te-banner-frame, .skiptranslate');
      frames.forEach(f => {
        if (f) f.style.cssText = 'display: none !important; height: 0 !important;';
      });
      if (document.body) document.body.style.marginTop = '0';
    };

    // Initialize translator
    const init = () => {
      if (translatorInitialized.current) {
        setReady(true);
        return;
      }

      if (typeof window === 'undefined' || !window.google || !window.google.translate) {
        return;
      }

      try {
        const container = document.getElementById(uniqueId);
        if (container && !container.querySelector('.goog-te-gadget')) {
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
        }
      } catch (e) {
        console.error('Translator init error:', e);
      }
    };

    // Load Google Translate script
    const loadScript = () => {
      if (scriptLoaded.current) {
        setTimeout(init, 1000);
        return;
      }

      if (typeof window === 'undefined') return;

      window.googleTranslateElementInit = () => {
        scriptLoaded.current = true;
        setTimeout(init, 500);
      };
      
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = () => console.error('Failed to load Google Translate');
      document.body.appendChild(script);
    };

    if (initializedRef.current) return;
    initializedRef.current = true;

    if (typeof window !== 'undefined') {
      if (!window.google || !window.google.translate) {
        loadScript();
      } else {
        init();
      }

      // Interval to hide banner
      const interval = setInterval(hideBanner, 500);
      setTimeout(() => clearInterval(interval), 10000);

      return () => clearInterval(interval);
    }
  }, [uniqueId]);

  // Use the same structure on both server and client to prevent hydration mismatch
  // Only the content differs: "Loading..." on server, actual widget on client
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
      <Languages className="w-4 h-4 text-gray-500 group-hover:text-primary" />
      {!ready ? (
        <span className="text-[13px] font-semibold text-gray-400">Loading...</span>
      ) : (
        <div id={uniqueId} className="translate-widget" />
      )}
      
      <style jsx global>{`
        .goog-te-banner-frame { display: none !important; height: 0 !important; }
        .goog-te-gadget-simple {
          background: transparent !important;
          border: none !important;
          padding: 4px 8px !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          color: #374151 !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
        }
        .goog-te-menu-frame {
          position: fixed !important;
          z-index: 99999 !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </div>
  );
}
