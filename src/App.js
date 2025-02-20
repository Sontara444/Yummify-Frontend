import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import RouteList from "./routes/RouteList.jsx";
import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./pages/Login";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const location = useLocation();
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}

      <div className="App">
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />

          {/* <RouteList /> */}
        </Routes>

        {location.pathname !== "/login-signup" && <Footer />}
      </div>
    </>
  );
}

export default App;
