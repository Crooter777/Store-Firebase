import React from 'react';
import Template from "./Template";
import cl from '../styles/Basket.module.scss'
import img from '../assets/img/Products/Rectangle 491-2.png'
import MinusSVG from "../components/SVG/MinusSVG";
import PlusSVG from "../components/SVG/PlusSVG";
import CloseSVG from "../components/SVG/CloseSVG";
import CartBusket from "../components/carts/Basket/cart/CartBusket";
import CartBasketInfo from "../components/carts/Basket/info/CartBasketInfo";
import CartBasketInfoMobile from "../components/carts/Basket/infoMobile/CartBasketInfoMobile";

const Basket = () => {
    return (
        <Template>
            <div className={cl.wrap}>
                <div className={cl.carts}>
                    <CartBusket/>
                    <CartBusket/>
                    <CartBusket/>
                </div>
                <CartBasketInfo/>
                <CartBasketInfoMobile/>
            </div>
        </Template>
    );
};

export default Basket;