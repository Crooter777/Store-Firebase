import React from 'react';
import Header from "../components/Headers/header/Header";
import SliderOffers from "../components/sliders/sliderOffers/SliderOffers";
import GridProducts from "../components/Grids/gridProducts/GridProducts";
import GridCollections from "../components/Grids/gridCollections/GridCollections";
import Benefits from "../components/benefits/Benefits";
import Footer from "../components/footer/footer/Footer";
import img from "../assets/img/Products/Rectangle 491-2.png";
import img2 from "../assets/img/Products/Rectangle 491-11.png";
import img3 from "../assets/img/Products/Rectangle 491.png";
import img4 from "../assets/img/Products/Rectangle 491-1.png";
import img5 from "../assets/img/Products/Rectangle 491-3.png";
import img6 from "../assets/img/Products/Rectangle 491-4.png";
import img7 from "../assets/img/Products/Rectangle 491-5.png";
import img8 from "../assets/img/Products/Rectangle 491-6.png";

import imgC from '../assets/img/Collections/image 11(2).png'
import imgC2 from '../assets/img/Collections/image 11-1.png'
import imgC3 from '../assets/img/Collections/image 11-2.png'
import imgC4 from '../assets/img/Collections/image 11.png'
import ModalCall from "../components/Modals/modalCall/ModalCall";
import ModalCallAccess from "../components/Modals/modalCallAccess/ModalCallAccess";
import Template from "./Template";

const Main = () => {

    let images = [img, img2, img3, img4, img5, img6, img7, img8]
    let imagesCollection = [imgC, imgC2, imgC3, imgC4]

    return (
        <Template>
            <SliderOffers/>
            <GridProducts
                title={'Хит продаж'}
                images={images}
            />
            <GridProducts
                title={'Новинки'}
                images={images}
            />
            <GridCollections
                title={'Коллекции'}
                images={imagesCollection}
            />
            <Benefits/>
            {/*<ModalCall/>*/}
            {/*<ModalCallAccess/>*/}
        </Template>
    );
};

export default Main;