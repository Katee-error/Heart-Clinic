import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ServicesPage from "../pages/ServicesPage";
import ServicesCostPage from "../pages/ServicesCostPage";
import AboutUsPage from "../pages/AboutUsPage";
import OmsPage from "../pages/OmsPage";
import ContactPage from "../pages/ContactPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/servicesCost" element={<ServicesCostPage />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/oms" element={<OmsPage />} />
      <Route path="/contact" element={<ContactPage />} />

    </Routes>
  );
};

export default Routers;
