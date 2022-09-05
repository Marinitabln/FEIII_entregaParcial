import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Perritos from "./Perritos";
import Gatitos from "./Gatitos";

const Home = ({ perritos, gatitos }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>🏠🏠 Home 🏠🏠</Link>
          </li>
          <li>
            <Link to={`perritos`}>🐕🐕 Perritos 🐕🐕</Link>
          </li>
          <li>
            <Link to={`gatitos`}>🐱🐱 Gatitos 🐱🐱</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>⭐⭐ Tenemos ⭐⭐</h1>
      </div>
      <Routes>
        <Route path="/perritos" element={<Perritos />} />
        <Route path="/gatitos" element={<Gatitos />} />
      </Routes>
    </>
  );
};

export default Home;
