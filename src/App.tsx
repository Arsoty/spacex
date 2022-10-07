import React from "react";
import "./App.css";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./components/pages/favorites/Favorites";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
