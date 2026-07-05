<section className="max-w-7xl mx-auto px-6 py-20">

    <div className="mb-10">

        <h2 className="text-4xl font-bold">
            Featured Products
        </h2>

        <p className="text-gray-500 mt-2">
            Browse some of our most popular medical supplies.
        </p>

    </div>

    <ProductGrid products={products.slice(0, 4)} />

</section>