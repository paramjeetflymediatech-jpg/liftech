export default function Career() {
  return (
    <section id="career" className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-12 text-center text-gray-900 dark:text-white">Current Openings</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Functional Area*</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">First Name*</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name*</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Date of Birth*</label>
              <input type="date" className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-1">Gender*</label>
              <select className="w-full border p-2 rounded">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Marital Status*</label>
              <select className="w-full border p-2 rounded">
                <option>Single</option>
                <option>Married</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Current Address*</label>
            <textarea rows="2" className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Current Location*</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">If "Other"</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Please type your current location" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Pin Code</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Telephone/Mobile*</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Email*</label>
              <input type="email" className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Current Designation*</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Current Employer*</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Current Gross Salary (per annum in Lacs)</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Key Skills</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Experience*</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="e.g. 12yrs Finance Experience" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Qualification*</label>
              <input className="w-full border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
          </div>

          <div>
            <label className="block mb-1">Short Description</label>
            <textarea rows="3" className="w-full border p-2 rounded" placeholder="Example: 12yrs Finance Experience" />
          </div>

          <div>
            <label className="block mb-1">Your resume*</label>
            <input type="file" className="w-full" />
          </div>

          <button className="bg-primary text-white w-full py-3 rounded hover:bg-primary-dark transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}