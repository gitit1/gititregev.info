import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from "swiper";

import { Home } from '../../pages/Home';
// import { About } from '../../pages/About';
import { Resume } from '../../pages/Resume';
import { Projects } from '../../pages/Projects';
// import { Contact } from '../../pages/Contact';

import 'swiper/swiper-bundle.min.css'
import 'swiper/modules/pagination/pagination.min.css'

function SwiperSlider() {
  const navigate = useNavigate();
  const location = useLocation();
  const sliderRef = useRef();
  const activeSlide = useRef();

  const Pages = {
    Home: 'home',
    Resume: 'resume',
    Projects: 'projects',
    Contact: 'contact'
    // About: 'about',
  }

  useEffect(() => {
    const newIndex = Object.values(Pages).indexOf(location.pathname.replace('/', ''));
    console.log('newIndex', newIndex)
    if(newIndex === -1){
      navigate(`/home`)
      // sliderRef.current.swiper.slideTo(0);

    }
    sliderRef.current.swiper.slideTo(newIndex);
  }, [location.pathname]);

  return (
    <Swiper
      ref={sliderRef}
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
          <SwiperSlide className={Pages.Home}>
            <Home />
          </SwiperSlide>
          <SwiperSlide className={Pages.Resume}>
            <Resume isActive={activeSlide.current === Pages.Resume} />
          </SwiperSlide>
          <SwiperSlide className={Pages.Projects}><Projects /></SwiperSlide>
          {/* <SwiperSlide className='about'><About /></SwiperSlide> */}
          {/* <SwiperSlide><Contact /></SwiperSlide> */}
        </>
      }
    </Swiper>
  );
};

export default SwiperSlider;