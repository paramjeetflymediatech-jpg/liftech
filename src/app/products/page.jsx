import { productCategories } from "../../data/productCategories";
import ProductCategory from "../../components/ProductCategory";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-12">
        Liftech Product Range
      </h1>

      {productCategories.map((cat, i) => (
        <ProductCategory
          key={i}
          title={cat.title}
          products={cat.products}
        />
      ))}

    </div>
  );
}