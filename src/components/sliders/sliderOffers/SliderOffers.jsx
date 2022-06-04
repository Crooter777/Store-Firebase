import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../../assets/img/image 3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderOffers.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderOffers() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img} alt="" style={{paddingBottom: '16px'}}/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" style={{paddingBottom: '16px'}}/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" style={{paddingBottom: '16px'}}/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" style={{paddingBottom: '16px'}}/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" style={{paddingBottom: '16px'}}/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" style={{paddingBottom: '16px'}}/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" style={{paddingBottom: '16px'}}/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" style={{paddingBottom: '16px'}}/></SwiperSlide>
            </Swiper>
        </>
    );
}
