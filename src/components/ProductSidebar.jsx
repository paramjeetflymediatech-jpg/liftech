export default function ProductSidebar({ categories }) {
  return (
    <div className="w-64 border-r pr-6">

      <h3 className="font-bold mb-4">
        Product Categories
      </h3>

      <ul className="space-y-2">
        {categories.map((cat, i) => (
          <li key={i}>
            <a href="#" className="text-blue-700 hover:underline">
              {cat.title}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
}
