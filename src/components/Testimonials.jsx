export default function Testimonials() {
  const quotes = [
    {
      text: "We've relied on Liftech parts for over a decade. Always dependable.",
      author: "Ravi Kumar, Farmer",
    },
    {
      text: "Great service and quick delivery even overseas.",
      author: "Jorge Silva, Distributor",
    },
    {
      text: "Quality that stands the test of time in the field.",
      author: "Meera Patel, Agricultural Contractor",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">What Our Customers Say</h3>
        <div className="space-y-12">
          {quotes.map((q, i) => (
            <blockquote key={i} className="italic text-gray-700 dark:text-gray-300">
              “{q.text}”
              <footer className="mt-4 font-semibold text-gray-900 dark:text-gray-100 text-sm not-italic opacity-80">— {q.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
