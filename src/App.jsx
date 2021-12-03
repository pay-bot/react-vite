import React from "react";
import Navbar from "./components/header/Navbar1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar1 from "./components/header/Navbar1";
import Navbar2 from "./components/header/Navbar2";

function App() {
  const nav = 1;
  
  return (
    <BrowserRouter>
      <div className="pt-16">
        {nav === nav && <Navbar1 />}
        {nav === 2 && <Navbar2 />}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
