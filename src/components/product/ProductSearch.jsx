import categories from "../../data/categories";

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
    <div className="bg-white shadow rounded-xl p-4 mb-8">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

        {/* Search */}

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="col-span-2 lg:col-span-1 border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-700"
        />

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Category</option>

          {categories.map((cat) => (
            <option
              key={cat.id}
              value={cat.name}
            >
              {cat.name}
            </option>
          ))}
        </select>

        {/* Availability */}

        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Stock</option>
          <option value="instock">In Stock</option>
          <option value="outofstock">Out of Stock</option>
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="col-span-2 lg:col-span-1 border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Sort By</option>
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
          <option value="low">Lowest Price</option>
          <option value="high">Highest Price</option>
        </select>

      </div>

    </div>
  );
};

export default ProductSearch;