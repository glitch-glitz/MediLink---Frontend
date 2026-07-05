import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import CategoriesSection from "../components/home/CategoriesSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import LatestProducts from "../components/home/LatestProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Brands from "../components/home/Brands";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import CallToAction from "../components/home/CallToAction";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <LatestProducts />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <Newsletter />
      <CallToAction />
    </MainLayout>
  );
};

export default Home;