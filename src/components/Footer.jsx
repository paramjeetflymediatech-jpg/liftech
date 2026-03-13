export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="Liftech Logo"
              className="h-30 w-auto"
            />
            <span className="ml-3 font-heading font-bold text-2xl tracking-tight text-white uppercase">
              LIFTECH
            </span>
          </div>
          <p className="text-gray-500 font-body leading-relaxed">
            Pioneering excellence in agricultural implement parts manufacturing and exports since 1998.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-8 text-white uppercase tracking-widest text-sm border-l-4 border-primary pl-4">Contact Info</h4>
          <div className="flex flex-col gap-4 font-body">
            <p className="flex items-start gap-3">
              <span className="text-primary font-bold">A</span>
              Harbanspura near Bijja Chowk, Tehsil Samrala, GT Road, Ludhiana‑141114, Punjab, India
            </p>
            <p className="flex items-center gap-3">
              <span className="text-primary font-bold">P</span>
              +91 (1628) 264574
            </p>
            <p className="flex items-center gap-3">
              <span className="text-primary font-bold">E</span>
              <a href="mailto:Info@liftechexports.com" className="hover:text-primary transition-colors">Info@liftechexports.com</a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-8 text-white uppercase tracking-widest text-sm border-l-4 border-primary pl-4">Company</h4>
          <nav className="flex flex-col gap-4 font-heading font-bold text-sm uppercase tracking-wider">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/about" className="hover:text-primary transition-colors">About Us</a>
            <a href="/career" className="hover:text-primary transition-colors">Careers</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-8 text-white uppercase tracking-widest text-sm border-l-4 border-primary pl-4">Products</h4>
          <nav className="flex flex-col gap-4 font-heading font-bold text-sm uppercase tracking-wider">
            <a href="/products" className="hover:text-primary transition-colors">Catalog</a>
            <a href="/manufacturing" className="hover:text-primary transition-colors">Quality Control</a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-heading font-bold uppercase tracking-widest text-gray-600">
        <div>© {new Date().getFullYear()} Liftech Exports Industries.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}