import React from 'react';
import { useNavigate, useLocation  } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import { Pages } from '../../globals.tsx';

function SwiperSlider() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Swiper
      pagination={{ clickable: true }}
      direction="vertical"
      mousewheel = {true}
      modules={[Pagination, Navigation, Mousewheel]}
      parallax={true}
      // scrollbar={{ draggable: true }}
      initialSlide={Object.values(Pages).indexOf(location.pathname.replace('/',''))}
      onSlideChange={(slide) => navigate(`/${Pages[slide.activeIndex]}`)}
      speed={1000}
    >
      <SwiperSlide className={Pages[0]}></SwiperSlide>        
      <SwiperSlide className={Pages[1]}></SwiperSlide>        
      <SwiperSlide className={Pages[2]}></SwiperSlide>        
      <SwiperSlide className={Pages[3]}></SwiperSlide>
      <SwiperSlide className={Pages[4]}></SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;