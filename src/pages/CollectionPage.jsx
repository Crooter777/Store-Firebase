import React from 'react';
import Template from "./Template";
import cl from '../styles/CollectionPage.module.scss'
import SliderProducts from "../components/sliders/sliderProducts/SliderProducts";
import CardClothes from "../components/cards/cartСlothes/CartСlothes";
import img from "../assets/img/Products/Rectangle 491-2.png";
import img2 from "../assets/img/Products/Rectangle 491-11.png";
import img3 from "../assets/img/Products/Rectangle 491.png";
import img4 from "../assets/img/Products/Rectangle 491-1.png";
import img5 from "../assets/img/Products/Rectangle 491-3.png";
import img6 from "../assets/img/Products/Rectangle 491-4.png";
import img7 from "../assets/img/Products/Rectangle 491-5.png";
import img8 from "../assets/img/Products/Rectangle 491-6.png";
import Pagination from "../components/pagination/Pagination";

const CollectionPage = () => {

    let images = [img, img2, img3, img4, img5, img6, img7, img8]

    return (
        <Template>
            <div className={cl.wrap}>
                <h1 className={cl.title}>Коллекция лето 2022</h1>
                <div className={cl.grid}>
                    {images.map((image) =>
                        <CardClothes url={image}/>
                    )}
                </div>
                <div className={cl.pagination}>
                    {/*<Pagination/>*/}
                </div>
                <h1 className={cl.title}>Новинки</h1>
                <div className={cl.slider}>
                    <SliderProducts/>
                </div>
            </div>
        </Template>
    );
};

export default CollectionPage;