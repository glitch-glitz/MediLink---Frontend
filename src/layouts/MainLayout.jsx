import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/BackToTop";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <TopBar />

      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
<BackToTop />
    </div>
  );
};

export default MainLayout;