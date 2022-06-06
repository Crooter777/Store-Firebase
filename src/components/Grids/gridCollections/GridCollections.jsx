import React from 'react';
import cl from './GridCollections.module.scss'
import ArrowSVG from "../../SVG/ArrowSVG";
import CardClothes from "../../cards/cartСlothes/CartСlothes";
import SliderProducts from "../../sliders/sliderProducts/SliderProducts";
import CartCollection from "../../cards/cartCollection/CartCollection";
import SliderCollections from "../../sliders/sliderCollections/SliderCollections";
import img from "../../../assets/img/Collections/image 11(2).png";
import img2 from "../../../assets/img/Collections/image 11-1.png";
import img3 from "../../../assets/img/Collections/image 11-2.png";
import img4 from "../../../assets/img/Collections/image 11.png";

const GridCollections = ({title, images, ...props}) => {

    return (
        <div className='container'>
            <div className={cl.inner}>
                {title ? <h1 className={cl.h1}>{title}</h1> : null}
                <div className={cl.collection}>
                    {images.map((image) =>
                        <CartCollection url={image}/>
                    )}
                </div>
                <SliderCollections/>
                <div className='center'>
                    <button className={cl.button}>Еще</button>
                </div>
            </div>
        </div>
    );
};

export default GridCollections;