import React, {createRef, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import CardClothes from "../../carts/cartСlothes/CartСlothes";

import img from "../../../assets/img/Products/Rectangle 491-2.png";
import img2 from "../../../assets/img/Products/Rectangle 491-11.png";
import img3 from "../../../assets/img/Products/Rectangle 491.png";
import img4 from "../../../assets/img/Products/Rectangle 491-1.png";
import img5 from "../../../assets/img/Products/Rectangle 491-3.png";
import img6 from "../../../assets/img/Products/Rectangle 491-4.png";
import img7 from "../../../assets/img/Products/Rectangle 491-5.png";
import img8 from "../../../assets/img/Products/Rectangle 491-6.png";

import {FreeMode, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import './SliderProducts.css'
import {observer} from "mobx-react-lite";

    const SliderProducts = ({store}) => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            className="mySwiper2"
            freeMode={true}
        >
            {store.products.length ?
                store.products.map((product) =>
                    <SwiperSlide key={product.id}>
                        <CardClothes product={product}/>
                    </SwiperSlide>
                )
                :
                null
            }
        </Swiper>
    );
};

export default observer(SliderProducts);