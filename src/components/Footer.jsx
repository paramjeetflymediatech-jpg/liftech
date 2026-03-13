export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-900 dark:bg-black dark:text-gray-400 py-16 transition-colors border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-4 text-gray-950 dark:text-white uppercase tracking-wider text-sm">Liftech Exports</h4>
          <p className="text-gray-900 dark:text-gray-400">Harbanspura near Bijja Chowk</p>
          <p className="text-gray-900 dark:text-gray-400">Tehsil Samrala, GT Road</p>
          <p className="text-gray-900 dark:text-gray-400">Ludhiana‑141114, Punjab, India</p>
        </div>

        <div className="text-center">
          <h4 className="font-bold mb-4 text-gray-950 dark:text-white uppercase tracking-wider text-sm">Contact</h4>
          <p className="text-gray-900 dark:text-gray-400">📞 +91 (1628) 264574</p>
          <p className="text-gray-900 dark:text-gray-400">✉️ <a href="mailto:Info@liftechexports.com" className="underline hover:text-white transition-colors">Info@liftechexports.com</a></p>
        </div>

        <div className="text-center md:text-right">
          <h4 className="font-bold mb-4 text-gray-950 dark:text-white uppercase tracking-wider text-sm">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/products" className="hover:text-white transition-colors">Products</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/career" className="hover:text-white transition-colors">Careers</a>
          </nav>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Liftech Exports. All rights reserved.
      </div>
    </footer>
  );
}