import React from 'react';
import Template from "./Template";
import cl from '../styles/Collections.module.scss'
import GridCollections from "../components/Grids/gridCollections/GridCollections";
import imgC from "../assets/img/Collections/image 11(2).png";
import imgC2 from "../assets/img/Collections/image 11-1.png";
import imgC3 from "../assets/img/Collections/image 11-2.png";
import imgC4 from "../assets/img/Collections/image 11.png";
import CartCollection from "../components/cards/cartCollection/CartCollection";
import Pagination from "../components/pagination/Pagination";

const Collections = () => {

    let imagesCollection = [imgC, imgC2, imgC3, imgC4,imgC, imgC2, imgC3, imgC4]

    return (
        <Template>
            <div className={cl.inner}>
                <h1>Коллекции</h1>
            </div>
            <div className={cl.grid}>
                {imagesCollection.map((image) =>
                    <CartCollection url={image}/>
                )}
            </div>
            <Pagination/>
        </Template>
    );
};

export default Collections;