import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main> {/* Ensures space below fixed navbar */}
      <Footer />
    </>
  );
};

export default Layout;
