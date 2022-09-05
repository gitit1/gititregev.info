import React from 'react';
import './styles/scss/app.scss';
import 'semantic-ui-css/semantic.min.css'

import SwiperSlider from './components/App/SwiperSlider.js';
import Header from './components/App/Header';

function App() {

  return (
    <div className='wrapper'>
      <Header />
      <div className='swiperWrapper'>
        <SwiperSlider />
      </div>
    </div>
  );
}

export default App;
