import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import { Home } from '../../pages/Home'
import { About } from '../../pages/About'
import { Resume } from '../../pages/Resume'
import { Projects } from '../../pages/Projects'
import { Contact } from '../../pages/Contact'

function SwiperSlider() {
    return (
      <Swiper
        mousewheel={true}
        direction="vertical"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        {/* <SwiperSlide><Home /></SwiperSlide>
        <SwiperSlide><About /></SwiperSlide>
        <SwiperSlide><Resume /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Contact /></SwiperSlide> */}
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    );
};

export default SwiperSlider;