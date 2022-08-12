import React  from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/scss/app.scss';

import Header from './components/App/Header';
import SwiperSlider from './components/App/SwiperSlider';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <SwiperSlider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
