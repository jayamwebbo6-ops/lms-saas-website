import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Features from "./components/features/Features";
import Solutions from "./components/Solutions/Solutions";
import Price from "./components/price/Price";

const App = () => {
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

export default App;




