import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import './static/css/global.css'
import './static/css/tailwind.css'

// import '../public/styles.css'


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
