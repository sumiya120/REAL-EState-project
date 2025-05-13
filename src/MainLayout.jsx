import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the current page content */}
      <Footer />
    </>
  );
};

export default MainLayout;
