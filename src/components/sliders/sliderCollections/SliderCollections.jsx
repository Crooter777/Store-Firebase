import React, {createRef, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import CardClothes from "../../carts/cartСlothes/CartСlothes";

import img from '../../../assets/img/Collections/image 11(2).png'
import img2 from '../../../assets/img/Collections/image 11-1.png'
import img3 from '../../../assets/img/Collections/image 11-2.png'
import img4 from '../../../assets/img/Collections/image 11.png'

import {FreeMode, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import './SliderCollections.css'
import CartCollection from "../../carts/cartCollection/CartCollection";
import {observer} from "mobx-react-lite";

const SliderCollections = ({store}) => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            className="mySwiper3"
            freeMode={true}
            modules={[FreeMode]}
        >
            {store.collections.length ?
                store.collections.map((collection) =>
                    <SwiperSlide key={collection.id}>
                        <CartCollection collection={collection}/>
                    </SwiperSlide>
                )
                :
                null
            }
        </Swiper>
    );
};

export default observer(SliderCollections);