export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Send Inquiry
        </h2>

        <form className="space-y-4">

          <input
            placeholder="Name"
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border p-3 rounded"
          />

          <button className="bg-blue-900 text-white w-full py-3 rounded">
            Submit
          </button>

        </form>
      </div>
    </section>
  );
}