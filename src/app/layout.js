import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import I18nProvider from "../components/I18nProvider";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Liftech - Precision Tractor Linkage Parts",
  description: "Manufacturer & Exporter of high-quality agricultural implement components from India.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <style dangerouslySetInnerHTML={{ __html: `
          .goog-te-banner-frame, .goog-te-banner-frame.skiptranslate { display: none !important; }
          body { margin-top: 0px !important; }
          #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
          .goog-te-gadget { font-size: 0 !important; }
          .goog-te-gadget > span { display: none !important; }
        `}} />
      </head>
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-body overflow-x-hidden w-full relative`}
        suppressHydrationWarning
      >
        <I18nProvider>
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
