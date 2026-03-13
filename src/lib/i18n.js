import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.products": "Products",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.careers": "Careers",

      // Hero Section
      "hero.title": "Precision Tractor Linkage Parts",
      "hero.subtitle": "Manufacturer & Exporter of high-quality agricultural implement components from India.",
      "hero.cta": "Explore Products",

      // About Page
      "about.heritage": "Our Heritage",
      "about.title": "Engineering Trust",
      "about.since": "Since 1983.",
      "about.mission": "Our Mission",
      "about.quality": "Reliable High-Quality",
      "about.experience": "Extensive Experience",
      "about.founder.quote": "Time has changed, Things have changed, We evolved, world around us has evolved too.. But our determination and passion towards work is still the same",
      "about.founder.name": "Inderpal Singh",
      "about.founder.title": "Founder, Liftech Industries",

      // Manufacturing Page
      "manufacturing.title": "Production Capabilities",
      "manufacturing.subtitle": "Where Precision",
      "manufacturing.subtitle2": "Meets Scale.",
      "manufacturing.description": "Our state-of-the-art manufacturing facility in Ludhiana serves as the engineering heart of Liftech, combining decades of craftsmanship with modern industrial automation.",
      "manufacturing.certified": "Certified Quality",
      "manufacturing.expertise": "Expertise",

      // Contact Page
      "contact.title": "Contact Us",
      "contact.subtitle": "Let's Build the",
      "contact.subtitle2": "Future Together.",
      "contact.description": "Have a custom requirement or need technical assistance? Our global support team is ready to engineer the perfect solution for your agricultural needs.",
      "contact.form.title": "Send an Inquiry",
      "contact.form.name": "Full Name",
      "contact.form.email": "Email Address",
      "contact.form.subject": "Subject of interest",
      "contact.form.message": "Your Message",
      "contact.form.submit": "Submit Inquiry",
      "contact.form.name.placeholder": "e.g. John Doe",
      "contact.form.email.placeholder": "name@company.com",
      "contact.form.subject.placeholder": "How can we help?",
      "contact.form.message.placeholder": "Tell us about your requirements...",

      // Career Page
      "career.title": "Careers",
      "career.subtitle": "Join the",
      "career.subtitle2": "Engineering Elite.",
      "career.description": "At Liftech, we're always looking for passionate engineers, manufacturing experts, and visionaries to help us shape the future of global agricultural implements.",
      "career.apply": "Apply Now",
      "career.opportunities": "Global Opportunities",

      // Search
      "search": "Search",
      "search.placeholder": "Search products, categories, or parts...",
      "search.catalog": "Search Catalog",
      "loading": "Loading...",
    }
  },
  hi: {
    translation: {
      // Navigation
      "nav.products": "उत्पाद",
      "nav.about": "हमारे बारे में",
      "nav.contact": "संपर्क",
      "nav.careers": "करियर",

      // Hero Section
      "hero.title": "सटीक ट्रैक्टर कनेक्शन भाग",
      "hero.subtitle": "भारत से उच्च गुणवत्ता वाले कृषि कार्यान्वयन घटकों के निर्माता और निर्यातक।",
      "hero.cta": "उत्पाद देखें",

      // About Page
      "about.heritage": "हमारी विरासत",
      "about.title": "इंजीनियरिंग विश्वास",
      "about.since": "1983 से।",
      "about.mission": "हमारा मिशन",
      "about.quality": "विश्वसनीय उच्च गुणवत्ता",
      "about.experience": "व्यापक अनुभव",
      "about.founder.quote": "समय बदला, चीजें बदलीं, हम विकसित हुए, दुनिया भी विकसित हुई... लेकिन काम के प्रति हमारा संकल्प और जज्बा अभी भी वही है",
      "about.founder.name": "इंद्रपाल सिंह",
      "about.founder.title": "संस्थापक, लिफ्टेक इंडस्ट्रीज",

      // Manufacturing Page
      "manufacturing.title": "उत्पादन क्षमता",
      "manufacturing.subtitle": "जहां सटीकता",
      "manufacturing.subtitle2": "पैमाने से मिलती है।",
      "manufacturing.description": "लुधियाना में हमारी अत्याधुनिक विनिर्माण सुविधा लिफ्टेक का इंजीनियरिंग हृदय है, जो दशकों के शिल्प कौशल को आधुनिक औद्योगिक स्वचालन के साथ जोड़ती है।",
      "manufacturing.certified": "प्रमाणित गुणवत्ता",
      "manufacturing.expertise": "विशेषज्ञता",

      // Contact Page
      "contact.title": "संपर्क करें",
      "contact.subtitle": "आइए बनाएं",
      "contact.subtitle2": "भविष्य साथ मिलकर।",
      "contact.description": "कस्टम आवश्यकता है या तकनीकी सहायता चाहिए? हमारी वैश्विक सहायता टीम आपकी कृषि आवश्यकताओं के लिए सही समाधान तैयार करने के लिए तैयार है।",
      "contact.form.title": "प्रश्न भेजें",
      "contact.form.name": "पूरा नाम",
      "contact.form.email": "ईमेल पता",
      "contact.form.subject": "विषय",
      "contact.form.message": "आपका संदेश",
      "contact.form.submit": "प्रश्न भेजें",
      "contact.form.name.placeholder": "जॉन डो",
      "contact.form.email.placeholder": "name@company.com",
      "contact.form.subject.placeholder": "हम आपकी कैसे मदद कर सकते हैं?",
      "contact.form.message.placeholder": "अपनी आवश्यकताओं के बारे में बताएं...",

      // Career Page
      "career.title": "करियर",
      "career.subtitle": "शामिल हों",
      "career.subtitle2": "इंजीनियरिंग उत्कृष्टता में।",
      "career.description": "लिफ्टेक में, हम हमेशा जुनूनी इंजीनियरों, विनिर्माण विशेषज्ञों और विजनर्स की तलाश में रहते हैं जो वैश्विक कृषि उपकरणों के भविष्य को आकार देने में मदद कर सकें।",
      "career.apply": "अभी आवेदन करें",
      "career.opportunities": "वैश्विक अवसर",

      // Search
      "search": "खोज",
      "search.placeholder": "उत्पाद, श्रेणियां या भाग खोजें...",
      "search.catalog": "कैटलॉग खोजें",
      "loading": "लोड हो रहा है...",
    }
  },
  pa: {
    translation: {
      // Navigation
      "nav.products": "ਉਤਪਾਦ",
      "nav.about": "ਸਾਡੇ ਬਾਰੇ",
      "nav.contact": "ਸੰਪਰਕ",
      "nav.careers": "ਕਰੀਅਰ",

      // Hero Section
      "hero.title": "ਸਟੀਕ ਟਰੈਕਟਰ ਕਨੈਕਸ਼ਨ ਹਿੱਸੇ",
      "hero.subtitle": "ਭਾਰਤ ਤੋਂ ਉੱਚ ਗੁਣਵੱਤਾ ਵਾਲੇ ਕ੍ਰਿਸ਼ਿ ਲਾਗੂ ਕੰਪੋਨੈਂਟਸ ਦੇ ਨਿਰਮਾਤਾ ਅਤੇ ਨਿਰਯਾਤਕ।",
      "hero.cta": "ਉਤਪਾਦ ਦੇਖੋ",

      // About Page
      "about.heritage": "ਸਾਡੀ ਵਿਰਾਸਤ",
      "about.title": "ਇੰਜੀਨੀਅਰਿੰਗ ਟਰੱਸਟ",
      "about.since": "1983 ਤੋਂ।",
      "about.mission": "ਸਾਡਾ ਮਿਸ਼ਨ",
      "about.quality": "ਭਰੋਸੇਮੰਦ ਉੱਚ ਗੁਣਵੱਤਾ",
      "about.experience": "ਵੱਡਾ ਤਜਰਬਾ",
      "about.founder.quote": "ਸਮਾਂ ਬਦਲਿਆ, ਚੀਜ਼ਾਂ ਬਦਲੀਆਂ, ਅਸੀਂ ਵਿਕਸਿਤ ਹੋਏ, ਸਾਡੇ ਦੁਆਲੇ ਦੀ ਦੁਨੀਆ ਵੀ ਵਿਕਸਿਤ ਹੋਈ... ਪਰ ਕੰਮ ਪ੍ਰਤੀ ਸਾਡਾ ਦ੍ਰਿੜਤਾ ਅਤੇ ਜਜ਼ਬਾ ਅਜੇ ਵੀ ਉਹੀ ਹੈ",
      "about.founder.name": "ਇੰਦਰਪਾਲ ਸਿੰਘ",
      "about.founder.title": "ਸੰਸਥਾਪਕ, ਲਿਫਟੈਕ ਇੰਡਸਟਰੀਜ਼",

      // Manufacturing Page
      "manufacturing.title": "ਉਤਪਾਦਨ ਸਮਰੱਥਾ",
      "manufacturing.subtitle": "ਜਿੱਥੇ ਪ੍ਰੈਸ਼ਨ",
      "manufacturing.subtitle2": "ਪੈਮਾਨੇ ਨਾਲ ਮਿਲਦਾ ਹੈ।",
      "manufacturing.description": "ਲੁਧਿਆਨਾ ਵਿੱਚ ਸਾਡੀ ਅਧੁਨਿਕ ਵਿਰਾਮਟਿਕ ਜੋਤ ਲਿਫਟੈਕ ਦਾ ਇੰਜੀਨੀਅਰਿੰਗ ਦਿਲ ਹੈ, ਦਹਾਕਿਆਂ ਦੀ ਹੁਨਰਮੰਦੀ ਨੂੰ ਆਧੁਨਿਕ ਉਦਯੋਗਿਕ ਆਟੋਮੇਸ਼ਨ ਨਾਲ ਜੋੜਦਾ ਹੈ।",
      "manufacturing.certified": "ਪ੍ਰਮਾਣਿਤ ਗੁਣਵੱਤਾ",
      "manufacturing.expertise": "ਮੁਹਾਰਤ",

      // Contact Page
      "contact.title": "ਸੰਪਰਕ ਕਰੋ",
      "contact.subtitle": "ਆਓ ਬਣਾਈਏ",
      "contact.subtitle2": "ਭਵਿੱਖ ਇਕੱਠੇ।",
      "contact.description": "ਕੀ ਤੁਹਾਡੀ ਕਸਟਮ ਲੋੜ ਹੈ ਜਾਂ ਤਕਨੀਕੀ ਮਦਦ ਚਾਹੁੰਦੇ ਹੋ? ਸਾਡੀ ਗਲੋਬਲ ਸਹਾਇਤਾ ਟੀਮ ਤੁਹਾਡੀ ਖੇਤੀ ਲੋੜਾਂ ਲਈ ਸੰਪੂਰਨ ਹੱਲ ਤਿਆਰ ਕਰਨ ਲਈ ਤਿਆਰ ਹੈ।",
      "contact.form.title": "ਪ੍ਰਸ਼ਨ ਭੇਜੋ",
      "contact.form.name": "ਪੂਰਾ ਨਾਮ",
      "contact.form.email": "ਈਮੇਲ ਪਤਾ",
      "contact.form.subject": "ਵਿਸ਼ਾ",
      "contact.form.message": "ਤੁਹਾਡਾ ਸੰਦੇਸ਼",
      "contact.form.submit": "ਪ੍ਰਸ਼ਨ ਭੇਜੋ",
      "contact.form.name.placeholder": "ਜੌਨ ਡੋ",
      "contact.form.email.placeholder": "name@company.com",
      "contact.form.subject.placeholder": "ਅਸੀਂ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ?",
      "contact.form.message.placeholder": "ਆਪਣੀਆਂ ਲੋੜਾਂ ਬਾਰੇ ਦੱਸੋ...",

      // Career Page
      "career.title": "ਕਰੀਅਰ",
      "career.subtitle": "ਸ਼ਾਮਲ ਹੋਵੋ",
      "career.subtitle2": "ਇੰਜੀਨੀਅਰਿੰਗ ਸੀਮਾ ਵਿੱਚ।",
      "career.description": "ਲਿਫਟੈਕ ਵਿੱਚ, ਅਸੀਂ ਹਮੇਸ਼ਾ ਜਲਦੇ ਇੰਜੀਨੀਅਰਾਂ, ਵਿਰਾਮਟਿਕ ਮੁਹਾਰਤਾਂ ਅਤੇ ਵਿਜ਼ਨਰੀਜ਼ ਦੀ ਖੋਜ ਕਰਦੇ ਹਾਂ ਜੋ ਗਲੋਬਲ ਖੇਤੀ ਉਪਕਰਣਾਂ ਦੇ ਭਵਿੱਖ ਨੂੰ ਆਕਾਰ ਦੇ ਸਕਣ।",
      "career.apply": "ਹੁਣ ਅਰਜ਼ਮਾ ਕਰੋ",
      "career.opportunities": "ਗਲੋਬਲ ਮੌਕੇ",

      // Search
      "search": "ਖੋਜ",
      "search.placeholder": "ਉਤਪਾਦ, ਸ਼੍ਰੇਣੀਆਂ ਜਾਂ ਹਿੱਸੇ ਖੋਜੋ...",
      "search.catalog": "ਕੈਟਾਲਾਗ ਖੋਜੋ",
      "loading": "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    }
  },
  es: {
    translation: {
      // Navigation
      "nav.products": "Productos",
      "nav.about": "Acerca de",
      "nav.contact": "Contacto",
      "nav.careers": "Carreras",

      // Hero Section
      "hero.title": "Piezas de Enganche de Tractor de Precisión",
      "hero.subtitle": "Fabricante y Exportador de componentes de implementos agrícolas de alta calidad desde India.",
      "hero.cta": "Explorar Productos",

      // About Page
      "about.heritage": "Nuestra Herencia",
      "about.title": "Ingeniería de Confianza",
      "about.since": "Desde 1983.",
      "about.mission": "Nuestra Misión",
      "about.quality": "Alta Calidad Fiable",
      "about.experience": "Amplia Experiencia",
      "about.founder.quote": "El tiempo cambió, las cosas cambiaron, evolucionamos, el mundo a nuestro alrededor también evolucionó... Pero nuestra determinación y pasión por el trabajo sigue siendo la misma",
      "about.founder.name": "Inderpal Singh",
      "about.founder.title": "Fundador, Liftech Industries",

      // Manufacturing Page
      "manufacturing.title": "Capacidad de Producción",
      "manufacturing.subtitle": "Donde la Precisión",
      "manufacturing.subtitle2": "Se Encuentra con la Escala.",
      "manufacturing.description": "Nuestra instalación de manufactura de última generación en Ludhiana sirve como el corazón de ingeniería de Liftech, combinando décadas de artesanía con automatización industrial moderna.",
      "manufacturing.certified": "Calidad Certificada",
      "manufacturing.expertise": "Experiencia",

      // Contact Page
      "contact.title": "Contáctenos",
      "contact.subtitle": "Construyamos el",
      "contact.subtitle2": "Futuro Juntos.",
      "contact.description": "¿Tiene un requisito personalizado o necesita asistencia técnica? Nuestro equipo de soporte global está listo para diseñar la solución perfecta para sus necesidades agrícolas.",
      "contact.form.title": "Enviar Consulta",
      "contact.form.name": "Nombre Completo",
      "contact.form.email": "Correo Electrónico",
      "contact.form.subject": "Tema de Interés",
      "contact.form.message": "Su Mensaje",
      "contact.form.submit": "Enviar Consulta",
      "contact.form.name.placeholder": "ej. Juan Pérez",
      "contact.form.email.placeholder": "nombre@empresa.com",
      "contact.form.subject.placeholder": "¿Cómo podemos ayudar?",
      "contact.form.message.placeholder": "Cuéntenos sobre sus requisitos...",

      // Career Page
      "career.title": "Carreras",
      "career.subtitle": "Únete a la",
      "career.subtitle2": "Elite de Ingeniería.",
      "career.description": "En Liftech, siempre buscamos ingenieros apasionados, expertos en manufactura y visionarios para ayudarnos a dar forma al futuro de los implementos agrícolas globales.",
      "career.apply": "Aplica Ahora",
      "career.opportunities": "Oportunidades Globales",

      // Search
      "search": "Buscar",
      "search.placeholder": "Buscar productos, categorías o piezas...",
      "search.catalog": "Buscar Catálogo",
      "loading": "Cargando...",
    }
  },
  fr: {
    translation: {
      // Navigation
      "nav.products": "Produits",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.careers": "Carrières",

      // Hero Section
      "hero.title": "Pièces d'Attelage de Tracteur de Précision",
      "hero.subtitle": "Fabricant et Exportateur de composants d'outils agricoles de haute qualité depuis l'Inde.",
      "hero.cta": "Explorer les Produits",

      // About Page
      "about.heritage": "Notre Héritage",
      "about.title": "Ingénierie de Confiance",
      "about.since": "Depuis 1983.",
      "about.mission": "Notre Mission",
      "about.quality": "Haute Qualité Fiable",
      "about.experience": "Expérience Étendue",
      "about.founder.quote": "Le temps a changé, les choses ont changé, nous avons évolué, le monde autour de nous a aussi évolué... Mais notre détermination et notre passion pour le travail restent les mêmes",
      "about.founder.name": "Inderpal Singh",
      "about.founder.title": "Fondateur, Liftech Industries",

      // Manufacturing Page
      "manufacturing.title": "Capacité de Production",
      "manufacturing.subtitle": "Là où la Précision",
      "manufacturing.subtitle2": "Rencontre l'Échelle.",
      "manufacturing.description": "Notre installation de fabrication de pointe à Ludhiana sert de cœur'ingénierie de Liftech, combinant des décennies d'artisanat avec l'automatisation industrielle moderne.",
      "manufacturing.certified": "Qualité Certifiée",
      "manufacturing.expertise": "Expertise",

      // Contact Page
      "contact.title": "Contactez-nous",
      "contact.subtitle": "Construisons le",
      "contact.subtitle2": "Futur Ensemble.",
      "contact.description": "Avez-vous un besoin personnalisé ou avez-vous besoin d'une assistance technique? Notre équipe de support mondial est prête à concevoir la solution parfaite pour vos besoins agricoles.",
      "contact.form.title": "Envoyer une Demande",
      "contact.form.name": "Nom Complet",
      "contact.form.email": "Adresse E-mail",
      "contact.form.subject": "Sujet d'Intérêt",
      "contact.form.message": "Votre Message",
      "contact.form.submit": "Envoyer la Demande",
      "contact.form.name.placeholder": "ex. Jean Dupont",
      "contact.form.email.placeholder": "nom@entreprise.com",
      "contact.form.subject.placeholder": "Comment pouvons-nous aider?",
      "contact.form.message.placeholder": "Parlez-nous de vos besoins...",

      // Career Page
      "career.title": "Carrières",
      "career.subtitle": "Rejoignez l'Élite",
      "career.subtitle2": "de l'Ingénierie.",
      "career.description": "Chez Liftech, nous cherchons toujours des ingénieurs passionnés, des experts en fabrication et des visionnaires pour nous aider à façonner l'avenir des implements agricoles mondiaux.",
      "career.apply": "Postuler Maintenant",
      "career.opportunities": "Opportunités Mondiales",

      // Search
      "search": "Rechercher",
      "search.placeholder": "Rechercher des produits, catégories ou pièces...",
      "search.catalog": "Rechercher le Catalogue",
      "loading": "Chargement...",
    }
  },
  de: {
    translation: {
      // Navigation
      "nav.products": "Produkte",
      "nav.about": "Über uns",
      "nav.contact": "Kontakt",
      "nav.careers": "Karriere",

      // Hero Section
      "hero.title": "Präzise Traktor-Kupplungsteile",
      "hero.subtitle": "Hersteller und Exporteur hochwertiger landwirtschaftlicher Gerätekomponenten aus Indien.",
      "hero.cta": "Produkte erkunden",

      // About Page
      "about.heritage": "Unser Erbe",
      "about.title": "Technik Vertrauen",
      "about.since": "Seit 1983.",
      "about.mission": "Unsere Mission",
      "about.quality": "Zuverlässige Hohe Qualität",
      "about.experience": "Umfangreiche Erfahrung",
      "about.founder.quote": "Die Zeit hat sich geändert, die Dinge haben sich geändert, wir haben uns weiterentwickelt, die Welt um uns herum hat sich auch weiterentwickelt... Aber unsere Entschlossenheit und Leidenschaft für die Arbeit ist immer noch dieselbe",
      "about.founder.name": "Inderpal Singh",
      "about.founder.title": "Gründer, Liftech Industries",

      // Manufacturing Page
      "manufacturing.title": "Produktionskapazitäten",
      "manufacturing.subtitle": "Wo Präzision",
      "manufacturing.subtitle2": "Auf Skala Trifft.",
      "manufacturing.description": "Unsere hochmoderne Produktionsstätte in Ludhiana dient als technisches Herz von Liftech und verbindet jahrzehntelange Handwerkskunst mit moderner industrieller Automatisierung.",
      "manufacturing.certified": "Zertifizierte Qualität",
      "manufacturing.expertise": "Fachkompetenz",

      // Contact Page
      "contact.title": "Kontaktieren Sie Uns",
      "contact.subtitle": "Lassen Sie Uns die",
      "contact.subtitle2": "Zukunft Gemeinsam Bauen.",
      "contact.description": "Haben Sie eine individuelle Anforderung oder benötigen Sie technische Unterstützung? Unser globales Support-Team ist bereit, die perfekte Lösung für Ihre landwirtschaftlichen Bedürfnisse zu entwickeln.",
      "contact.form.title": "Anfrage Senden",
      "contact.form.name": "Vollständiger Name",
      "contact.form.email": "E-Mail-Adresse",
      "contact.form.subject": "Interessengebiet",
      "contact.form.message": "Ihre Nachricht",
      "contact.form.submit": "Anfrage Senden",
      "contact.form.name.placeholder": "z.B. Max Mustermann",
      "contact.form.email.placeholder": "name@firma.de",
      "contact.form.subject.placeholder": "Wie können wir helfen?",
      "contact.form.message.placeholder": "Erzählen Sie uns von Ihren Anforderungen...",

      // Career Page
      "career.title": "Karriere",
      "career.subtitle": "Schließen Sie Sich der",
      "career.subtitle2": "Engineering-Elite an.",
      "career.description": "Bei Liftech suchen wir immer leidenschaftliche Ingenieure, Fertigungsexperten und Visionäre, die uns helfen, die Zukunft der globalen landwirtschaftlichen Geräte zu gestalten.",
      "career.apply": "Jetzt Bewerben",
      "career.opportunities": "Globale Möglichkeiten",

      // Search
      "search": "Suchen",
      "search.placeholder": "Produkte, Kategorien oder Teile suchen...",
      "search.catalog": "Katalog Durchsuchen",
      "loading": "Laden...",
    }
  },
  'zh-CN': {
    translation: {
      // Navigation
      "nav.products": "产品",
      "nav.about": "关于我们",
      "nav.contact": "联系我们",
      "nav.careers": "职业",

      // Hero Section
      "hero.title": "精密拖拉机连接件",
      "hero.subtitle": "来自印度的优质农业器械部件制造商和出口商。",
      "hero.cta": "探索产品",

      // About Page
      "about.heritage": "我们的传承",
      "about.title": "工程信任",
      "about.since": "自1983年以来。",
      "about.mission": "我们的使命",
      "about.quality": "可靠的高品质",
      "about.experience": "丰富经验",
      "about.founder.quote": "时间变了，事情变了，我们进步了，世界也在进步...但我们对工作的决心和热情依然如故",
      "about.founder.name": "Inderpal Singh",
      "about.founder.title": "创始人，Liftech Industries",

      // Manufacturing Page
      "manufacturing.title": "生产能力",
      "manufacturing.subtitle": "精密",
      "manufacturing.subtitle2": "与规模相遇之处。",
      "manufacturing.description": "我们位于卢迪亚纳的最先进制造设施是Liftech的工程核心，将数十年的 craftsmanship 与现代工业自动化相结合。",
      "manufacturing.certified": "认证品质",
      "manufacturing.expertise": "专业知识",

      // Contact Page
      "contact.title": "联系我们",
      "contact.subtitle": "让我们共同",
      "contact.subtitle2": "创造未来。",
      "contact.description": "有个性化需求或需要技术支持？我们的全球支持团队随时准备为您量身打造完美的农业解决方案。",
      "contact.form.title": "发送咨询",
      "contact.form.name": "全名",
      "contact.form.email": "电子邮件地址",
      "contact.form.subject": "感兴趣的主题",
      "contact.form.message": "您的留言",
      "contact.form.submit": "提交咨询",
      "contact.form.name.placeholder": "例如：张三",
      "contact.form.email.placeholder": "name@company.com",
      "contact.form.subject.placeholder": "我们如何帮助您？",
      "contact.form.message.placeholder": "告诉我们您的需求...",

      // Career Page
      "career.title": "职业",
      "career.subtitle": "加入",
      "career.subtitle2": "工程精英团队。",
      "career.description": "在Liftech，我们一直在寻找热情的工程师、制造专家和远见卓识者，帮助塑造全球农业设备的未来。",
      "career.apply": "立即申请",
      "career.opportunities": "全球机会",

      // Search
      "search": "搜索",
      "search.placeholder": "搜索产品、类别或零件...",
      "search.catalog": "搜索目录",
      "loading": "加载中...",
    }
  },
  ar: {
    translation: {
      // Navigation
      "nav.products": "المنتجات",
      "nav.about": "معلومات عنا",
      "nav.contact": "اتصل بنا",
      "nav.careers": "وظائف",

      // Hero Section
      "hero.title": "قطع غيار ربط الجرار الدقيقة",
      "hero.subtitle": "مصنع ومصدر لمكونات الأدوات الزراعية عالية الجودة من الهند.",
      "hero.cta": "استكشف المنتجات",

      // About Page
      "about.heritage": "تراثنا",
      "about.title": "ثقة الهندسة",
      "about.since": "منذ 1983.",
      "about.mission": "مهمتنا",
      "about.quality": "جودة عالية وموثوقة",
      "about.experience": "خبرة واسعة",
      "about.founder.quote": "تغير الوقت، تغيرت الأشياء، تطورنا، والعالم من حولنا تطور أيضاً... لكن عزمنا وشغفنا بالعمل لا يزال كما هو",
      "about.founder.name": "إندربال سينغ",
      "about.founder.title": "المؤسس، لفتيك إندستريز",

      // Manufacturing Page
      "manufacturing.title": "القدرات الإنتاجية",
      "manufacturing.subtitle": "حيث الدقة",
      "manufacturing.subtitle2": "تلتقي بالمقياس.",
      "manufacturing.description": "تخدم مرافق التصنيع الحديثة لدينا في لوديانا القلب الهندسي لشركة لفتيك، Combining decades of craftsmanship with modern industrial automation.",
      "manufacturing.certified": "جودة معتمدة",
      "manufacturing.expertise": "خبرة",

      // Contact Page
      "contact.title": "اتصل بنا",
      "contact.subtitle": "دعنا نبني",
      "contact.subtitle2": "المستقبل معاً.",
      "contact.description": "هل لديك متطلبات مخصصة أو تحتاج إلى مساعدة تقنية؟ فريق الدعم العالمي لدينا مستعد لتصميم الحل المثالي لاحتياجاتك الزراعية.",
      "contact.form.title": "إرسال استفسار",
      "contact.form.name": "الاسم الكامل",
      "contact.form.email": "البريد الإلكتروني",
      "contact.form.subject": "موضوع الاهتمام",
      "contact.form.message": "رسالتك",
      "contact.form.submit": "إرسال الاستفسار",
      "contact.form.name.placeholder": "مثال: أحمد محمد",
      "contact.form.email.placeholder": "name@company.com",
      "contact.form.subject.placeholder": "كيف يمكننا مساعدتك؟",
      "contact.form.message.placeholder": "أخبرنا عن متطلباتك...",

      // Career Page
      "career.title": "وظائف",
      "career.subtitle": "انضم إلى",
      "career.subtitle2": "نخبة الهندسة.",
      "career.description": "في لفتيك، نبحث دائماً عن مهندسين شغوفين وخبراء التصنيع ورجال رؤية لمساعدتنا في تشكيل مستقبل الأدوات الزراعية العالمية.",
      "career.apply": "قدم الآن",
      "career.opportunities": "فرص عالمية",

      // Search
      "search": "بحث",
      "search.placeholder": "البحث عن المنتجات أو الفئات أو القطع...",
      "search.catalog": "بحث في الكتالوج",
      "loading": "جارٍ التحميل...",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Fixed language for SSR to prevent hydration mismatch
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    }
  });

export default i18n;
