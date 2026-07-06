const ProductSearch = ({
  search,
  setSearch,
  category,
  setCategory,
  availability,
  setAvailability,
  sort,
  setSort,
}) => {
  return (
    <div className="bg-white shadow rounded-2xl p-6 mb-10">

      <div className="grid md:grid-cols-4 gap-4">

        {/* Search */}

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700"
        />

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option value="">All Categories</option>
          <option>Diagnostics</option>
          <option>Hospital Furniture</option>
          <option>Laboratory</option>
          <option>PPE</option>
          <option>Medical Consumables</option>
        </select>

        {/* Availability */}

        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option value="">Availability</option>
          <option value="instock">In Stock</option>
          <option value="outofstock">Out of Stock</option>
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option value="">Sort By</option>
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>

      </div>

    </div>
  );
};

export default ProductSearch;