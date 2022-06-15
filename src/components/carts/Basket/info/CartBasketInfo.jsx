import React from 'react';
import cl from "./CartBasketInfo.module.scss";

const CartBasketInfo = ({setOpen}) => {
    return (
        <div className={cl.info}>
            <div className={cl.infoInner}>
                <h4 className={cl.title}>Сумма заказа</h4>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Количество линеек:</span>
                    <span className={cl.count}>7 шт</span>
                </div>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Количество товаров:</span>
                    <span className={cl.count}>35 шт</span>
                </div>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Стоимость:</span>
                    <span className={cl.count}>13 595 рублей</span>
                </div>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Скидка:</span>
                    <span className={cl.count}>1 270 рублей</span>
                </div>
                <div className={cl.separator}></div>
                <div className={cl.infoRow}>
                    <span className={cl.subtitle}>Итого к оплате:</span>
                    <span className={cl.count}>12 325 рублей</span>
                </div>
                <button
                    className={cl.btn}
                    onClick={() => setOpen(true)}
                >Оформить заказ</button>
            </div>
        </div>
    );
};

export default CartBasketInfo;