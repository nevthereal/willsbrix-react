import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Info from "./components/Info";
import Ab from "./components/products/A_b";
import Ag from "./components/products/A_g";
import Atrt from "./components/products/At_rt";
import Barc from "./components/products/Barc";
import Crab from "./components/products/Crab";
import Batmobile from "./components/products/Batmobile";
import S_s from "./components/products/S_s";
import Rancy from "./components/products/Rancy";

function App() {
  return (
    <div className="scroll-smooth text-center overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/info" element={<Info />} />
        <Route path="/products/assassin-black" element={<Ab />} />
        <Route path="/products/assassin-gray" element={<Ag />} />
        <Route path="/products/at-rt" element={<Atrt />} />
        <Route path="/products/barc-speeder" element={<Barc />} />
        <Route path="/products/crab-droid" element={<Crab />} />
        <Route path="/products/batmobile" element={<Batmobile />} />
        <Route path="/products/swamp-speeder" element={<S_s />} />
        <Route path="/products/rancor" element={<Rancy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
