import logo from './logo.svg';
import './styles/Global.css';
import './styles/Tailwind.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";

function App() {
  console.log(process.env.REACT_APP_API_URL)
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
