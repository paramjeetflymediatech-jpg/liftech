import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-blue-800 to-indigo-900 dark:from-gray-900 dark:to-black text-white py-12 sm:py-20 transition-colors overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/toplink.jpg"
          alt="Toplink"
          className="w-full h-full object-cover opacity-20 sm:opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 sm:px-6 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fadeInUp">
            {t("hero.title")}
          </h2>

          <p className="text-base sm:text-lg text-gray-100 max-w-xl mx-auto md:mx-0">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="inline-block bg-primary text-white px-8 py-3.5 sm:py-4 rounded-xl text-lg font-bold hover:bg-baldan-red/90 transition-all duration-300 shadow-xl"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 sm:py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>

        <div className="hidden md:block relative animate-fadeInUp">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
          <img
            src="/images/toplink.jpg"
            alt="Toplink closeup"
            className="relative rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}