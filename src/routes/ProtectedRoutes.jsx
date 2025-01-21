import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import routeList from "./routeList.js";

const isAuthenticated = () => {
  return localStorage.getItem("authToken");
};

const ProtectedRoutes = () => {
  return (
    <Routes>
      {routeList.protected.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          element={isAuthenticated() ? (
              React.createElement(
                require(`../pages/${route.component}`).default
                
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      ))}
    </Routes>
  );
};

export default ProtectedRoutes;
