export default function FeatureGrid() {
  const features = [
    { title: "Designed for Tough Use", icon: "⚙️" },
    { title: "Certified Quality Control", icon: "🧪" },
    { title: "Competitive Prices", icon: "💲" },
    { title: "Custom Manufacturing", icon: "🔧" },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-transparent dark:border-gray-700 transition-all">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{f.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
