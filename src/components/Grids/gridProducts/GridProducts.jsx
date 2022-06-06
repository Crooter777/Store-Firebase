import React from 'react';
import cl from './GridProducts.module.scss'
import img from '../../../assets/img/Products/Rectangle 491-2.png'
import img2 from '../../../assets/img/Products/Rectangle 491-11.png'
import img3 from '../../../assets/img/Products/Rectangle 491.png'
import img4 from '../../../assets/img/Products/Rectangle 491-1.png'
import img5 from '../../../assets/img/Products/Rectangle 491-3.png'
import img6 from '../../../assets/img/Products/Rectangle 491-4.png'
import img7 from '../../../assets/img/Products/Rectangle 491-5.png'
import img8 from '../../../assets/img/Products/Rectangle 491-6.png'
import LoveSVG from "../../SVG/LoveSVG";
import LoveFillSVG from "../../SVG/LoveFillSVG";
import CardClothes from "../../cards/cartСlothes/CartСlothes";
import SliderProducts from "../../sliders/sliderProducts/SliderProducts";

const GridProducts = ({title, images, ...props}) => {


    return (
        <div className='container'>
            <div className={cl.inner}>
                <h1 className={cl.h1}>{title}</h1>
                <div className={cl.collection}>
                    {images.map((image) =>
                        <CardClothes url={image}/>
                    )}
                </div>
                <div className={cl.slider}>
                    <SliderProducts/>
                </div>
                <div className='center'>
                    <button className={cl.button}>Еще</button>
                </div>
            </div>
        </div>
    );
};

export default GridProducts;