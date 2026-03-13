"use client";

export default function Career() {
  return (
    <section id="career" className="py-12 sm:py-32 bg-white dark:bg-gray-950 transition-colors relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-24 animate-fadeInUp">
          <h2 className="text-sm font-heading font-black uppercase tracking-[0.4em] text-primary mb-6">
            Careers
          </h2>
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-gray-900 dark:text-white leading-tight mb-8">
            Join the <br />
            <span className="text-gray-400">Engineering Elite.</span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-body leading-relaxed max-w-3xl mx-auto">
            At Liftech, we're always looking for passionate engineers, manufacturing experts, and visionaries to help us shape the future of global agricultural implements.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-20 shadow-2xl border border-gray-100 dark:border-gray-800 animate-fadeInUp" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center gap-4 mb-16 border-l-4 border-primary pl-6">
            <h4 className="text-3xl font-heading font-bold dark:text-white">Apply Now</h4>
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-gray-400">Global Opportunities</span>
          </div>

          <form className="space-y-16">
            {/* Group 1: Personal Identification */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">01</span>
                <h5 className="font-heading font-black uppercase tracking-widest text-sm dark:text-white">Personal Identification</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Functional Area*</label>
                  <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">First Name*</label>
                  <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Last Name*</label>
                  <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Date of Birth*</label>
                  <input type="date" className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Gender*</label>
                  <select className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm appearance-none">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Marital Status*</label>
                  <select className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm appearance-none">
                    <option>Single</option>
                    <option>Married</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Group 2: Contact Details */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">02</span>
                <h5 className="font-heading font-black uppercase tracking-widest text-sm dark:text-white">Contact Details</h5>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Current Address*</label>
                  <textarea rows="3" className="w-full bg-white dark:bg-gray-800 p-6 rounded-3xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm resize-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Current Location*</label>
                    <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Pin Code</label>
                    <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Telephone/Mobile*</label>
                    <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                  </div>
                  <div className="space-y-2 md:col-span-2 lg:col-span-1">
                    <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Email*</label>
                    <input type="email" className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* Group 3: Professional Experience */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">03</span>
                <h5 className="font-heading font-black uppercase tracking-widest text-sm dark:text-white">Professional Experience</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Current Designation*</label>
                  <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Current Employer*</label>
                  <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Experience* (Years)</label>
                  <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" placeholder="e.g. 12" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Qualification*</label>
                  <input className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Short Description</label>
                <textarea rows="2" className="w-full bg-white dark:bg-gray-800 p-6 rounded-3xl outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white shadow-sm resize-none" placeholder="Briefly describe your core expertise..." />
              </div>
              
              <div className="space-y-4 pt-6">
                <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">Upload Resume*</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-[2rem] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                      <p className="text-xs text-gray-500 font-bold">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-white font-heading font-bold py-6 rounded-3xl hover:bg-baldan-red/90 transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-4 group">
              Submit Application
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}