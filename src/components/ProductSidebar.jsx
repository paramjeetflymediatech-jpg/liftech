export default function ProductSidebar({ categories, active, onSelect }) {
  return (
    <aside className="w-64 sticky top-24 self-start">

      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Product Categories
      </h3>

      <ul className="space-y-4">

        {categories.map((cat, i) => {
          const selected = active === cat.slug;
          return (
            <li key={i}>
              <button
                onClick={() => onSelect && onSelect(cat.slug)}
                className={`text-left w-full transition-colors ${
                  selected
                    ? "text-primary font-bold"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                }`}
              >
                {cat.title}
              </button>
            </li>
          );
        })}

      </ul>

    </aside>
  );
}