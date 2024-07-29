import React from "react";
import { Link, Routes, Route, NavLink, HashRouter } from 'react-router-dom';
import Home from "./Home";
import ImageBaseResults from "./result/ImageBaseResults";
import ImageBaseResults2 from "./result/ImageBaseResults2";
import ImageBaseResPage from "./result/ImageBaseResPage";
import ImageBaseResPage2 from "./result/ImageBaseResPage2";
import ImageBaseClick from "./result/ImageBaseClick";
import ImageBaseClick2 from "./result/ImageBaseClick2";
import Footers from "./Footers";
import BannerImg from "./result/BannerImg";
import ImageBaseClickName from "./result/ImageBaseClickName";
import ImageBaseClickName2 from "./result/ImageBaseClickName2";

export default function Navigation() {
  return (
    <HashRouter basename="/">
      <div className="main">
        <div>
          <Link to='/'>
            <BannerImg />
          </Link>
        </div >
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artistCM" element={<ImageBaseResults />} />
        <Route path="/artistCM2" element={<ImageBaseResults2 />} />
        <Route path="/CMpage" element={<ImageBaseResPage />} />
        <Route path="/CMpage2" element={<ImageBaseResPage2 />} />
        <Route path="/ImageBaseClick/:pageNum" element={<ImageBaseClick />} />
        <Route path="/ImageBaseClick2/:pageNum" element={<ImageBaseClick2 />} />
        <Route path="/artist/:artistTitle" element={<ImageBaseClickName />} />
        <Route path="/artist2/:artistTitle" element={<ImageBaseClickName2 />} />
      </Routes>
      <Footers />
    </HashRouter>
  )
}
