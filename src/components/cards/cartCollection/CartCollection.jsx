import React from 'react';
import cl from "./CartCollection.module.scss"
import ArrowSVG from "../../SVG/ArrowSVG";
import {observer} from "mobx-react-lite";

const CartCollection = ({collection, ...props}) => {
    return (
        <div className={cl.cart}>
            <img src={collection.collection_images[0].image} alt=""/>
            <div className={cl.info}>
                <h4 className={cl.title}>Смотреть все</h4>
                <span className={cl.category}>{collection.title}</span>
                <ArrowSVG/>
            </div>
        </div>
    );
};

export default observer(CartCollection);