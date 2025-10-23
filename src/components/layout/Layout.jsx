import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
