import React, {createRef, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import CardClothes from "../../cards/cartСlothes/CartСlothes";

import img from '../../../assets/img/Collections/image 11(2).png'
import img2 from '../../../assets/img/Collections/image 11-1.png'
import img3 from '../../../assets/img/Collections/image 11-2.png'
import img4 from '../../../assets/img/Collections/image 11.png'

import {FreeMode, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import './SliderCollections.css'
import CartCollection from "../../cards/cartCollection/CartCollection";

const SliderProducts = () => {

    let images = [img, img2, img3, img4]

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            className="mySwiper3"
            freeMode={true}
            modules={[FreeMode]}
        >
            {images.map((image) =>
                <SwiperSlide>
                    <CartCollection url={image}/>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default SliderProducts;