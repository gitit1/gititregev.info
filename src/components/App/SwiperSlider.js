import React, { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/modules/pagination/pagination.min.css'
// import { Pages } from '../../globals.tsx';
import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Resume } from '../../pages/Resume';
import { Projects } from '../../pages/Projects';
import { Contact } from '../../pages/Contact';

function SwiperSlider() {
  const navigate = useNavigate();
  const location = useLocation();

  const Pages = {
    Home: 'home',
    About: 'about',
    Resume: 'resume',
    Projects: 'projects',
    Contact: 'contact'
  }

  return (
    <Swiper
      pagination={{ clickable: true }}
      direction="vertical"
      mousewheel={true}
      modules={[Pagination, Navigation, Mousewheel]}
      parallax={true}
      // scrollbar={{ draggable: true }}
      initialSlide={Object.values(Pages).indexOf(location.pathname.replace('/', ''))}
      onSlideChange={(slide) => navigate(`/${Object.values(Pages)[slide.activeIndex]}`)}
      speed={1000}
    >
      {
        <>
          <SwiperSlide className='home'><Home /></SwiperSlide>
          <SwiperSlide className='about'><About /></SwiperSlide>
          <SwiperSlide><Resume /></SwiperSlide>
          <SwiperSlide><Projects /></SwiperSlide>
          <SwiperSlide><Contact /></SwiperSlide>
        </>
      }
    </Swiper>
  );
};

export default SwiperSlider;