import React, {useContext} from 'react';
import CloseSVG from "../../../SVG/CloseSVG";
import img from "../../../../assets/img/Products/Rectangle 491-2.png";
import MinusSVG from "../../../SVG/MinusSVG";
import PlusSVG from "../../../SVG/PlusSVG";
import cl from './CartBusket.module.scss'
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";

const CartBusket = ({product}) => {

    const {Basket} = useContext(Context)

    const newPrice = product.price - (product.price * (product.discount / 100))

    return (
        <div className={cl.cart}>
            <div
                onClick={() => Basket.delete(product)}
                className={cl.closeSVG}
            >
                <CloseSVG/>
            </div>
            <img src={img} alt=""/>
            <div className={cl.details}>
                <h4>{product.name}</h4>
                <div className={cl.size}>
                    <span>Размер: </span>
                    <span>{product.size}</span>
                </div>
                <div className={cl.colorWrapper}>
                    <span>Цвет:</span>
                    <div className={cl.color}>
                        <div className={cl.colorInner} style={{backgroundColor: product.product_color.rgb}}></div>
                    </div>
                </div>
                <div className={cl.price}>
                    <span className={cl.newPrice}>{newPrice}</span>
                    <span className={cl.oldPrice}>{product.price}</span>
                </div>
                <div className={cl.buttons}>
                    <div className={cl.button} onClick={()=> Basket.decrement(product)}>
                        <MinusSVG/>
                    </div>
                    <span>
                        {product.countForBuy}
                    </span>
                    <div className={cl.button} onClick={()=> Basket.increment(product)}>
                        <PlusSVG/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(CartBusket);