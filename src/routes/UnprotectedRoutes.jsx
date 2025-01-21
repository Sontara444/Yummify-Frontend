import React from "react";
import { Route, Routes } from "react-router-dom";
import routeList from "./routeList.js";

const UnprotectedRoutes = () => {
  return (
    <Routes>
      {routeList.unprotected.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={route.component}
        //   element={React.createElement(
        //     require(`../pages/${route.component}`).default
        //   ) 
        // }
        />
      ))}
    </Routes>
  );
};

export default UnprotectedRoutes;
