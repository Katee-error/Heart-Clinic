import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ServicesCostPage from "../pages/ServicesCostPage";
import AboutUsPage from "../pages/AboutUsPage";
import OmsPage from "../pages/OmsPage";
import ContactPage from "../pages/ContactPage";
import DoctorsPages from "../pages/DoctorsPages";
import Promotion from "../pages/Promotion";
import PromotionDetail from "../pages/PromotionDetail";

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
