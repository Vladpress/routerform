import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Greetting from "./pages/Greetting";
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import Header from "./components/Header";
import "normalize.css";
import "./App.scss";
import Operations from "./pages/Operations";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Greetting />} />
          <Route path="/choose" element={<Operations />} />
          <Route path="form" element={<Home />} />
          <Route path="thanks" element={<Thanks />} />
        </Routes>
      </Router>
    </>
  );
}
