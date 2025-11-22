import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Features from "./features/Features";
import Price from "./price/Price";
import Solutions from "./Solutions/Solutions";

const AdminRouter = () => {
  return (
  
      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* FEATURES PAGE */}
        <Route path="/features" element={<Features />} />

        {/* OTHER PAGES */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/price" element={<Price />} />

        {/* CATCH ALL ROUTE */}
        <Route path="*" element={<HomePage />} />

      </Routes>
    
  );
};

export default AdminRouter;
