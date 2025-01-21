import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import RouteList from "./routes/RouteList.jsx";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      {/* <ToastContainer> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-signup" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />

          {/* <RouteList /> */}
        </Routes>
      {/* </ToastContainer> */}
      {location.pathname !== "/login-signup" && <Footer />}
    </div>
  );
}

export default App;
