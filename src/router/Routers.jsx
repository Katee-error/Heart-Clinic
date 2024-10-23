import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Home from "./../pages/Home";
const ServicesCostPage = lazy(() => import("../pages/ServicesCostPage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const OmsPage = lazy(() => import("../pages/OmsPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const DoctorsPages = lazy(() => import("../pages/DoctorsPages"));
const Promotion = lazy(() => import("../pages/Promotion"));
const PromotionDetail = lazy(() => import("../pages/PromotionDetail"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/servicesCost" element={<ServicesCostPage />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/promotion/:id" element={<PromotionDetail />} />
      <Route path="/oms" element={<OmsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/doctors" element={<DoctorsPages />} />
    </Routes>
  );
};

export default Routers;
