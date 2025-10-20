import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import './HomeSwiperLR.css'
import 'swiper/css'

export default function HomeSwiperLR() {
  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <img src="/Images/kv-img002.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/kv-img004.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/kv-img003.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
