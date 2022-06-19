import React, {useContext, useState} from 'react';
import cl from './CartBasketInfoMobile.module.scss'
import {Context} from "../../../../index";

const CartBasketInfoMobile = ({setOpen}) => {

    const {Basket} = useContext(Context)

    const [isActive, setActive] = useState()

    return (
        <div className={cl.wrap}>
            {isActive ?
                <div className={cl.detail}>
                    <h4>Сумма заказа</h4>
                    <div className={cl.row}>
                    <span className={cl.subtitle}>
                        Общее количество:
                    </span>
                    <span className={cl.value}>
                        {Basket.totalLines} линеек ({Basket.totalProducts}шт.)
                    </span>
                    </div>
                    <div className={cl.row}>
                    <span className={cl.subtitle}>
                        Стоимость:
                    </span>
                        <span className={cl.value}>
                        {Basket.totalSum} сом
                    </span>
                    </div>
                    <div className={cl.row}>
                    <span className={cl.subtitle}>
                        Скидка:
                    </span>
                        <span className={cl.value}>
                        {Basket.totalDiscount} сом
                    </span>
                    </div>
                </div>
                :
                null
            }
            <div className={cl.sumWrap}>
                <span className={cl.sumTitle}>Итого к оплате:</span>
                <span className={cl.sum}>{Basket.totalAmount} сом</span>
            </div>
            <button
                className={cl.btnInfo}
                onClick={() => setActive(bool => !bool)}
            >
                {isActive ? 'Скрыть' : 'Информация о заказе'}
            </button>
            <button
                className={cl.btn}
                onClick={() => setOpen(true)}
            >Оформить заказ</button>
        </div>
    );
};

export default CartBasketInfoMobile;