"use client";
import { useTranslation } from 'react-i18next';

export default function Manufacturing() {
  const { t } = useTranslation();
  const features = [
    {
      title: "Advanced Machine Shop",
      desc: "Equipped with high-precision CNC machines, VMCs, and automated turning centers for consistent accuracy in every component.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 114 0v2m7 0V9a2 2 0 00-2-2M9 11V9" />
        </svg>
      )
    },
    {
      title: "Forging & Heat Treatment",
      desc: "In-house forging facility with controlled heat treatment processes ensuring superior grain structure and exceptional load capacity.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Quality Control Lab",
      desc: "ISO 9001:2015 certified production environment with rigorous testing including hardness, tensile, and dimensional verification.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "R&D Infrastructure",
      desc: "Dedicated R&D unit focused on material optimization and engineering innovative solutions for modern agricultural challenges.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 11-4 0V4zM7 11a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z" />
        </svg>
      )
    }
  ];

  return (
    <section id="manufacturing" className="py-12 sm:py-32 bg-gray-50 dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center mb-16 sm:mb-32">
          <div className="animate-fadeInUp">
            <h2 className="text-sm font-heading font-black uppercase tracking-[0.4em] text-primary mb-6">
              {t('manufacturing.title')}
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-gray-900 dark:text-white leading-[1.1] mb-8">
              {t('manufacturing.subtitle')} <br />
              <span className="text-gray-400">{t('manufacturing.subtitle2')}</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-body leading-relaxed max-w-xl">
              {t('manufacturing.description')}
            </p>
            
            <div className="mt-8 sm:mt-12 flex gap-8 sm:gap-12 border-t border-gray-200 dark:border-gray-800 pt-8 sm:pt-12">
              <div>
                <p className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white">{t('manufacturing.certified')}</p>
                <p className="text-[10px] sm:text-xs font-heading font-black uppercase tracking-widest text-primary mt-2">Certified Quality</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white">{t('manufacturing.expertise')}</p>
                <p className="text-[10px] sm:text-xs font-heading font-black uppercase tracking-widest text-primary mt-2">Expertise</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slideInRight">
            <div className="aspect-[4/5] rounded-3xl sm:rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="/images/clevispin.jpg" 
                alt="Liftech Manufacturing Facility" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-sm font-heading font-bold uppercase tracking-widest opacity-80 mb-2">Modern Production</p>
                <p className="text-2xl font-heading font-bold">Ludhiana Infrastructure</p>
              </div>
            </div>
            {/* Floating Accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-full -z-10 animate-pulse" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 group animate-fadeInUp"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="text-xl font-heading font-bold mb-4 dark:text-white">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
