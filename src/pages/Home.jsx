import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import CategoriesSection from "../components/home/CategoriesSection";
import LatestProducts from "../components/home/LatestProducts";





import ProductGrid from "../components/product/ProductGrid";
import products from "../data/products";

const Home = () => {
  return (
    <MainLayout>
      <Hero />

      <CategoriesSection />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-2">
            Browse our most popular medical supplies.
          </p>
        </div>

        <ProductGrid products={products} />
      </section>

      <LatestProducts />

     

    
   


      
    </MainLayout>
  );
};

export default Home;