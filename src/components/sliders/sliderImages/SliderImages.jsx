import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import CardClothes from "../../carts/cartСlothes/CartСlothes";

import './SliderImages.css'
import img from "../../../assets/img/Products/Rectangle 491-2.png";
import img2 from "../../../assets/img/Products/Rectangle 491-11.png";
import img3 from "../../../assets/img/Products/Rectangle 491.png";
import img4 from "../../../assets/img/Products/Rectangle 491-1.png";
import img5 from "../../../assets/img/Products/Rectangle 491-3.png";
import img6 from "../../../assets/img/Products/Rectangle 491-4.png";
import img7 from "../../../assets/img/Products/Rectangle 491-5.png";
import img8 from "../../../assets/img/Products/Rectangle 491-6.png";

const SliderImages = ({store}) => {

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            className="mySwiper3"
            freeMode={true}
        >
            {store.product.product_colors.map((color) =>
                <SwiperSlide key={color.id}>
                    <img src={color.image} style={{maxWidth: 262}} alt=""/>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default SliderImages;