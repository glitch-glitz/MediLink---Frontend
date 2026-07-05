import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Your Trusted Partner in
            <br />
            Medical Supplies
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl text-blue-100">
            Supplying quality medical equipment, hospital furniture,
            laboratory products, diagnostics, PPE, and healthcare
            essentials across Kenya.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Shop Products
            </button>

            <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
              Request a Quote
            </button>

          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default Home;