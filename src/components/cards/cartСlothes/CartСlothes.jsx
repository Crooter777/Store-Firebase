import React from 'react';
import cl from "./CartСlothes.module.scss";
import img from "../../../assets/img/Products/Rectangle 491-2.png";
import LoveSVG from "../../SVG/LoveSVG";

const CardClothes = ({url, ...props}) => {

    return (
        <div className={cl.cart}>
            <img src={url} alt=""/>
            <div className={cl.triangle}></div>
            <span className={cl.sale}>50%</span>
            <LoveSVG
                className={cl.love}
            />
            <div className={cl.info}>
                <h4 className={cl.title}>Вечернее платье</h4>
                <span className={cl.sum}>1 365 сом</span>
                <div className={cl.sizes}>
                    <span className={cl.size}>Размер:</span>
                    <span className={cl.sizeNumber}>42-50</span>
                </div>
                <div className={cl.colors}>
                    <div className={`${cl.color} ${cl.paleGreen}`}></div>
                    <div className={`${cl.color} ${cl.green}`}></div>
                    <div className={`${cl.color} ${cl.beige}`}></div>
                    <div className={`${cl.color} ${cl.brown}`}></div>
                    <div className={`${cl.color} ${cl.lilac}`}></div>
                    <div className={`${cl.color} ${cl.white}`}></div>
                    <div className={`${cl.color} ${cl.gray}`}></div>
                    <div className={`${cl.color} ${cl.red}`}></div>
                </div>
            </div>
        </div>
    );
};

export default CardClothes;