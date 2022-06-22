import React, {createRef, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import CardClothes from "../../carts/cartСlothes/CartСlothes";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import './SliderMaybe.css'
import {observer} from "mobx-react-lite";
import CartOffer from "../../carts/cartOffer/CartOffer";

const SliderMaybe = ({store}) => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            className="mySwiper4"
            freeMode={true}
        >
            {store.products.length ?
                store.products.map((product) =>
                    <SwiperSlide key={product.id}>
                        <CartOffer product={product}/>
                    </SwiperSlide>
                )
                :
                null
            }
        </Swiper>
    );
};

export default observer(SliderMaybe);