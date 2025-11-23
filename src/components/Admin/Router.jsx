import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Features from "./features/Features";
import Price from "./price/Price";
import Solutions from "./Solutions/Solutions";


const Router = () => {
  return (
    <BrowserRouter basename="/lms-saas/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
