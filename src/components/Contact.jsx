export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          📞 Get in Touch
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* inquiry form */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-transparent dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              ✉️ Send Inquiry
            </h3>
            <form className="space-y-4">
              <input
                placeholder="Your Name"
                className="w-full border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 rounded focus:ring-2 focus:ring-amber-300 outline-none"
              />

              <input
                placeholder="Email ID"
                className="w-full border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 rounded focus:ring-2 focus:ring-amber-300 outline-none"
              />

              <input
                placeholder="City"
                className="w-full border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 rounded focus:ring-2 focus:ring-amber-300 outline-none"
              />

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 rounded focus:ring-2 focus:ring-amber-300 outline-none"
              />

              <button className="bg-primary text-gray-900 font-bold w-full py-3 rounded hover:bg-primary-dark transition">
                Submit
              </button>
            </form>
          </div>

          {/* contact info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-transparent dark:border-gray-700 text-gray-700 dark:text-gray-300">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">👤 Managing Director</h4>
              <p>Mr. Inderpal Singh</p>
              <p>📱 +91-9814022031</p>
              <p>✉️ <a href="mailto:ips@liftechexports.com" className="text-primary underline">ips@liftechexports.com</a></p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-transparent dark:border-gray-700 text-gray-700 dark:text-gray-300">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">🌍 Director (International)</h4>
              <p>Mr. Isher Singh</p>
              <p>📱 +91-9888088951</p>
              <p>✉️ <a href="mailto:ishersingh@liftechexports.com" className="text-primary underline">ishersingh@liftechexports.com</a></p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-transparent dark:border-gray-700 text-gray-700 dark:text-gray-300">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">🏢 Business Enquiries</h4>
              <p>✉️ <a href="mailto:Info@liftechexports.com" className="text-primary underline">Info@liftechexports.com</a></p>
              <p>📞 +91 (1628) 264574</p>
              <p>📠 Fax: +91 (1628) 264574</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-transparent dark:border-gray-700 text-gray-700 dark:text-gray-300">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">📍 Visit Us</h4>
              <p>Harbanspura near Bijja Chowk</p>
              <p>Tehsil Samrala, GT Road</p>
              <p>Ludhiana‑141114, Punjab, India</p>
            </div>
          </div>
        </div>

        {/* map embed */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.237745825911!2d75.89092791500104!3d30.912670781497565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910137e9c5f4ab3%3A0x1234abcd5678efgh!2sLudhia na%20-%20141114!5e0!3m2!1sen!2sin!4v0000000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}