import React from 'react';
import cl from "./CartCollection.module.scss"
import ArrowSVG from "../../SVG/ArrowSVG";

const CartCollection = ({url, ...props}) => {
    return (
        <div className={cl.cart}>
            <img src={url} alt=""/>
            <div className={cl.info}>
                <h4 className={cl.title}>Смотреть все</h4>
                <span className={cl.category}>Повседневная одежда</span>
                <ArrowSVG/>
            </div>
        </div>
    );
};

export default CartCollection;