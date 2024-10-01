import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar /> {/* Navbar will always render */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Home route */}
          <Route path="/checkout" element={<Checkout />} />
          {/* Checkout route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
