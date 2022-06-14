import React from 'react';
import CloseSVG from "../../../SVG/CloseSVG";
import img from "../../../../assets/img/Products/Rectangle 491-2.png";
import MinusSVG from "../../../SVG/MinusSVG";
import PlusSVG from "../../../SVG/PlusSVG";
import cl from './CartBusket.module.scss'

const CartBusket = ({product}) => {
    return (
        <div className={cl.cart}>
            <div className={cl.closeSVG}>
                <CloseSVG/>
            </div>
            <img src={img} alt=""/>
            <div className={cl.details}>
                <h4>Вечернее платье</h4>
                <div className={cl.size}>
                    <span>Размер: </span>
                    <span>42-50</span>
                </div>
                <div className={cl.colorWrapper}>
                    <span>Цвет:</span>
                    <div className={cl.color}>
                        <div className={cl.colorInner}></div>
                    </div>
                </div>
                <div className={cl.price}>
                    <span className={cl.newPrice}>1 365р</span>
                    <span className={cl.oldPrice}>1 765р</span>
                </div>
                <div className={cl.buttons}>
                    <div className={cl.button}>
                        <MinusSVG/>
                    </div>
                    <span>
                        1
                    </span>
                    <div className={cl.button}>
                        <PlusSVG/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartBusket;