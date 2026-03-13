"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-32 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors">
      {/* Abstract Industrial Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 dark:bg-gray-900/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-20 animate-fadeInUp">
          <h2 className="text-sm font-heading font-black uppercase tracking-[0.4em] text-primary mb-6">
            Contact Us
          </h2>
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-gray-900 dark:text-white leading-[1.1] mb-8">
            Let's Build the <br />
            <span className="text-gray-400">Future Together.</span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-body leading-relaxed max-w-2xl">
            Have a custom requirement or need technical assistance? Our global support team is ready to engineer the perfect solution for your agricultural needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Inquiry Form */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-900 p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-800 animate-fadeInUp" style={{ animationDelay: "200ms" }}>
            <h4 className="text-3xl font-heading font-bold mb-12 dark:text-white">Send an Inquiry</h4>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-transparent focus:border-primary p-4 rounded-2xl outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-transparent focus:border-primary p-4 rounded-2xl outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Subject of interest</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-transparent focus:border-primary p-4 rounded-2xl outline-none transition-all dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-transparent focus:border-primary p-4 rounded-2xl outline-none transition-all dark:text-white resize-none"
                />
              </div>

              <button className="w-full md:w-auto bg-primary text-white font-heading font-bold px-12 py-5 rounded-2xl hover:bg-baldan-red/90 transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                Submit Inquiry
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Details Cards */}
          <div className="lg:col-span-2 space-y-8 animate-slideInRight" style={{ animationDelay: "400ms" }}>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] transition-all hover:shadow-xl group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h5 className="font-heading font-black uppercase tracking-widest text-xs text-gray-400">Headquarters</h5>
              </div>
              <p className="text-gray-900 dark:text-white font-body leading-relaxed">
                Harbanspura near Bijja Chowk,<br />
                Tehsil Samrala, GT Road,<br />
                Ludhiana‑141114, Punjab, India
              </p>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] transition-all hover:shadow-xl group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <h5 className="font-heading font-black uppercase tracking-widest text-xs text-gray-400">Quick Contact</h5>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-heading font-bold dark:text-white">+91 (1628) 264574</p>
                <a href="mailto:Info@liftechexports.com" className="text-primary font-bold hover:underline block">Info@liftechexports.com</a>
              </div>
            </div>

            {/* Management Cards */}
            <div className="p-8 bg-primary text-white rounded-[2.5rem] shadow-2xl shadow-primary/20">
              <h5 className="font-heading font-black uppercase tracking-widest text-[10px] mb-6 opacity-60">Corporate Management</h5>
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-lg font-heading font-bold">Mr. Inderpal Singh</p>
                  <p className="text-xs opacity-70">Managing Director</p>
                </div>
                <div>
                  <p className="text-lg font-heading font-bold">Mr. Isher Singh</p>
                  <p className="text-xs opacity-70">Director (International)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 sm:mt-32 rounded-3xl sm:rounded-[3.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 animate-fadeInUp" style={{ animationDelay: "600ms" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.237745825911!2d75.89092791500104!3d30.912670781497565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910137e9c5f4ab3%3A0x1234abcd5678efgh!2sLudhia na%20-%20141114!5e0!3m2!1sen!2sin!4v0000000000000"
            width="100%"
            height="400"
            className="sm:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

