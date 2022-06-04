import React from 'react';
import cl from './GridProducts.module.scss'
import img from '../../../assets/img/Zeon Store/Rectangle 491-2.png'
import img2 from '../../../assets/img/Zeon Store/Rectangle 491-11.png'
import img3 from '../../../assets/img/Zeon Store/Rectangle 491.png'
import img4 from '../../../assets/img/Zeon Store/Rectangle 491-1.png'
import img5 from '../../../assets/img/Zeon Store/Rectangle 491-3.png'
import img6 from '../../../assets/img/Zeon Store/Rectangle 491-4.png'
import img7 from '../../../assets/img/Zeon Store/Rectangle 491-5.png'
import img8 from '../../../assets/img/Zeon Store/Rectangle 491-6.png'
import LoveSVG from "../../SVG/LoveSVG";
import LoveFillSVG from "../../SVG/LoveFillSVG";
import CardClothes from "../../cards/CardСlothes/CardСlothes";
import SliderProducts from "../../sliders/sliderProducts/SliderProducts";

const GridProducts = () => {

    let images = [img, img2, img3, img4, img5, img6, img7, img8]

    return (
        <div className={cl.wrapper}>
            <h1 className={cl.h1}>Хит продаж</h1>
            <div className={cl.collection}>
                {images.map((image) =>
                    <CardClothes url={image}/>
                )}
            </div>
            <SliderProducts/>
            <button className={cl.button}>Еще</button>
        </div>
    );
};

export default GridProducts;