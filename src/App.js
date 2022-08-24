import React from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/scss/app.scss';
import 'semantic-ui-css/semantic.min.css'

import SwiperSlider from './components/App/SwiperSlider.js';
import Header from './components/App/Header';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Pages } from './globals.tsx';

function App() {

  return (
    <div className='wrapper'>
      <Header />
      <div className='swiperWrapper'>
        <SwiperSlider />
      </div>
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={`/${Pages.Home}`} element={<Home />} />
        <Route path={`/${Pages.About}`} element={<About />} />
        <Route path={`/${Pages.Resume}`} element={<Resume />} />
        <Route path={`/${Pages.Projects}`} element={<Projects />} />
        <Route path={`/${Pages.Contact}`} element={<Contact />} />
      </Routes> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
