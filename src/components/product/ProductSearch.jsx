const ProductSearch = ({ search, setSearch }) => {
  return (
    <div className="w-full mb-10">

      <input
        type="text"
        placeholder="Search medical products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

    </div>
  );
};

export default ProductSearch;