import React, {useState} from 'react';
import Template from "./Template";
import cl from '../styles/Basket.module.scss'
import img from '../assets/img/Products/Rectangle 491-2.png'
import MinusSVG from "../components/SVG/MinusSVG";
import PlusSVG from "../components/SVG/PlusSVG";
import CloseSVG from "../components/SVG/CloseSVG";
import CartBusket from "../components/carts/Basket/cart/CartBusket";
import CartBasketInfo from "../components/carts/Basket/info/CartBasketInfo";
import CartBasketInfoMobile from "../components/carts/Basket/infoMobile/CartBasketInfoMobile";
import BasketModal from "../components/modals/basket/BasketModal";

const Basket = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <Template>
            <div className={cl.wrap}>
                <div className={cl.carts}>
                    <CartBusket/>
                    <CartBusket/>
                    <CartBusket/>
                </div>
                <CartBasketInfo setOpen={setOpen}/>
                <CartBasketInfoMobile setOpen={setOpen}/>
                {isOpen ?
                    <BasketModal isOpen={isOpen} setOpen={setOpen}/>
                    :
                    null
                }
            </div>
        </Template>
    );
};

export default Basket;