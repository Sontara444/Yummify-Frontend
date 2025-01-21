import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import UnprotectedRoutes from "./UnprotectedRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnprotectedRoutes />} />
        <Route path="/protected/*" element={<ProtectedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
