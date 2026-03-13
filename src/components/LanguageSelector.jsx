"use client";
import { useState, useEffect } from "react";
import { Languages } from "lucide-react";
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export default function LanguageSelector({ uniqueId = "language-selector" }) {
  try {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('en');

    useEffect(() => {
      const savedLang = localStorage.getItem('i18nextLng') || 'en';
      setCurrentLanguage(savedLang);
    }, []);

    const handleLanguageChange = (langCode) => {
      i18n.changeLanguage(langCode);
      setCurrentLanguage(langCode);
      setIsOpen(false);
    };

    const currentLangData = languages.find(lang => lang.code === currentLanguage) || languages[0];

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group max-w-full overflow-hidden"
          aria-label="Select language"
        >
          <Languages className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors shrink-0" />
          <span className="text-[10px] sm:text-[13px] font-semibold uppercase tracking-tight text-gray-600 dark:text-gray-300 truncate">
            {currentLangData.flag} {currentLangData.code}
          </span>
          <svg
            className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-3 ${
                  currentLanguage === language.code ? 'bg-primary/10 text-primary' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
                <span className="text-xs text-gray-500 ml-auto uppercase">{language.code}</span>
              </button>
            ))}
          </div>
        )}

        {/* Click outside to close */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('LanguageSelector error:', error);
    return (
      <div className="relative">
        <span className="text-red-500 text-xs">LANG ERROR</span>
      </div>
    );
  }
}