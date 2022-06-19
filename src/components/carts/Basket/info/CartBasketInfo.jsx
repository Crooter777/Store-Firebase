import React, {useContext} from 'react';
import cl from "./CartBasketInfo.module.scss";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";

const CartBasketInfo = ({setOpen}) => {

    const {Basket} = useContext(Context)

    return (
        <div className={cl.info}>
            <div className={cl.infoInner}>
                <h4 className={cl.title}>Сумма заказа</h4>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Количество линеек:</span>
                    <span className={cl.count}>{Basket.totalLines} шт</span>
                </div>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Количество товаров:</span>
                    <span className={cl.count}>{Basket.totalProducts} шт</span>
                </div>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Стоимость:</span>
                    <span className={cl.count}>{Basket.totalSum} сом</span>
                </div>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Скидка:</span>
                    <span className={cl.count}>{Basket.totalDiscount} сом</span>
                </div>
                <div className={cl.separator}></div>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Итого к оплате:</span>
                    <span className={cl.count}>{Basket.totalAmount} сом</span>
                </div>
                <button
                    className={cl.btn}
                    onClick={() => setOpen(true)}
                >Оформить заказ</button>
            </div>
        </div>
    );
};

export default observer(CartBasketInfo);