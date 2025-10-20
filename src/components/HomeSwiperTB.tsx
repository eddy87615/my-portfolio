import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import './HomeSwiperTB.css'
import 'swiper/css'

export default function HomeSwiperTB() {
  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        direction="vertical"
        loop={true}
      >
        <SwiperSlide>
          <img src="/Images/kv-img001.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/kv-img005.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/kv-img006.JPG" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
