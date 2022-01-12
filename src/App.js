import logo from './logo.svg';
import './styles/Global.css';
import './styles/Tailwind.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import ServiceDetail from './components/home/ServiceDetail/ServiceDetail';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/articles/:slug" element={<ServiceDetail/>} />
          <Route path="/about" element={<About />} exact />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
