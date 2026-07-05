const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center">
          © {new Date().getFullYear()} MediLink Medical Supplies
        </p>

      </div>
    </footer>
  );
};

export default Footer;