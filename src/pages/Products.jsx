import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import MainLayout from "../layouts/MainLayout";
import ProductGrid from "../components/product/ProductGrid";
import ProductSearch from "../components/product/ProductSearch";
const Products = () => {
  const [products, setProducts] = useState([]);

const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error("Failed to load products:", err);
    }
  };

  loadProducts();
}, []);

  let filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
    (product.subcategory || "")
  .toLowerCase()
  .includes(search.toLowerCase())
    const matchesCategory =
      category === "" || product.category === category;

    const matchesAvailability =
  availability === "" ||
  (availability === "instock" && product.in_stock) ||
  (availability === "outofstock" && !product.in_stock);
    return matchesSearch && matchesCategory && matchesAvailability;
  });

  if (sort === "az") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sort === "za") {
    filteredProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) => (a.price || 999999) - (b.price || 999999)
    );
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) => (b.price || 0) - (a.price || 0)
    );
  }

  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-10">

          <h1 className="text-5xl font-bold">
            Our Products
          </h1>

          <p className="text-gray-500 mt-3">
            Browse our complete catalog of medical supplies.
          </p>

        </div>

        <ProductSearch
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          availability={availability}
          setAvailability={setAvailability}
          sort={sort}
          setSort={setSort}
        />

        <ProductGrid products={filteredProducts} />

      </section>

    </MainLayout>
  );
};

export default Products;