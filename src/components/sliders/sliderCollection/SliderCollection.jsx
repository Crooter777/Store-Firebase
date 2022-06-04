import React, {createRef, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import CardClothes from "../../cards/CardСlothes/CardСlothes";

import img from "../../../assets/img/Zeon Store/Rectangle 491-2.png";
import img2 from "../../../assets/img/Zeon Store/Rectangle 491-11.png";
import img3 from "../../../assets/img/Zeon Store/Rectangle 491.png";
import img4 from "../../../assets/img/Zeon Store/Rectangle 491-1.png";
import img5 from "../../../assets/img/Zeon Store/Rectangle 491-3.png";
import img6 from "../../../assets/img/Zeon Store/Rectangle 491-4.png";
import img7 from "../../../assets/img/Zeon Store/Rectangle 491-5.png";
import img8 from "../../../assets/img/Zeon Store/Rectangle 491-6.png";

import {FreeMode, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import './sliderCollection.css'

const SliderCollection = () => {

    let images = [img, img2, img3, img4, img5, img6, img7, img8]

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            className="mySwiper2"
            freeMode={true}
            modules={[FreeMode]}

        >
            {images.map((image) =>
                <SwiperSlide>
                    <CardClothes url={image}/>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default SliderCollection;