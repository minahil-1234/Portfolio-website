import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import Aboutpage from "./pages/Aboutpage";
import Servicespage from "./pages/Servicespage";
import Portfoliopage from "./pages/Portfoliopage";
import Resumepage from "./pages/Resumepage";
import Contactpage from "./pages/Contactpage";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="services" element={<Servicespage />} />
          <Route path="portfolio" element={<Portfoliopage />} />
          <Route path="resume" element={<Resumepage />} />
          <Route path="contact" element={<Contactpage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
