import React  from 'react';
import { Link, Route, Routes } from "react-router-dom";
import './styles/scss/app.scss';

import Header from './components/App/Header';
import SwiperSlider from './components/App/SwiperSlider.js';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Pages } from './globals.tsx';

function App() {
  return (
    <div className='app_wrapper'>
      <div className='app_fixed_content'>
        <Header />
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/resume'>Resume</Link>
        </nav>
      </div>
      <div className='app_background'>
        <SwiperSlider />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path={`/${Pages[0]}`} element={<Home />}/>
        <Route path={`/${Pages[1]}`} element={<About />} />
        <Route path={`/${Pages[2]}`} element={<Resume />} />
        <Route path={`/${Pages[3]}`} element={<Projects />} />
        <Route path={`/${Pages[4]}`} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
