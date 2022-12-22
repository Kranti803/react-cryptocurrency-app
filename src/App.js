import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';
import CryptoDetails from './components/CryptoDetails';
import Footer from "./components/Footer"

import "./styles/app.scss";

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
        <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
        <Route path="/news" element={<News/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
